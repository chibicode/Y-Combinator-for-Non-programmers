import React from 'react'
import { ExpressionRunnerContextProps } from 'src/types/ExpressionRunnerTypes'

export const expressionRunnerContextDefault: ExpressionRunnerContextProps = {
  hidePriorities: false,
  hideBottomRightBadges: false,
  variableSize: 'sm',
  isDoneOrReady: false,
  started: false,
  bottomRightBadgeOverrides: {},
  highlightOverrides: {},
  highlightOverrideActiveAfterStart: false,
  highlightOverridesCallArgAndFuncUnboundOnly: false,
  showOnlyFocused: false,
  argPriorityAggHighlights: [],
  funcPriorityAggHighlights: [],
  highlightFunctions: false,
  highlightAllChildren: false
}

export default React.createContext<ExpressionRunnerContextProps>(
  expressionRunnerContextDefault
)
