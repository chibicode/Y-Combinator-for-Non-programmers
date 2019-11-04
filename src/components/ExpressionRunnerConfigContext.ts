import React from 'react'

export interface ExpressionRunnerConfigContextProps {
  pointToRunButton?: true
}

export const ExpressionRunnerConfigContextDefault: ExpressionRunnerConfigContextProps = {}

export default React.createContext<ExpressionRunnerConfigContextProps>(
  ExpressionRunnerConfigContextDefault
)
