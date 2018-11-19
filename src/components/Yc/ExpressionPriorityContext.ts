import React from 'react'

export interface ExpressionPriorityContextProps {
  activePriority?: number
}

export const expressionPriorityContextDefault: ExpressionPriorityContextProps = {}

export default React.createContext<ExpressionPriorityContextProps>(
  expressionPriorityContextDefault
)
