import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'

const Dwnj = () => (
  <ExpressionRunnerPrecomputed
    {...{
      expressionContainers: [
        {
          containerState: 'ready',
          previouslyChangedExpressionState: 'default',
          expression: {
            arg: {
              name: 'shorthandNumber',
              highlightType: 'default',
              topLeftBadgeType: 'none',
              bottomRightBadgeType: 'none',
              type: 'variable',
              argPriorityAgg: [2],
              funcPriorityAgg: [],
              emphasizePriority: false,
              bound: true,
              shorthandNumber: 2,
              shorthandUnary: undefined
            },
            func: {
              arg: {
                name: 'shorthandNumber',
                highlightType: 'default',
                topLeftBadgeType: 'none',
                bottomRightBadgeType: 'none',
                type: 'variable',
                argPriorityAgg: [1],
                funcPriorityAgg: [],
                emphasizePriority: false,
                bound: true,
                shorthandNumber: 0,
                shorthandUnary: undefined
              },
              func: {
                arg: {
                  name: 'a',
                  highlightType: 'default',
                  topLeftBadgeType: 'none',
                  bottomRightBadgeType: 'none',
                  type: 'variable',
                  argPriorityAgg: [],
                  funcPriorityAgg: [1, 2],
                  emphasizePriority: false,
                  bound: false
                },
                body: {
                  type: 'conditional',
                  state: 'default',
                  checkType: 'isZero',
                  condition: {
                    name: 'a',
                    highlightType: 'default',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'none',
                    type: 'variable',
                    argPriorityAgg: [],
                    funcPriorityAgg: [],
                    emphasizePriority: false,
                    bound: true
                  },
                  trueCase: {
                    arg: {
                      name: 'b',
                      highlightType: 'default',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'none',
                      type: 'variable',
                      argPriorityAgg: [],
                      funcPriorityAgg: [1],
                      emphasizePriority: false,
                      bound: false
                    },
                    body: {
                      name: 'b',
                      highlightType: 'default',
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
                  falseCase: {
                    name: 'shorthandNumber',
                    highlightType: 'default',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'none',
                    type: 'variable',
                    argPriorityAgg: [1],
                    funcPriorityAgg: [],
                    emphasizePriority: false,
                    bound: true,
                    shorthandNumber: 1,
                    shorthandUnary: undefined
                  },
                  priority: 1
                },
                type: 'function',
                meta: undefined
              },
              state: 'default',
              type: 'call',
              priority: 1
            },
            state: 'default',
            type: 'call',
            priority: 2
          },
          unaryJustExecuted: undefined
        },
        {
          containerState: 'stepped',
          previouslyChangedExpressionState: 'active',
          expression: {
            arg: {
              name: 'shorthandNumber',
              highlightType: 'default',
              topLeftBadgeType: 'none',
              bottomRightBadgeType: 'none',
              type: 'variable',
              argPriorityAgg: [2],
              funcPriorityAgg: [],
              emphasizePriority: false,
              bound: true,
              shorthandNumber: 2,
              shorthandUnary: undefined
            },
            func: {
              arg: {
                name: 'shorthandNumber',
                highlightType: 'active',
                topLeftBadgeType: 'none',
                bottomRightBadgeType: 'none',
                type: 'variable',
                argPriorityAgg: [1],
                funcPriorityAgg: [],
                emphasizePriority: true,
                bound: true,
                shorthandNumber: 0,
                shorthandUnary: undefined
              },
              func: {
                arg: {
                  name: 'a',
                  highlightType: 'active',
                  topLeftBadgeType: 'none',
                  bottomRightBadgeType: 'none',
                  type: 'variable',
                  argPriorityAgg: [],
                  funcPriorityAgg: [1, 2],
                  emphasizePriority: true,
                  bound: false
                },
                body: {
                  type: 'conditional',
                  state: 'default',
                  checkType: 'isZero',
                  condition: {
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
                  trueCase: {
                    arg: {
                      name: 'b',
                      highlightType: 'active',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'none',
                      type: 'variable',
                      argPriorityAgg: [],
                      funcPriorityAgg: [1],
                      emphasizePriority: false,
                      bound: false
                    },
                    body: {
                      name: 'b',
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
                  falseCase: {
                    name: 'shorthandNumber',
                    highlightType: 'active',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'none',
                    type: 'variable',
                    argPriorityAgg: [1],
                    funcPriorityAgg: [],
                    emphasizePriority: false,
                    bound: true,
                    shorthandNumber: 1,
                    shorthandUnary: undefined
                  },
                  priority: 1
                },
                type: 'function',
                meta: undefined
              },
              state: 'active',
              type: 'call',
              priority: 1
            },
            state: 'default',
            type: 'call',
            priority: 2
          },
          unaryJustExecuted: undefined,
          matchExists: undefined,
          activePriority: 1
        },
        {
          containerState: 'stepped',
          previouslyChangedExpressionState: 'showFuncUnbound',
          expression: {
            arg: {
              name: 'shorthandNumber',
              highlightType: 'default',
              topLeftBadgeType: 'none',
              bottomRightBadgeType: 'none',
              type: 'variable',
              argPriorityAgg: [2],
              funcPriorityAgg: [],
              emphasizePriority: false,
              bound: true,
              shorthandNumber: 2,
              shorthandUnary: undefined
            },
            func: {
              arg: {
                name: 'shorthandNumber',
                highlightType: 'active',
                topLeftBadgeType: 'none',
                bottomRightBadgeType: 'callArg',
                type: 'variable',
                argPriorityAgg: [1],
                funcPriorityAgg: [],
                emphasizePriority: true,
                bound: true,
                shorthandNumber: 0,
                shorthandUnary: undefined
              },
              func: {
                arg: {
                  name: 'a',
                  highlightType: 'active',
                  topLeftBadgeType: 'none',
                  bottomRightBadgeType: 'funcArg',
                  type: 'variable',
                  argPriorityAgg: [],
                  funcPriorityAgg: [1, 2],
                  emphasizePriority: true,
                  bound: false
                },
                body: {
                  type: 'conditional',
                  state: 'default',
                  checkType: 'isZero',
                  condition: {
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
                  trueCase: {
                    arg: {
                      name: 'b',
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
                      name: 'b',
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
                  falseCase: {
                    name: 'shorthandNumber',
                    highlightType: 'active',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'funcBound',
                    type: 'variable',
                    argPriorityAgg: [1],
                    funcPriorityAgg: [],
                    emphasizePriority: false,
                    bound: true,
                    shorthandNumber: 1,
                    shorthandUnary: undefined
                  },
                  priority: 1
                },
                type: 'function',
                meta: undefined
              },
              state: 'showFuncUnbound',
              type: 'call',
              priority: 1
            },
            state: 'default',
            type: 'call',
            priority: 2
          },
          unaryJustExecuted: undefined,
          matchExists: undefined,
          activePriority: 1
        },
        {
          containerState: 'stepped',
          previouslyChangedExpressionState: 'betaReducePreviewBefore',
          expression: {
            arg: {
              name: 'shorthandNumber',
              highlightType: 'default',
              topLeftBadgeType: 'none',
              bottomRightBadgeType: 'none',
              type: 'variable',
              argPriorityAgg: [2],
              funcPriorityAgg: [],
              emphasizePriority: false,
              bound: true,
              shorthandNumber: 2,
              shorthandUnary: undefined
            },
            func: {
              arg: {
                name: 'shorthandNumber',
                highlightType: 'active',
                topLeftBadgeType: 'none',
                bottomRightBadgeType: 'callArg',
                type: 'variable',
                argPriorityAgg: [1],
                funcPriorityAgg: [],
                emphasizePriority: true,
                bound: true,
                shorthandNumber: 0,
                shorthandUnary: undefined
              },
              func: {
                arg: {
                  name: 'a',
                  highlightType: 'highlighted',
                  topLeftBadgeType: 'match',
                  bottomRightBadgeType: 'funcArg',
                  type: 'variable',
                  argPriorityAgg: [],
                  funcPriorityAgg: [1, 2],
                  emphasizePriority: true,
                  bound: false
                },
                body: {
                  type: 'conditional',
                  state: 'default',
                  checkType: 'isZero',
                  condition: {
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
                  trueCase: {
                    arg: {
                      name: 'b',
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
                      name: 'b',
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
                  falseCase: {
                    name: 'shorthandNumber',
                    highlightType: 'highlighted',
                    topLeftBadgeType: 'unmatch',
                    bottomRightBadgeType: 'funcBound',
                    type: 'variable',
                    argPriorityAgg: [1],
                    funcPriorityAgg: [],
                    emphasizePriority: false,
                    bound: true,
                    shorthandNumber: 1,
                    shorthandUnary: undefined
                  },
                  priority: 1
                },
                type: 'function',
                meta: undefined
              },
              state: 'betaReducePreviewBefore',
              type: 'call',
              priority: 1
            },
            state: 'default',
            type: 'call',
            priority: 2
          },
          unaryJustExecuted: undefined,
          matchExists: true,
          activePriority: 1
        },
        {
          containerState: 'stepped',
          previouslyChangedExpressionState: 'betaReducePreviewAfter',
          expression: {
            arg: {
              name: 'shorthandNumber',
              highlightType: 'default',
              topLeftBadgeType: 'none',
              bottomRightBadgeType: 'none',
              type: 'variable',
              argPriorityAgg: [2],
              funcPriorityAgg: [],
              emphasizePriority: false,
              bound: true,
              shorthandNumber: 2,
              shorthandUnary: undefined
            },
            func: {
              arg: {
                name: 'shorthandNumber',
                highlightType: 'betaReduceCallArgHighlighted',
                topLeftBadgeType: 'none',
                bottomRightBadgeType: 'callArg',
                type: 'variable',
                argPriorityAgg: [1],
                funcPriorityAgg: [],
                emphasizePriority: true,
                bound: true,
                shorthandNumber: 0,
                shorthandUnary: undefined
              },
              func: {
                arg: {
                  name: 'a',
                  highlightType: 'active',
                  topLeftBadgeType: 'none',
                  bottomRightBadgeType: 'funcArg',
                  type: 'variable',
                  argPriorityAgg: [],
                  funcPriorityAgg: [1, 2],
                  emphasizePriority: true,
                  bound: false
                },
                body: {
                  type: 'conditional',
                  state: 'default',
                  checkType: 'isZero',
                  condition: {
                    name: 'shorthandNumber',
                    highlightType: 'highlighted',
                    topLeftBadgeType: 'betaReduced',
                    bottomRightBadgeType: 'funcBound',
                    type: 'variable',
                    argPriorityAgg: [],
                    funcPriorityAgg: [],
                    emphasizePriority: false,
                    bound: true,
                    shorthandNumber: 0,
                    shorthandUnary: undefined
                  },
                  trueCase: {
                    arg: {
                      name: 'b',
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
                      name: 'b',
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
                  falseCase: {
                    name: 'shorthandNumber',
                    highlightType: 'active',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'funcBound',
                    type: 'variable',
                    argPriorityAgg: [1],
                    funcPriorityAgg: [],
                    emphasizePriority: false,
                    bound: true,
                    shorthandNumber: 1,
                    shorthandUnary: undefined
                  },
                  priority: 1
                },
                type: 'function',
                meta: undefined
              },
              state: 'betaReducePreviewAfter',
              type: 'call',
              priority: 1
            },
            state: 'default',
            type: 'call',
            priority: 2
          },
          unaryJustExecuted: undefined,
          matchExists: undefined,
          activePriority: 1
        },
        {
          containerState: 'stepped',
          previouslyChangedExpressionState: 'betaReducePreviewCrossed',
          expression: {
            arg: {
              name: 'shorthandNumber',
              highlightType: 'default',
              topLeftBadgeType: 'none',
              bottomRightBadgeType: 'none',
              type: 'variable',
              argPriorityAgg: [2],
              funcPriorityAgg: [],
              emphasizePriority: false,
              bound: true,
              shorthandNumber: 2,
              shorthandUnary: undefined
            },
            func: {
              arg: {
                name: 'shorthandNumber',
                highlightType: 'removed',
                topLeftBadgeType: 'none',
                bottomRightBadgeType: 'callArg',
                type: 'variable',
                argPriorityAgg: [1],
                funcPriorityAgg: [],
                emphasizePriority: true,
                bound: true,
                shorthandNumber: 0,
                shorthandUnary: undefined
              },
              func: {
                arg: {
                  name: 'a',
                  highlightType: 'removed',
                  topLeftBadgeType: 'none',
                  bottomRightBadgeType: 'funcArg',
                  type: 'variable',
                  argPriorityAgg: [],
                  funcPriorityAgg: [1, 2],
                  emphasizePriority: true,
                  bound: false
                },
                body: {
                  type: 'conditional',
                  state: 'default',
                  checkType: 'isZero',
                  condition: {
                    name: 'shorthandNumber',
                    highlightType: 'active',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'funcBound',
                    type: 'variable',
                    argPriorityAgg: [],
                    funcPriorityAgg: [],
                    emphasizePriority: false,
                    bound: true,
                    shorthandNumber: 0,
                    shorthandUnary: undefined
                  },
                  trueCase: {
                    arg: {
                      name: 'b',
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
                      name: 'b',
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
                  falseCase: {
                    name: 'shorthandNumber',
                    highlightType: 'active',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'funcBound',
                    type: 'variable',
                    argPriorityAgg: [1],
                    funcPriorityAgg: [],
                    emphasizePriority: false,
                    bound: true,
                    shorthandNumber: 1,
                    shorthandUnary: undefined
                  },
                  priority: 1
                },
                type: 'function',
                meta: undefined
              },
              state: 'betaReducePreviewCrossed',
              type: 'call',
              priority: 1
            },
            state: 'default',
            type: 'call',
            priority: 2
          },
          unaryJustExecuted: undefined,
          matchExists: undefined,
          activePriority: 1
        },
        {
          containerState: 'ready',
          previouslyChangedExpressionState: 'default',
          expression: {
            arg: {
              name: 'shorthandNumber',
              highlightType: 'default',
              topLeftBadgeType: 'none',
              bottomRightBadgeType: 'none',
              type: 'variable',
              argPriorityAgg: [2],
              funcPriorityAgg: [],
              emphasizePriority: false,
              bound: true,
              shorthandNumber: 2,
              shorthandUnary: undefined
            },
            func: {
              type: 'conditional',
              state: 'default',
              checkType: 'isZero',
              condition: {
                name: 'shorthandNumber',
                highlightType: 'default',
                topLeftBadgeType: 'none',
                bottomRightBadgeType: 'none',
                type: 'variable',
                argPriorityAgg: [],
                funcPriorityAgg: [],
                emphasizePriority: false,
                bound: true,
                shorthandNumber: 0,
                shorthandUnary: undefined
              },
              trueCase: {
                arg: {
                  name: 'b',
                  highlightType: 'default',
                  topLeftBadgeType: 'none',
                  bottomRightBadgeType: 'none',
                  type: 'variable',
                  argPriorityAgg: [],
                  funcPriorityAgg: [1, 2],
                  emphasizePriority: false,
                  bound: false
                },
                body: {
                  name: 'b',
                  highlightType: 'default',
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
              falseCase: {
                name: 'shorthandNumber',
                highlightType: 'default',
                topLeftBadgeType: 'none',
                bottomRightBadgeType: 'none',
                type: 'variable',
                argPriorityAgg: [1],
                funcPriorityAgg: [],
                emphasizePriority: false,
                bound: true,
                shorthandNumber: 1,
                shorthandUnary: undefined
              },
              priority: 1
            },
            state: 'default',
            type: 'call',
            priority: 2
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
      showAllShowSteps: undefined
    }}
  />
)

export default Dwnj
