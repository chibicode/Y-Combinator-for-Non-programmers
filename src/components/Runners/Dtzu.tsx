import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'

const Dtzu = () => (
  <ExpressionRunnerPrecomputed
    {...{
      expressionContainers: [
        {
          expression: {
            arg: {
              name: 'a',
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
                name: 'b',
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
                arg: {
                  name: 'b',
                  highlightType: 'highlighted',
                  topLeftBadgeType: 'match',
                  bottomRightBadgeType: 'funcBound',
                  type: 'variable',
                  argPriorityAgg: [1],
                  funcPriorityAgg: [],
                  emphasizePriority: false,
                  bound: true
                },
                func: {
                  arg: {
                    name: 'c',
                    highlightType: 'active',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'funcUnbound',
                    type: 'variable',
                    argPriorityAgg: [],
                    funcPriorityAgg: [1],
                    emphasizePriority: false,
                    bound: false
                  },
                  body: {
                    name: 'c',
                    highlightType: 'highlighted',
                    topLeftBadgeType: 'unmatch',
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
                state: 'default',
                type: 'call',
                priority: 1
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
      showAllShowSteps: undefined
    }}
  />
)

export default Dtzu
