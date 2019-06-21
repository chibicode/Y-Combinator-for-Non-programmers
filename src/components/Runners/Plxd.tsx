import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'

const Plxd = () => (
  <ExpressionRunnerPrecomputed
    {...{
      expressionContainers: [
        {
          containerState: 'stepped',
          previouslyChangedExpressionState: 'needsAlphaConvert',
          expression: {
            arg: {
              name: 'b',
              highlightType: 'default',
              topLeftBadgeType: 'none',
              bottomRightBadgeType: 'none',
              type: 'variable',
              argPriorityAgg: [],
              funcPriorityAgg: [],
              emphasizePriority: false,
              bound: false
            },
            body: {
              arg: {
                name: 'c',
                highlightType: 'default',
                topLeftBadgeType: 'none',
                bottomRightBadgeType: 'none',
                type: 'variable',
                argPriorityAgg: [],
                funcPriorityAgg: [],
                emphasizePriority: false,
                bound: false
              },
              body: {
                arg: {
                  arg: {
                    name: 'f',
                    highlightType: 'default',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'none',
                    type: 'variable',
                    argPriorityAgg: [3],
                    funcPriorityAgg: [],
                    emphasizePriority: false,
                    bound: false
                  },
                  body: {
                    name: 'f',
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
                func: {
                  arg: {
                    arg: {
                      arg: {
                        name: 'f',
                        highlightType: 'active',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'callArg',
                        type: 'variable',
                        argPriorityAgg: [1, 2],
                        funcPriorityAgg: [],
                        emphasizePriority: true,
                        bound: false,
                        shorthandUnary: undefined
                      },
                      body: {
                        name: 'c',
                        highlightType: 'active',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'callArg',
                        type: 'variable',
                        argPriorityAgg: [],
                        funcPriorityAgg: [],
                        emphasizePriority: false,
                        bound: true,
                        shorthandUnary: undefined
                      },
                      type: 'function',
                      meta: undefined
                    },
                    func: {
                      arg: {
                        name: 'd',
                        highlightType: 'active',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'callArg',
                        type: 'variable',
                        argPriorityAgg: [],
                        funcPriorityAgg: [2],
                        emphasizePriority: false,
                        bound: false,
                        shorthandUnary: undefined
                      },
                      body: {
                        arg: {
                          name: 'e',
                          highlightType: 'highlighted',
                          topLeftBadgeType: 'conflict',
                          bottomRightBadgeType: 'callArg',
                          type: 'variable',
                          argPriorityAgg: [],
                          funcPriorityAgg: [],
                          emphasizePriority: false,
                          bound: false,
                          shorthandUnary: undefined
                        },
                        body: {
                          arg: {
                            arg: {
                              name: 'b',
                              highlightType: 'active',
                              topLeftBadgeType: 'none',
                              bottomRightBadgeType: 'callArg',
                              type: 'variable',
                              argPriorityAgg: [1, 2],
                              funcPriorityAgg: [],
                              emphasizePriority: false,
                              bound: true,
                              shorthandUnary: undefined
                            },
                            func: {
                              name: 'd',
                              highlightType: 'active',
                              topLeftBadgeType: 'none',
                              bottomRightBadgeType: 'callArg',
                              type: 'variable',
                              argPriorityAgg: [],
                              funcPriorityAgg: [2],
                              emphasizePriority: false,
                              bound: true,
                              shorthandUnary: undefined
                            },
                            state: 'default',
                            type: 'call',
                            priority: 2
                          },
                          func: {
                            name: 'e',
                            highlightType: 'highlighted',
                            topLeftBadgeType: 'conflict',
                            bottomRightBadgeType: 'callArg',
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
                      type: 'function',
                      meta: undefined
                    },
                    state: 'default',
                    type: 'call',
                    priority: 2
                  },
                  func: {
                    arg: {
                      name: 'd',
                      highlightType: 'active',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'funcArg',
                      type: 'variable',
                      argPriorityAgg: [],
                      funcPriorityAgg: [1, 3],
                      emphasizePriority: true,
                      bound: false,
                      shorthandUnary: undefined
                    },
                    body: {
                      arg: {
                        name: 'e',
                        highlightType: 'highlighted',
                        topLeftBadgeType: 'conflict',
                        bottomRightBadgeType: 'funcUnbound',
                        type: 'variable',
                        argPriorityAgg: [],
                        funcPriorityAgg: [],
                        emphasizePriority: false,
                        bound: false,
                        shorthandUnary: undefined
                      },
                      body: {
                        arg: {
                          arg: {
                            name: 'b',
                            highlightType: 'active',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'funcBound',
                            type: 'variable',
                            argPriorityAgg: [1, 2],
                            funcPriorityAgg: [],
                            emphasizePriority: false,
                            bound: true,
                            shorthandUnary: undefined
                          },
                          func: {
                            name: 'd',
                            highlightType: 'active',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'funcBound',
                            type: 'variable',
                            argPriorityAgg: [],
                            funcPriorityAgg: [2],
                            emphasizePriority: false,
                            bound: true,
                            shorthandUnary: undefined
                          },
                          state: 'default',
                          type: 'call',
                          priority: 2
                        },
                        func: {
                          name: 'e',
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
                    type: 'function',
                    meta: undefined
                  },
                  state: 'needsAlphaConvert',
                  type: 'call',
                  priority: 1
                },
                state: 'default',
                type: 'call',
                priority: 3
              },
              type: 'function',
              meta: undefined
            },
            type: 'function',
            meta: undefined
          },
          unaryJustExecuted: undefined,
          matchExists: undefined,
          activePriority: 1
        },
        {
          containerState: 'stepped',
          previouslyChangedExpressionState: 'alphaConvertDone',
          expression: {
            arg: {
              name: 'b',
              highlightType: 'default',
              topLeftBadgeType: 'none',
              bottomRightBadgeType: 'none',
              type: 'variable',
              argPriorityAgg: [],
              funcPriorityAgg: [],
              emphasizePriority: false,
              bound: false
            },
            body: {
              arg: {
                name: 'c',
                highlightType: 'default',
                topLeftBadgeType: 'none',
                bottomRightBadgeType: 'none',
                type: 'variable',
                argPriorityAgg: [],
                funcPriorityAgg: [],
                emphasizePriority: false,
                bound: false
              },
              body: {
                arg: {
                  arg: {
                    name: 'f',
                    highlightType: 'default',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'none',
                    type: 'variable',
                    argPriorityAgg: [3],
                    funcPriorityAgg: [],
                    emphasizePriority: false,
                    bound: false
                  },
                  body: {
                    name: 'f',
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
                func: {
                  arg: {
                    arg: {
                      arg: {
                        name: 'f',
                        highlightType: 'active',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'callArg',
                        type: 'variable',
                        argPriorityAgg: [1, 2],
                        funcPriorityAgg: [],
                        emphasizePriority: true,
                        bound: false,
                        shorthandUnary: undefined
                      },
                      body: {
                        name: 'c',
                        highlightType: 'active',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'callArg',
                        type: 'variable',
                        argPriorityAgg: [],
                        funcPriorityAgg: [],
                        emphasizePriority: false,
                        bound: true,
                        shorthandUnary: undefined
                      },
                      type: 'function',
                      meta: undefined
                    },
                    func: {
                      arg: {
                        name: 'd',
                        highlightType: 'active',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'callArg',
                        type: 'variable',
                        argPriorityAgg: [],
                        funcPriorityAgg: [2],
                        emphasizePriority: false,
                        bound: false,
                        shorthandUnary: undefined
                      },
                      body: {
                        arg: {
                          name: 'e',
                          highlightType: 'active',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'callArg',
                          type: 'variable',
                          argPriorityAgg: [],
                          funcPriorityAgg: [],
                          emphasizePriority: false,
                          bound: false,
                          shorthandUnary: undefined
                        },
                        body: {
                          arg: {
                            arg: {
                              name: 'b',
                              highlightType: 'active',
                              topLeftBadgeType: 'none',
                              bottomRightBadgeType: 'callArg',
                              type: 'variable',
                              argPriorityAgg: [1, 2],
                              funcPriorityAgg: [],
                              emphasizePriority: false,
                              bound: true,
                              shorthandUnary: undefined
                            },
                            func: {
                              name: 'd',
                              highlightType: 'active',
                              topLeftBadgeType: 'none',
                              bottomRightBadgeType: 'callArg',
                              type: 'variable',
                              argPriorityAgg: [],
                              funcPriorityAgg: [2],
                              emphasizePriority: false,
                              bound: true,
                              shorthandUnary: undefined
                            },
                            state: 'default',
                            type: 'call',
                            priority: 2
                          },
                          func: {
                            name: 'e',
                            highlightType: 'active',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'callArg',
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
                      type: 'function',
                      meta: undefined
                    },
                    state: 'default',
                    type: 'call',
                    priority: 2
                  },
                  func: {
                    arg: {
                      name: 'd',
                      highlightType: 'active',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'funcArg',
                      type: 'variable',
                      argPriorityAgg: [],
                      funcPriorityAgg: [1, 3],
                      emphasizePriority: true,
                      bound: false,
                      shorthandUnary: undefined
                    },
                    body: {
                      arg: {
                        name: 'a',
                        highlightType: 'conflictResolvedHighlighted',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'funcUnbound',
                        type: 'variable',
                        argPriorityAgg: [],
                        funcPriorityAgg: [],
                        emphasizePriority: false,
                        bound: false,
                        shorthandUnary: undefined
                      },
                      body: {
                        arg: {
                          arg: {
                            name: 'b',
                            highlightType: 'active',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'funcBound',
                            type: 'variable',
                            argPriorityAgg: [1, 2],
                            funcPriorityAgg: [],
                            emphasizePriority: false,
                            bound: true,
                            shorthandUnary: undefined
                          },
                          func: {
                            name: 'd',
                            highlightType: 'active',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'funcBound',
                            type: 'variable',
                            argPriorityAgg: [],
                            funcPriorityAgg: [2],
                            emphasizePriority: false,
                            bound: true,
                            shorthandUnary: undefined
                          },
                          state: 'default',
                          type: 'call',
                          priority: 2
                        },
                        func: {
                          name: 'a',
                          highlightType: 'conflictResolvedHighlighted',
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
                    type: 'function',
                    meta: undefined
                  },
                  state: 'alphaConvertDone',
                  type: 'call',
                  priority: 1
                },
                state: 'default',
                type: 'call',
                priority: 3
              },
              type: 'function',
              meta: undefined
            },
            type: 'function',
            meta: undefined
          },
          unaryJustExecuted: undefined,
          matchExists: undefined,
          activePriority: 1
        }
      ],
      speed: 1,
      showOnlyFocused: false,
      caption: undefined,
      hideControls: false,
      explanationsVisibility: 'visible',
      hidePriorities: false,
      variableSize: 'md',
      containerSize: 'xs',
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
    }}
  />
)

export default Plxd
