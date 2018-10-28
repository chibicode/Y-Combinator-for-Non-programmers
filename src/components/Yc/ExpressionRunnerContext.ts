import React from 'react'

export interface ExpressionRunnerContextProps {
  hidePriorities: boolean
  variableSize: 'sm' | 'md' | 'lg'
  isDoneOrPrioritized: boolean
}

export const expressionRunnerContextDefault: ExpressionRunnerContextProps = {
  hidePriorities: false,
  variableSize: 'sm',
  isDoneOrPrioritized: false
}

export default React.createContext<ExpressionRunnerContextProps>(
  expressionRunnerContextDefault
)
