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
  initialState
}: {
  expressionContainer: SteppedExpressionContainer
  initialState: CallStates
}) => (
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
)

export const ExpressionRunnerPlayButtonOnly = ({
  expressionContainer,
  initialState
}: {
  expressionContainer: SteppedExpressionContainer
  initialState: CallStates
}) => (
  <ExpressionRunner
    expressionContainer={expressionContainer}
    hidePriorities
    skipToTheEnd
    hideForwardAndBackButtons
    variableSize={'lg'}
    explanationsVisibility="hiddenInitial"
    initializeInstructions={[
      {
        type: 'stepForwardUntilPreviouslyChangedExpressionState',
        state: initialState
      }
    ]}
  />
)

export const ExpressionRunnerPairSimple = ({
  expressionContainer,
  initialState
}: {
  expressionContainer: SteppedExpressionContainer
  initialState: CallStates
  caption?: ExpressionRunnerProps['caption']
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
      <Emoji>⬇️</Emoji> <H args={{ name: 'afterPlay' }} highlightType="none" />{' '}
      <Emoji>⬇️</Emoji>
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
