import React from 'react'

export interface ExpressionBetaReducePreviewContextProps {
  betaReducePreview?: 'before' | 'after'
  wasJustBetaReduced?: boolean
}

export const expressionBetaReducePreviewContextDefault: ExpressionBetaReducePreviewContextProps = {}

export default React.createContext<ExpressionBetaReducePreviewContextProps>(
  expressionBetaReducePreviewContextDefault
)
