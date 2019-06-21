import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'

const Zuam = () => (
  <ExpressionRunnerPrecomputed
    {...{
      expressionContainers: [
        {
          containerState: 'ready',
          previouslyChangedExpressionState: 'default',
          expression: {
            arg: {
              arg: {
                name: 'd',
                highlightType: 'initialHighlighted',
                topLeftBadgeType: 'none',
                bottomRightBadgeType: 'none',
                type: 'variable',
                argPriorityAgg: [1],
                funcPriorityAgg: [],
                emphasizePriority: false,
                bound: false
              },
              body: {
                arg: {
                  name: 'b',
                  highlightType: 'initialHighlighted',
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
                    name: 'b',
                    highlightType: 'initialHighlighted',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'none',
                    type: 'variable',
                    argPriorityAgg: [1],
                    funcPriorityAgg: [],
                    emphasizePriority: false,
                    bound: true
                  },
                  func: {
                    name: 'd',
                    highlightType: 'initialHighlighted',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'none',
                    type: 'variable',
                    argPriorityAgg: [],
                    funcPriorityAgg: [1],
                    emphasizePriority: false,
                    bound: true
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
            func: {
              arg: {
                name: 'a',
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
                        name: 'c',
                        highlightType: 'default',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'none',
                        type: 'variable',
                        argPriorityAgg: [1, 3],
                        funcPriorityAgg: [],
                        emphasizePriority: false,
                        bound: true
                      },
                      func: {
                        arg: {
                          name: 'b',
                          highlightType: 'default',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'none',
                          type: 'variable',
                          argPriorityAgg: [2],
                          funcPriorityAgg: [],
                          emphasizePriority: false,
                          bound: true
                        },
                        func: {
                          name: 'a',
                          highlightType: 'default',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'none',
                          type: 'variable',
                          argPriorityAgg: [],
                          funcPriorityAgg: [2, 3],
                          emphasizePriority: false,
                          bound: true
                        },
                        state: 'default',
                        type: 'call',
                        priority: 2
                      },
                      state: 'default',
                      type: 'call',
                      priority: 3
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
                      bound: true
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
              type: 'function',
              meta: undefined
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
                name: 'd',
                highlightType: 'active',
                topLeftBadgeType: 'none',
                bottomRightBadgeType: 'none',
                type: 'variable',
                argPriorityAgg: [1],
                funcPriorityAgg: [],
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
                  arg: {
                    name: 'b',
                    highlightType: 'active',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'none',
                    type: 'variable',
                    argPriorityAgg: [1],
                    funcPriorityAgg: [],
                    emphasizePriority: false,
                    bound: true
                  },
                  func: {
                    name: 'd',
                    highlightType: 'active',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'none',
                    type: 'variable',
                    argPriorityAgg: [],
                    funcPriorityAgg: [1],
                    emphasizePriority: false,
                    bound: true
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
                  arg: {
                    name: 'c',
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
                    arg: {
                      arg: {
                        name: 'c',
                        highlightType: 'active',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'none',
                        type: 'variable',
                        argPriorityAgg: [1, 3],
                        funcPriorityAgg: [],
                        emphasizePriority: false,
                        bound: true
                      },
                      func: {
                        arg: {
                          name: 'b',
                          highlightType: 'active',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'none',
                          type: 'variable',
                          argPriorityAgg: [2],
                          funcPriorityAgg: [],
                          emphasizePriority: false,
                          bound: true
                        },
                        func: {
                          name: 'a',
                          highlightType: 'active',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'none',
                          type: 'variable',
                          argPriorityAgg: [],
                          funcPriorityAgg: [2, 3],
                          emphasizePriority: false,
                          bound: true
                        },
                        state: 'default',
                        type: 'call',
                        priority: 2
                      },
                      state: 'default',
                      type: 'call',
                      priority: 3
                    },
                    func: {
                      name: 'b',
                      highlightType: 'active',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'none',
                      type: 'variable',
                      argPriorityAgg: [],
                      funcPriorityAgg: [1],
                      emphasizePriority: false,
                      bound: true
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
              arg: {
                name: 'd',
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
                arg: {
                  name: 'b',
                  highlightType: 'active',
                  topLeftBadgeType: 'none',
                  bottomRightBadgeType: 'callArg',
                  type: 'variable',
                  argPriorityAgg: [],
                  funcPriorityAgg: [],
                  emphasizePriority: false,
                  bound: false
                },
                body: {
                  arg: {
                    name: 'b',
                    highlightType: 'active',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'callArg',
                    type: 'variable',
                    argPriorityAgg: [1],
                    funcPriorityAgg: [],
                    emphasizePriority: false,
                    bound: true
                  },
                  func: {
                    name: 'd',
                    highlightType: 'active',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'callArg',
                    type: 'variable',
                    argPriorityAgg: [],
                    funcPriorityAgg: [1],
                    emphasizePriority: false,
                    bound: true
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
                  arg: {
                    name: 'c',
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
                    arg: {
                      arg: {
                        name: 'c',
                        highlightType: 'active',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'funcBound',
                        type: 'variable',
                        argPriorityAgg: [1, 3],
                        funcPriorityAgg: [],
                        emphasizePriority: false,
                        bound: true
                      },
                      func: {
                        arg: {
                          name: 'b',
                          highlightType: 'active',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'funcBound',
                          type: 'variable',
                          argPriorityAgg: [2],
                          funcPriorityAgg: [],
                          emphasizePriority: false,
                          bound: true
                        },
                        func: {
                          name: 'a',
                          highlightType: 'active',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'funcBound',
                          type: 'variable',
                          argPriorityAgg: [],
                          funcPriorityAgg: [2, 3],
                          emphasizePriority: false,
                          bound: true
                        },
                        state: 'default',
                        type: 'call',
                        priority: 2
                      },
                      state: 'default',
                      type: 'call',
                      priority: 3
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
                      bound: true
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
        },
        {
          expression: {
            arg: {
              arg: {
                name: 'd',
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
                arg: {
                  name: 'b',
                  highlightType: 'active',
                  topLeftBadgeType: 'none',
                  bottomRightBadgeType: 'callArg',
                  type: 'variable',
                  argPriorityAgg: [],
                  funcPriorityAgg: [],
                  emphasizePriority: false,
                  bound: false
                },
                body: {
                  arg: {
                    name: 'b',
                    highlightType: 'active',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'callArg',
                    type: 'variable',
                    argPriorityAgg: [1],
                    funcPriorityAgg: [],
                    emphasizePriority: false,
                    bound: true
                  },
                  func: {
                    name: 'd',
                    highlightType: 'active',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'callArg',
                    type: 'variable',
                    argPriorityAgg: [],
                    funcPriorityAgg: [1],
                    emphasizePriority: false,
                    bound: true
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
                  arg: {
                    name: 'c',
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
                    arg: {
                      arg: {
                        name: 'c',
                        highlightType: 'highlighted',
                        topLeftBadgeType: 'unmatch',
                        bottomRightBadgeType: 'funcBound',
                        type: 'variable',
                        argPriorityAgg: [1, 3],
                        funcPriorityAgg: [],
                        emphasizePriority: false,
                        bound: true
                      },
                      func: {
                        arg: {
                          name: 'b',
                          highlightType: 'highlighted',
                          topLeftBadgeType: 'unmatch',
                          bottomRightBadgeType: 'funcBound',
                          type: 'variable',
                          argPriorityAgg: [2],
                          funcPriorityAgg: [],
                          emphasizePriority: false,
                          bound: true
                        },
                        func: {
                          name: 'a',
                          highlightType: 'highlighted',
                          topLeftBadgeType: 'match',
                          bottomRightBadgeType: 'funcBound',
                          type: 'variable',
                          argPriorityAgg: [],
                          funcPriorityAgg: [2, 3],
                          emphasizePriority: false,
                          bound: true
                        },
                        state: 'default',
                        type: 'call',
                        priority: 2
                      },
                      state: 'default',
                      type: 'call',
                      priority: 3
                    },
                    func: {
                      name: 'b',
                      highlightType: 'highlighted',
                      topLeftBadgeType: 'unmatch',
                      bottomRightBadgeType: 'funcBound',
                      type: 'variable',
                      argPriorityAgg: [],
                      funcPriorityAgg: [1],
                      emphasizePriority: false,
                      bound: true
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
                name: 'd',
                highlightType: 'betaReduceCallArgHighlighted',
                topLeftBadgeType: 'none',
                bottomRightBadgeType: 'callArg',
                type: 'variable',
                argPriorityAgg: [1],
                funcPriorityAgg: [],
                emphasizePriority: true,
                bound: false
              },
              body: {
                arg: {
                  name: 'b',
                  highlightType: 'betaReduceCallArgHighlighted',
                  topLeftBadgeType: 'none',
                  bottomRightBadgeType: 'callArg',
                  type: 'variable',
                  argPriorityAgg: [],
                  funcPriorityAgg: [],
                  emphasizePriority: false,
                  bound: false
                },
                body: {
                  arg: {
                    name: 'b',
                    highlightType: 'betaReduceCallArgHighlighted',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'callArg',
                    type: 'variable',
                    argPriorityAgg: [1],
                    funcPriorityAgg: [],
                    emphasizePriority: false,
                    bound: true
                  },
                  func: {
                    name: 'd',
                    highlightType: 'betaReduceCallArgHighlighted',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'callArg',
                    type: 'variable',
                    argPriorityAgg: [],
                    funcPriorityAgg: [1],
                    emphasizePriority: false,
                    bound: true
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
                  arg: {
                    name: 'c',
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
                    arg: {
                      arg: {
                        name: 'c',
                        highlightType: 'active',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'funcBound',
                        type: 'variable',
                        argPriorityAgg: [1, 3],
                        funcPriorityAgg: [],
                        emphasizePriority: false,
                        bound: true
                      },
                      func: {
                        arg: {
                          name: 'b',
                          highlightType: 'active',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'funcBound',
                          type: 'variable',
                          argPriorityAgg: [2],
                          funcPriorityAgg: [],
                          emphasizePriority: false,
                          bound: true
                        },
                        func: {
                          arg: {
                            name: 'd',
                            highlightType: 'highlighted',
                            topLeftBadgeType: 'betaReduced',
                            bottomRightBadgeType: 'funcBound',
                            type: 'variable',
                            argPriorityAgg: [],
                            funcPriorityAgg: [2, 3],
                            emphasizePriority: false,
                            bound: false,
                            shorthandUnary: undefined
                          },
                          body: {
                            arg: {
                              name: 'b',
                              highlightType: 'highlighted',
                              topLeftBadgeType: 'betaReduced',
                              bottomRightBadgeType: 'funcBound',
                              type: 'variable',
                              argPriorityAgg: [],
                              funcPriorityAgg: [],
                              emphasizePriority: false,
                              bound: false,
                              shorthandUnary: undefined
                            },
                            body: {
                              arg: {
                                name: 'b',
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
                                name: 'd',
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
                          type: 'function',
                          meta: undefined
                        },
                        state: 'default',
                        type: 'call',
                        priority: 2
                      },
                      state: 'default',
                      type: 'call',
                      priority: 3
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
                      bound: true
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
                name: 'd',
                highlightType: 'removed',
                topLeftBadgeType: 'none',
                bottomRightBadgeType: 'callArg',
                type: 'variable',
                argPriorityAgg: [1],
                funcPriorityAgg: [],
                emphasizePriority: true,
                bound: false
              },
              body: {
                arg: {
                  name: 'b',
                  highlightType: 'removed',
                  topLeftBadgeType: 'none',
                  bottomRightBadgeType: 'callArg',
                  type: 'variable',
                  argPriorityAgg: [],
                  funcPriorityAgg: [],
                  emphasizePriority: false,
                  bound: false
                },
                body: {
                  arg: {
                    name: 'b',
                    highlightType: 'removed',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'callArg',
                    type: 'variable',
                    argPriorityAgg: [1],
                    funcPriorityAgg: [],
                    emphasizePriority: false,
                    bound: true
                  },
                  func: {
                    name: 'd',
                    highlightType: 'removed',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'callArg',
                    type: 'variable',
                    argPriorityAgg: [],
                    funcPriorityAgg: [1],
                    emphasizePriority: false,
                    bound: true
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
                  arg: {
                    name: 'c',
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
                    arg: {
                      arg: {
                        name: 'c',
                        highlightType: 'active',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'funcBound',
                        type: 'variable',
                        argPriorityAgg: [1, 3],
                        funcPriorityAgg: [],
                        emphasizePriority: false,
                        bound: true
                      },
                      func: {
                        arg: {
                          name: 'b',
                          highlightType: 'active',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'funcBound',
                          type: 'variable',
                          argPriorityAgg: [2],
                          funcPriorityAgg: [],
                          emphasizePriority: false,
                          bound: true
                        },
                        func: {
                          arg: {
                            name: 'd',
                            highlightType: 'active',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'funcUnbound',
                            type: 'variable',
                            argPriorityAgg: [],
                            funcPriorityAgg: [2, 3],
                            emphasizePriority: false,
                            bound: false,
                            shorthandUnary: undefined
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
                              bound: false,
                              shorthandUnary: undefined
                            },
                            body: {
                              arg: {
                                name: 'b',
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
                                name: 'd',
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
                        state: 'default',
                        type: 'call',
                        priority: 2
                      },
                      state: 'default',
                      type: 'call',
                      priority: 3
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
                      bound: true
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
          containerState: 'ready',
          previouslyChangedExpressionState: 'default',
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
                    name: 'c',
                    highlightType: 'default',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'none',
                    type: 'variable',
                    argPriorityAgg: [1, 3],
                    funcPriorityAgg: [],
                    emphasizePriority: false,
                    bound: true
                  },
                  func: {
                    arg: {
                      name: 'b',
                      highlightType: 'default',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'none',
                      type: 'variable',
                      argPriorityAgg: [2],
                      funcPriorityAgg: [],
                      emphasizePriority: false,
                      bound: true
                    },
                    func: {
                      arg: {
                        name: 'd',
                        highlightType: 'default',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'none',
                        type: 'variable',
                        argPriorityAgg: [],
                        funcPriorityAgg: [2, 3],
                        emphasizePriority: false,
                        bound: false,
                        shorthandUnary: undefined
                      },
                      body: {
                        arg: {
                          name: 'b',
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
                          arg: {
                            name: 'b',
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
                            name: 'd',
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
                  state: 'default',
                  type: 'call',
                  priority: 3
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
                  bound: true
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
          unaryJustExecuted: undefined
        },
        {
          containerState: 'stepped',
          previouslyChangedExpressionState: 'active',
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
                    name: 'c',
                    highlightType: 'default',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'none',
                    type: 'variable',
                    argPriorityAgg: [1, 3],
                    funcPriorityAgg: [],
                    emphasizePriority: false,
                    bound: true
                  },
                  func: {
                    arg: {
                      name: 'b',
                      highlightType: 'active',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'none',
                      type: 'variable',
                      argPriorityAgg: [2],
                      funcPriorityAgg: [],
                      emphasizePriority: true,
                      bound: true
                    },
                    func: {
                      arg: {
                        name: 'd',
                        highlightType: 'active',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'none',
                        type: 'variable',
                        argPriorityAgg: [],
                        funcPriorityAgg: [2, 3],
                        emphasizePriority: true,
                        bound: false,
                        shorthandUnary: undefined
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
                          bound: false,
                          shorthandUnary: undefined
                        },
                        body: {
                          arg: {
                            name: 'b',
                            highlightType: 'active',
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
                            name: 'd',
                            highlightType: 'active',
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
                        type: 'function',
                        meta: undefined
                      },
                      type: 'function',
                      meta: undefined
                    },
                    state: 'active',
                    type: 'call',
                    priority: 2
                  },
                  state: 'default',
                  type: 'call',
                  priority: 3
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
                  bound: true
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
          unaryJustExecuted: undefined,
          matchExists: undefined,
          activePriority: 2
        },
        {
          containerState: 'stepped',
          previouslyChangedExpressionState: 'showFuncUnbound',
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
                    name: 'c',
                    highlightType: 'default',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'none',
                    type: 'variable',
                    argPriorityAgg: [1, 3],
                    funcPriorityAgg: [],
                    emphasizePriority: false,
                    bound: true
                  },
                  func: {
                    arg: {
                      name: 'b',
                      highlightType: 'active',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'callArg',
                      type: 'variable',
                      argPriorityAgg: [2],
                      funcPriorityAgg: [],
                      emphasizePriority: true,
                      bound: true
                    },
                    func: {
                      arg: {
                        name: 'd',
                        highlightType: 'active',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'funcArg',
                        type: 'variable',
                        argPriorityAgg: [],
                        funcPriorityAgg: [2, 3],
                        emphasizePriority: true,
                        bound: false,
                        shorthandUnary: undefined
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
                          bound: false,
                          shorthandUnary: undefined
                        },
                        body: {
                          arg: {
                            name: 'b',
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
                            name: 'd',
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
                    state: 'showFuncUnbound',
                    type: 'call',
                    priority: 2
                  },
                  state: 'default',
                  type: 'call',
                  priority: 3
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
                  bound: true
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
          unaryJustExecuted: undefined,
          matchExists: undefined,
          activePriority: 2
        },
        {
          containerState: 'stepped',
          previouslyChangedExpressionState: 'betaReducePreviewBefore',
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
                    name: 'c',
                    highlightType: 'default',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'none',
                    type: 'variable',
                    argPriorityAgg: [1, 3],
                    funcPriorityAgg: [],
                    emphasizePriority: false,
                    bound: true
                  },
                  func: {
                    arg: {
                      name: 'b',
                      highlightType: 'active',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'callArg',
                      type: 'variable',
                      argPriorityAgg: [2],
                      funcPriorityAgg: [],
                      emphasizePriority: true,
                      bound: true
                    },
                    func: {
                      arg: {
                        name: 'd',
                        highlightType: 'highlighted',
                        topLeftBadgeType: 'match',
                        bottomRightBadgeType: 'funcArg',
                        type: 'variable',
                        argPriorityAgg: [],
                        funcPriorityAgg: [2, 3],
                        emphasizePriority: true,
                        bound: false,
                        shorthandUnary: undefined
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
                          bound: false,
                          shorthandUnary: undefined
                        },
                        body: {
                          arg: {
                            name: 'b',
                            highlightType: 'highlighted',
                            topLeftBadgeType: 'unmatch',
                            bottomRightBadgeType: 'funcBound',
                            type: 'variable',
                            argPriorityAgg: [1],
                            funcPriorityAgg: [],
                            emphasizePriority: false,
                            bound: true,
                            shorthandUnary: undefined
                          },
                          func: {
                            name: 'd',
                            highlightType: 'highlighted',
                            topLeftBadgeType: 'match',
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
                    state: 'betaReducePreviewBefore',
                    type: 'call',
                    priority: 2
                  },
                  state: 'default',
                  type: 'call',
                  priority: 3
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
                  bound: true
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
          unaryJustExecuted: undefined,
          matchExists: true,
          activePriority: 2
        },
        {
          containerState: 'stepped',
          previouslyChangedExpressionState: 'betaReducePreviewAfter',
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
                    name: 'c',
                    highlightType: 'default',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'none',
                    type: 'variable',
                    argPriorityAgg: [1, 3],
                    funcPriorityAgg: [],
                    emphasizePriority: false,
                    bound: true
                  },
                  func: {
                    arg: {
                      name: 'b',
                      highlightType: 'betaReduceCallArgHighlighted',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'callArg',
                      type: 'variable',
                      argPriorityAgg: [2],
                      funcPriorityAgg: [],
                      emphasizePriority: true,
                      bound: true
                    },
                    func: {
                      arg: {
                        name: 'd',
                        highlightType: 'active',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'funcArg',
                        type: 'variable',
                        argPriorityAgg: [],
                        funcPriorityAgg: [2, 3],
                        emphasizePriority: true,
                        bound: false,
                        shorthandUnary: undefined
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
                          bound: false,
                          shorthandUnary: undefined
                        },
                        body: {
                          arg: {
                            name: 'b',
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
                      type: 'function',
                      meta: undefined
                    },
                    state: 'betaReducePreviewAfter',
                    type: 'call',
                    priority: 2
                  },
                  state: 'default',
                  type: 'call',
                  priority: 3
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
                  bound: true
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
          unaryJustExecuted: undefined,
          matchExists: undefined,
          activePriority: 2
        },
        {
          containerState: 'stepped',
          previouslyChangedExpressionState: 'betaReducePreviewCrossed',
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
                    name: 'c',
                    highlightType: 'default',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'none',
                    type: 'variable',
                    argPriorityAgg: [1, 3],
                    funcPriorityAgg: [],
                    emphasizePriority: false,
                    bound: true
                  },
                  func: {
                    arg: {
                      name: 'b',
                      highlightType: 'removed',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'callArg',
                      type: 'variable',
                      argPriorityAgg: [2],
                      funcPriorityAgg: [],
                      emphasizePriority: true,
                      bound: true
                    },
                    func: {
                      arg: {
                        name: 'd',
                        highlightType: 'removed',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'funcArg',
                        type: 'variable',
                        argPriorityAgg: [],
                        funcPriorityAgg: [2, 3],
                        emphasizePriority: true,
                        bound: false,
                        shorthandUnary: undefined
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
                          bound: false,
                          shorthandUnary: undefined
                        },
                        body: {
                          arg: {
                            name: 'b',
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
                      type: 'function',
                      meta: undefined
                    },
                    state: 'betaReducePreviewCrossed',
                    type: 'call',
                    priority: 2
                  },
                  state: 'default',
                  type: 'call',
                  priority: 3
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
                  bound: true
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
          unaryJustExecuted: undefined,
          matchExists: undefined,
          activePriority: 2
        },
        {
          containerState: 'ready',
          previouslyChangedExpressionState: 'default',
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
                    name: 'c',
                    highlightType: 'default',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'none',
                    type: 'variable',
                    argPriorityAgg: [1, 2],
                    funcPriorityAgg: [],
                    emphasizePriority: false,
                    bound: true
                  },
                  func: {
                    arg: {
                      name: 'b',
                      highlightType: 'default',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'none',
                      type: 'variable',
                      argPriorityAgg: [],
                      funcPriorityAgg: [2],
                      emphasizePriority: false,
                      bound: false,
                      shorthandUnary: undefined
                    },
                    body: {
                      arg: {
                        name: 'b',
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
                    type: 'function',
                    meta: undefined
                  },
                  state: 'default',
                  type: 'call',
                  priority: 2
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
                  bound: true
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
          unaryJustExecuted: undefined
        },
        {
          containerState: 'stepped',
          previouslyChangedExpressionState: 'active',
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
                    name: 'c',
                    highlightType: 'active',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'none',
                    type: 'variable',
                    argPriorityAgg: [1, 2],
                    funcPriorityAgg: [],
                    emphasizePriority: true,
                    bound: true
                  },
                  func: {
                    arg: {
                      name: 'b',
                      highlightType: 'active',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'none',
                      type: 'variable',
                      argPriorityAgg: [],
                      funcPriorityAgg: [2],
                      emphasizePriority: true,
                      bound: false,
                      shorthandUnary: undefined
                    },
                    body: {
                      arg: {
                        name: 'b',
                        highlightType: 'active',
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
                        highlightType: 'active',
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
                    type: 'function',
                    meta: undefined
                  },
                  state: 'active',
                  type: 'call',
                  priority: 2
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
                  bound: true
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
          unaryJustExecuted: undefined,
          matchExists: undefined,
          activePriority: 2
        },
        {
          containerState: 'stepped',
          previouslyChangedExpressionState: 'showFuncBound',
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
                    arg: {
                      name: 'b',
                      highlightType: 'active',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'funcArg',
                      type: 'variable',
                      argPriorityAgg: [],
                      funcPriorityAgg: [2],
                      emphasizePriority: true,
                      bound: false,
                      shorthandUnary: undefined
                    },
                    body: {
                      arg: {
                        name: 'b',
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
                  state: 'showFuncBound',
                  type: 'call',
                  priority: 2
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
                  bound: true
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
          unaryJustExecuted: undefined,
          matchExists: undefined,
          activePriority: 2
        },
        {
          containerState: 'stepped',
          previouslyChangedExpressionState: 'betaReducePreviewBefore',
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
                    arg: {
                      name: 'b',
                      highlightType: 'highlighted',
                      topLeftBadgeType: 'match',
                      bottomRightBadgeType: 'funcArg',
                      type: 'variable',
                      argPriorityAgg: [],
                      funcPriorityAgg: [2],
                      emphasizePriority: true,
                      bound: false,
                      shorthandUnary: undefined
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
                        bound: true,
                        shorthandUnary: undefined
                      },
                      func: {
                        name: 'b',
                        highlightType: 'highlighted',
                        topLeftBadgeType: 'match',
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
                  state: 'betaReducePreviewBefore',
                  type: 'call',
                  priority: 2
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
                  bound: true
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
          unaryJustExecuted: undefined,
          matchExists: true,
          activePriority: 2
        },
        {
          containerState: 'stepped',
          previouslyChangedExpressionState: 'betaReducePreviewAfter',
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
                    arg: {
                      name: 'b',
                      highlightType: 'active',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'funcArg',
                      type: 'variable',
                      argPriorityAgg: [],
                      funcPriorityAgg: [2],
                      emphasizePriority: true,
                      bound: false,
                      shorthandUnary: undefined
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
                        name: 'c',
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
                  priority: 2
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
                  bound: true
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
          unaryJustExecuted: undefined,
          matchExists: undefined,
          activePriority: 2
        },
        {
          containerState: 'stepped',
          previouslyChangedExpressionState: 'betaReducePreviewCrossed',
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
                    arg: {
                      name: 'b',
                      highlightType: 'removed',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'funcArg',
                      type: 'variable',
                      argPriorityAgg: [],
                      funcPriorityAgg: [2],
                      emphasizePriority: true,
                      bound: false,
                      shorthandUnary: undefined
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
                        name: 'c',
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
                  priority: 2
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
                  bound: true
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
          unaryJustExecuted: undefined,
          matchExists: undefined,
          activePriority: 2
        },
        {
          containerState: 'done',
          previouslyChangedExpressionState: 'default',
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
                    name: 'c',
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
                    name: 'c',
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
                  name: 'b',
                  highlightType: 'default',
                  topLeftBadgeType: 'none',
                  bottomRightBadgeType: 'none',
                  type: 'variable',
                  argPriorityAgg: [],
                  funcPriorityAgg: [1],
                  emphasizePriority: false,
                  bound: true
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
          unaryJustExecuted: undefined
        }
      ],
      speed: 3,
      showOnlyFocused: false,
      caption: undefined,
      hideControls: false,
      explanationsVisibility: 'hiddenInitialPausedOnly',
      hidePriorities: false,
      variableSize: 'md',
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

export default Zuam
