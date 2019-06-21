import { ExpressionRunnerPrecomputedProps } from 'src/components/ExpressionRunnerPrecomputed'

const params: ExpressionRunnerPrecomputedProps = {
  expressionContainers: [
    {
      containerState: 'ready',
      previouslyChangedExpressionState: 'default',
      expression: {
        name: 'shorthandNumber',
        highlightType: 'default',
        topLeftBadgeType: 'none',
        bottomRightBadgeType: 'none',
        type: 'variable',
        argPriorityAgg: [],
        funcPriorityAgg: [],
        emphasizePriority: false,
        bound: true,
        shorthandNumber: 2,
        shorthandUnary: 'pred'
      },
      unaryJustExecuted: undefined
    },
    {
      containerState: 'done',
      previouslyChangedExpressionState: 'default',
      expression: {
        name: 'shorthandNumber',
        highlightType: 'default',
        topLeftBadgeType: 'none',
        bottomRightBadgeType: 'none',
        type: 'variable',
        argPriorityAgg: [],
        funcPriorityAgg: [],
        emphasizePriority: false,
        bound: true,
        shorthandNumber: 1,
        shorthandUnary: undefined
      },
      unaryJustExecuted: true
    }
  ],
  speed: 1,
  showOnlyFocused: false,
  caption: undefined,
  hideControls: false,
  explanationsVisibility: 'hiddenInitialPausedOnly',
  hidePriorities: true,
  variableSize: 'lg',
  containerSize: 'xxs',
  hidePlayButton: false,
  hideBottomRightBadges: false,
  skipToTheEnd: true,
  hideFuncUnboundBadgeOnExplanation: true,
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
