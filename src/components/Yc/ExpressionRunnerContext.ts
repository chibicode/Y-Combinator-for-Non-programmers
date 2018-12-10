import React from 'react'
import { VariableExpression } from 'src/types/yc/ExpressionTypes'

export interface ExpressionRunnerContextProps {
  hidePriorities: boolean
  variableSize: 'sm' | 'md' | 'lg'
  isDoneOrReady: boolean
  highlightOverrides: {
    [key in VariableExpression['bottomRightBadgeType']]?: VariableExpression['highlightType']
  }
}

export const expressionRunnerContextDefault: ExpressionRunnerContextProps = {
  hidePriorities: false,
  variableSize: 'sm',
  isDoneOrReady: false,
  highlightOverrides: {}
}

export default React.createContext<ExpressionRunnerContextProps>(
  expressionRunnerContextDefault
)
