import React from 'react'
import { CommonStates } from 'src/types/yc/ExpressionTypes'

export interface ExpressionHighlighterContextProps {
  state: CommonStates
}

export const expressionHighlighterContextDefault: ExpressionHighlighterContextProps = {
  state: 'default'
}

export default React.createContext<ExpressionHighlighterContextProps>(
  expressionHighlighterContextDefault
)
