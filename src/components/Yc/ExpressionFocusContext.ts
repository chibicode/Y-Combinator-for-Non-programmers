import React from 'react'
import { CallExpressionStates } from 'src/types/yc/ExpressionTypes'

export interface ExpressionFocusContextProps {
  focused?: boolean
  isDoneOrDefault?: boolean
  previouslyChangedExpressionStateReadyToHighlight?: boolean
  parentCallExpressionReadyToHighlight?: boolean
}

export const callExpressionStateToFocused = (
  x: CallExpressionStates
): ExpressionFocusContextProps['focused'] => {
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

export const expressionFocusContextDefault: ExpressionFocusContextProps = {}

export default React.createContext<ExpressionFocusContextProps>(
  expressionFocusContextDefault
)
