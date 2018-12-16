import React from 'react'
import { VariableExpression } from 'src/types/yc/ExpressionTypes'

export type HighlightOverrides =
  | VariableExpression['highlightType']
  | 'forceYellowHighlight'
  | 'none'

export interface ExpressionRunnerContextProps {
  hidePriorities: boolean
  hideBottomRightBadges: boolean
  variableSize: 'sm' | 'md' | 'lg'
  isDoneOrReady: boolean
  highlightOverrides: {
    [key in VariableExpression['bottomRightBadgeType']]?: HighlightOverrides
  }
}

export const expressionRunnerContextDefault: ExpressionRunnerContextProps = {
  hidePriorities: false,
  hideBottomRightBadges: false,
  variableSize: 'sm',
  isDoneOrReady: false,
  highlightOverrides: {}
}

export default React.createContext<ExpressionRunnerContextProps>(
  expressionRunnerContextDefault
)
