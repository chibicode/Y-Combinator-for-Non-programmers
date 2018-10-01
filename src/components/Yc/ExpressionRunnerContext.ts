import React from 'react'

export interface ExpressionRunnerContextProps {
  showPriorities: boolean
  variableSize: 'sm' | 'lg'
}

export const expressionRunnerContextDefault: ExpressionRunnerContextProps = {
  showPriorities: true,
  variableSize: 'sm'
}

export default React.createContext<ExpressionRunnerContextProps>(
  expressionRunnerContextDefault
)
