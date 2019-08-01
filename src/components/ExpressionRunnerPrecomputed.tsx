/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useState } from 'react'
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
import { spaces, zIndices } from 'src/lib/theme'
import { expressionRunnerContextDefault } from 'src/types/ExpressionRunnerTypes'
import { ExpressionRunnerConfig } from 'scripts/lib/buildExpressionRunnerConfigFromShorthand'
import { SteppedExpressionContainer } from 'src/types/ExpressionContainerTypes'
import useInterval from 'src/hooks/useInterval'
import CrossSvg from 'src/components/CrossSvg'

export interface ExpressionRunnerPrecomputedProps {
  expressionContainers: readonly SteppedExpressionContainer[]
  speed: ExpressionRunnerConfig['speed']
  showOnlyFocused: ExpressionRunnerConfig['showOnlyFocused']
  caption: ExpressionRunnerConfig['caption']
  children?: React.ReactNode
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
  showAllShowSteps,
  children
}: ExpressionRunnerPrecomputedProps) => {
  const [{ isFastForwarding, isPlaying }, setPlaybackStatus] = useState<
    PlaybackState
  >({
    isFastForwarding: false,
    isPlaying: false
  })

  const [currentIndex, setCurrentIndex] = useState<number>(0)

  useInterval(
    () => {
      if (superFastForward) {
        let nextIndex = currentIndex
        do {
          if (nextIndex < expressionContainers.length - 1) {
            nextIndex += 1
          }
        } while (
          expressionContainers[nextIndex].previouslyChangedExpressionState !==
            'default' &&
          expressionContainers[nextIndex].previouslyChangedExpressionState !==
            'active' &&
          nextIndex < expressionContainers.length - 1
        )
        if (currentIndex < expressionContainers.length - 1) {
          setCurrentIndex(nextIndex)
        } else {
          setPlaybackStatus({
            isFastForwarding: false,
            isPlaying: false
          })
        }
      } else {
        if (currentIndex < expressionContainers.length - 1) {
          setCurrentIndex(currentIndex + 1)
        } else {
          setPlaybackStatus({
            isFastForwarding: false,
            isPlaying: false
          })
        }
      }
    },
    isPlaying ? autoplaySpeed(speed) : null
  )

  const stepForward = () => {
    if (currentIndex < expressionContainers.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const stepBackward = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const stepToTheEnd = () => {
    setCurrentIndex(expressionContainers.length - 1)
  }

  const reset = () => {
    setCurrentIndex(0)
    pause()
  }

  const autoplay = () => {
    setPlaybackStatus({
      isPlaying: true,
      isFastForwarding: speed >= FASTFORWARDING_THRESHOLD
    })
  }

  const pause = () => {
    setPlaybackStatus({
      isPlaying: false,
      isFastForwarding: false
    })
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
              <H args={caption} />
            </ExpressionRunnerCaptionWrapper>
          )}
          {children && (
            <ExpressionRunnerCaptionWrapper>
              {children === 'cross' ? (
                <H args={{ name: 'crossCaption' }} />
              ) : (
                children
              )}
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
                position: relative;
              `}
            >
              {children === 'cross' && (
                <CrossSvg
                  css={css`
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    z-index: ${zIndices('badge')};
                    width: 100%;
                  `}
                />
              )}
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
              onNextClick={stepForward}
              onPreviousClick={stepBackward}
              canStepForward={currentIndex < expressionContainers.length - 1}
              canStepBackward={currentIndex > 0}
              showPlayButton={!hidePlayButton}
              isPlaying={isPlaying}
              isDone={isDone}
              onAutoClick={autoplay}
              onSkipToTheEndClick={stepToTheEnd}
              onResetClick={reset}
              skipToTheEnd={skipToTheEnd}
              onPauseClick={pause}
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
                        ? expressionContainers
                            .slice(currentIndex + 1)
                            .filter(
                              container =>
                                container.previouslyChangedExpressionState ===
                                  'default' ||
                                container.previouslyChangedExpressionState ===
                                  'active'
                            ).length
                        : expressionContainers.length - 1 - currentIndex,
                      speed
                    )
                  }}
                />
              </ExpressionRunnerCaptionWrapper>
            </>
          )}
          {!hideControls &&
            currentIndex === expressionContainers.length - 1 &&
            expressionContainers[expressionContainers.length - 1]
              .containerState !== 'done' &&
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
