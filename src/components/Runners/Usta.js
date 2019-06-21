import React from 'react'
import ExpressionRunnerPrecomputed from '../ExpressionRunnerPrecomputed'

const Usta = () => (
  <ExpressionRunnerPrecomputed
    {...{
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
        },
        {
          expression: {
            arg: {
              arg: {
                name: 'c',
                highlightType: 'active',
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
                highlightType: 'active',
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
                highlightType: 'highlighted',
                topLeftBadgeType: 'none',
                bottomRightBadgeType: 'funcArg',
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
            state: 'showFuncArg',
            type: 'call',
            priority: 1
          },
          previouslyChangedExpressionState: 'showFuncArg',
          matchExists: undefined,
          activePriority: 1,
          unaryJustExecuted: undefined,
          containerState: 'stepped'
        },
        {
          expression: {
            arg: {
              arg: {
                name: 'c',
                highlightType: 'active',
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
                highlightType: 'active',
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
                bottomRightBadgeType: 'funcArg',
                type: 'variable',
                argPriorityAgg: [],
                funcPriorityAgg: [1],
                emphasizePriority: true,
                bound: false
              },
              body: {
                name: 'a',
                highlightType: 'highlighted',
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
            state: 'showFuncBound',
            type: 'call',
            priority: 1
          },
          previouslyChangedExpressionState: 'showFuncBound',
          matchExists: undefined,
          activePriority: 1,
          unaryJustExecuted: undefined,
          containerState: 'stepped'
        },
        {
          expression: {
            arg: {
              arg: {
                name: 'c',
                highlightType: 'active',
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
                highlightType: 'active',
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
                name: 'a',
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
        },
        {
          expression: {
            arg: {
              arg: {
                name: 'c',
                highlightType: 'betaReduceCallArgHighlighted',
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
                highlightType: 'betaReduceCallArgHighlighted',
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
                bottomRightBadgeType: 'funcArg',
                type: 'variable',
                argPriorityAgg: [],
                funcPriorityAgg: [1],
                emphasizePriority: true,
                bound: false
              },
              body: {
                arg: {
                  name: 'c',
                  highlightType: 'highlighted',
                  topLeftBadgeType: 'betaReduced',
                  bottomRightBadgeType: 'funcBound',
                  type: 'variable',
                  argPriorityAgg: [1],
                  funcPriorityAgg: [],
                  emphasizePriority: false,
                  bound: true,
                  shorthandUnary: undefined
                },
                func: {
                  name: 'b',
                  highlightType: 'highlighted',
                  topLeftBadgeType: 'betaReduced',
                  bottomRightBadgeType: 'funcBound',
                  type: 'variable',
                  argPriorityAgg: [],
                  funcPriorityAgg: [1],
                  emphasizePriority: false,
                  bound: true,
                  shorthandUnary: undefined
                },
                state: 'default',
                type: 'call',
                priority: 1
              },
              type: 'function',
              meta: undefined
            },
            state: 'betaReducePreviewAfter',
            type: 'call',
            priority: 1
          },
          previouslyChangedExpressionState: 'betaReducePreviewAfter',
          matchExists: undefined,
          activePriority: 1,
          unaryJustExecuted: undefined,
          containerState: 'stepped'
        },
        {
          expression: {
            arg: {
              arg: {
                name: 'c',
                highlightType: 'removed',
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
                highlightType: 'removed',
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
                highlightType: 'removed',
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
                  name: 'c',
                  highlightType: 'active',
                  topLeftBadgeType: 'none',
                  bottomRightBadgeType: 'funcBound',
                  type: 'variable',
                  argPriorityAgg: [1],
                  funcPriorityAgg: [],
                  emphasizePriority: false,
                  bound: true,
                  shorthandUnary: undefined
                },
                func: {
                  name: 'b',
                  highlightType: 'active',
                  topLeftBadgeType: 'none',
                  bottomRightBadgeType: 'funcBound',
                  type: 'variable',
                  argPriorityAgg: [],
                  funcPriorityAgg: [1],
                  emphasizePriority: false,
                  bound: true,
                  shorthandUnary: undefined
                },
                state: 'default',
                type: 'call',
                priority: 1
              },
              type: 'function',
              meta: undefined
            },
            state: 'betaReducePreviewCrossed',
            type: 'call',
            priority: 1
          },
          previouslyChangedExpressionState: 'betaReducePreviewCrossed',
          matchExists: undefined,
          activePriority: 1,
          unaryJustExecuted: undefined,
          containerState: 'stepped'
        },
        {
          containerState: 'done',
          previouslyChangedExpressionState: 'default',
          expression: {
            arg: {
              name: 'c',
              highlightType: 'default',
              topLeftBadgeType: 'none',
              bottomRightBadgeType: 'none',
              type: 'variable',
              argPriorityAgg: [1],
              funcPriorityAgg: [],
              emphasizePriority: false,
              bound: true,
              shorthandUnary: undefined
            },
            func: {
              name: 'b',
              highlightType: 'default',
              topLeftBadgeType: 'none',
              bottomRightBadgeType: 'none',
              type: 'variable',
              argPriorityAgg: [],
              funcPriorityAgg: [1],
              emphasizePriority: false,
              bound: true,
              shorthandUnary: undefined
            },
            state: 'default',
            type: 'call',
            priority: 1
          },
          unaryJustExecuted: undefined
        }
      ],
      speed: 1,
      showOnlyFocused: false,
      caption: undefined,
      hideControls: false,
      explanationsVisibility: 'hiddenInitialPausedOnly',
      hidePriorities: false,
      variableSize: 'lg',
      containerSize: 'xxs',
      hidePlayButton: false,
      hideBottomRightBadges: false,
      skipToTheEnd: false,
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
      showAllShowSteps: true
    }}
  />
)

export default Usta
