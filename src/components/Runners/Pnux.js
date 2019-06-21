import React from 'react'
import ExpressionRunnerPrecomputed from '../ExpressionRunnerPrecomputed'

const Pnux = () => (
  <ExpressionRunnerPrecomputed
    {...{
      expressionContainers: [
        {
          containerState: 'ready',
          previouslyChangedExpressionState: 'default',
          expression: {
            arg: {
              arg: {
                arg: {
                  name: 'shorthandNumber',
                  highlightType: 'default',
                  topLeftBadgeType: 'none',
                  bottomRightBadgeType: 'none',
                  type: 'variable',
                  argPriorityAgg: [1, 2, 4],
                  funcPriorityAgg: [],
                  emphasizePriority: false,
                  bound: true,
                  shorthandNumber: 2,
                  shorthandUnary: undefined
                },
                func: {
                  arg: {
                    arg: {
                      name: 'b',
                      highlightType: 'default',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'none',
                      type: 'variable',
                      argPriorityAgg: [3],
                      funcPriorityAgg: [],
                      emphasizePriority: false,
                      bound: false,
                      shorthandUnary: undefined
                    },
                    body: {
                      arg: {
                        arg: {
                          name: 'b',
                          highlightType: 'default',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'none',
                          type: 'variable',
                          argPriorityAgg: [1, 2],
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
                        arg: {
                          name: 's',
                          highlightType: 'default',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'none',
                          type: 'variable',
                          argPriorityAgg: [],
                          funcPriorityAgg: [1],
                          emphasizePriority: false,
                          bound: false,
                          shorthandUnary: undefined
                        },
                        body: {
                          arg: {
                            name: 't',
                            highlightType: 'default',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'none',
                            type: 'variable',
                            argPriorityAgg: [],
                            funcPriorityAgg: [],
                            emphasizePriority: false,
                            bound: false,
                            shorthandUnary: undefined
                          },
                          body: {
                            type: 'conditional',
                            state: 'default',
                            checkType: 'isZero',
                            condition: {
                              name: 't',
                              highlightType: 'default',
                              topLeftBadgeType: 'none',
                              bottomRightBadgeType: 'none',
                              type: 'variable',
                              argPriorityAgg: [],
                              funcPriorityAgg: [],
                              emphasizePriority: false,
                              bound: true,
                              shorthandUnary: 'pred'
                            },
                            trueCase: {
                              name: 'shorthandNumber',
                              highlightType: 'default',
                              topLeftBadgeType: 'none',
                              bottomRightBadgeType: 'none',
                              type: 'variable',
                              argPriorityAgg: [],
                              funcPriorityAgg: [1],
                              emphasizePriority: false,
                              bound: true,
                              shorthandNumber: 1,
                              shorthandUnary: undefined
                            },
                            falseCase: {
                              arg: {
                                arg: {
                                  arg: {
                                    name: 't',
                                    highlightType: 'default',
                                    topLeftBadgeType: 'none',
                                    bottomRightBadgeType: 'none',
                                    type: 'variable',
                                    argPriorityAgg: [1, 2, 3, 4],
                                    funcPriorityAgg: [],
                                    emphasizePriority: false,
                                    bound: true,
                                    shorthandUnary: 'pred'
                                  },
                                  func: {
                                    name: 's',
                                    highlightType: 'default',
                                    topLeftBadgeType: 'none',
                                    bottomRightBadgeType: 'none',
                                    type: 'variable',
                                    argPriorityAgg: [],
                                    funcPriorityAgg: [4],
                                    emphasizePriority: false,
                                    bound: true,
                                    shorthandUnary: undefined
                                  },
                                  state: 'default',
                                  type: 'call',
                                  priority: 4
                                },
                                func: {
                                  name: 'shorthandBinary',
                                  highlightType: 'default',
                                  topLeftBadgeType: 'none',
                                  bottomRightBadgeType: 'none',
                                  type: 'variable',
                                  argPriorityAgg: [],
                                  funcPriorityAgg: [3],
                                  emphasizePriority: false,
                                  bound: true,
                                  shorthandBinary: 'mult',
                                  shorthandUnary: undefined
                                },
                                state: 'default',
                                type: 'call',
                                priority: 3
                              },
                              func: {
                                name: 't',
                                highlightType: 'default',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'none',
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
                      priority: 1
                    },
                    type: 'function',
                    meta: undefined
                  },
                  func: {
                    arg: {
                      name: 'b',
                      highlightType: 'default',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'none',
                      type: 'variable',
                      argPriorityAgg: [],
                      funcPriorityAgg: [3, 4],
                      emphasizePriority: false,
                      bound: false,
                      shorthandUnary: undefined
                    },
                    body: {
                      arg: {
                        arg: {
                          name: 'b',
                          highlightType: 'default',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'none',
                          type: 'variable',
                          argPriorityAgg: [1, 2],
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
                        arg: {
                          name: 's',
                          highlightType: 'default',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'none',
                          type: 'variable',
                          argPriorityAgg: [],
                          funcPriorityAgg: [1],
                          emphasizePriority: false,
                          bound: false,
                          shorthandUnary: undefined
                        },
                        body: {
                          arg: {
                            name: 't',
                            highlightType: 'default',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'none',
                            type: 'variable',
                            argPriorityAgg: [],
                            funcPriorityAgg: [],
                            emphasizePriority: false,
                            bound: false,
                            shorthandUnary: undefined
                          },
                          body: {
                            type: 'conditional',
                            state: 'default',
                            checkType: 'isZero',
                            condition: {
                              name: 't',
                              highlightType: 'default',
                              topLeftBadgeType: 'none',
                              bottomRightBadgeType: 'none',
                              type: 'variable',
                              argPriorityAgg: [],
                              funcPriorityAgg: [],
                              emphasizePriority: false,
                              bound: true,
                              shorthandUnary: 'pred'
                            },
                            trueCase: {
                              name: 'shorthandNumber',
                              highlightType: 'default',
                              topLeftBadgeType: 'none',
                              bottomRightBadgeType: 'none',
                              type: 'variable',
                              argPriorityAgg: [],
                              funcPriorityAgg: [1],
                              emphasizePriority: false,
                              bound: true,
                              shorthandNumber: 1,
                              shorthandUnary: undefined
                            },
                            falseCase: {
                              arg: {
                                arg: {
                                  arg: {
                                    name: 't',
                                    highlightType: 'default',
                                    topLeftBadgeType: 'none',
                                    bottomRightBadgeType: 'none',
                                    type: 'variable',
                                    argPriorityAgg: [1, 2, 3, 4],
                                    funcPriorityAgg: [],
                                    emphasizePriority: false,
                                    bound: true,
                                    shorthandUnary: 'pred'
                                  },
                                  func: {
                                    name: 's',
                                    highlightType: 'default',
                                    topLeftBadgeType: 'none',
                                    bottomRightBadgeType: 'none',
                                    type: 'variable',
                                    argPriorityAgg: [],
                                    funcPriorityAgg: [4],
                                    emphasizePriority: false,
                                    bound: true,
                                    shorthandUnary: undefined
                                  },
                                  state: 'default',
                                  type: 'call',
                                  priority: 4
                                },
                                func: {
                                  name: 'shorthandBinary',
                                  highlightType: 'default',
                                  topLeftBadgeType: 'none',
                                  bottomRightBadgeType: 'none',
                                  type: 'variable',
                                  argPriorityAgg: [],
                                  funcPriorityAgg: [3],
                                  emphasizePriority: false,
                                  bound: true,
                                  shorthandBinary: 'mult',
                                  shorthandUnary: undefined
                                },
                                state: 'default',
                                type: 'call',
                                priority: 3
                              },
                              func: {
                                name: 't',
                                highlightType: 'default',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'none',
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
                      priority: 1
                    },
                    type: 'function',
                    meta: undefined
                  },
                  state: 'default',
                  type: 'call',
                  priority: 3
                },
                state: 'default',
                type: 'call',
                priority: 4
              },
              func: {
                name: 'shorthandBinary',
                highlightType: 'default',
                topLeftBadgeType: 'none',
                bottomRightBadgeType: 'none',
                type: 'variable',
                argPriorityAgg: [],
                funcPriorityAgg: [2],
                emphasizePriority: false,
                bound: true,
                shorthandBinary: 'mult',
                shorthandUnary: undefined
              },
              state: 'default',
              type: 'call',
              priority: 2
            },
            func: {
              name: 'shorthandNumber',
              highlightType: 'default',
              topLeftBadgeType: 'none',
              bottomRightBadgeType: 'none',
              type: 'variable',
              argPriorityAgg: [],
              funcPriorityAgg: [1],
              emphasizePriority: false,
              bound: true,
              shorthandNumber: 3,
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
      hideControls: true,
      explanationsVisibility: 'hidden',
      hidePriorities: false,
      variableSize: 'xxs',
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
      highlightFunctions: true,
      superFastForward: false,
      highlightNumber: undefined,
      showAllShowSteps: undefined
    }}
  />
)

export default Pnux
