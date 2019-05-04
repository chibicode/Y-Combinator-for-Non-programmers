/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import ExpressionRunner, {
  ExpressionRunnerProps
} from 'src/components/Yc/ExpressionRunner'
import { SteppedExpressionContainer } from 'src/types/yc/ExpressionContainerTypes'
import { CallStates } from 'src/types/yc/ExpressionTypes'
import { P } from 'src/components/ContentTags'
import H from 'src/components/H'
import Emoji from 'src/components/Emoji'
import { spaces } from 'src/lib/theme'

export const ExpressionRunnerSimple = ({
  expressionContainer,
  initialState,
  isDone,
  explanationsVisibility,
  showPriorities,
  showAllShowSteps,
  caption,
  bottomRightBadgeOverrides,
  highlightOverrides,
  highlightOverrideActiveAfterStart,
  variableSize,
  containerSize,
  skipAlphaConvert,
  nextIteration,
  showOnlyFocused,
  highlightOverridesCallArgAndFuncUnboundOnly
}: {
  expressionContainer: SteppedExpressionContainer
  initialState: CallStates
  isDone: boolean
  skipAlphaConvert: boolean
  nextIteration?: boolean
  showPriorities: boolean
  showAllShowSteps?: ExpressionRunnerProps['showAllShowSteps']
  explanationsVisibility: ExpressionRunnerProps['explanationsVisibility']
  caption?: ExpressionRunnerProps['caption']
  bottomRightBadgeOverrides?: ExpressionRunnerProps['bottomRightBadgeOverrides']
  variableSize: ExpressionRunnerProps['variableSize']
  containerSize?: ExpressionRunnerProps['containerSize']
  highlightOverrides?: ExpressionRunnerProps['highlightOverrides']
  highlightOverrideActiveAfterStart?: ExpressionRunnerProps['highlightOverrideActiveAfterStart']
  highlightOverridesCallArgAndFuncUnboundOnly?: ExpressionRunnerProps['highlightOverridesCallArgAndFuncUnboundOnly']
  showOnlyFocused?: ExpressionRunnerProps['showOnlyFocused']
}) => (
  <ExpressionRunner
    expressionContainer={expressionContainer}
    hideControls
    hidePriorities={!showPriorities}
    explanationsVisibility={explanationsVisibility}
    showAllShowSteps={showAllShowSteps}
    variableSize={variableSize}
    highlightOverridesCallArgAndFuncUnboundOnly={
      highlightOverridesCallArgAndFuncUnboundOnly
    }
    showOnlyFocused={showOnlyFocused}
    containerSize={containerSize}
    caption={caption}
    skipAlphaConvert={skipAlphaConvert}
    bottomRightBadgeOverrides={bottomRightBadgeOverrides}
    highlightOverrides={highlightOverrides}
    highlightOverrideActiveAfterStart={highlightOverrideActiveAfterStart}
    initializeInstructions={
      nextIteration
        ? [
            {
              type: 'nextIteration'
            },
            {
              type: 'stepForwardUntilPreviouslyChangedExpressionState',
              state: initialState
            }
          ]
        : [
            isDone
              ? {
                  type: 'stepForwardUntilTheEnd'
                }
              : {
                  type: 'stepForwardUntilPreviouslyChangedExpressionState',
                  state: initialState
                }
          ]
    }
  />
)

ExpressionRunnerSimple.defaultProps = {
  isDone: false,
  initialState: 'default',
  showPriorities: false,
  explanationsVisibility: 'hidden',
  variableSize: 'lg',
  skipAlphaConvert: false
}

export const ExpressionRunnerPlayButtonOnly = ({
  expressionContainer,
  initialState,
  lastAllowedExpressionState,
  skipToTheEnd,
  hideFuncUnboundBadgeOnExplanation,
  showPriorities,
  nextIteration,
  showAllShowSteps,
  speed,
  skipAlphaConvert,
  variableSize,
  containerSize,
  highlightOverrides
}: {
  expressionContainer: SteppedExpressionContainer
  initialState: CallStates
  skipToTheEnd: boolean
  hideFuncUnboundBadgeOnExplanation: boolean
  showPriorities: boolean
  lastAllowedExpressionState?: CallStates
  nextIteration?: boolean
  showAllShowSteps?: ExpressionRunnerProps['showAllShowSteps']
  speed: number
  skipAlphaConvert: boolean
  variableSize: ExpressionRunnerProps['variableSize']
  containerSize?: ExpressionRunnerProps['containerSize']
  highlightOverrides?: ExpressionRunnerProps['highlightOverrides']
}) => (
  <ExpressionRunner
    speed={speed}
    expressionContainer={expressionContainer}
    hidePriorities={!showPriorities}
    highlightOverrides={highlightOverrides}
    resetIndex
    showAllShowSteps={showAllShowSteps}
    hideFuncUnboundBadgeOnExplanation={hideFuncUnboundBadgeOnExplanation}
    skipToTheEnd={skipToTheEnd}
    variableSize={variableSize}
    containerSize={containerSize}
    skipAlphaConvert={skipAlphaConvert}
    explanationsVisibility={
      speed === 1 ? 'hiddenInitialPausedOnly' : 'hiddenInitial'
    }
    lastAllowedExpressionState={lastAllowedExpressionState}
    initializeInstructions={
      nextIteration
        ? [
            {
              type: 'nextIteration'
            },
            {
              type: 'stepForwardUntilPreviouslyChangedExpressionState',
              state: initialState
            }
          ]
        : [
            {
              type: 'stepForwardUntilPreviouslyChangedExpressionState',
              state: initialState
            }
          ]
    }
  />
)

ExpressionRunnerPlayButtonOnly.defaultProps = {
  initialState: 'default',
  skipToTheEnd: true,
  hideFuncUnboundBadgeOnExplanation: true,
  showPriorities: false,
  speed: 1,
  skipAlphaConvert: false,
  variableSize: 'lg'
}

export const ExpressionRunnerPairSimple = ({
  expressionContainer,
  initialState,
  finalIsDone,
  finalState,
  showPriorities,
  hidePrioritiesOnSecond,
  firstInitializeInstructions,
  secondInitializeInstructions,
  highlightOverrides,
  highlightOverrideActiveAfterStart,
  skipAlphaConvert
}: {
  expressionContainer: SteppedExpressionContainer
  initialState: CallStates
  finalIsDone: boolean
  finalState?: CallStates
  showPriorities: boolean
  hidePrioritiesOnSecond: boolean
  skipAlphaConvert: boolean
  firstInitializeInstructions?: ExpressionRunnerProps['initializeInstructions']
  secondInitializeInstructions?: ExpressionRunnerProps['initializeInstructions']
  highlightOverrides?: ExpressionRunnerProps['highlightOverrides']
  highlightOverrideActiveAfterStart?: ExpressionRunnerProps['highlightOverrideActiveAfterStart']
}) => (
  <>
    <ExpressionRunner
      expressionContainer={expressionContainer}
      hideControls
      hidePriorities={!showPriorities}
      explanationsVisibility="hidden"
      variableSize={'lg'}
      skipAlphaConvert={skipAlphaConvert}
      highlightOverrides={highlightOverrides}
      highlightOverrideActiveAfterStart={highlightOverrideActiveAfterStart}
      initializeInstructions={
        firstInitializeInstructions
          ? firstInitializeInstructions
          : [
              {
                type: 'stepForwardUntilPreviouslyChangedExpressionState',
                state: initialState
              }
            ]
      }
    />
    <P
      css={css`
        text-align: center;
        margin: ${spaces('-0.75')} 0 ${spaces('-0.5')};
      `}
    >
      {finalState || finalIsDone || secondInitializeInstructions ? (
        <>
          <Emoji size="mdlg">⬇️</Emoji>
        </>
      ) : (
        <>
          <Emoji>🔽</Emoji>{' '}
          <H args={{ name: 'afterPlay' }} highlightType="none" />{' '}
          <Emoji>🔽</Emoji>
        </>
      )}
    </P>
    <ExpressionRunner
      expressionContainer={expressionContainer}
      hideControls
      hidePriorities={!showPriorities || hidePrioritiesOnSecond}
      explanationsVisibility="hidden"
      variableSize={'lg'}
      skipAlphaConvert={skipAlphaConvert}
      highlightOverrides={highlightOverrides}
      highlightOverrideActiveAfterStart={highlightOverrideActiveAfterStart}
      initializeInstructions={
        secondInitializeInstructions
          ? secondInitializeInstructions
          : [
              finalState
                ? {
                    type: 'stepForwardUntilPreviouslyChangedExpressionState',
                    state: finalState
                  }
                : {
                    type: 'stepForwardUntilTheEnd'
                  }
            ]
      }
    />
  </>
)

ExpressionRunnerPairSimple.defaultProps = {
  initialState: 'default',
  finalIsDone: false,
  showPriorities: false,
  skipAlphaConvert: false,
  hidePrioritiesOnSecond: false
}

export const ExpressionRunnerSingleStep = ({
  expressionContainer,
  initialState,
  finalState,
  hideFuncUnboundBadgeOnExplanation,
  showPriorities,
  explanationsVisibility,
  showAllShowSteps
}: {
  expressionContainer: SteppedExpressionContainer
  initialState: CallStates
  finalState: CallStates
  hideFuncUnboundBadgeOnExplanation: boolean
  showPriorities: boolean
  explanationsVisibility: ExpressionRunnerProps['explanationsVisibility']
  showAllShowSteps?: ExpressionRunnerProps['showAllShowSteps']
}) => (
  <ExpressionRunner
    expressionContainer={expressionContainer}
    hidePriorities={!showPriorities}
    hideFuncUnboundBadgeOnExplanation={hideFuncUnboundBadgeOnExplanation}
    hidePlayButton
    explanationsVisibility={explanationsVisibility}
    variableSize={'lg'}
    resetIndex
    lastAllowedExpressionState={finalState}
    showAllShowSteps={showAllShowSteps}
    initializeInstructions={[
      {
        type: 'stepForwardUntilPreviouslyChangedExpressionState',
        state: initialState
      }
    ]}
  />
)

ExpressionRunnerSingleStep.defaultProps = {
  hideFuncUnboundBadgeOnExplanation: false,
  showPriorities: false,
  explanationsVisibility: 'hiddenInitial'
}
