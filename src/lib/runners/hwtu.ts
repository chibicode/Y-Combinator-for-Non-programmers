import { ExpressionRunnerPrecomputedProps } from 'src/components/ExpressionRunnerPrecomputed'

const params: ExpressionRunnerPrecomputedProps = {
  expressionContainers: [
    {
      expression: {
        arg: {
          arg: {
            name: 'c',
            highlightType: 'highlighted',
            topLeftBadgeType: 'none',
            bottomRightBadgeType: 'callArg',
            type: 'variable',
            argPriorityAgg: [1, 2],
            funcPriorityAgg: [],
            emphasizePriority: true,
            bound: true
          },
          func: {
            name: 'b',
            highlightType: 'highlighted',
            topLeftBadgeType: 'none',
            bottomRightBadgeType: 'callArg',
            type: 'variable',
            argPriorityAgg: [],
            funcPriorityAgg: [2],
            emphasizePriority: false,
            bound: true
          },
          state: 'default',
          type: 'call',
          priority: 2
        },
        func: {
          arg: {
            name: 'a',
            highlightType: 'active',
            topLeftBadgeType: 'none',
            bottomRightBadgeType: 'none',
            type: 'variable',
            argPriorityAgg: [],
            funcPriorityAgg: [1],
            emphasizePriority: true,
            bound: false
          },
          body: {
            name: 'a',
            highlightType: 'active',
            topLeftBadgeType: 'none',
            bottomRightBadgeType: 'none',
            type: 'variable',
            argPriorityAgg: [],
            funcPriorityAgg: [],
            emphasizePriority: false,
            bound: true
          },
          type: 'function',
          meta: undefined
        },
        state: 'showCallArg',
        type: 'call',
        priority: 1
      },
      previouslyChangedExpressionState: 'showCallArg',
      matchExists: undefined,
      activePriority: 1,
      unaryJustExecuted: undefined,
      containerState: 'stepped'
    }
  ],
  speed: 1,
  showOnlyFocused: false,
  caption: undefined,
  hideControls: true,
  explanationsVisibility: 'hidden',
  hidePriorities: false,
  variableSize: 'lg',
  containerSize: 'xxs',
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
  showAllShowSteps: true
}

export default params