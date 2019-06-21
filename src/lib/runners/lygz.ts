import { ExpressionRunnerPrecomputedProps } from 'src/components/ExpressionRunnerPrecomputed'

const params: ExpressionRunnerPrecomputedProps = {
  expressionContainers: [
    {
      expression: {
        arg: {
          arg: {
            name: 'e',
            highlightType: 'active',
            topLeftBadgeType: 'none',
            bottomRightBadgeType: 'callArg',
            type: 'variable',
            argPriorityAgg: [1],
            funcPriorityAgg: [],
            emphasizePriority: true,
            bound: false
          },
          body: {
            name: 'f',
            highlightType: 'active',
            topLeftBadgeType: 'none',
            bottomRightBadgeType: 'callArg',
            type: 'variable',
            argPriorityAgg: [],
            funcPriorityAgg: [],
            emphasizePriority: false,
            bound: true
          },
          type: 'function',
          meta: undefined
        },
        func: {
          arg: {
            name: 'd',
            highlightType: 'highlighted',
            topLeftBadgeType: 'match',
            bottomRightBadgeType: 'funcArg',
            type: 'variable',
            argPriorityAgg: [],
            funcPriorityAgg: [1],
            emphasizePriority: true,
            bound: false
          },
          body: {
            name: 'd',
            highlightType: 'highlighted',
            topLeftBadgeType: 'match',
            bottomRightBadgeType: 'funcBound',
            type: 'variable',
            argPriorityAgg: [],
            funcPriorityAgg: [],
            emphasizePriority: false,
            bound: true
          },
          type: 'function',
          meta: undefined
        },
        state: 'betaReducePreviewBefore',
        type: 'call',
        priority: 1
      },
      previouslyChangedExpressionState: 'betaReducePreviewBefore',
      matchExists: true,
      activePriority: 1,
      unaryJustExecuted: undefined,
      containerState: 'stepped'
    }
  ],
  speed: 1,
  showOnlyFocused: false,
  caption: undefined,
  hideControls: true,
  explanationsVisibility: 'visible',
  hidePriorities: true,
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
  showAllShowSteps: undefined
}

export default params
