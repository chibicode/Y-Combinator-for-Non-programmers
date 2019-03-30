import React from 'react'
import ExpressionRunner, {
  ExpressionRunnerProps
} from 'src/components/Yc/ExpressionRunner'
import { SteppedExpressionContainer } from 'src/types/yc/ExpressionContainerTypes'
import { CallStates } from 'src/types/yc/ExpressionTypes'

export const ExpressionRunnerSimple = ({
  expressionContainer,
  initialState,
  caption
}: {
  expressionContainer: SteppedExpressionContainer
  initialState: CallStates
  caption?: ExpressionRunnerProps['caption']
}) => (
  <ExpressionRunner
    expressionContainer={expressionContainer}
    hideControls
    hidePriorities
    explanationsVisibility="hidden"
    caption={caption}
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
  initialState,
  caption
}: {
  expressionContainer: SteppedExpressionContainer
  initialState: CallStates
  caption?: ExpressionRunnerProps['caption']
}) => (
  <ExpressionRunner
    expressionContainer={expressionContainer}
    hidePriorities
    skipToTheEnd
    hideForwardAndBackButtons
    caption={caption}
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
