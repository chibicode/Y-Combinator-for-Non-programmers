/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useState, useRef } from 'react'
import Container from 'src/components/Container'
import ExpressionBox from 'src/components/ExpressionBox'
import H from 'src/components/H'
import ExpressionRunnerCaptionWrapper from 'src/components/ExpressionRunnerCaptionWrapper'
import ExpressionRunnerContext from 'src/components/ExpressionRunnerContext'
import ExpressionRunnerControls from 'src/components/ExpressionRunnerControls'
import ExpressionRunnerExplanation from 'src/components/ExpressionRunnerExplanation'
import { lineHeights } from 'src/lib/theme'
import { isContainerWithState } from 'src/lib/expressionContainerGuards'
import ExpressionRunnerScrollAdjuster from 'src/components/ExpressionRunnerScrollAdjuster'
import { spaces } from 'src/lib/theme'
import { expressionRunnerContextDefault } from 'src/types/ExpressionRunnerTypes'
import { ExpressionRunnerConfig } from 'scripts/lib/buildExpressionRunnerConfigFromShorthand'
import { SteppedExpressionContainer } from 'src/types/ExpressionContainerTypes'

interface ExpressionRunnerPrecomputedParams {
  expressionContainers: readonly SteppedExpressionContainer[]
  speed: ExpressionRunnerConfig['speed']
  showOnlyFocused: ExpressionRunnerConfig['showOnlyFocused']
  caption: ExpressionRunnerConfig['caption']
  hideControls: ExpressionRunnerConfig['hideControls']
  explanationsVisibility: ExpressionRunnerConfig['explanationsVisibility']
  hidePriorities: ExpressionRunnerConfig['hidePriorities']
  variableSize: ExpressionRunnerConfig['variableSize']
  containerSize: ExpressionRunnerConfig['containerSize']
  hidePlayButton: ExpressionRunnerConfig['hidePlayButton']
  hideBottomRightBadges: ExpressionRunnerConfig['hideBottomRightBadges']
  skipToTheEnd: ExpressionRunnerConfig['skipToTheEnd']
  hideFuncUnboundBadgeOnExplanation: ExpressionRunnerConfig['hideFuncUnboundBadgeOnExplanation']
  highlightOverridesCallArgAndFuncUnboundOnly: ExpressionRunnerConfig['highlightOverridesCallArgAndFuncUnboundOnly']
  bottomRightBadgeOverrides: ExpressionRunnerConfig['bottomRightBadgeOverrides']
  highlightOverrides: ExpressionRunnerConfig['highlightOverrides']
  highlightOverrideActiveAfterStart: ExpressionRunnerConfig['highlightOverrideActiveAfterStart']
  argPriorityAggHighlights: ExpressionRunnerConfig['argPriorityAggHighlights']
  funcPriorityAggHighlights: ExpressionRunnerConfig['funcPriorityAggHighlights']
  highlightFunctions: ExpressionRunnerConfig['highlightFunctions']
  superFastForward: ExpressionRunnerConfig['superFastForward']
  highlightNumber: ExpressionRunnerConfig['highlightNumber']
  showAllShowSteps: ExpressionRunnerConfig['showAllShowSteps']
}

// Must be equal to 1 / N to make timer count seconds evenly
const autoplaySpeed = (speed: number) => 1000 / speed
const FASTFORWARDING_THRESHOLD = 2

interface PlaybackState {
  isFastForwarding: boolean
  isPlaying: boolean
}

// Use floor() + 1 instead of ceil() to make sure it's nonzero
const numSecondsRemaining = (numStepsRemaining: number, speed: number) =>
  Math.floor((numStepsRemaining * autoplaySpeed(speed)) / 1000) + 1

const ExpressionRunnerPrecomputed = ({
  params
}: {
  params: ExpressionRunnerPrecomputedParams
}) => {
  const {
    speed,
    showOnlyFocused,
    caption,
    expressionContainers,
    hideControls,
    explanationsVisibility,
    hidePriorities,
    variableSize,
    containerSize,
    hidePlayButton,
    hideBottomRightBadges,
    skipToTheEnd,
    hideFuncUnboundBadgeOnExplanation,
    highlightOverridesCallArgAndFuncUnboundOnly,
    bottomRightBadgeOverrides,
    highlightOverrides,
    highlightOverrideActiveAfterStart,
    argPriorityAggHighlights,
    funcPriorityAggHighlights,
    highlightFunctions,
    superFastForward,
    highlightNumber,
    showAllShowSteps
  } = params
  const interval = useRef<NodeJS.Timer>()
  const [{ isFastForwarding, isPlaying }, setPlaybackStatus] = useState<
    PlaybackState
  >({
    isFastForwarding: false,
    isPlaying: false
  })

  const [currentIndex, setCurrentIndex] = useState<number>(0)

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
        if (currentIndex < expressionContainers.length - 1) {
          if (superFastForward) {
            actions.step('forwardUntilActiveOrDefault')
          } else {
            actions.step('forward')
          }
        }
        // As soon as canStepForward is false, cancel immediately
        if (currentIndex >= expressionContainers.length - 1) {
          actions.pause()
        }
      }, autoplaySpeed(speed))
      setPlaybackStatus({
        isPlaying: true,
        isFastForwarding: speed >= FASTFORWARDING_THRESHOLD
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

    step(
      direction:
        | 'forward'
        | 'backward'
        | 'reset'
        | 'skipToEnd'
        | 'forwardUntilActiveOrDefault'
    ) {
      if (direction === 'forward') {
        if (currentIndex < expressionContainers.length - 1) {
          setCurrentIndex(currentIndex + 1)
        }
      } else if (direction === 'backward') {
        if (currentIndex > 0) {
          setCurrentIndex(currentIndex - 1)
        }
      } else if (direction === 'skipToEnd') {
        setCurrentIndex(expressionContainers.length - 1)
      } else if (direction === 'forwardUntilActiveOrDefault') {
        // TODO
      } else {
        setCurrentIndex(0)
      }
    }
  }

  const isDone = isContainerWithState(
    expressionContainers[currentIndex],
    'done'
  )
  const isReady = isContainerWithState(
    expressionContainers[currentIndex],
    'ready'
  )
  const atLeastOneStepTaken = currentIndex > 0
  const explanationsVisible =
    explanationsVisibility === 'visible' ||
    (explanationsVisibility === 'hiddenInitialPausedOnly' &&
      !isPlaying &&
      currentIndex > 0) ||
    (explanationsVisibility === 'hiddenInitialAndLastPausedOnly' &&
      !isPlaying &&
      currentIndex > 0 &&
      currentIndex < expressionContainers.length - 1)

  return (
    <ExpressionRunnerContext.Provider
      value={{
        hidePriorities,
        hideBottomRightBadges,
        bottomRightBadgeOverrides,
        highlightOverrides,
        highlightOverrideActiveAfterStart,
        highlightOverridesCallArgAndFuncUnboundOnly,
        variableSize,
        showOnlyFocused,
        started: atLeastOneStepTaken,
        isDoneOrReady: isDone || isReady,
        argPriorityAggHighlights,
        funcPriorityAggHighlights,
        highlightFunctions,
        highlightNumber,
        highlightAllChildren:
          expressionRunnerContextDefault.highlightAllChildren
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
          {explanationsVisible && (
            <ExpressionRunnerCaptionWrapper>
              <ExpressionRunnerExplanation
                isPlaying={isPlaying}
                expressionContainer={expressionContainers[currentIndex]}
                isDone={isDone}
                showAllShowSteps={showAllShowSteps}
                hideFuncUnboundBadge={hideFuncUnboundBadgeOnExplanation}
              />
            </ExpressionRunnerCaptionWrapper>
          )}
          {caption && (
            <ExpressionRunnerCaptionWrapper>
              {caption}
            </ExpressionRunnerCaptionWrapper>
          )}
          {!caption && isPlaying && (
            <ExpressionRunnerCaptionWrapper>
              <H args={{ name: 'fastForwarding' }} />
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
                opacity: ${isFastForwarding ? 0.6 : 1};
              `}
            >
              <ExpressionBox
                expression={expressionContainers[currentIndex].expression}
                topLevel
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
              canStepForward={currentIndex < expressionContainers.length - 1}
              canStepBackward={currentIndex > 0}
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
        </Container>
        <Container
          size={containerSize === 'xxs' ? 'xs' : 'sm'}
          horizontalPadding={0}
        >
          {isPlaying && isFastForwarding && !isDone && (
            <>
              <ExpressionRunnerCaptionWrapper
                css={css`
                  margin-top: ${spaces(0.5)};
                `}
              >
                <H
                  args={{
                    name: 'timer',
                    numSecondsRemaining: numSecondsRemaining(
                      superFastForward
                        ? // TODO
                          expressionContainers.length - 1 - currentIndex
                        : expressionContainers.length - 1 - currentIndex,
                      speed
                    )
                  }}
                />
              </ExpressionRunnerCaptionWrapper>
            </>
          )}
          {!hideControls &&
            currentIndex >= expressionContainers.length - 1 &&
            !hidePlayButton && (
              <ExpressionRunnerCaptionWrapper
                css={css`
                  margin-top: ${spaces(0.5)};
                `}
              >
                <H args={{ name: 'stoppedForExplanation' }} />
              </ExpressionRunnerCaptionWrapper>
            )}
        </Container>
      </div>
    </ExpressionRunnerContext.Provider>
  )
}

export default ExpressionRunnerPrecomputed
