/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useState } from 'react'
import Container from 'src/components/Container'
import ExpressionBox from 'src/components/ExpressionBox'
import H from 'src/components/H'
import ExpressionRunnerCaptionWrapper from 'src/components/ExpressionRunnerCaptionWrapper'
import ProgressBar from 'src/components/ProgressBar'
import ExpressionRunnerContext from 'src/components/ExpressionRunnerContext'
import ExpressionRunnerControls from 'src/components/ExpressionRunnerControls'
import ExpressionRunnerExplanation from 'src/components/ExpressionRunnerExplanation'
import { lineHeights } from 'src/lib/theme'
import { isContainerWithState } from 'src/lib/expressionContainerGuards'
import ExpressionRunnerScrollAdjuster from 'src/components/ExpressionRunnerScrollAdjuster'
import { fontSizes, colors, spaces, zIndices } from 'src/lib/theme'
import { expressionRunnerContextDefault } from 'src/types/ExpressionRunnerTypes'
import { ExpressionRunnerConfig } from 'scripts/lib/buildExpressionRunnerConfigFromShorthand'
import { SteppedExpressionContainer } from 'src/types/ExpressionContainerTypes'
import useInterval from 'src/hooks/useInterval'
import CrossSvg from 'src/components/CrossSvg'
import { LinkButton } from 'src/components/ContentTags/LinkButton'

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
  convert: ExpressionRunnerConfig['convert']
  crossed: ExpressionRunnerConfig['crossed']
  alphaConvertCallArg: ExpressionRunnerConfig['alphaConvertCallArg']
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
  children,
  convert,
  crossed,
  alphaConvertCallArg
}: ExpressionRunnerPrecomputedProps) => {
  const [{ isFastForwarding, isPlaying }, setPlaybackStatus] = useState<
    PlaybackState
  >({
    isFastForwarding: false,
    isPlaying: false
  })

  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [resetClicked, setResetClicked] = useState<boolean>(false)
  const percentDone = (currentIndex * 100) / (expressionContainers.length - 1)
  const fromPercent =
    ((currentIndex - 1 >= 0 ? currentIndex - 1 : 0) * 100) /
    (expressionContainers.length - 1)

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
        }

        // Don't use else: stop immediately if reaches the end
        if (nextIndex >= expressionContainers.length - 1) {
          setPlaybackStatus({
            isFastForwarding: false,
            isPlaying: false
          })
        }
      } else {
        if (currentIndex < expressionContainers.length - 1) {
          setCurrentIndex(currentIndex + 1)
        }

        // Don't use else: stop immediately if reaches the end
        if (currentIndex + 1 >= expressionContainers.length - 1) {
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
    pause()
    setCurrentIndex(expressionContainers.length - 1)
  }

  const reset = () => {
    setCurrentIndex(0)
    pause()
    setResetClicked(true)
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
  const canStepForward = currentIndex < expressionContainers.length - 1
  const explanationsVisible =
    explanationsVisibility === 'visible' ||
    (explanationsVisibility === 'hiddenInitialPausedOnly' &&
      !isPlaying &&
      currentIndex > 0) ||
    (explanationsVisibility === 'hiddenInitialAndLastPausedOnly' &&
      !isPlaying &&
      atLeastOneStepTaken &&
      canStepForward)

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
                convert={convert}
                alphaConvertCallArg={alphaConvertCallArg}
              />
            </ExpressionRunnerCaptionWrapper>
          )}
          {/* TODO: Remove caption here once v2 is done */}
          {caption && (
            <ExpressionRunnerCaptionWrapper>
              <H args={caption} />
            </ExpressionRunnerCaptionWrapper>
          )}
          {children && !explanationsVisible && !isPlaying && (
            <ExpressionRunnerCaptionWrapper>
              {children}
            </ExpressionRunnerCaptionWrapper>
          )}
          {/* TODO: Remove !caption here once v2 is done */}
          {!caption && isPlaying && (
            <ExpressionRunnerCaptionWrapper>
              <H args={{ name: 'fastForwarding' }} />
            </ExpressionRunnerCaptionWrapper>
          )}
          {!hidePlayButton &&
            canStepForward &&
            (isPlaying || atLeastOneStepTaken) && (
              <ProgressBar
                percent={percentDone}
                fromPercent={fromPercent}
                speed={isPlaying ? autoplaySpeed(speed) : undefined}
              />
            )}
        </Container>
        <Container size={containerSize} horizontalPadding={0.25}>
          <div
            css={css`
              max-width: 100%;
            `}
          >
            <div
              css={[
                css`
                  line-height: ${lineHeights(1.3, { ignoreLocale: true })};
                  opacity: ${isFastForwarding ? 0.6 : 1};
                  position: relative;
                  background-color: ${colors('white')};
                `
              ]}
            >
              {crossed && (
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
              canStepForward={canStepForward}
              canStepBackward={atLeastOneStepTaken}
              showPlayButton={!hidePlayButton}
              isPlaying={isPlaying}
              onAutoClick={autoplay}
              onSkipToTheEndClick={stepToTheEnd}
              onResetClick={reset}
              skipToTheEnd={skipToTheEnd}
              onPauseClick={pause}
              convert={convert}
            />
          )}
        </Container>
        <Container
          size={containerSize === 'xxs' ? 'xs' : 'sm'}
          horizontalPadding={0}
        >
          {!hidePlayButton && canStepForward && (resetClicked || speed > 1) && (
            <>
              <ExpressionRunnerCaptionWrapper
                css={css`
                  margin: ${spaces(1)} 0 ${spaces('-0.25')};
                `}
              >
                <LinkButton
                  onClick={stepToTheEnd}
                  css={css`
                    color: inherit;
                    font-weight: bold;
                    font-size: ${fontSizes(0.75)};
                  `}
                >
                  <H args={{ name: 'skipToTheEnd' }} /> →
                </LinkButton>
              </ExpressionRunnerCaptionWrapper>
            </>
          )}
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
