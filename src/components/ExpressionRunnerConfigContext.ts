import React from 'react'

export interface ExpressionRunnerConfigContextProps {
  pointToRunButton?: true
  churchNumerals?: true
}

export const ExpressionRunnerConfigContextDefault: ExpressionRunnerConfigContextProps = {}

export default React.createContext<ExpressionRunnerConfigContextProps>(
  ExpressionRunnerConfigContextDefault
)
