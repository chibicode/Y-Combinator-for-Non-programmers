import React from 'react'

export interface ExpressionRunnerContextProps {
  hidePriorities: boolean
  variableSize: 'sm' | 'md' | 'lg'
  isDone: boolean
}

export const expressionRunnerContextDefault: ExpressionRunnerContextProps = {
  hidePriorities: false,
  variableSize: 'sm',
  isDone: false
}

export default React.createContext<ExpressionRunnerContextProps>(
  expressionRunnerContextDefault
)
