import React from 'react'

export interface ExpressionBetaReducePreviewContextProps {
  betaReducePreview?: 'before' | 'after'
}

export const expressionBetaReducePreviewContextDefault: ExpressionBetaReducePreviewContextProps = {}

export default React.createContext<ExpressionBetaReducePreviewContextProps>(
  expressionBetaReducePreviewContextDefault
)
