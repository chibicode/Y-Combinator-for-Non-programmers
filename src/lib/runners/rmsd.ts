import { ExpressionRunnerPrecomputedProps } from 'src/components/ExpressionRunnerPrecomputed'

const params: ExpressionRunnerPrecomputedProps = {
  expressionContainers: [
    {
      expression: {
        arg: {
          name: 'c',
          highlightType: 'active',
          topLeftBadgeType: 'none',
          bottomRightBadgeType: 'none',
          type: 'variable',
          argPriorityAgg: [1],
          funcPriorityAgg: [],
          emphasizePriority: true,
          bound: true
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
            arg: {
              name: 'b',
              highlightType: 'active',
              topLeftBadgeType: 'none',
              bottomRightBadgeType: 'none',
              type: 'variable',
              argPriorityAgg: [],
              funcPriorityAgg: [],
              emphasizePriority: false,
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
          type: 'function',
          meta: undefined
        },
        state: 'active',
        type: 'call',
        priority: 1
      },
      previouslyChangedExpressionState: 'active',
      matchExists: undefined,
      activePriority: 1,
      unaryJustExecuted: undefined,
      containerState: 'stepped'
    },
    {
      expression: {
        arg: {
          name: 'c',
          highlightType: 'active',
          topLeftBadgeType: 'none',
          bottomRightBadgeType: 'callArg',
          type: 'variable',
          argPriorityAgg: [1],
          funcPriorityAgg: [],
          emphasizePriority: true,
          bound: true
        },
        func: {
          arg: {
            name: 'a',
            highlightType: 'active',
            topLeftBadgeType: 'none',
            bottomRightBadgeType: 'funcArg',
            type: 'variable',
            argPriorityAgg: [],
            funcPriorityAgg: [1],
            emphasizePriority: true,
            bound: false
          },
          body: {
            arg: {
              name: 'b',
              highlightType: 'active',
              topLeftBadgeType: 'none',
              bottomRightBadgeType: 'funcUnbound',
              type: 'variable',
              argPriorityAgg: [],
              funcPriorityAgg: [],
              emphasizePriority: false,
              bound: false
            },
            body: {
              name: 'a',
              highlightType: 'active',
              topLeftBadgeType: 'none',
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
          type: 'function',
          meta: undefined
        },
        state: 'showFuncUnbound',
        type: 'call',
        priority: 1
      },
      previouslyChangedExpressionState: 'showFuncUnbound',
      matchExists: undefined,
      activePriority: 1,
      unaryJustExecuted: undefined,
      containerState: 'stepped'
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
  hidePlayButton: true,
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