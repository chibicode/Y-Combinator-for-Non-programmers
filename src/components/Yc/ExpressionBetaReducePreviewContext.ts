import React from 'react'

export interface ExpressionBetaReducePreviewContextProps {
  betaReducePreview?: 'before' | 'after'
  wasJustBetaReduced?: boolean
  hideStar?: boolean
}

export const expressionBetaReducePreviewContextDefault: ExpressionBetaReducePreviewContextProps = {}

export default React.createContext<ExpressionBetaReducePreviewContextProps>(
  expressionBetaReducePreviewContextDefault
)
