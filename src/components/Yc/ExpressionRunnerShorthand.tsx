/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import ExpressionRunner from 'src/components/Yc/ExpressionRunner'
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
  showPriorities
}: {
  expressionContainer: SteppedExpressionContainer
  initialState: CallStates
  isDone: boolean
  showPriorities: boolean
}) => (
  <ExpressionRunner
    expressionContainer={expressionContainer}
    hideControls
    hidePriorities={!showPriorities}
    explanationsVisibility="hidden"
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
  showPriorities: false
}

export const ExpressionRunnerPlayButtonOnly = ({
  expressionContainer,
  initialState,
  lastAllowedExpressionState,
  skipToTheEnd,
  hideFuncUnboundBadgeOnExplanation,
  showPriorities
}: {
  expressionContainer: SteppedExpressionContainer
  initialState: CallStates
  skipToTheEnd: boolean
  hideFuncUnboundBadgeOnExplanation: boolean
  showPriorities: boolean
  lastAllowedExpressionState?: CallStates
}) => (
  <ExpressionRunner
    expressionContainer={expressionContainer}
    hidePriorities={!showPriorities}
    resetIndex
    hideFuncUnboundBadgeOnExplanation={hideFuncUnboundBadgeOnExplanation}
    skipToTheEnd={skipToTheEnd}
    hideRemainingTime
    variableSize={'lg'}
    explanationsVisibility="doneOnly"
    lastAllowedExpressionState={lastAllowedExpressionState}
    initializeInstructions={[
      {
        type: 'stepForwardUntilPreviouslyChangedExpressionState',
        state: initialState
      }
    ]}
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
  initialState
}: {
  expressionContainer: SteppedExpressionContainer
  initialState: CallStates
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
      <Emoji>🔽</Emoji> <H args={{ name: 'afterPlay' }} highlightType="none" />{' '}
      <Emoji>🔽</Emoji>
    </P>
    <ExpressionRunner
      expressionContainer={expressionContainer}
      hideControls
      hidePriorities
      explanationsVisibility="hidden"
      variableSize={'lg'}
      initializeInstructions={[
        {
          type: 'stepForwardUntilTheEnd'
        }
      ]}
    />
  </>
)

ExpressionRunnerPairSimple.defaultProps = {
  initialState: 'default'
}

export const ExpressionRunnerSingleStep = ({
  expressionContainer,
  initialState,
  finalState,
  hideFuncUnboundBadgeOnExplanation,
  showPriorities
}: {
  expressionContainer: SteppedExpressionContainer
  initialState: CallStates
  finalState: CallStates
  hideFuncUnboundBadgeOnExplanation: boolean
  showPriorities: boolean
}) => (
  <ExpressionRunner
    expressionContainer={expressionContainer}
    hidePriorities={!showPriorities}
    hideFuncUnboundBadgeOnExplanation={hideFuncUnboundBadgeOnExplanation}
    hidePlayButton
    explanationsVisibility="hiddenInitial"
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
  showPriorities: false
}
