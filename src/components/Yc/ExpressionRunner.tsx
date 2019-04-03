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

// Must be equal to 1 / N to make timer count seconds evenly
const autoplaySpeed = (isFastForwarding?: boolean) =>
  isFastForwarding ? 250 : 1000

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
  explanationsVisibility: 'visible' | 'hidden' | 'hiddenInitial'
  variableSize: ExpressionRunnerContextProps['variableSize']
  initializeInstructions: ReadonlyArray<InitializeInstruction>
  maxStepsAllowed?: number
  lastAllowedExpressionState?: CallStates
  containerSize: ContainerProps['size']
  resetIndex: boolean
  hidePlayButton?: boolean
  isFastForwardPlayButton?: boolean
  showAllShowSteps?: boolean
  highlightOverrides: ExpressionRunnerContextProps['highlightOverrides']
  skipToTheEnd: boolean
  hideRemainingTime: boolean
  hideFuncUnboundBadgeOnExplanation: boolean
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
const numSecondsRemaining = (
  numStepsRemaining: number,
  isFastForwarding?: boolean
) =>
  Math.floor((numStepsRemaining * autoplaySpeed(isFastForwarding)) / 1000) + 1

const getActions = ({
  isFastForwardPlayButton,
  interval,
  getExpressionContainerManager,
  setPlaybackStatus,
  expressionContainerManagerState,
  setExpressionContainerManagerState
}: {
  isFastForwardPlayButton?: boolean
  interval: React.MutableRefObject<NodeJS.Timer | undefined>
  getExpressionContainerManager: () => ExpressionContainerManager
  setPlaybackStatus: React.Dispatch<React.SetStateAction<PlaybackState>>
  expressionContainerManagerState: ExpressionContainerManager['currentState']
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
        if (expressionContainerManagerState.canStepForward) {
          actions.step('forward')
        } else {
          actions.pause()
        }
      }, autoplaySpeed(isFastForwardPlayButton))
      setPlaybackStatus({
        isPlaying: true,
        isFastForwarding: !!isFastForwardPlayButton
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
  isFastForwardPlayButton,
  expressionContainer,
  lastAllowedExpressionState,
  hideControls,
  explanationsVisibility,
  hidePriorities,
  variableSize,
  containerSize,
  hidePlayButton,
  showAllShowSteps,
  highlightOverrides,
  hideBottomRightBadges,
  caption,
  initializeInstructions,
  maxStepsAllowed,
  resetIndex,
  skipToTheEnd,
  hideFuncUnboundBadgeOnExplanation,
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
    isFastForwardPlayButton,
    interval,
    getExpressionContainerManager,
    setPlaybackStatus,
    expressionContainerManagerState,
    setExpressionContainerManagerState
  })

  return (
    <ExpressionRunnerContext.Provider
      value={{
        hidePriorities,
        highlightOverrides,
        hideBottomRightBadges,
        variableSize,
        isDoneOrReady:
          isContainerWithState(
            expressionContainerManagerState.expressionContainer,
            'done'
          ) ||
          isContainerWithState(
            expressionContainerManagerState.expressionContainer,
            'ready'
          )
      }}
    >
      <div
        css={css`
          margin: ${spaces(1.5)} 0 ${spaces(2)};
        `}
      >
        <Container
          size={containerSize === 'xxs' ? 'xs' : 'sm'}
          horizontalPadding={0}
        >
          {(explanationsVisibility === 'visible' ||
            (explanationsVisibility === 'hiddenInitial' &&
              expressionContainerManagerState.numStepsTaken > 0)) && (
            <ExpressionRunnerCaptionWrapper>
              <ExpressionRunnerExplanation
                isPlaying={isPlaying}
                numSecondsRemaining={numSecondsRemaining(
                  expressionContainerManagerState.numStepsRemaining,
                  isFastForwarding
                )}
                expressionContainer={
                  expressionContainerManagerState.expressionContainer
                }
                isDone={isContainerWithState(
                  expressionContainerManagerState.expressionContainer,
                  'done'
                )}
                currentStep={expressionContainerManagerState.currentStep}
                currentSubstep={expressionContainerManagerState.currentSubstep}
                showAllShowSteps={showAllShowSteps}
                hideFuncUnboundBadge={hideFuncUnboundBadgeOnExplanation}
                hideRemainingTime={hideRemainingTime}
              />
            </ExpressionRunnerCaptionWrapper>
          )}
          {caption && (
            <ExpressionRunnerCaptionWrapper pinkText>
              {caption[locale]}
            </ExpressionRunnerCaptionWrapper>
          )}
        </Container>
        <Container size={containerSize} horizontalPadding={0}>
          <div
            css={css`
              max-width: 100%;
              /* Offset for -2px on border wrapper */
              padding-left: 2px;
              padding-right: 2px;
            `}
          >
            <div
              css={css`
                line-height: ${lineHeights(1.3, { ignoreLocale: true })};
                opacity: ${isFastForwarding ? 0.8 : 1};
                ${isFastForwarding ? 'filter: grayscale(100%);' : ''};
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
        <Container size={containerSize} horizontalPadding={0}>
          {!hideControls && (
            <ExpressionRunnerControls
              onNextClick={actions.stepForward}
              onPreviousClick={actions.stepBackward}
              canStepForward={expressionContainerManagerState.canStepForward}
              canStepBackward={expressionContainerManagerState.canStepBackward}
              showPlayButton={!hidePlayButton}
              isPlaying={isPlaying}
              isDone={isContainerWithState(
                expressionContainerManagerState.expressionContainer,
                'done'
              )}
              onAutoClick={actions.autoplay}
              onSkipToTheEndClick={actions.skipToTheEnd}
              onPauseClick={actions.pause}
              onResetClick={actions.reset}
              skipToTheEnd={skipToTheEnd}
            />
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
  highlightOverrides: expressionRunnerContextDefault.highlightOverrides,
  initializeInstructions: [],
  containerSize: 'xxs',
  resetIndex: false,
  skipToTheEnd: false,
  hidePlayButton: false,
  isFastForwardPlayButton: false,
  hideFuncUnboundBadgeOnExplanation: false,
  hideRemainingTime: false
}

export default ExpressionRunner
