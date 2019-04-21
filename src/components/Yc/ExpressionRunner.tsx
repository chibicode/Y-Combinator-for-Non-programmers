/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React, { useState, useRef } from 'react'
import Container, { ContainerProps } from 'src/components/Container'
import ExpressionBox from 'src/components/Yc/ExpressionBox'
import ExpressionRunnerCaptionWrapper from 'src/components/Yc/ExpressionRunnerCaptionWrapper'
import ExpressionRunnerContext, {
  expressionRunnerContextDefault,
  ExpressionRunnerContextProps
} from 'src/components/Yc/ExpressionRunnerContext'
import ExpressionRunnerControls from 'src/components/Yc/ExpressionRunnerControls'
import ExpressionRunnerExplanation from 'src/components/Yc/ExpressionRunnerExplanation'
import locale from 'src/lib/locale'
import { lineHeights } from 'src/lib/theme'
import { isContainerWithState } from 'src/lib/yc/expressionContainerGuards'
import ExpressionContainerManager from 'src/lib/yc/ExpressionContainerManager'
import {
  ExpressionContainerStates,
  SteppedExpressionContainer
} from 'src/types/yc/ExpressionContainerTypes'
import { CallStates } from 'src/types/yc/ExpressionTypes'
import useExpressionContainerManager from 'src/hooks/useExpressionContainerManager'
import ExpressionRunnerScrollAdjuster from 'src/components/Yc/ExpressionRunnerScrollAdjuster'
import { spaces } from 'src/lib/theme'
import ExpressionRunnerTimer from 'src/components/Yc/ExpressionRunnerTimer'

// Must be equal to 1 / N to make timer count seconds evenly
const autoplaySpeed = (speed: number) => 1000 / speed

export type InitializeInstruction =
  | {
      type: 'stepForwardUntilContainerState'
      state: ExpressionContainerStates
    }
  | {
      type: 'stepForwardUntilPreviouslyChangedExpressionState'
      state: CallStates
    }
  | {
      type: 'nextIteration'
    }
  | {
      type: 'stepForwardUntilTheEnd'
    }

export interface ExpressionRunnerProps {
  expressionContainer: SteppedExpressionContainer
  hidePriorities: ExpressionRunnerContextProps['hidePriorities']
  hideBottomRightBadges: ExpressionRunnerContextProps['hideBottomRightBadges']
  hideControls: boolean
  explanationsVisibility:
    | 'visible'
    | 'hidden'
    | 'hiddenInitial'
    | 'hiddenInitialPausedOnly'
  variableSize: ExpressionRunnerContextProps['variableSize']
  initializeInstructions: ReadonlyArray<InitializeInstruction>
  maxStepsAllowed?: number
  lastAllowedExpressionState?: CallStates
  containerSize: ContainerProps['size']
  resetIndex: boolean
  hidePlayButton?: boolean
  speed: number
  showAllShowSteps?: boolean
  skipAlphaConvert?: boolean
  skipToTheEnd: boolean
  hideRemainingTime: boolean
  hideFuncUnboundBadgeOnExplanation: boolean
  bottomRightBadgeOverrides: ExpressionRunnerContextProps['bottomRightBadgeOverrides']
  highlightOverrides: ExpressionRunnerContextProps['highlightOverrides']
  newCaption?: React.ReactNode
  caption?: {
    jp: React.ReactNode
    en: React.ReactNode
  }
}

interface PlaybackState {
  isFastForwarding: boolean
  isPlaying: boolean
}

// Use floor() + 1 instead of ceil() to make sure it's nonzero
const numSecondsRemaining = (numStepsRemaining: number, speed: number) =>
  Math.floor((numStepsRemaining * autoplaySpeed(speed)) / 1000) + 1

const getActions = ({
  speed,
  interval,
  getExpressionContainerManager,
  setPlaybackStatus,
  setExpressionContainerManagerState
}: {
  speed: number
  interval: React.MutableRefObject<NodeJS.Timer | undefined>
  getExpressionContainerManager: () => ExpressionContainerManager
  setPlaybackStatus: React.Dispatch<React.SetStateAction<PlaybackState>>
  setExpressionContainerManagerState: React.Dispatch<
    React.SetStateAction<ExpressionContainerManager['currentState']>
  >
}) => {
  const actions = {
    stepForward() {
      actions.step('forward')
    },

    stepBackward() {
      actions.step('backward')
    },

    skipToTheEnd() {
      actions.step('skipToEnd')
    },

    autoplay() {
      interval.current = setInterval(() => {
        // Must use getExpressionContainerManager()
        if (getExpressionContainerManager().currentState.canStepForward) {
          actions.step('forward')
        }
        // As soon as canStepForward is false, cancel immediately
        if (!getExpressionContainerManager().currentState.canStepForward) {
          actions.pause()
        }
      }, autoplaySpeed(speed))
      setPlaybackStatus({
        isPlaying: true,
        isFastForwarding: speed > 1
      })
    },

    pause() {
      if (interval.current) {
        clearInterval(interval.current)
      }
      setPlaybackStatus({
        isPlaying: false,
        isFastForwarding: false
      })
    },

    reset() {
      if (interval.current) {
        clearInterval(interval.current)
      }
      setPlaybackStatus({
        isPlaying: false,
        isFastForwarding: false
      })
      actions.step('reset')
    },

    step(direction: 'forward' | 'backward' | 'reset' | 'skipToEnd') {
      if (direction === 'forward') {
        getExpressionContainerManager().stepForward()
      } else if (direction === 'backward') {
        getExpressionContainerManager().stepBackward()
      } else if (direction === 'skipToEnd') {
        getExpressionContainerManager().stepForwardUntilTheEnd()
      } else {
        getExpressionContainerManager().reset()
      }
      actions.syncState()
    },

    syncState() {
      setExpressionContainerManagerState(
        getExpressionContainerManager().currentState
      )
    }
  }
  return actions
}

const ExpressionRunner = ({
  speed,
  newCaption,
  expressionContainer,
  lastAllowedExpressionState,
  hideControls,
  explanationsVisibility,
  hidePriorities,
  variableSize,
  containerSize,
  hidePlayButton,
  showAllShowSteps,
  skipAlphaConvert,
  hideBottomRightBadges,
  caption,
  initializeInstructions,
  maxStepsAllowed,
  resetIndex,
  skipToTheEnd,
  hideFuncUnboundBadgeOnExplanation,
  bottomRightBadgeOverrides,
  highlightOverrides,
  hideRemainingTime
}: ExpressionRunnerProps) => {
  const {
    getExpressionContainerManager,
    expressionContainerManagerState,
    setExpressionContainerManagerState
  } = useExpressionContainerManager({
    expressionContainer,
    lastAllowedExpressionState,
    showAllShowSteps,
    skipAlphaConvert,
    initializeInstructions,
    maxStepsAllowed,
    resetIndex
  })
  const interval = useRef<NodeJS.Timer>()
  const [{ isFastForwarding, isPlaying }, setPlaybackStatus] = useState<
    PlaybackState
  >({
    isFastForwarding: false,
    isPlaying: false
  })
  const actions = getActions({
    speed,
    interval,
    getExpressionContainerManager,
    setPlaybackStatus,
    setExpressionContainerManagerState
  })
  const isDone = isContainerWithState(
    expressionContainerManagerState.expressionContainer,
    'done'
  )
  const isReady = isContainerWithState(
    expressionContainerManagerState.expressionContainer,
    'ready'
  )

  return (
    <ExpressionRunnerContext.Provider
      value={{
        hidePriorities,
        hideBottomRightBadges,
        bottomRightBadgeOverrides,
        highlightOverrides,
        variableSize,
        started: expressionContainerManagerState.numStepsTaken > 0,
        isDoneOrReady: isDone || isReady
      }}
    >
      <div
        css={css`
          margin: ${spaces(2.25)} 0 ${spaces(2.5)};
        `}
      >
        <Container
          size={containerSize === 'xxs' ? 'xs' : 'sm'}
          horizontalPadding={0}
        >
          {(explanationsVisibility === 'visible' ||
            (explanationsVisibility === 'hiddenInitial' &&
              expressionContainerManagerState.numStepsTaken > 0) ||
            (explanationsVisibility === 'hiddenInitialPausedOnly' &&
              !isPlaying &&
              expressionContainerManagerState.numStepsTaken > 0)) && (
            <ExpressionRunnerCaptionWrapper>
              <ExpressionRunnerExplanation
                isPlaying={isPlaying}
                expressionContainer={
                  expressionContainerManagerState.expressionContainer
                }
                isDone={isDone}
                currentStep={expressionContainerManagerState.currentStep}
                currentSubstep={expressionContainerManagerState.currentSubstep}
                showAllShowSteps={showAllShowSteps}
                hideFuncUnboundBadge={hideFuncUnboundBadgeOnExplanation}
              />
            </ExpressionRunnerCaptionWrapper>
          )}
          {newCaption && (
            <ExpressionRunnerCaptionWrapper>
              {newCaption}
            </ExpressionRunnerCaptionWrapper>
          )}
          {caption && (
            <ExpressionRunnerCaptionWrapper>
              {caption[locale]}
            </ExpressionRunnerCaptionWrapper>
          )}
        </Container>
        <Container size={containerSize} horizontalPadding={0.25}>
          <div
            css={css`
              max-width: 100%;
            `}
          >
            <div
              css={css`
                line-height: ${lineHeights(1.3, { ignoreLocale: true })};
                opacity: ${isFastForwarding ? 0.5 : 1};
              `}
            >
              <ExpressionBox
                expression={
                  expressionContainerManagerState.expressionContainer.expression
                }
              />
            </div>
          </div>
        </Container>
        <ExpressionRunnerScrollAdjuster />
        <Container size={containerSize} horizontalPadding={0.25}>
          {!hideControls && (
            <ExpressionRunnerControls
              onNextClick={actions.stepForward}
              onPreviousClick={actions.stepBackward}
              canStepForward={expressionContainerManagerState.canStepForward}
              canStepBackward={expressionContainerManagerState.canStepBackward}
              showPlayButton={!hidePlayButton}
              isPlaying={isPlaying}
              isDone={isDone}
              onAutoClick={actions.autoplay}
              onSkipToTheEndClick={actions.skipToTheEnd}
              onResetClick={actions.reset}
              skipToTheEnd={skipToTheEnd}
              onPauseClick={actions.pause}
            />
          )}
          {(explanationsVisibility === 'visible' ||
            (explanationsVisibility === 'hiddenInitial' &&
              expressionContainerManagerState.numStepsTaken > 0) ||
            (explanationsVisibility === 'hiddenInitialPausedOnly' &&
              !isPlaying &&
              expressionContainerManagerState.numStepsTaken > 0)) && (
            <ExpressionRunnerCaptionWrapper
              css={css`
                margin-top: ${spaces(0.5)};
              `}
            >
              <ExpressionRunnerTimer
                isPlaying={isPlaying}
                numSecondsRemaining={numSecondsRemaining(
                  expressionContainerManagerState.numStepsRemaining,
                  speed
                )}
                isDone={isDone}
                hideRemainingTime={hideRemainingTime}
              />
            </ExpressionRunnerCaptionWrapper>
          )}
        </Container>
      </div>
    </ExpressionRunnerContext.Provider>
  )
}

ExpressionRunner.defaultProps = {
  hidePriorities: expressionRunnerContextDefault.hidePriorities,
  hideBottomRightBadges: expressionRunnerContextDefault.hideBottomRightBadges,
  hideControls: false,
  explanationsVisibility: 'visible',
  variableSize: expressionRunnerContextDefault.variableSize,
  initializeInstructions: [],
  containerSize: 'xxs',
  resetIndex: false,
  skipToTheEnd: false,
  hidePlayButton: false,
  speed: 1,
  hideFuncUnboundBadgeOnExplanation: false,
  hideRemainingTime: false,
  bottomRightBadgeOverrides:
    expressionRunnerContextDefault.bottomRightBadgeOverrides,
  highlightOverrides: expressionRunnerContextDefault.highlightOverrides
}

export default ExpressionRunner
