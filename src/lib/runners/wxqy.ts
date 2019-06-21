import { ExpressionRunnerPrecomputedProps } from 'src/components/ExpressionRunnerPrecomputed'

const params: ExpressionRunnerPrecomputedProps = {
  expressionContainers: [
    {
      containerState: 'done',
      previouslyChangedExpressionState: 'default',
      expression: {
        type: 'variable',
        name: 'shorthandNumber',
        bound: true,
        highlightType: 'default',
        topLeftBadgeType: 'none',
        bottomRightBadgeType: 'none',
        emphasizePriority: false,
        argPriorityAgg: [],
        funcPriorityAgg: [],
        shorthandNumber: 120
      },
      unaryJustExecuted: undefined
    }
  ],
  speed: 1,
  showOnlyFocused: false,
  caption: undefined,
  hideControls: true,
  explanationsVisibility: 'hidden',
  hidePriorities: false,
  variableSize: 'xs',
  containerSize: 'xs',
  hidePlayButton: false,
  hideBottomRightBadges: false,
  skipToTheEnd: false,
  hideFuncUnboundBadgeOnExplanation: false,
  highlightOverridesCallArgAndFuncUnboundOnly: false,
  bottomRightBadgeOverrides: {},
  highlightOverrides: {},
  highlightOverrideActiveAfterStart: false,
  argPriorityAggHighlights: [],
  funcPriorityAggHighlights: [],
  highlightFunctions: false,
  superFastForward: false,
  highlightNumber: undefined,
  showAllShowSteps: undefined
}

export default params
