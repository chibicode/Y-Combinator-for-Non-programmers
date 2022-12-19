import React from 'react'

// NOTE: This is necessary because call expressions with a priority higher than
// 1 can be active if there aren't ones w/ a lower priority that's executable.
export interface ExpressionPriorityContextProps {
  activePriority?: number
}

export const expressionPriorityContextDefault: ExpressionPriorityContextProps =
  {}

export default React.createContext<ExpressionPriorityContextProps>(
  expressionPriorityContextDefault
)
