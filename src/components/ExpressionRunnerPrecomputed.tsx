/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useState, useContext } from 'react'
import Container from 'src/components/Container'
import ExpressionBox from 'src/components/ExpressionBox'
import H from 'src/components/H'
import Emoji from 'src/components/Emoji'
import { Highlight } from 'src/components/ContentTags'
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
import numLeafNodesToVariableSize from 'src/lib/numLeafNodesToVariableSize'
import functionDepthsToContainerSize from 'src/lib/functionDepthsToContainerSize'
import CrossSvg from 'src/components/CrossSvg'
import { LinkButton } from 'src/components/ContentTags/LinkButton'
import TwoColContext from 'src/components/TwoColContext'
import {
  p,
  variableExpressionBoxFontSize
} from 'src/components/VariableExpressionBox'
import ExpressionRunnerConfigContext from 'src/components/ExpressionRunnerConfigContext'

export interface ExpressionRunnerPrecomputedProps {
  expressionContainers: readonly SteppedExpressionContainer[]
  speed: ExpressionRunnerConfig['speed']
  children?: React.ReactNode
  hideControls: ExpressionRunnerConfig['hideControls']
  explanationsVisibility: ExpressionRunnerConfig['explanationsVisibility']
  hidePriorities: ExpressionRunnerConfig['hidePriorities']
  hideRunButton: ExpressionRunnerConfig['hideRunButton']
  hideBottomRightBadges: ExpressionRunnerConfig['hideBottomRightBadges']
  skipToTheEnd: ExpressionRunnerConfig['skipToTheEnd']
  hideFuncUnboundBadgeOnExplanation: ExpressionRunnerConfig['hideFuncUnboundBadgeOnExplanation']
  highlightOverridesCallArgAndFuncUnboundOnly: ExpressionRunnerConfig['highlightOverridesCallArgAndFuncUnboundOnly']
  bottomRightBadgeOverrides: ExpressionRunnerConfig['bottomRightBadgeOverrides']
  highlightOverrides: ExpressionRunnerConfig['highlightOverrides']
  highlightOverrideActiveAfterStart: ExpressionRunnerConfig['highlightOverrideActiveAfterStart']
  highlightFunctions: ExpressionRunnerConfig['highlightFunctions']
  showAllShowSteps: ExpressionRunnerConfig['showAllShowSteps']
  convert: ExpressionRunnerConfig['convert']
  crossed: ExpressionRunnerConfig['crossed']
  showBottomProgressBar: boolean
}

const autoplaySpeed = (speed: number) => 1000 / speed
const HIGHSPEED_THRESHOLD = 2

interface PlaybackState {
  isHighSpeed: boolean
  isRunning: boolean
}

const ExpressionRunnerPrecomputed = ({
  speed,
  expressionContainers,
  hideControls,
  explanationsVisibility,
  hidePriorities,
  hideRunButton,
  hideBottomRightBadges,
  skipToTheEnd,
  hideFuncUnboundBadgeOnExplanation,
  highlightOverridesCallArgAndFuncUnboundOnly,
  bottomRightBadgeOverrides,
  highlightOverrides,
  highlightOverrideActiveAfterStart,
  highlightFunctions,
  showAllShowSteps,
  children,
  convert,
  crossed,
  showBottomProgressBar
}: ExpressionRunnerPrecomputedProps) => {
  const [{ isHighSpeed, isRunning }, setPlaybackStatus] = useState<
    PlaybackState
  >({
    isHighSpeed: false,
    isRunning: false
  })

  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [resetClicked, setResetClicked] = useState<boolean>(false)
  const percentDone = (currentIndex * 100) / (expressionContainers.length - 1)
  const fromPercent =
    ((currentIndex - 1 >= 0 ? currentIndex - 1 : 0) * 100) /
    (expressionContainers.length - 1)

  useInterval(
    () => {
      if (currentIndex < expressionContainers.length - 1) {
        setCurrentIndex(currentIndex + 1)
      }

      // Don't use else: stop immediately if reaches the end
      if (currentIndex + 1 >= expressionContainers.length - 1) {
        setPlaybackStatus({
          isHighSpeed: false,
          isRunning: false
        })
      }
    },
    isRunning ? autoplaySpeed(speed) : null
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
      isRunning: true,
      isHighSpeed: speed > HIGHSPEED_THRESHOLD
    })
  }

  const pause = () => {
    setPlaybackStatus({
      isRunning: false,
      isHighSpeed: false
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
      !isRunning &&
      currentIndex > 0)
  const progessBarVisible =
    !hideRunButton && !skipToTheEnd && (isRunning || atLeastOneStepTaken)
  const containerSize = functionDepthsToContainerSize(
    expressionContainers[currentIndex].expression.maxNestedFunctionDepth || 0
  )
  let variableSize = numLeafNodesToVariableSize(
    expressionContainers[currentIndex].numLeafNodes
  )

  const { maxVariableSize, forceVariableSize, leftVerticalIndent } = useContext(
    TwoColContext
  )

  if (maxVariableSize) {
    if (maxVariableSize === 'md' && variableSize === 'lg') {
      variableSize = 'md'
    } else if (
      maxVariableSize === 'sm' &&
      (variableSize === 'lg' || variableSize === 'md')
    ) {
      variableSize = 'sm'
    }
  }

  if (forceVariableSize) {
    variableSize = forceVariableSize
  }

  const { pointToRunButton } = useContext(ExpressionRunnerConfigContext)

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
        started: atLeastOneStepTaken,
        isDoneOrReady: isDone || isReady,
        highlightFunctions,
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
                isRunning={isRunning}
                expressionContainer={expressionContainers[currentIndex]}
                isDone={isDone}
                showAllShowSteps={showAllShowSteps}
                hideFuncUnboundBadge={hideFuncUnboundBadgeOnExplanation}
                convert={convert}
              />
            </ExpressionRunnerCaptionWrapper>
          )}
          {children && !explanationsVisible && !isRunning && (
            <ExpressionRunnerCaptionWrapper>
              {children}
            </ExpressionRunnerCaptionWrapper>
          )}
          {isRunning && (
            <ExpressionRunnerCaptionWrapper>
              <H args={{ name: 'running' }} />
            </ExpressionRunnerCaptionWrapper>
          )}
          {progessBarVisible && (
            <div
              css={css`
                margin: ${spaces(0.25)} auto ${spaces(1)};
              `}
            >
              <ProgressBar
                percent={percentDone}
                fromPercent={fromPercent}
                speed={isRunning ? autoplaySpeed(speed) : undefined}
              />
            </div>
          )}
        </Container>
        <Container size={containerSize} horizontalPadding={0.25}>
          <div
            css={css`
              max-width: 100%;
            `}
          >
            {leftVerticalIndent && (
              <div
                css={css`
                  line-height: ${lineHeights(1.3, { ignoreLocale: true })};
                  padding-top: ${p(variableSize)};
                  padding-bottom: ${p(variableSize)};
                  font-size: ${variableExpressionBoxFontSize(variableSize)};
                `}
              >
                <div
                  css={css`
                    padding-top: 1.25em;
                    border-top: 1px solid transparent;
                  `}
                ></div>
              </div>
            )}
            <div
              css={[
                css`
                  line-height: ${lineHeights(1.3, { ignoreLocale: true })};
                  opacity: ${isHighSpeed ? 0.5 : 1};
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
        <Container
          size={containerSize === 'xxs' ? 'xs' : 'sm'}
          horizontalPadding={0}
        >
          {progessBarVisible && showBottomProgressBar && (
            <div
              css={css`
                margin: ${spaces(1)} auto ${spaces(0.25)};
              `}
            >
              <ProgressBar
                percent={percentDone}
                fromPercent={fromPercent}
                speed={isRunning ? autoplaySpeed(speed) : undefined}
              />
            </div>
          )}
        </Container>
        <Container size="xxs" horizontalPadding={0.25}>
          {!hideControls && (
            <ExpressionRunnerControls
              onNextClick={stepForward}
              onPreviousClick={stepBackward}
              canStepForward={canStepForward}
              canStepBackward={atLeastOneStepTaken}
              showRunButton={!hideRunButton}
              isRunning={isRunning}
              onAutoClick={autoplay}
              onSkipToTheEndClick={stepToTheEnd}
              onResetClick={reset}
              skipToTheEnd={skipToTheEnd}
              onPauseClick={pause}
              convert={convert}
              hideForwardButton={!!pointToRunButton && !atLeastOneStepTaken}
            />
          )}
        </Container>
        <Container
          size={containerSize === 'xxs' ? 'xs' : 'sm'}
          horizontalPadding={0}
        >
          {pointToRunButton &&
            !atLeastOneStepTaken &&
            !isRunning &&
            !resetClicked && (
              <>
                <div
                  css={css`
                    font-size: ${fontSizes(0.85)};
                    animation: pointToRunButton 1s infinite;
                    color: ${colors('grey700')};
                    margin: ${spaces(1)} 0 ${spaces('-1')};
                    text-align: center;

                    @keyframes pointToRunButton {
                      0% {
                        transform: translateY(0);
                      }
                      50% {
                        transform: translateY(-0.375rem);
                      }
                      100% {
                        transform: translateY(0);
                      }
                    }
                  `}
                >
                  ↑ <H args={{ name: 'pointToRunButton' }} />
                </div>
              </>
            )}
          {!hideRunButton &&
            canStepForward &&
            !skipToTheEnd &&
            (resetClicked || speed > 1) && (
              <>
                <ExpressionRunnerCaptionWrapper
                  css={css`
                    margin: ${spaces(1)} 0 ${spaces('-0.25')};
                  `}
                >
                  <Emoji>😉</Emoji>{' '}
                  <LinkButton
                    onClick={stepToTheEnd}
                    css={css`
                      color: inherit;
                      font-weight: bold;
                      font-size: ${fontSizes(0.75)};
                    `}
                  >
                    <Highlight highlightType="pink">
                      {expressionContainers[expressionContainers.length - 1]
                        .containerState !== 'done' ? (
                        <H args={{ name: 'skipToTheStoppingPoint' }} />
                      ) : (
                        <H args={{ name: 'skipToTheEnd' }} />
                      )}{' '}
                      →
                    </Highlight>
                  </LinkButton>
                </ExpressionRunnerCaptionWrapper>
              </>
            )}
          {!hideControls &&
            currentIndex === expressionContainers.length - 1 &&
            expressionContainers[expressionContainers.length - 1]
              .containerState !== 'done' &&
            !hideRunButton && (
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
