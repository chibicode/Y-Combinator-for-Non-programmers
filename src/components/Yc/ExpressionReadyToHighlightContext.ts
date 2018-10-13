import React from 'react'
import { CallExpressionStates } from 'src/types/yc/ExpressionTypes'

export interface ExpressionReadyToHighlightContextProps {
  readyToHighlight?: boolean
  disableReadyToHighlightColoring?: boolean
}

export const convertCallexpressionStates = (
  x: CallExpressionStates
): ExpressionReadyToHighlightContextProps['readyToHighlight'] => {
  switch (x) {
    case 'readyToHighlight':
    case 'needsAlphaConvert':
    case 'readyToBetaReduce':
    case 'betaReducePreviewBefore':
    case 'betaReducePreviewAfter':
    case 'betaReducePreviewCrossed':
    case 'justBetaReduced':
    case 'alphaConvertDone':
      return true
    default:
      return false
  }
}

export const expressionReadyToHighlightContextDefault: ExpressionReadyToHighlightContextProps = {}

export default React.createContext<ExpressionReadyToHighlightContextProps>(
  expressionReadyToHighlightContextDefault
)
