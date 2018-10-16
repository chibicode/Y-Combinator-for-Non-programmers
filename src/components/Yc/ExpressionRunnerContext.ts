import React from 'react'

export interface ExpressionRunnerContextProps {
  hidePriorities: boolean
  variableSize: 'sm' | 'md' | 'lg'
}

export const expressionRunnerContextDefault: ExpressionRunnerContextProps = {
  hidePriorities: false,
  variableSize: 'sm'
}

export default React.createContext<ExpressionRunnerContextProps>(
  expressionRunnerContextDefault
)
