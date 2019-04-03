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
  isDone
}: {
  expressionContainer: SteppedExpressionContainer
  initialState: CallStates
  isDone: boolean
}) => (
  <ExpressionRunner
    expressionContainer={expressionContainer}
    hideControls
    hidePriorities
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
  initialState: 'default'
}

export const ExpressionRunnerPlayButtonOnly = ({
  expressionContainer,
  initialState,
  skipToTheEnd,
  hideFuncUnboundBadgeOnExplanation
}: {
  expressionContainer: SteppedExpressionContainer
  initialState: CallStates
  skipToTheEnd: boolean
  hideFuncUnboundBadgeOnExplanation: boolean
}) => (
  <ExpressionRunner
    expressionContainer={expressionContainer}
    hidePriorities
    resetIndex
    hideFuncUnboundBadgeOnExplanation={hideFuncUnboundBadgeOnExplanation}
    skipToTheEnd={skipToTheEnd}
    hideRemainingTime
    variableSize={'lg'}
    explanationsVisibility="doneOnly"
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
  hideFuncUnboundBadgeOnExplanation: true
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
  hideFuncUnboundBadgeOnExplanation
}: {
  expressionContainer: SteppedExpressionContainer
  initialState: CallStates
  finalState: CallStates
  hideFuncUnboundBadgeOnExplanation: boolean
}) => (
  <ExpressionRunner
    expressionContainer={expressionContainer}
    hidePriorities
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
  hideFuncUnboundBadgeOnExplanation: true
}
