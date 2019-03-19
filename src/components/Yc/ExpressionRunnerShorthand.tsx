import React from 'react'
import ExpressionRunner from 'src/components/Yc/ExpressionRunner'
import { SteppedExpressionContainer } from 'src/types/yc/ExpressionContainerTypes'
import { CallStates } from 'src/types/yc/ExpressionTypes'

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
    hideExplanations
    variableSize={'lg'}
    initializeInstructions={[
      {
        type: 'stepForwardUntilPreviouslyChangedExpressionState',
        state: initialState
      }
    ]}
  />
)
