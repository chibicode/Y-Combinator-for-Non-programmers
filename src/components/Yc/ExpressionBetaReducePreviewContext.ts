import React from 'react'

export interface ExpressionBetaReducePreviewContextProps {
  betaReducePreview?: 'before' | 'after' | 'crossed'
  wasJustBetaReduced?: boolean
}

export const expressionBetaReducePreviewContextDefault: ExpressionBetaReducePreviewContextProps = {}

export default React.createContext<ExpressionBetaReducePreviewContextProps>(
  expressionBetaReducePreviewContextDefault
)
