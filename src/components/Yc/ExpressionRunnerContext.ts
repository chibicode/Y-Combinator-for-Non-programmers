import React from 'react'
import { VariableNames } from 'src/types/yc/VariableNames'
import { VariableExpression } from 'src/types/yc/ExpressionTypes'

export interface ExpressionRunnerContextProps {
  hidePriorities: boolean
  hideBottomRightBadges: boolean
  variableSize: 'sm' | 'md' | 'lg'
  isDoneOrReady: boolean
  bottomRightBadgeOverrides: { [key in VariableNames]?: string }
  highlightOverrides: {
    [key in VariableNames]?: VariableExpression['highlightType']
  }
}

export const expressionRunnerContextDefault: ExpressionRunnerContextProps = {
  hidePriorities: false,
  hideBottomRightBadges: false,
  variableSize: 'sm',
  isDoneOrReady: false,
  bottomRightBadgeOverrides: {},
  highlightOverrides: {}
}

export default React.createContext<ExpressionRunnerContextProps>(
  expressionRunnerContextDefault
)
