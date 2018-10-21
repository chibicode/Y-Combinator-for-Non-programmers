import React from 'react'
import { AllExpressionStates, CommonStates } from 'src/types/yc/ExpressionTypes'

export interface ExpressionHighlighterContextProps {
  state?: CommonStates
  highlightType?:
    | 'callArg'
    | 'funcArg'
    | 'funcBody'
    | 'funcBodyBound'
    | 'funcBodyUnbound'
}

export const highlightTypes = ['justHighlighted', 'highlighted']

export const convertAllExpressionStates = (
  x: AllExpressionStates
): ExpressionHighlighterContextProps['state'] => {
  switch (x) {
    case 'justHighlighted':
    case 'highlighted':
      return x
    default:
      return 'default'
  }
}

export const expressionHighlighterContextDefault: ExpressionHighlighterContextProps = {}

export default React.createContext<ExpressionHighlighterContextProps>(
  expressionHighlighterContextDefault
)
