import React from 'react'
import { ConditionalExpression } from 'src/types/ExpressionTypes'

export interface ConditionalContextProps {
  conditionalState?: ConditionalExpression['state']
}

export const conditionalContextDefault: ConditionalContextProps = {}

export default React.createContext<ConditionalContextProps>(
  conditionalContextDefault
)
