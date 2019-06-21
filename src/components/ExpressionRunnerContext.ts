import React from 'react'
import {
  ExpressionRunnerContextProps,
  expressionRunnerContextDefault
} from 'src/types/ExpressionRunnerTypes'

export default React.createContext<ExpressionRunnerContextProps>(
  expressionRunnerContextDefault
)
