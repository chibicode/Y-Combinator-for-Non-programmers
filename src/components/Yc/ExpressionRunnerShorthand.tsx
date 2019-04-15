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
  showAllShowSteps
}: {
  expressionContainer: SteppedExpressionContainer
  initialState: CallStates
  isDone: boolean
  showPriorities: boolean
  showAllShowSteps?: ExpressionRunnerProps['showAllShowSteps']
  explanationsVisibility: ExpressionRunnerProps['explanationsVisibility']
}) => (
  <ExpressionRunner
    expressionContainer={expressionContainer}
    hideControls
    hidePriorities={!showPriorities}
    explanationsVisibility={explanationsVisibility}
    showAllShowSteps={showAllShowSteps}
    variableSize={'lg'}
    initializeInstructions={[
      isDone
        ? {
            type: 'stepForwardUntilTheEnd'
          }
        : {
            type: 'stepForwardUntilPreviouslyChangedExpressionState',
            state: initialState
          }
    ]}
  />
)

ExpressionRunnerSimple.defaultProps = {
  isDone: false,
  initialState: 'default',
  showPriorities: false,
  explanationsVisibility: 'hidden'
}

export const ExpressionRunnerPlayButtonOnly = ({
  expressionContainer,
  initialState,
  lastAllowedExpressionState,
  skipToTheEnd,
  hideFuncUnboundBadgeOnExplanation,
  showPriorities,
  nextIteration,
  showAllShowSteps
}: {
  expressionContainer: SteppedExpressionContainer
  initialState: CallStates
  skipToTheEnd: boolean
  hideFuncUnboundBadgeOnExplanation: boolean
  showPriorities: boolean
  lastAllowedExpressionState?: CallStates
  nextIteration?: boolean
  showAllShowSteps?: ExpressionRunnerProps['showAllShowSteps']
}) => (
  <ExpressionRunner
    expressionContainer={expressionContainer}
    hidePriorities={!showPriorities}
    resetIndex
    showAllShowSteps={showAllShowSteps}
    hideFuncUnboundBadgeOnExplanation={hideFuncUnboundBadgeOnExplanation}
    skipToTheEnd={skipToTheEnd}
    hideRemainingTime
    variableSize={'lg'}
    explanationsVisibility="hiddenInitialPausedOnly"
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
  showPriorities: false
}

export const ExpressionRunnerPairSimple = ({
  expressionContainer,
  initialState,
  finalIsDone,
  finalState
}: {
  expressionContainer: SteppedExpressionContainer
  initialState: CallStates
  finalIsDone: boolean
  finalState?: CallStates
}) => (
  <>
    <ExpressionRunner
      expressionContainer={expressionContainer}
      hideControls
      hidePriorities
      explanationsVisibility="hidden"
      variableSize={'lg'}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: initialState
        }
      ]}
    />
    <P
      css={css`
        text-align: center;
        margin: ${spaces('-0.75')} 0 ${spaces('-0.5')};
      `}
    >
      {finalState || finalIsDone ? (
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
      hidePriorities
      explanationsVisibility="hidden"
      variableSize={'lg'}
      initializeInstructions={[
        finalState
          ? {
              type: 'stepForwardUntilPreviouslyChangedExpressionState',
              state: finalState
            }
          : {
              type: 'stepForwardUntilTheEnd'
            }
      ]}
    />
  </>
)

ExpressionRunnerPairSimple.defaultProps = {
  initialState: 'default',
  finalIsDone: false
}

export const ExpressionRunnerSingleStep = ({
  expressionContainer,
  initialState,
  finalState,
  hideFuncUnboundBadgeOnExplanation,
  showPriorities,
  explanationsVisibility
}: {
  expressionContainer: SteppedExpressionContainer
  initialState: CallStates
  finalState: CallStates
  hideFuncUnboundBadgeOnExplanation: boolean
  showPriorities: boolean
  explanationsVisibility: ExpressionRunnerProps['explanationsVisibility']
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
