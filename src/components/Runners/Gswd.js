import React from 'react'
import ExpressionRunnerPrecomputed from '../ExpressionRunnerPrecomputed'

const Gswd = () => (
  <ExpressionRunnerPrecomputed
    {...{
      expressionContainers: [
        {
          containerState: 'stepped',
          previouslyChangedExpressionState: 'conditionActive',
          expression: {
            arg: {
              arg: {
                arg: {
                  arg: {
                    type: 'conditional',
                    state: 'conditionActive',
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
                      name: 'shorthandNumber',
                      highlightType: 'default',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'none',
                      type: 'variable',
                      argPriorityAgg: [],
                      funcPriorityAgg: [5],
                      emphasizePriority: false,
                      bound: true,
                      shorthandNumber: 1,
                      shorthandUnary: undefined
                    },
                    falseCase: {
                      arg: {
                        arg: {
                          arg: {
                            name: 'shorthandNumber',
                            highlightType: 'default',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'none',
                            type: 'variable',
                            argPriorityAgg: [1, 2, 3, 4, 5, 6, 7, 9],
                            funcPriorityAgg: [],
                            emphasizePriority: false,
                            bound: true,
                            shorthandNumber: 0,
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
                                argPriorityAgg: [8],
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
                                funcPriorityAgg: [8, 9],
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
                            priority: 8
                          },
                          state: 'default',
                          type: 'call',
                          priority: 9
                        },
                        func: {
                          name: 'shorthandBinary',
                          highlightType: 'default',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'none',
                          type: 'variable',
                          argPriorityAgg: [],
                          funcPriorityAgg: [7],
                          emphasizePriority: false,
                          bound: true,
                          shorthandBinary: 'mult',
                          shorthandUnary: undefined
                        },
                        state: 'default',
                        type: 'call',
                        priority: 7
                      },
                      func: {
                        name: 'shorthandNumber',
                        highlightType: 'default',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'none',
                        type: 'variable',
                        argPriorityAgg: [],
                        funcPriorityAgg: [6],
                        emphasizePriority: false,
                        bound: true,
                        shorthandNumber: 1,
                        shorthandUnary: undefined
                      },
                      state: 'default',
                      type: 'call',
                      priority: 6
                    },
                    priority: 5
                  },
                  func: {
                    name: 'shorthandBinary',
                    highlightType: 'default',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'none',
                    type: 'variable',
                    argPriorityAgg: [],
                    funcPriorityAgg: [4],
                    emphasizePriority: false,
                    bound: true,
                    shorthandBinary: 'mult',
                    shorthandUnary: undefined
                  },
                  state: 'default',
                  type: 'call',
                  priority: 4
                },
                func: {
                  name: 'shorthandNumber',
                  highlightType: 'default',
                  topLeftBadgeType: 'none',
                  bottomRightBadgeType: 'none',
                  type: 'variable',
                  argPriorityAgg: [],
                  funcPriorityAgg: [3],
                  emphasizePriority: false,
                  bound: true,
                  shorthandNumber: 2,
                  shorthandUnary: undefined
                },
                state: 'default',
                type: 'call',
                priority: 3
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
          unaryJustExecuted: undefined,
          matchExists: undefined,
          activePriority: 5
        },
        {
          containerState: 'stepped',
          previouslyChangedExpressionState: 'trueCaseActive',
          expression: {
            arg: {
              arg: {
                arg: {
                  arg: {
                    type: 'conditional',
                    state: 'trueCaseActive',
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
                      name: 'shorthandNumber',
                      highlightType: 'default',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'none',
                      type: 'variable',
                      argPriorityAgg: [],
                      funcPriorityAgg: [5],
                      emphasizePriority: false,
                      bound: true,
                      shorthandNumber: 1,
                      shorthandUnary: undefined
                    },
                    falseCase: {
                      arg: {
                        arg: {
                          arg: {
                            name: 'shorthandNumber',
                            highlightType: 'default',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'none',
                            type: 'variable',
                            argPriorityAgg: [1, 2, 3, 4, 5, 6, 7, 9],
                            funcPriorityAgg: [],
                            emphasizePriority: false,
                            bound: true,
                            shorthandNumber: 0,
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
                                argPriorityAgg: [8],
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
                                funcPriorityAgg: [8, 9],
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
                            priority: 8
                          },
                          state: 'default',
                          type: 'call',
                          priority: 9
                        },
                        func: {
                          name: 'shorthandBinary',
                          highlightType: 'default',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'none',
                          type: 'variable',
                          argPriorityAgg: [],
                          funcPriorityAgg: [7],
                          emphasizePriority: false,
                          bound: true,
                          shorthandBinary: 'mult',
                          shorthandUnary: undefined
                        },
                        state: 'default',
                        type: 'call',
                        priority: 7
                      },
                      func: {
                        name: 'shorthandNumber',
                        highlightType: 'default',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'none',
                        type: 'variable',
                        argPriorityAgg: [],
                        funcPriorityAgg: [6],
                        emphasizePriority: false,
                        bound: true,
                        shorthandNumber: 1,
                        shorthandUnary: undefined
                      },
                      state: 'default',
                      type: 'call',
                      priority: 6
                    },
                    priority: 5
                  },
                  func: {
                    name: 'shorthandBinary',
                    highlightType: 'default',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'none',
                    type: 'variable',
                    argPriorityAgg: [],
                    funcPriorityAgg: [4],
                    emphasizePriority: false,
                    bound: true,
                    shorthandBinary: 'mult',
                    shorthandUnary: undefined
                  },
                  state: 'default',
                  type: 'call',
                  priority: 4
                },
                func: {
                  name: 'shorthandNumber',
                  highlightType: 'default',
                  topLeftBadgeType: 'none',
                  bottomRightBadgeType: 'none',
                  type: 'variable',
                  argPriorityAgg: [],
                  funcPriorityAgg: [3],
                  emphasizePriority: false,
                  bound: true,
                  shorthandNumber: 2,
                  shorthandUnary: undefined
                },
                state: 'default',
                type: 'call',
                priority: 3
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
          unaryJustExecuted: undefined,
          matchExists: undefined,
          activePriority: 5
        },
        {
          containerState: 'stepped',
          previouslyChangedExpressionState: 'trueCaseOnly',
          expression: {
            arg: {
              arg: {
                arg: {
                  arg: {
                    type: 'conditional',
                    state: 'trueCaseOnly',
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
                      name: 'shorthandNumber',
                      highlightType: 'default',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'none',
                      type: 'variable',
                      argPriorityAgg: [],
                      funcPriorityAgg: [5],
                      emphasizePriority: false,
                      bound: true,
                      shorthandNumber: 1,
                      shorthandUnary: undefined
                    },
                    falseCase: {
                      arg: {
                        arg: {
                          arg: {
                            name: 'shorthandNumber',
                            highlightType: 'default',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'none',
                            type: 'variable',
                            argPriorityAgg: [1, 2, 3, 4, 5, 6, 7, 9],
                            funcPriorityAgg: [],
                            emphasizePriority: false,
                            bound: true,
                            shorthandNumber: 0,
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
                                argPriorityAgg: [8],
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
                                funcPriorityAgg: [8, 9],
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
                            priority: 8
                          },
                          state: 'default',
                          type: 'call',
                          priority: 9
                        },
                        func: {
                          name: 'shorthandBinary',
                          highlightType: 'default',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'none',
                          type: 'variable',
                          argPriorityAgg: [],
                          funcPriorityAgg: [7],
                          emphasizePriority: false,
                          bound: true,
                          shorthandBinary: 'mult',
                          shorthandUnary: undefined
                        },
                        state: 'default',
                        type: 'call',
                        priority: 7
                      },
                      func: {
                        name: 'shorthandNumber',
                        highlightType: 'default',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'none',
                        type: 'variable',
                        argPriorityAgg: [],
                        funcPriorityAgg: [6],
                        emphasizePriority: false,
                        bound: true,
                        shorthandNumber: 1,
                        shorthandUnary: undefined
                      },
                      state: 'default',
                      type: 'call',
                      priority: 6
                    },
                    priority: 5
                  },
                  func: {
                    name: 'shorthandBinary',
                    highlightType: 'default',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'none',
                    type: 'variable',
                    argPriorityAgg: [],
                    funcPriorityAgg: [4],
                    emphasizePriority: false,
                    bound: true,
                    shorthandBinary: 'mult',
                    shorthandUnary: undefined
                  },
                  state: 'default',
                  type: 'call',
                  priority: 4
                },
                func: {
                  name: 'shorthandNumber',
                  highlightType: 'default',
                  topLeftBadgeType: 'none',
                  bottomRightBadgeType: 'none',
                  type: 'variable',
                  argPriorityAgg: [],
                  funcPriorityAgg: [3],
                  emphasizePriority: false,
                  bound: true,
                  shorthandNumber: 2,
                  shorthandUnary: undefined
                },
                state: 'default',
                type: 'call',
                priority: 3
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
          unaryJustExecuted: undefined,
          matchExists: undefined,
          activePriority: 5
        },
        {
          containerState: 'ready',
          previouslyChangedExpressionState: 'default',
          expression: {
            arg: {
              arg: {
                arg: {
                  arg: {
                    name: 'shorthandNumber',
                    highlightType: 'default',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'none',
                    type: 'variable',
                    argPriorityAgg: [1, 2, 3, 4],
                    funcPriorityAgg: [],
                    emphasizePriority: false,
                    bound: true,
                    shorthandNumber: 1,
                    shorthandUnary: undefined
                  },
                  func: {
                    name: 'shorthandBinary',
                    highlightType: 'default',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'none',
                    type: 'variable',
                    argPriorityAgg: [],
                    funcPriorityAgg: [4],
                    emphasizePriority: false,
                    bound: true,
                    shorthandBinary: 'mult',
                    shorthandUnary: undefined
                  },
                  state: 'default',
                  type: 'call',
                  priority: 4
                },
                func: {
                  name: 'shorthandNumber',
                  highlightType: 'default',
                  topLeftBadgeType: 'none',
                  bottomRightBadgeType: 'none',
                  type: 'variable',
                  argPriorityAgg: [],
                  funcPriorityAgg: [3],
                  emphasizePriority: false,
                  bound: true,
                  shorthandNumber: 2,
                  shorthandUnary: undefined
                },
                state: 'default',
                type: 'call',
                priority: 3
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
        },
        {
          containerState: 'stepped',
          previouslyChangedExpressionState: 'active',
          expression: {
            arg: {
              arg: {
                arg: {
                  arg: {
                    name: 'shorthandNumber',
                    highlightType: 'active',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'none',
                    type: 'variable',
                    argPriorityAgg: [1, 2, 3, 4],
                    funcPriorityAgg: [],
                    emphasizePriority: true,
                    bound: true,
                    shorthandNumber: 1,
                    shorthandUnary: undefined
                  },
                  func: {
                    name: 'shorthandBinary',
                    highlightType: 'active',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'none',
                    type: 'variable',
                    argPriorityAgg: [],
                    funcPriorityAgg: [4],
                    emphasizePriority: false,
                    bound: true,
                    shorthandBinary: 'mult',
                    shorthandUnary: undefined
                  },
                  state: 'default',
                  type: 'call',
                  priority: 4
                },
                func: {
                  name: 'shorthandNumber',
                  highlightType: 'active',
                  topLeftBadgeType: 'none',
                  bottomRightBadgeType: 'none',
                  type: 'variable',
                  argPriorityAgg: [],
                  funcPriorityAgg: [3],
                  emphasizePriority: true,
                  bound: true,
                  shorthandNumber: 2,
                  shorthandUnary: undefined
                },
                state: 'active',
                type: 'call',
                priority: 3
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
          unaryJustExecuted: undefined,
          matchExists: undefined,
          activePriority: 3
        },
        {
          containerState: 'ready',
          previouslyChangedExpressionState: 'default',
          expression: {
            arg: {
              arg: {
                type: 'variable',
                name: 'shorthandNumber',
                bound: true,
                highlightType: 'default',
                topLeftBadgeType: 'none',
                bottomRightBadgeType: 'none',
                emphasizePriority: false,
                argPriorityAgg: [1, 2],
                funcPriorityAgg: [],
                shorthandNumber: 2
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
        },
        {
          expression: {
            arg: {
              arg: {
                type: 'variable',
                name: 'shorthandNumber',
                bound: true,
                highlightType: 'active',
                topLeftBadgeType: 'none',
                bottomRightBadgeType: 'none',
                emphasizePriority: true,
                argPriorityAgg: [1, 2],
                funcPriorityAgg: [],
                shorthandNumber: 2
              },
              func: {
                name: 'shorthandBinary',
                highlightType: 'active',
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
              highlightType: 'active',
              topLeftBadgeType: 'none',
              bottomRightBadgeType: 'none',
              type: 'variable',
              argPriorityAgg: [],
              funcPriorityAgg: [1],
              emphasizePriority: true,
              bound: true,
              shorthandNumber: 3,
              shorthandUnary: undefined
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
            shorthandNumber: 6
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
      variableSize: 'xxs',
      containerSize: 'xs',
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

export default Gswd
