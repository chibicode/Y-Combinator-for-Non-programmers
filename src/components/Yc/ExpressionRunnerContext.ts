import React from 'react'

export interface ExpressionRunnerContextProps {
  hidePriorities: boolean
  variableSize: 'sm' | 'md' | 'lg'
  isDoneOrReady: boolean
}

export const expressionRunnerContextDefault: ExpressionRunnerContextProps = {
  hidePriorities: false,
  variableSize: 'sm',
  isDoneOrReady: false
}

export default React.createContext<ExpressionRunnerContextProps>(
  expressionRunnerContextDefault
)
