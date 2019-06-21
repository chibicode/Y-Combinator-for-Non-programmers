import React from 'react'
import ExpressionRunnerPrecomputed from '../ExpressionRunnerPrecomputed'

const Unck = () => (
  <ExpressionRunnerPrecomputed
    {...{
      expressionContainers: [
        {
          containerState: 'ready',
          previouslyChangedExpressionState: 'default',
          expression: {
            arg: {
              arg: {
                name: 'g',
                highlightType: 'default',
                topLeftBadgeType: 'none',
                bottomRightBadgeType: 'none',
                type: 'variable',
                argPriorityAgg: [2],
                funcPriorityAgg: [],
                emphasizePriority: false,
                bound: false
              },
              body: {
                arg: {
                  name: 'h',
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
                      arg: {
                        name: 'h',
                        highlightType: 'default',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'none',
                        type: 'variable',
                        argPriorityAgg: [1, 2, 3],
                        funcPriorityAgg: [],
                        emphasizePriority: false,
                        bound: true
                      },
                      func: {
                        name: 'g',
                        highlightType: 'default',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'none',
                        type: 'variable',
                        argPriorityAgg: [],
                        funcPriorityAgg: [3],
                        emphasizePriority: false,
                        bound: true
                      },
                      state: 'default',
                      type: 'call',
                      priority: 3
                    },
                    func: {
                      name: 'g',
                      highlightType: 'default',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'none',
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
                    name: 'g',
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
            func: {
              arg: {
                arg: {
                  name: 'e',
                  highlightType: 'default',
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
                    name: 'f',
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
                      name: 'f',
                      highlightType: 'default',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'none',
                      type: 'variable',
                      argPriorityAgg: [1],
                      funcPriorityAgg: [],
                      emphasizePriority: false,
                      bound: true
                    },
                    func: {
                      name: 'e',
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
                        name: 'd',
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
                            name: 'd',
                            highlightType: 'default',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'none',
                            type: 'variable',
                            argPriorityAgg: [2, 4],
                            funcPriorityAgg: [],
                            emphasizePriority: false,
                            bound: true
                          },
                          func: {
                            arg: {
                              name: 'c',
                              highlightType: 'default',
                              topLeftBadgeType: 'none',
                              bottomRightBadgeType: 'none',
                              type: 'variable',
                              argPriorityAgg: [3],
                              funcPriorityAgg: [],
                              emphasizePriority: false,
                              bound: true
                            },
                            func: {
                              name: 'b',
                              highlightType: 'default',
                              topLeftBadgeType: 'none',
                              bottomRightBadgeType: 'none',
                              type: 'variable',
                              argPriorityAgg: [],
                              funcPriorityAgg: [3, 4],
                              emphasizePriority: false,
                              bound: true
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
                          arg: {
                            name: 'c',
                            highlightType: 'default',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'none',
                            type: 'variable',
                            argPriorityAgg: [1],
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
                            funcPriorityAgg: [1, 2],
                            emphasizePriority: false,
                            bound: true
                          },
                          state: 'default',
                          type: 'call',
                          priority: 1
                        },
                        state: 'default',
                        type: 'call',
                        priority: 2
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
              arg: {
                name: 'g',
                highlightType: 'default',
                topLeftBadgeType: 'none',
                bottomRightBadgeType: 'none',
                type: 'variable',
                argPriorityAgg: [2],
                funcPriorityAgg: [],
                emphasizePriority: false,
                bound: false
              },
              body: {
                arg: {
                  name: 'h',
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
                      arg: {
                        name: 'h',
                        highlightType: 'default',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'none',
                        type: 'variable',
                        argPriorityAgg: [1, 2, 3],
                        funcPriorityAgg: [],
                        emphasizePriority: false,
                        bound: true
                      },
                      func: {
                        name: 'g',
                        highlightType: 'default',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'none',
                        type: 'variable',
                        argPriorityAgg: [],
                        funcPriorityAgg: [3],
                        emphasizePriority: false,
                        bound: true
                      },
                      state: 'default',
                      type: 'call',
                      priority: 3
                    },
                    func: {
                      name: 'g',
                      highlightType: 'default',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'none',
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
                    name: 'g',
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
            func: {
              arg: {
                arg: {
                  name: 'e',
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
                    name: 'f',
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
                      name: 'f',
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
                      name: 'e',
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
                  funcPriorityAgg: [1, 2],
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
                        name: 'd',
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
                            name: 'd',
                            highlightType: 'active',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'none',
                            type: 'variable',
                            argPriorityAgg: [2, 4],
                            funcPriorityAgg: [],
                            emphasizePriority: false,
                            bound: true
                          },
                          func: {
                            arg: {
                              name: 'c',
                              highlightType: 'active',
                              topLeftBadgeType: 'none',
                              bottomRightBadgeType: 'none',
                              type: 'variable',
                              argPriorityAgg: [3],
                              funcPriorityAgg: [],
                              emphasizePriority: false,
                              bound: true
                            },
                            func: {
                              name: 'b',
                              highlightType: 'active',
                              topLeftBadgeType: 'none',
                              bottomRightBadgeType: 'none',
                              type: 'variable',
                              argPriorityAgg: [],
                              funcPriorityAgg: [3, 4],
                              emphasizePriority: false,
                              bound: true
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
                          arg: {
                            name: 'c',
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
                            name: 'a',
                            highlightType: 'active',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'none',
                            type: 'variable',
                            argPriorityAgg: [],
                            funcPriorityAgg: [1, 2],
                            emphasizePriority: false,
                            bound: true
                          },
                          state: 'default',
                          type: 'call',
                          priority: 1
                        },
                        state: 'default',
                        type: 'call',
                        priority: 2
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
              arg: {
                name: 'g',
                highlightType: 'default',
                topLeftBadgeType: 'none',
                bottomRightBadgeType: 'none',
                type: 'variable',
                argPriorityAgg: [2],
                funcPriorityAgg: [],
                emphasizePriority: false,
                bound: false
              },
              body: {
                arg: {
                  name: 'h',
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
                      arg: {
                        name: 'h',
                        highlightType: 'default',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'none',
                        type: 'variable',
                        argPriorityAgg: [1, 2, 3],
                        funcPriorityAgg: [],
                        emphasizePriority: false,
                        bound: true
                      },
                      func: {
                        name: 'g',
                        highlightType: 'default',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'none',
                        type: 'variable',
                        argPriorityAgg: [],
                        funcPriorityAgg: [3],
                        emphasizePriority: false,
                        bound: true
                      },
                      state: 'default',
                      type: 'call',
                      priority: 3
                    },
                    func: {
                      name: 'g',
                      highlightType: 'default',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'none',
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
                    name: 'g',
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
            func: {
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
                  arg: {
                    name: 'f',
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
                      name: 'f',
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
                      name: 'e',
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
                  funcPriorityAgg: [1, 2],
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
                        name: 'd',
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
                            name: 'd',
                            highlightType: 'active',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'funcBound',
                            type: 'variable',
                            argPriorityAgg: [2, 4],
                            funcPriorityAgg: [],
                            emphasizePriority: false,
                            bound: true
                          },
                          func: {
                            arg: {
                              name: 'c',
                              highlightType: 'active',
                              topLeftBadgeType: 'none',
                              bottomRightBadgeType: 'funcBound',
                              type: 'variable',
                              argPriorityAgg: [3],
                              funcPriorityAgg: [],
                              emphasizePriority: false,
                              bound: true
                            },
                            func: {
                              name: 'b',
                              highlightType: 'active',
                              topLeftBadgeType: 'none',
                              bottomRightBadgeType: 'funcBound',
                              type: 'variable',
                              argPriorityAgg: [],
                              funcPriorityAgg: [3, 4],
                              emphasizePriority: false,
                              bound: true
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
                          arg: {
                            name: 'c',
                            highlightType: 'active',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'funcBound',
                            type: 'variable',
                            argPriorityAgg: [1],
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
                            funcPriorityAgg: [1, 2],
                            emphasizePriority: false,
                            bound: true
                          },
                          state: 'default',
                          type: 'call',
                          priority: 1
                        },
                        state: 'default',
                        type: 'call',
                        priority: 2
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
              arg: {
                name: 'g',
                highlightType: 'default',
                topLeftBadgeType: 'none',
                bottomRightBadgeType: 'none',
                type: 'variable',
                argPriorityAgg: [2],
                funcPriorityAgg: [],
                emphasizePriority: false,
                bound: false
              },
              body: {
                arg: {
                  name: 'h',
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
                      arg: {
                        name: 'h',
                        highlightType: 'default',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'none',
                        type: 'variable',
                        argPriorityAgg: [1, 2, 3],
                        funcPriorityAgg: [],
                        emphasizePriority: false,
                        bound: true
                      },
                      func: {
                        name: 'g',
                        highlightType: 'default',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'none',
                        type: 'variable',
                        argPriorityAgg: [],
                        funcPriorityAgg: [3],
                        emphasizePriority: false,
                        bound: true
                      },
                      state: 'default',
                      type: 'call',
                      priority: 3
                    },
                    func: {
                      name: 'g',
                      highlightType: 'default',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'none',
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
                    name: 'g',
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
            func: {
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
                  arg: {
                    name: 'f',
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
                      name: 'f',
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
                      name: 'e',
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
                  funcPriorityAgg: [1, 2],
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
                        name: 'd',
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
                            name: 'd',
                            highlightType: 'highlighted',
                            topLeftBadgeType: 'unmatch',
                            bottomRightBadgeType: 'funcBound',
                            type: 'variable',
                            argPriorityAgg: [2, 4],
                            funcPriorityAgg: [],
                            emphasizePriority: false,
                            bound: true
                          },
                          func: {
                            arg: {
                              name: 'c',
                              highlightType: 'highlighted',
                              topLeftBadgeType: 'unmatch',
                              bottomRightBadgeType: 'funcBound',
                              type: 'variable',
                              argPriorityAgg: [3],
                              funcPriorityAgg: [],
                              emphasizePriority: false,
                              bound: true
                            },
                            func: {
                              name: 'b',
                              highlightType: 'highlighted',
                              topLeftBadgeType: 'unmatch',
                              bottomRightBadgeType: 'funcBound',
                              type: 'variable',
                              argPriorityAgg: [],
                              funcPriorityAgg: [3, 4],
                              emphasizePriority: false,
                              bound: true
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
                          arg: {
                            name: 'c',
                            highlightType: 'highlighted',
                            topLeftBadgeType: 'unmatch',
                            bottomRightBadgeType: 'funcBound',
                            type: 'variable',
                            argPriorityAgg: [1],
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
                            funcPriorityAgg: [1, 2],
                            emphasizePriority: false,
                            bound: true
                          },
                          state: 'default',
                          type: 'call',
                          priority: 1
                        },
                        state: 'default',
                        type: 'call',
                        priority: 2
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
              arg: {
                name: 'g',
                highlightType: 'default',
                topLeftBadgeType: 'none',
                bottomRightBadgeType: 'none',
                type: 'variable',
                argPriorityAgg: [2],
                funcPriorityAgg: [],
                emphasizePriority: false,
                bound: false
              },
              body: {
                arg: {
                  name: 'h',
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
                      arg: {
                        name: 'h',
                        highlightType: 'default',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'none',
                        type: 'variable',
                        argPriorityAgg: [1, 2, 3],
                        funcPriorityAgg: [],
                        emphasizePriority: false,
                        bound: true
                      },
                      func: {
                        name: 'g',
                        highlightType: 'default',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'none',
                        type: 'variable',
                        argPriorityAgg: [],
                        funcPriorityAgg: [3],
                        emphasizePriority: false,
                        bound: true
                      },
                      state: 'default',
                      type: 'call',
                      priority: 3
                    },
                    func: {
                      name: 'g',
                      highlightType: 'default',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'none',
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
                    name: 'g',
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
            func: {
              arg: {
                arg: {
                  name: 'e',
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
                    name: 'f',
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
                      name: 'f',
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
                      name: 'e',
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
                  funcPriorityAgg: [1, 2],
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
                        name: 'd',
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
                            name: 'd',
                            highlightType: 'active',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'funcBound',
                            type: 'variable',
                            argPriorityAgg: [2, 4],
                            funcPriorityAgg: [],
                            emphasizePriority: false,
                            bound: true
                          },
                          func: {
                            arg: {
                              name: 'c',
                              highlightType: 'active',
                              topLeftBadgeType: 'none',
                              bottomRightBadgeType: 'funcBound',
                              type: 'variable',
                              argPriorityAgg: [3],
                              funcPriorityAgg: [],
                              emphasizePriority: false,
                              bound: true
                            },
                            func: {
                              name: 'b',
                              highlightType: 'active',
                              topLeftBadgeType: 'none',
                              bottomRightBadgeType: 'funcBound',
                              type: 'variable',
                              argPriorityAgg: [],
                              funcPriorityAgg: [3, 4],
                              emphasizePriority: false,
                              bound: true
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
                          arg: {
                            name: 'c',
                            highlightType: 'active',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'funcBound',
                            type: 'variable',
                            argPriorityAgg: [1],
                            funcPriorityAgg: [],
                            emphasizePriority: false,
                            bound: true
                          },
                          func: {
                            arg: {
                              name: 'e',
                              highlightType: 'highlighted',
                              topLeftBadgeType: 'betaReduced',
                              bottomRightBadgeType: 'funcBound',
                              type: 'variable',
                              argPriorityAgg: [],
                              funcPriorityAgg: [1, 2],
                              emphasizePriority: false,
                              bound: false,
                              shorthandUnary: undefined
                            },
                            body: {
                              arg: {
                                name: 'f',
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
                                  name: 'f',
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
                                  name: 'e',
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
                          priority: 1
                        },
                        state: 'default',
                        type: 'call',
                        priority: 2
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
              arg: {
                name: 'g',
                highlightType: 'default',
                topLeftBadgeType: 'none',
                bottomRightBadgeType: 'none',
                type: 'variable',
                argPriorityAgg: [2],
                funcPriorityAgg: [],
                emphasizePriority: false,
                bound: false
              },
              body: {
                arg: {
                  name: 'h',
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
                      arg: {
                        name: 'h',
                        highlightType: 'default',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'none',
                        type: 'variable',
                        argPriorityAgg: [1, 2, 3],
                        funcPriorityAgg: [],
                        emphasizePriority: false,
                        bound: true
                      },
                      func: {
                        name: 'g',
                        highlightType: 'default',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'none',
                        type: 'variable',
                        argPriorityAgg: [],
                        funcPriorityAgg: [3],
                        emphasizePriority: false,
                        bound: true
                      },
                      state: 'default',
                      type: 'call',
                      priority: 3
                    },
                    func: {
                      name: 'g',
                      highlightType: 'default',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'none',
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
                    name: 'g',
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
            func: {
              arg: {
                arg: {
                  name: 'e',
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
                    name: 'f',
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
                      name: 'f',
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
                      name: 'e',
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
                  funcPriorityAgg: [1, 2],
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
                        name: 'd',
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
                            name: 'd',
                            highlightType: 'active',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'funcBound',
                            type: 'variable',
                            argPriorityAgg: [2, 4],
                            funcPriorityAgg: [],
                            emphasizePriority: false,
                            bound: true
                          },
                          func: {
                            arg: {
                              name: 'c',
                              highlightType: 'active',
                              topLeftBadgeType: 'none',
                              bottomRightBadgeType: 'funcBound',
                              type: 'variable',
                              argPriorityAgg: [3],
                              funcPriorityAgg: [],
                              emphasizePriority: false,
                              bound: true
                            },
                            func: {
                              name: 'b',
                              highlightType: 'active',
                              topLeftBadgeType: 'none',
                              bottomRightBadgeType: 'funcBound',
                              type: 'variable',
                              argPriorityAgg: [],
                              funcPriorityAgg: [3, 4],
                              emphasizePriority: false,
                              bound: true
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
                          arg: {
                            name: 'c',
                            highlightType: 'active',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'funcBound',
                            type: 'variable',
                            argPriorityAgg: [1],
                            funcPriorityAgg: [],
                            emphasizePriority: false,
                            bound: true
                          },
                          func: {
                            arg: {
                              name: 'e',
                              highlightType: 'active',
                              topLeftBadgeType: 'none',
                              bottomRightBadgeType: 'funcUnbound',
                              type: 'variable',
                              argPriorityAgg: [],
                              funcPriorityAgg: [1, 2],
                              emphasizePriority: false,
                              bound: false,
                              shorthandUnary: undefined
                            },
                            body: {
                              arg: {
                                name: 'f',
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
                                  name: 'f',
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
                          state: 'default',
                          type: 'call',
                          priority: 1
                        },
                        state: 'default',
                        type: 'call',
                        priority: 2
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
              arg: {
                name: 'g',
                highlightType: 'default',
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
                  name: 'h',
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
                      arg: {
                        name: 'h',
                        highlightType: 'default',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'none',
                        type: 'variable',
                        argPriorityAgg: [1, 2, 3],
                        funcPriorityAgg: [],
                        emphasizePriority: false,
                        bound: true
                      },
                      func: {
                        name: 'g',
                        highlightType: 'default',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'none',
                        type: 'variable',
                        argPriorityAgg: [],
                        funcPriorityAgg: [3],
                        emphasizePriority: false,
                        bound: true
                      },
                      state: 'default',
                      type: 'call',
                      priority: 3
                    },
                    func: {
                      name: 'g',
                      highlightType: 'default',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'none',
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
                    name: 'g',
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
            func: {
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
                    name: 'd',
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
                        name: 'd',
                        highlightType: 'default',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'none',
                        type: 'variable',
                        argPriorityAgg: [2, 4],
                        funcPriorityAgg: [],
                        emphasizePriority: false,
                        bound: true
                      },
                      func: {
                        arg: {
                          name: 'c',
                          highlightType: 'default',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'none',
                          type: 'variable',
                          argPriorityAgg: [3],
                          funcPriorityAgg: [],
                          emphasizePriority: false,
                          bound: true
                        },
                        func: {
                          name: 'b',
                          highlightType: 'default',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'none',
                          type: 'variable',
                          argPriorityAgg: [],
                          funcPriorityAgg: [3, 4],
                          emphasizePriority: false,
                          bound: true
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
                      arg: {
                        name: 'c',
                        highlightType: 'default',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'none',
                        type: 'variable',
                        argPriorityAgg: [1],
                        funcPriorityAgg: [],
                        emphasizePriority: false,
                        bound: true
                      },
                      func: {
                        arg: {
                          name: 'e',
                          highlightType: 'default',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'none',
                          type: 'variable',
                          argPriorityAgg: [],
                          funcPriorityAgg: [1, 2],
                          emphasizePriority: false,
                          bound: false,
                          shorthandUnary: undefined
                        },
                        body: {
                          arg: {
                            name: 'f',
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
                              name: 'f',
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
                              name: 'e',
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
                      priority: 1
                    },
                    state: 'default',
                    type: 'call',
                    priority: 2
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
                name: 'g',
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
                  name: 'h',
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
                      arg: {
                        name: 'h',
                        highlightType: 'active',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'none',
                        type: 'variable',
                        argPriorityAgg: [1, 2, 3],
                        funcPriorityAgg: [],
                        emphasizePriority: false,
                        bound: true
                      },
                      func: {
                        name: 'g',
                        highlightType: 'active',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'none',
                        type: 'variable',
                        argPriorityAgg: [],
                        funcPriorityAgg: [3],
                        emphasizePriority: false,
                        bound: true
                      },
                      state: 'default',
                      type: 'call',
                      priority: 3
                    },
                    func: {
                      name: 'g',
                      highlightType: 'active',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'none',
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
                    name: 'g',
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
                name: 'b',
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
                    name: 'd',
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
                        name: 'd',
                        highlightType: 'active',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'none',
                        type: 'variable',
                        argPriorityAgg: [2, 4],
                        funcPriorityAgg: [],
                        emphasizePriority: false,
                        bound: true
                      },
                      func: {
                        arg: {
                          name: 'c',
                          highlightType: 'active',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'none',
                          type: 'variable',
                          argPriorityAgg: [3],
                          funcPriorityAgg: [],
                          emphasizePriority: false,
                          bound: true
                        },
                        func: {
                          name: 'b',
                          highlightType: 'active',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'none',
                          type: 'variable',
                          argPriorityAgg: [],
                          funcPriorityAgg: [3, 4],
                          emphasizePriority: false,
                          bound: true
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
                      arg: {
                        name: 'c',
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
                        arg: {
                          name: 'e',
                          highlightType: 'active',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'none',
                          type: 'variable',
                          argPriorityAgg: [],
                          funcPriorityAgg: [1, 2],
                          emphasizePriority: false,
                          bound: false,
                          shorthandUnary: undefined
                        },
                        body: {
                          arg: {
                            name: 'f',
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
                              name: 'f',
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
                              name: 'e',
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
                      state: 'default',
                      type: 'call',
                      priority: 1
                    },
                    state: 'default',
                    type: 'call',
                    priority: 2
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
                name: 'g',
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
                  name: 'h',
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
                    arg: {
                      arg: {
                        name: 'h',
                        highlightType: 'active',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'callArg',
                        type: 'variable',
                        argPriorityAgg: [1, 2, 3],
                        funcPriorityAgg: [],
                        emphasizePriority: false,
                        bound: true
                      },
                      func: {
                        name: 'g',
                        highlightType: 'active',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'callArg',
                        type: 'variable',
                        argPriorityAgg: [],
                        funcPriorityAgg: [3],
                        emphasizePriority: false,
                        bound: true
                      },
                      state: 'default',
                      type: 'call',
                      priority: 3
                    },
                    func: {
                      name: 'g',
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
                    name: 'g',
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
                name: 'b',
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
                    name: 'd',
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
                        name: 'd',
                        highlightType: 'active',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'funcBound',
                        type: 'variable',
                        argPriorityAgg: [2, 4],
                        funcPriorityAgg: [],
                        emphasizePriority: false,
                        bound: true
                      },
                      func: {
                        arg: {
                          name: 'c',
                          highlightType: 'active',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'funcBound',
                          type: 'variable',
                          argPriorityAgg: [3],
                          funcPriorityAgg: [],
                          emphasizePriority: false,
                          bound: true
                        },
                        func: {
                          name: 'b',
                          highlightType: 'active',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'funcBound',
                          type: 'variable',
                          argPriorityAgg: [],
                          funcPriorityAgg: [3, 4],
                          emphasizePriority: false,
                          bound: true
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
                      arg: {
                        name: 'c',
                        highlightType: 'active',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'funcBound',
                        type: 'variable',
                        argPriorityAgg: [1],
                        funcPriorityAgg: [],
                        emphasizePriority: false,
                        bound: true
                      },
                      func: {
                        arg: {
                          name: 'e',
                          highlightType: 'active',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'funcUnbound',
                          type: 'variable',
                          argPriorityAgg: [],
                          funcPriorityAgg: [1, 2],
                          emphasizePriority: false,
                          bound: false,
                          shorthandUnary: undefined
                        },
                        body: {
                          arg: {
                            name: 'f',
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
                              name: 'f',
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
                      state: 'default',
                      type: 'call',
                      priority: 1
                    },
                    state: 'default',
                    type: 'call',
                    priority: 2
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
                name: 'g',
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
                  name: 'h',
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
                    arg: {
                      arg: {
                        name: 'h',
                        highlightType: 'active',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'callArg',
                        type: 'variable',
                        argPriorityAgg: [1, 2, 3],
                        funcPriorityAgg: [],
                        emphasizePriority: false,
                        bound: true
                      },
                      func: {
                        name: 'g',
                        highlightType: 'active',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'callArg',
                        type: 'variable',
                        argPriorityAgg: [],
                        funcPriorityAgg: [3],
                        emphasizePriority: false,
                        bound: true
                      },
                      state: 'default',
                      type: 'call',
                      priority: 3
                    },
                    func: {
                      name: 'g',
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
                    name: 'g',
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
                    name: 'd',
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
                        name: 'd',
                        highlightType: 'highlighted',
                        topLeftBadgeType: 'unmatch',
                        bottomRightBadgeType: 'funcBound',
                        type: 'variable',
                        argPriorityAgg: [2, 4],
                        funcPriorityAgg: [],
                        emphasizePriority: false,
                        bound: true
                      },
                      func: {
                        arg: {
                          name: 'c',
                          highlightType: 'highlighted',
                          topLeftBadgeType: 'unmatch',
                          bottomRightBadgeType: 'funcBound',
                          type: 'variable',
                          argPriorityAgg: [3],
                          funcPriorityAgg: [],
                          emphasizePriority: false,
                          bound: true
                        },
                        func: {
                          name: 'b',
                          highlightType: 'highlighted',
                          topLeftBadgeType: 'match',
                          bottomRightBadgeType: 'funcBound',
                          type: 'variable',
                          argPriorityAgg: [],
                          funcPriorityAgg: [3, 4],
                          emphasizePriority: false,
                          bound: true
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
                      arg: {
                        name: 'c',
                        highlightType: 'highlighted',
                        topLeftBadgeType: 'unmatch',
                        bottomRightBadgeType: 'funcBound',
                        type: 'variable',
                        argPriorityAgg: [1],
                        funcPriorityAgg: [],
                        emphasizePriority: false,
                        bound: true
                      },
                      func: {
                        arg: {
                          name: 'e',
                          highlightType: 'active',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'funcUnbound',
                          type: 'variable',
                          argPriorityAgg: [],
                          funcPriorityAgg: [1, 2],
                          emphasizePriority: false,
                          bound: false,
                          shorthandUnary: undefined
                        },
                        body: {
                          arg: {
                            name: 'f',
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
                              name: 'f',
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
                              name: 'e',
                              highlightType: 'highlighted',
                              topLeftBadgeType: 'unmatch',
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
                      priority: 1
                    },
                    state: 'default',
                    type: 'call',
                    priority: 2
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
                name: 'g',
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
                  name: 'h',
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
                    arg: {
                      arg: {
                        name: 'h',
                        highlightType: 'betaReduceCallArgHighlighted',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'callArg',
                        type: 'variable',
                        argPriorityAgg: [1, 2, 3],
                        funcPriorityAgg: [],
                        emphasizePriority: false,
                        bound: true
                      },
                      func: {
                        name: 'g',
                        highlightType: 'betaReduceCallArgHighlighted',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'callArg',
                        type: 'variable',
                        argPriorityAgg: [],
                        funcPriorityAgg: [3],
                        emphasizePriority: false,
                        bound: true
                      },
                      state: 'default',
                      type: 'call',
                      priority: 3
                    },
                    func: {
                      name: 'g',
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
                    name: 'g',
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
                name: 'b',
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
                    name: 'd',
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
                        name: 'd',
                        highlightType: 'active',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'funcBound',
                        type: 'variable',
                        argPriorityAgg: [2, 4],
                        funcPriorityAgg: [],
                        emphasizePriority: false,
                        bound: true
                      },
                      func: {
                        arg: {
                          name: 'c',
                          highlightType: 'active',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'funcBound',
                          type: 'variable',
                          argPriorityAgg: [3],
                          funcPriorityAgg: [],
                          emphasizePriority: false,
                          bound: true
                        },
                        func: {
                          arg: {
                            name: 'g',
                            highlightType: 'highlighted',
                            topLeftBadgeType: 'betaReduced',
                            bottomRightBadgeType: 'funcBound',
                            type: 'variable',
                            argPriorityAgg: [],
                            funcPriorityAgg: [3, 4],
                            emphasizePriority: false,
                            bound: false,
                            shorthandUnary: undefined
                          },
                          body: {
                            arg: {
                              name: 'h',
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
                                arg: {
                                  arg: {
                                    name: 'h',
                                    highlightType: 'highlighted',
                                    topLeftBadgeType: 'betaReduced',
                                    bottomRightBadgeType: 'funcBound',
                                    type: 'variable',
                                    argPriorityAgg: [1, 2, 3],
                                    funcPriorityAgg: [],
                                    emphasizePriority: false,
                                    bound: true,
                                    shorthandUnary: undefined
                                  },
                                  func: {
                                    name: 'g',
                                    highlightType: 'highlighted',
                                    topLeftBadgeType: 'betaReduced',
                                    bottomRightBadgeType: 'funcBound',
                                    type: 'variable',
                                    argPriorityAgg: [],
                                    funcPriorityAgg: [3],
                                    emphasizePriority: false,
                                    bound: true,
                                    shorthandUnary: undefined
                                  },
                                  state: 'default',
                                  type: 'call',
                                  priority: 3
                                },
                                func: {
                                  name: 'g',
                                  highlightType: 'highlighted',
                                  topLeftBadgeType: 'betaReduced',
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
                                name: 'g',
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
                        priority: 3
                      },
                      state: 'default',
                      type: 'call',
                      priority: 4
                    },
                    func: {
                      arg: {
                        name: 'c',
                        highlightType: 'active',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'funcBound',
                        type: 'variable',
                        argPriorityAgg: [1],
                        funcPriorityAgg: [],
                        emphasizePriority: false,
                        bound: true
                      },
                      func: {
                        arg: {
                          name: 'e',
                          highlightType: 'active',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'funcUnbound',
                          type: 'variable',
                          argPriorityAgg: [],
                          funcPriorityAgg: [1, 2],
                          emphasizePriority: false,
                          bound: false,
                          shorthandUnary: undefined
                        },
                        body: {
                          arg: {
                            name: 'f',
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
                              name: 'f',
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
                      state: 'default',
                      type: 'call',
                      priority: 1
                    },
                    state: 'default',
                    type: 'call',
                    priority: 2
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
                name: 'g',
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
                  name: 'h',
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
                    arg: {
                      arg: {
                        name: 'h',
                        highlightType: 'removed',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'callArg',
                        type: 'variable',
                        argPriorityAgg: [1, 2, 3],
                        funcPriorityAgg: [],
                        emphasizePriority: false,
                        bound: true
                      },
                      func: {
                        name: 'g',
                        highlightType: 'removed',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'callArg',
                        type: 'variable',
                        argPriorityAgg: [],
                        funcPriorityAgg: [3],
                        emphasizePriority: false,
                        bound: true
                      },
                      state: 'default',
                      type: 'call',
                      priority: 3
                    },
                    func: {
                      name: 'g',
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
                    name: 'g',
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
                name: 'b',
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
                  bottomRightBadgeType: 'funcUnbound',
                  type: 'variable',
                  argPriorityAgg: [],
                  funcPriorityAgg: [],
                  emphasizePriority: false,
                  bound: false
                },
                body: {
                  arg: {
                    name: 'd',
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
                        name: 'd',
                        highlightType: 'active',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'funcBound',
                        type: 'variable',
                        argPriorityAgg: [2, 4],
                        funcPriorityAgg: [],
                        emphasizePriority: false,
                        bound: true
                      },
                      func: {
                        arg: {
                          name: 'c',
                          highlightType: 'active',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'funcBound',
                          type: 'variable',
                          argPriorityAgg: [3],
                          funcPriorityAgg: [],
                          emphasizePriority: false,
                          bound: true
                        },
                        func: {
                          arg: {
                            name: 'g',
                            highlightType: 'active',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'funcUnbound',
                            type: 'variable',
                            argPriorityAgg: [],
                            funcPriorityAgg: [3, 4],
                            emphasizePriority: false,
                            bound: false,
                            shorthandUnary: undefined
                          },
                          body: {
                            arg: {
                              name: 'h',
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
                                arg: {
                                  arg: {
                                    name: 'h',
                                    highlightType: 'active',
                                    topLeftBadgeType: 'none',
                                    bottomRightBadgeType: 'funcBound',
                                    type: 'variable',
                                    argPriorityAgg: [1, 2, 3],
                                    funcPriorityAgg: [],
                                    emphasizePriority: false,
                                    bound: true,
                                    shorthandUnary: undefined
                                  },
                                  func: {
                                    name: 'g',
                                    highlightType: 'active',
                                    topLeftBadgeType: 'none',
                                    bottomRightBadgeType: 'funcBound',
                                    type: 'variable',
                                    argPriorityAgg: [],
                                    funcPriorityAgg: [3],
                                    emphasizePriority: false,
                                    bound: true,
                                    shorthandUnary: undefined
                                  },
                                  state: 'default',
                                  type: 'call',
                                  priority: 3
                                },
                                func: {
                                  name: 'g',
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
                                name: 'g',
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
                        priority: 3
                      },
                      state: 'default',
                      type: 'call',
                      priority: 4
                    },
                    func: {
                      arg: {
                        name: 'c',
                        highlightType: 'active',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'funcBound',
                        type: 'variable',
                        argPriorityAgg: [1],
                        funcPriorityAgg: [],
                        emphasizePriority: false,
                        bound: true
                      },
                      func: {
                        arg: {
                          name: 'e',
                          highlightType: 'active',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'funcUnbound',
                          type: 'variable',
                          argPriorityAgg: [],
                          funcPriorityAgg: [1, 2],
                          emphasizePriority: false,
                          bound: false,
                          shorthandUnary: undefined
                        },
                        body: {
                          arg: {
                            name: 'f',
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
                              name: 'f',
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
                      state: 'default',
                      type: 'call',
                      priority: 1
                    },
                    state: 'default',
                    type: 'call',
                    priority: 2
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
                name: 'd',
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
                    name: 'd',
                    highlightType: 'default',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'none',
                    type: 'variable',
                    argPriorityAgg: [2, 4],
                    funcPriorityAgg: [],
                    emphasizePriority: false,
                    bound: true
                  },
                  func: {
                    arg: {
                      name: 'c',
                      highlightType: 'default',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'none',
                      type: 'variable',
                      argPriorityAgg: [3],
                      funcPriorityAgg: [],
                      emphasizePriority: false,
                      bound: true
                    },
                    func: {
                      arg: {
                        name: 'g',
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
                          name: 'h',
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
                            arg: {
                              arg: {
                                name: 'h',
                                highlightType: 'default',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'none',
                                type: 'variable',
                                argPriorityAgg: [1, 2, 3],
                                funcPriorityAgg: [],
                                emphasizePriority: false,
                                bound: true,
                                shorthandUnary: undefined
                              },
                              func: {
                                name: 'g',
                                highlightType: 'default',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'none',
                                type: 'variable',
                                argPriorityAgg: [],
                                funcPriorityAgg: [3],
                                emphasizePriority: false,
                                bound: true,
                                shorthandUnary: undefined
                              },
                              state: 'default',
                              type: 'call',
                              priority: 3
                            },
                            func: {
                              name: 'g',
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
                            name: 'g',
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
                    priority: 3
                  },
                  state: 'default',
                  type: 'call',
                  priority: 4
                },
                func: {
                  arg: {
                    name: 'c',
                    highlightType: 'default',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'none',
                    type: 'variable',
                    argPriorityAgg: [1],
                    funcPriorityAgg: [],
                    emphasizePriority: false,
                    bound: true
                  },
                  func: {
                    arg: {
                      name: 'e',
                      highlightType: 'default',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'none',
                      type: 'variable',
                      argPriorityAgg: [],
                      funcPriorityAgg: [1, 2],
                      emphasizePriority: false,
                      bound: false,
                      shorthandUnary: undefined
                    },
                    body: {
                      arg: {
                        name: 'f',
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
                          name: 'f',
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
                          name: 'e',
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
                  priority: 1
                },
                state: 'default',
                type: 'call',
                priority: 2
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
                name: 'd',
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
                    name: 'd',
                    highlightType: 'default',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'none',
                    type: 'variable',
                    argPriorityAgg: [2, 4],
                    funcPriorityAgg: [],
                    emphasizePriority: false,
                    bound: true
                  },
                  func: {
                    arg: {
                      name: 'c',
                      highlightType: 'default',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'none',
                      type: 'variable',
                      argPriorityAgg: [3],
                      funcPriorityAgg: [],
                      emphasizePriority: false,
                      bound: true
                    },
                    func: {
                      arg: {
                        name: 'g',
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
                          name: 'h',
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
                            arg: {
                              arg: {
                                name: 'h',
                                highlightType: 'default',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'none',
                                type: 'variable',
                                argPriorityAgg: [1, 2, 3],
                                funcPriorityAgg: [],
                                emphasizePriority: false,
                                bound: true,
                                shorthandUnary: undefined
                              },
                              func: {
                                name: 'g',
                                highlightType: 'default',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'none',
                                type: 'variable',
                                argPriorityAgg: [],
                                funcPriorityAgg: [3],
                                emphasizePriority: false,
                                bound: true,
                                shorthandUnary: undefined
                              },
                              state: 'default',
                              type: 'call',
                              priority: 3
                            },
                            func: {
                              name: 'g',
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
                            name: 'g',
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
                    priority: 3
                  },
                  state: 'default',
                  type: 'call',
                  priority: 4
                },
                func: {
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
                      name: 'e',
                      highlightType: 'active',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'none',
                      type: 'variable',
                      argPriorityAgg: [],
                      funcPriorityAgg: [1, 2],
                      emphasizePriority: true,
                      bound: false,
                      shorthandUnary: undefined
                    },
                    body: {
                      arg: {
                        name: 'f',
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
                          name: 'f',
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
                          name: 'e',
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
                  priority: 1
                },
                state: 'default',
                type: 'call',
                priority: 2
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
          previouslyChangedExpressionState: 'showFuncUnbound',
          expression: {
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
                name: 'd',
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
                    name: 'd',
                    highlightType: 'default',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'none',
                    type: 'variable',
                    argPriorityAgg: [2, 4],
                    funcPriorityAgg: [],
                    emphasizePriority: false,
                    bound: true
                  },
                  func: {
                    arg: {
                      name: 'c',
                      highlightType: 'default',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'none',
                      type: 'variable',
                      argPriorityAgg: [3],
                      funcPriorityAgg: [],
                      emphasizePriority: false,
                      bound: true
                    },
                    func: {
                      arg: {
                        name: 'g',
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
                          name: 'h',
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
                            arg: {
                              arg: {
                                name: 'h',
                                highlightType: 'default',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'none',
                                type: 'variable',
                                argPriorityAgg: [1, 2, 3],
                                funcPriorityAgg: [],
                                emphasizePriority: false,
                                bound: true,
                                shorthandUnary: undefined
                              },
                              func: {
                                name: 'g',
                                highlightType: 'default',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'none',
                                type: 'variable',
                                argPriorityAgg: [],
                                funcPriorityAgg: [3],
                                emphasizePriority: false,
                                bound: true,
                                shorthandUnary: undefined
                              },
                              state: 'default',
                              type: 'call',
                              priority: 3
                            },
                            func: {
                              name: 'g',
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
                            name: 'g',
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
                    priority: 3
                  },
                  state: 'default',
                  type: 'call',
                  priority: 4
                },
                func: {
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
                      name: 'e',
                      highlightType: 'active',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'funcArg',
                      type: 'variable',
                      argPriorityAgg: [],
                      funcPriorityAgg: [1, 2],
                      emphasizePriority: true,
                      bound: false,
                      shorthandUnary: undefined
                    },
                    body: {
                      arg: {
                        name: 'f',
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
                          name: 'f',
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
                  state: 'showFuncUnbound',
                  type: 'call',
                  priority: 1
                },
                state: 'default',
                type: 'call',
                priority: 2
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
          previouslyChangedExpressionState: 'betaReducePreviewBefore',
          expression: {
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
                name: 'd',
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
                    name: 'd',
                    highlightType: 'default',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'none',
                    type: 'variable',
                    argPriorityAgg: [2, 4],
                    funcPriorityAgg: [],
                    emphasizePriority: false,
                    bound: true
                  },
                  func: {
                    arg: {
                      name: 'c',
                      highlightType: 'default',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'none',
                      type: 'variable',
                      argPriorityAgg: [3],
                      funcPriorityAgg: [],
                      emphasizePriority: false,
                      bound: true
                    },
                    func: {
                      arg: {
                        name: 'g',
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
                          name: 'h',
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
                            arg: {
                              arg: {
                                name: 'h',
                                highlightType: 'default',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'none',
                                type: 'variable',
                                argPriorityAgg: [1, 2, 3],
                                funcPriorityAgg: [],
                                emphasizePriority: false,
                                bound: true,
                                shorthandUnary: undefined
                              },
                              func: {
                                name: 'g',
                                highlightType: 'default',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'none',
                                type: 'variable',
                                argPriorityAgg: [],
                                funcPriorityAgg: [3],
                                emphasizePriority: false,
                                bound: true,
                                shorthandUnary: undefined
                              },
                              state: 'default',
                              type: 'call',
                              priority: 3
                            },
                            func: {
                              name: 'g',
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
                            name: 'g',
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
                    priority: 3
                  },
                  state: 'default',
                  type: 'call',
                  priority: 4
                },
                func: {
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
                      name: 'e',
                      highlightType: 'highlighted',
                      topLeftBadgeType: 'match',
                      bottomRightBadgeType: 'funcArg',
                      type: 'variable',
                      argPriorityAgg: [],
                      funcPriorityAgg: [1, 2],
                      emphasizePriority: true,
                      bound: false,
                      shorthandUnary: undefined
                    },
                    body: {
                      arg: {
                        name: 'f',
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
                          name: 'f',
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
                          name: 'e',
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
                  priority: 1
                },
                state: 'default',
                type: 'call',
                priority: 2
              },
              type: 'function',
              meta: undefined
            },
            type: 'function',
            meta: undefined
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
                name: 'd',
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
                    name: 'd',
                    highlightType: 'default',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'none',
                    type: 'variable',
                    argPriorityAgg: [2, 4],
                    funcPriorityAgg: [],
                    emphasizePriority: false,
                    bound: true
                  },
                  func: {
                    arg: {
                      name: 'c',
                      highlightType: 'default',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'none',
                      type: 'variable',
                      argPriorityAgg: [3],
                      funcPriorityAgg: [],
                      emphasizePriority: false,
                      bound: true
                    },
                    func: {
                      arg: {
                        name: 'g',
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
                          name: 'h',
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
                            arg: {
                              arg: {
                                name: 'h',
                                highlightType: 'default',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'none',
                                type: 'variable',
                                argPriorityAgg: [1, 2, 3],
                                funcPriorityAgg: [],
                                emphasizePriority: false,
                                bound: true,
                                shorthandUnary: undefined
                              },
                              func: {
                                name: 'g',
                                highlightType: 'default',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'none',
                                type: 'variable',
                                argPriorityAgg: [],
                                funcPriorityAgg: [3],
                                emphasizePriority: false,
                                bound: true,
                                shorthandUnary: undefined
                              },
                              state: 'default',
                              type: 'call',
                              priority: 3
                            },
                            func: {
                              name: 'g',
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
                            name: 'g',
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
                    priority: 3
                  },
                  state: 'default',
                  type: 'call',
                  priority: 4
                },
                func: {
                  arg: {
                    name: 'c',
                    highlightType: 'betaReduceCallArgHighlighted',
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
                      name: 'e',
                      highlightType: 'active',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'funcArg',
                      type: 'variable',
                      argPriorityAgg: [],
                      funcPriorityAgg: [1, 2],
                      emphasizePriority: true,
                      bound: false,
                      shorthandUnary: undefined
                    },
                    body: {
                      arg: {
                        name: 'f',
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
                          name: 'f',
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
                  priority: 1
                },
                state: 'default',
                type: 'call',
                priority: 2
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
          previouslyChangedExpressionState: 'betaReducePreviewCrossed',
          expression: {
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
                name: 'd',
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
                    name: 'd',
                    highlightType: 'default',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'none',
                    type: 'variable',
                    argPriorityAgg: [2, 4],
                    funcPriorityAgg: [],
                    emphasizePriority: false,
                    bound: true
                  },
                  func: {
                    arg: {
                      name: 'c',
                      highlightType: 'default',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'none',
                      type: 'variable',
                      argPriorityAgg: [3],
                      funcPriorityAgg: [],
                      emphasizePriority: false,
                      bound: true
                    },
                    func: {
                      arg: {
                        name: 'g',
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
                          name: 'h',
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
                            arg: {
                              arg: {
                                name: 'h',
                                highlightType: 'default',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'none',
                                type: 'variable',
                                argPriorityAgg: [1, 2, 3],
                                funcPriorityAgg: [],
                                emphasizePriority: false,
                                bound: true,
                                shorthandUnary: undefined
                              },
                              func: {
                                name: 'g',
                                highlightType: 'default',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'none',
                                type: 'variable',
                                argPriorityAgg: [],
                                funcPriorityAgg: [3],
                                emphasizePriority: false,
                                bound: true,
                                shorthandUnary: undefined
                              },
                              state: 'default',
                              type: 'call',
                              priority: 3
                            },
                            func: {
                              name: 'g',
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
                            name: 'g',
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
                    priority: 3
                  },
                  state: 'default',
                  type: 'call',
                  priority: 4
                },
                func: {
                  arg: {
                    name: 'c',
                    highlightType: 'removed',
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
                      name: 'e',
                      highlightType: 'removed',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'funcArg',
                      type: 'variable',
                      argPriorityAgg: [],
                      funcPriorityAgg: [1, 2],
                      emphasizePriority: true,
                      bound: false,
                      shorthandUnary: undefined
                    },
                    body: {
                      arg: {
                        name: 'f',
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
                          name: 'f',
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
          containerState: 'ready',
          previouslyChangedExpressionState: 'default',
          expression: {
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
                name: 'd',
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
                    name: 'd',
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
                      name: 'c',
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
                        name: 'g',
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
                          name: 'h',
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
                            arg: {
                              arg: {
                                name: 'h',
                                highlightType: 'default',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'none',
                                type: 'variable',
                                argPriorityAgg: [1, 2, 3],
                                funcPriorityAgg: [],
                                emphasizePriority: false,
                                bound: true,
                                shorthandUnary: undefined
                              },
                              func: {
                                name: 'g',
                                highlightType: 'default',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'none',
                                type: 'variable',
                                argPriorityAgg: [],
                                funcPriorityAgg: [3],
                                emphasizePriority: false,
                                bound: true,
                                shorthandUnary: undefined
                              },
                              state: 'default',
                              type: 'call',
                              priority: 3
                            },
                            func: {
                              name: 'g',
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
                            name: 'g',
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
                  arg: {
                    name: 'f',
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
                      name: 'f',
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
                      name: 'c',
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
                name: 'd',
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
                    name: 'd',
                    highlightType: 'active',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'none',
                    type: 'variable',
                    argPriorityAgg: [1, 3],
                    funcPriorityAgg: [],
                    emphasizePriority: true,
                    bound: true
                  },
                  func: {
                    arg: {
                      name: 'c',
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
                      arg: {
                        name: 'g',
                        highlightType: 'active',
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
                          name: 'h',
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
                            arg: {
                              arg: {
                                name: 'h',
                                highlightType: 'active',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'none',
                                type: 'variable',
                                argPriorityAgg: [1, 2, 3],
                                funcPriorityAgg: [],
                                emphasizePriority: false,
                                bound: true,
                                shorthandUnary: undefined
                              },
                              func: {
                                name: 'g',
                                highlightType: 'active',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'none',
                                type: 'variable',
                                argPriorityAgg: [],
                                funcPriorityAgg: [3],
                                emphasizePriority: false,
                                bound: true,
                                shorthandUnary: undefined
                              },
                              state: 'default',
                              type: 'call',
                              priority: 3
                            },
                            func: {
                              name: 'g',
                              highlightType: 'active',
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
                            name: 'g',
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
                    state: 'default',
                    type: 'call',
                    priority: 2
                  },
                  state: 'default',
                  type: 'call',
                  priority: 3
                },
                func: {
                  arg: {
                    name: 'f',
                    highlightType: 'active',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'none',
                    type: 'variable',
                    argPriorityAgg: [],
                    funcPriorityAgg: [1],
                    emphasizePriority: true,
                    bound: false,
                    shorthandUnary: undefined
                  },
                  body: {
                    arg: {
                      name: 'f',
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
                      name: 'c',
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
          activePriority: 1
        },
        {
          containerState: 'stepped',
          previouslyChangedExpressionState: 'showFuncBound',
          expression: {
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
                name: 'd',
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
                    name: 'd',
                    highlightType: 'active',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'callArg',
                    type: 'variable',
                    argPriorityAgg: [1, 3],
                    funcPriorityAgg: [],
                    emphasizePriority: true,
                    bound: true
                  },
                  func: {
                    arg: {
                      name: 'c',
                      highlightType: 'active',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'callArg',
                      type: 'variable',
                      argPriorityAgg: [2],
                      funcPriorityAgg: [],
                      emphasizePriority: false,
                      bound: true
                    },
                    func: {
                      arg: {
                        name: 'g',
                        highlightType: 'active',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'callArg',
                        type: 'variable',
                        argPriorityAgg: [],
                        funcPriorityAgg: [2, 3],
                        emphasizePriority: false,
                        bound: false,
                        shorthandUnary: undefined
                      },
                      body: {
                        arg: {
                          name: 'h',
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
                              arg: {
                                name: 'h',
                                highlightType: 'active',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'callArg',
                                type: 'variable',
                                argPriorityAgg: [1, 2, 3],
                                funcPriorityAgg: [],
                                emphasizePriority: false,
                                bound: true,
                                shorthandUnary: undefined
                              },
                              func: {
                                name: 'g',
                                highlightType: 'active',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'callArg',
                                type: 'variable',
                                argPriorityAgg: [],
                                funcPriorityAgg: [3],
                                emphasizePriority: false,
                                bound: true,
                                shorthandUnary: undefined
                              },
                              state: 'default',
                              type: 'call',
                              priority: 3
                            },
                            func: {
                              name: 'g',
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
                            name: 'g',
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
                  state: 'default',
                  type: 'call',
                  priority: 3
                },
                func: {
                  arg: {
                    name: 'f',
                    highlightType: 'active',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'funcArg',
                    type: 'variable',
                    argPriorityAgg: [],
                    funcPriorityAgg: [1],
                    emphasizePriority: true,
                    bound: false,
                    shorthandUnary: undefined
                  },
                  body: {
                    arg: {
                      name: 'f',
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
                state: 'showFuncBound',
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
          activePriority: 1
        },
        {
          containerState: 'stepped',
          previouslyChangedExpressionState: 'betaReducePreviewBefore',
          expression: {
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
                name: 'd',
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
                    name: 'd',
                    highlightType: 'active',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'callArg',
                    type: 'variable',
                    argPriorityAgg: [1, 3],
                    funcPriorityAgg: [],
                    emphasizePriority: true,
                    bound: true
                  },
                  func: {
                    arg: {
                      name: 'c',
                      highlightType: 'active',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'callArg',
                      type: 'variable',
                      argPriorityAgg: [2],
                      funcPriorityAgg: [],
                      emphasizePriority: false,
                      bound: true
                    },
                    func: {
                      arg: {
                        name: 'g',
                        highlightType: 'active',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'callArg',
                        type: 'variable',
                        argPriorityAgg: [],
                        funcPriorityAgg: [2, 3],
                        emphasizePriority: false,
                        bound: false,
                        shorthandUnary: undefined
                      },
                      body: {
                        arg: {
                          name: 'h',
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
                              arg: {
                                name: 'h',
                                highlightType: 'active',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'callArg',
                                type: 'variable',
                                argPriorityAgg: [1, 2, 3],
                                funcPriorityAgg: [],
                                emphasizePriority: false,
                                bound: true,
                                shorthandUnary: undefined
                              },
                              func: {
                                name: 'g',
                                highlightType: 'active',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'callArg',
                                type: 'variable',
                                argPriorityAgg: [],
                                funcPriorityAgg: [3],
                                emphasizePriority: false,
                                bound: true,
                                shorthandUnary: undefined
                              },
                              state: 'default',
                              type: 'call',
                              priority: 3
                            },
                            func: {
                              name: 'g',
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
                            name: 'g',
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
                  state: 'default',
                  type: 'call',
                  priority: 3
                },
                func: {
                  arg: {
                    name: 'f',
                    highlightType: 'highlighted',
                    topLeftBadgeType: 'match',
                    bottomRightBadgeType: 'funcArg',
                    type: 'variable',
                    argPriorityAgg: [],
                    funcPriorityAgg: [1],
                    emphasizePriority: true,
                    bound: false,
                    shorthandUnary: undefined
                  },
                  body: {
                    arg: {
                      name: 'f',
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
                      name: 'c',
                      highlightType: 'highlighted',
                      topLeftBadgeType: 'unmatch',
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
          activePriority: 1
        },
        {
          containerState: 'stepped',
          previouslyChangedExpressionState: 'betaReducePreviewAfter',
          expression: {
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
                name: 'd',
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
                    name: 'd',
                    highlightType: 'betaReduceCallArgHighlighted',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'callArg',
                    type: 'variable',
                    argPriorityAgg: [1, 3],
                    funcPriorityAgg: [],
                    emphasizePriority: true,
                    bound: true
                  },
                  func: {
                    arg: {
                      name: 'c',
                      highlightType: 'betaReduceCallArgHighlighted',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'callArg',
                      type: 'variable',
                      argPriorityAgg: [2],
                      funcPriorityAgg: [],
                      emphasizePriority: false,
                      bound: true
                    },
                    func: {
                      arg: {
                        name: 'g',
                        highlightType: 'betaReduceCallArgHighlighted',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'callArg',
                        type: 'variable',
                        argPriorityAgg: [],
                        funcPriorityAgg: [2, 3],
                        emphasizePriority: false,
                        bound: false,
                        shorthandUnary: undefined
                      },
                      body: {
                        arg: {
                          name: 'h',
                          highlightType: 'betaReduceCallArgHighlighted',
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
                              arg: {
                                name: 'h',
                                highlightType: 'betaReduceCallArgHighlighted',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'callArg',
                                type: 'variable',
                                argPriorityAgg: [1, 2, 3],
                                funcPriorityAgg: [],
                                emphasizePriority: false,
                                bound: true,
                                shorthandUnary: undefined
                              },
                              func: {
                                name: 'g',
                                highlightType: 'betaReduceCallArgHighlighted',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'callArg',
                                type: 'variable',
                                argPriorityAgg: [],
                                funcPriorityAgg: [3],
                                emphasizePriority: false,
                                bound: true,
                                shorthandUnary: undefined
                              },
                              state: 'default',
                              type: 'call',
                              priority: 3
                            },
                            func: {
                              name: 'g',
                              highlightType: 'betaReduceCallArgHighlighted',
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
                            name: 'g',
                            highlightType: 'betaReduceCallArgHighlighted',
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
                  state: 'default',
                  type: 'call',
                  priority: 3
                },
                func: {
                  arg: {
                    name: 'f',
                    highlightType: 'active',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'funcArg',
                    type: 'variable',
                    argPriorityAgg: [],
                    funcPriorityAgg: [1],
                    emphasizePriority: true,
                    bound: false,
                    shorthandUnary: undefined
                  },
                  body: {
                    arg: {
                      arg: {
                        name: 'd',
                        highlightType: 'highlighted',
                        topLeftBadgeType: 'betaReduced',
                        bottomRightBadgeType: 'funcBound',
                        type: 'variable',
                        argPriorityAgg: [1, 3],
                        funcPriorityAgg: [],
                        emphasizePriority: false,
                        bound: true,
                        shorthandUnary: undefined
                      },
                      func: {
                        arg: {
                          name: 'c',
                          highlightType: 'highlighted',
                          topLeftBadgeType: 'betaReduced',
                          bottomRightBadgeType: 'funcBound',
                          type: 'variable',
                          argPriorityAgg: [2],
                          funcPriorityAgg: [],
                          emphasizePriority: false,
                          bound: true,
                          shorthandUnary: undefined
                        },
                        func: {
                          arg: {
                            name: 'g',
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
                              name: 'h',
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
                                arg: {
                                  arg: {
                                    name: 'h',
                                    highlightType: 'highlighted',
                                    topLeftBadgeType: 'betaReduced',
                                    bottomRightBadgeType: 'funcBound',
                                    type: 'variable',
                                    argPriorityAgg: [1, 2, 3],
                                    funcPriorityAgg: [],
                                    emphasizePriority: false,
                                    bound: true,
                                    shorthandUnary: undefined
                                  },
                                  func: {
                                    name: 'g',
                                    highlightType: 'highlighted',
                                    topLeftBadgeType: 'betaReduced',
                                    bottomRightBadgeType: 'funcBound',
                                    type: 'variable',
                                    argPriorityAgg: [],
                                    funcPriorityAgg: [3],
                                    emphasizePriority: false,
                                    bound: true,
                                    shorthandUnary: undefined
                                  },
                                  state: 'default',
                                  type: 'call',
                                  priority: 3
                                },
                                func: {
                                  name: 'g',
                                  highlightType: 'highlighted',
                                  topLeftBadgeType: 'betaReduced',
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
                                name: 'g',
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
                state: 'betaReducePreviewAfter',
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
          activePriority: 1
        },
        {
          containerState: 'stepped',
          previouslyChangedExpressionState: 'betaReducePreviewCrossed',
          expression: {
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
                name: 'd',
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
                    name: 'd',
                    highlightType: 'removed',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'callArg',
                    type: 'variable',
                    argPriorityAgg: [1, 3],
                    funcPriorityAgg: [],
                    emphasizePriority: true,
                    bound: true
                  },
                  func: {
                    arg: {
                      name: 'c',
                      highlightType: 'removed',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'callArg',
                      type: 'variable',
                      argPriorityAgg: [2],
                      funcPriorityAgg: [],
                      emphasizePriority: false,
                      bound: true
                    },
                    func: {
                      arg: {
                        name: 'g',
                        highlightType: 'removed',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'callArg',
                        type: 'variable',
                        argPriorityAgg: [],
                        funcPriorityAgg: [2, 3],
                        emphasizePriority: false,
                        bound: false,
                        shorthandUnary: undefined
                      },
                      body: {
                        arg: {
                          name: 'h',
                          highlightType: 'removed',
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
                              arg: {
                                name: 'h',
                                highlightType: 'removed',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'callArg',
                                type: 'variable',
                                argPriorityAgg: [1, 2, 3],
                                funcPriorityAgg: [],
                                emphasizePriority: false,
                                bound: true,
                                shorthandUnary: undefined
                              },
                              func: {
                                name: 'g',
                                highlightType: 'removed',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'callArg',
                                type: 'variable',
                                argPriorityAgg: [],
                                funcPriorityAgg: [3],
                                emphasizePriority: false,
                                bound: true,
                                shorthandUnary: undefined
                              },
                              state: 'default',
                              type: 'call',
                              priority: 3
                            },
                            func: {
                              name: 'g',
                              highlightType: 'removed',
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
                            name: 'g',
                            highlightType: 'removed',
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
                  state: 'default',
                  type: 'call',
                  priority: 3
                },
                func: {
                  arg: {
                    name: 'f',
                    highlightType: 'removed',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'funcArg',
                    type: 'variable',
                    argPriorityAgg: [],
                    funcPriorityAgg: [1],
                    emphasizePriority: true,
                    bound: false,
                    shorthandUnary: undefined
                  },
                  body: {
                    arg: {
                      arg: {
                        name: 'd',
                        highlightType: 'active',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'funcBound',
                        type: 'variable',
                        argPriorityAgg: [1, 3],
                        funcPriorityAgg: [],
                        emphasizePriority: false,
                        bound: true,
                        shorthandUnary: undefined
                      },
                      func: {
                        arg: {
                          name: 'c',
                          highlightType: 'active',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'funcBound',
                          type: 'variable',
                          argPriorityAgg: [2],
                          funcPriorityAgg: [],
                          emphasizePriority: false,
                          bound: true,
                          shorthandUnary: undefined
                        },
                        func: {
                          arg: {
                            name: 'g',
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
                              name: 'h',
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
                                arg: {
                                  arg: {
                                    name: 'h',
                                    highlightType: 'active',
                                    topLeftBadgeType: 'none',
                                    bottomRightBadgeType: 'funcBound',
                                    type: 'variable',
                                    argPriorityAgg: [1, 2, 3],
                                    funcPriorityAgg: [],
                                    emphasizePriority: false,
                                    bound: true,
                                    shorthandUnary: undefined
                                  },
                                  func: {
                                    name: 'g',
                                    highlightType: 'active',
                                    topLeftBadgeType: 'none',
                                    bottomRightBadgeType: 'funcBound',
                                    type: 'variable',
                                    argPriorityAgg: [],
                                    funcPriorityAgg: [3],
                                    emphasizePriority: false,
                                    bound: true,
                                    shorthandUnary: undefined
                                  },
                                  state: 'default',
                                  type: 'call',
                                  priority: 3
                                },
                                func: {
                                  name: 'g',
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
                                name: 'g',
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
          activePriority: 1
        },
        {
          containerState: 'ready',
          previouslyChangedExpressionState: 'default',
          expression: {
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
                name: 'd',
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
                    name: 'd',
                    highlightType: 'default',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'none',
                    type: 'variable',
                    argPriorityAgg: [1, 3],
                    funcPriorityAgg: [],
                    emphasizePriority: false,
                    bound: true,
                    shorthandUnary: undefined
                  },
                  func: {
                    arg: {
                      name: 'c',
                      highlightType: 'default',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'none',
                      type: 'variable',
                      argPriorityAgg: [2],
                      funcPriorityAgg: [],
                      emphasizePriority: false,
                      bound: true,
                      shorthandUnary: undefined
                    },
                    func: {
                      arg: {
                        name: 'g',
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
                          name: 'h',
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
                            arg: {
                              arg: {
                                name: 'h',
                                highlightType: 'default',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'none',
                                type: 'variable',
                                argPriorityAgg: [1, 2, 3],
                                funcPriorityAgg: [],
                                emphasizePriority: false,
                                bound: true,
                                shorthandUnary: undefined
                              },
                              func: {
                                name: 'g',
                                highlightType: 'default',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'none',
                                type: 'variable',
                                argPriorityAgg: [],
                                funcPriorityAgg: [3],
                                emphasizePriority: false,
                                bound: true,
                                shorthandUnary: undefined
                              },
                              state: 'default',
                              type: 'call',
                              priority: 3
                            },
                            func: {
                              name: 'g',
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
                            name: 'g',
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
                  name: 'c',
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
          unaryJustExecuted: undefined
        },
        {
          containerState: 'stepped',
          previouslyChangedExpressionState: 'active',
          expression: {
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
                name: 'd',
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
                    name: 'd',
                    highlightType: 'default',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'none',
                    type: 'variable',
                    argPriorityAgg: [1, 3],
                    funcPriorityAgg: [],
                    emphasizePriority: false,
                    bound: true,
                    shorthandUnary: undefined
                  },
                  func: {
                    arg: {
                      name: 'c',
                      highlightType: 'active',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'none',
                      type: 'variable',
                      argPriorityAgg: [2],
                      funcPriorityAgg: [],
                      emphasizePriority: true,
                      bound: true,
                      shorthandUnary: undefined
                    },
                    func: {
                      arg: {
                        name: 'g',
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
                          name: 'h',
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
                            arg: {
                              arg: {
                                name: 'h',
                                highlightType: 'active',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'none',
                                type: 'variable',
                                argPriorityAgg: [1, 2, 3],
                                funcPriorityAgg: [],
                                emphasizePriority: false,
                                bound: true,
                                shorthandUnary: undefined
                              },
                              func: {
                                name: 'g',
                                highlightType: 'active',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'none',
                                type: 'variable',
                                argPriorityAgg: [],
                                funcPriorityAgg: [3],
                                emphasizePriority: false,
                                bound: true,
                                shorthandUnary: undefined
                              },
                              state: 'default',
                              type: 'call',
                              priority: 3
                            },
                            func: {
                              name: 'g',
                              highlightType: 'active',
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
                            name: 'g',
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
                  name: 'c',
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
          unaryJustExecuted: undefined,
          matchExists: undefined,
          activePriority: 2
        },
        {
          containerState: 'stepped',
          previouslyChangedExpressionState: 'showFuncUnbound',
          expression: {
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
                name: 'd',
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
                    name: 'd',
                    highlightType: 'default',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'none',
                    type: 'variable',
                    argPriorityAgg: [1, 3],
                    funcPriorityAgg: [],
                    emphasizePriority: false,
                    bound: true,
                    shorthandUnary: undefined
                  },
                  func: {
                    arg: {
                      name: 'c',
                      highlightType: 'active',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'callArg',
                      type: 'variable',
                      argPriorityAgg: [2],
                      funcPriorityAgg: [],
                      emphasizePriority: true,
                      bound: true,
                      shorthandUnary: undefined
                    },
                    func: {
                      arg: {
                        name: 'g',
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
                          name: 'h',
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
                            arg: {
                              arg: {
                                name: 'h',
                                highlightType: 'active',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'funcBound',
                                type: 'variable',
                                argPriorityAgg: [1, 2, 3],
                                funcPriorityAgg: [],
                                emphasizePriority: false,
                                bound: true,
                                shorthandUnary: undefined
                              },
                              func: {
                                name: 'g',
                                highlightType: 'active',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'funcBound',
                                type: 'variable',
                                argPriorityAgg: [],
                                funcPriorityAgg: [3],
                                emphasizePriority: false,
                                bound: true,
                                shorthandUnary: undefined
                              },
                              state: 'default',
                              type: 'call',
                              priority: 3
                            },
                            func: {
                              name: 'g',
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
                            name: 'g',
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
                  name: 'c',
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
          unaryJustExecuted: undefined,
          matchExists: undefined,
          activePriority: 2
        },
        {
          containerState: 'stepped',
          previouslyChangedExpressionState: 'betaReducePreviewBefore',
          expression: {
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
                name: 'd',
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
                    name: 'd',
                    highlightType: 'default',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'none',
                    type: 'variable',
                    argPriorityAgg: [1, 3],
                    funcPriorityAgg: [],
                    emphasizePriority: false,
                    bound: true,
                    shorthandUnary: undefined
                  },
                  func: {
                    arg: {
                      name: 'c',
                      highlightType: 'active',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'callArg',
                      type: 'variable',
                      argPriorityAgg: [2],
                      funcPriorityAgg: [],
                      emphasizePriority: true,
                      bound: true,
                      shorthandUnary: undefined
                    },
                    func: {
                      arg: {
                        name: 'g',
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
                          name: 'h',
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
                            arg: {
                              arg: {
                                name: 'h',
                                highlightType: 'highlighted',
                                topLeftBadgeType: 'unmatch',
                                bottomRightBadgeType: 'funcBound',
                                type: 'variable',
                                argPriorityAgg: [1, 2, 3],
                                funcPriorityAgg: [],
                                emphasizePriority: false,
                                bound: true,
                                shorthandUnary: undefined
                              },
                              func: {
                                name: 'g',
                                highlightType: 'highlighted',
                                topLeftBadgeType: 'match',
                                bottomRightBadgeType: 'funcBound',
                                type: 'variable',
                                argPriorityAgg: [],
                                funcPriorityAgg: [3],
                                emphasizePriority: false,
                                bound: true,
                                shorthandUnary: undefined
                              },
                              state: 'default',
                              type: 'call',
                              priority: 3
                            },
                            func: {
                              name: 'g',
                              highlightType: 'highlighted',
                              topLeftBadgeType: 'match',
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
                            name: 'g',
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
                  name: 'c',
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
          unaryJustExecuted: undefined,
          matchExists: true,
          activePriority: 2
        },
        {
          containerState: 'stepped',
          previouslyChangedExpressionState: 'betaReducePreviewAfter',
          expression: {
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
                name: 'd',
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
                    name: 'd',
                    highlightType: 'default',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'none',
                    type: 'variable',
                    argPriorityAgg: [1, 3],
                    funcPriorityAgg: [],
                    emphasizePriority: false,
                    bound: true,
                    shorthandUnary: undefined
                  },
                  func: {
                    arg: {
                      name: 'c',
                      highlightType: 'betaReduceCallArgHighlighted',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'callArg',
                      type: 'variable',
                      argPriorityAgg: [2],
                      funcPriorityAgg: [],
                      emphasizePriority: true,
                      bound: true,
                      shorthandUnary: undefined
                    },
                    func: {
                      arg: {
                        name: 'g',
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
                          name: 'h',
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
                            arg: {
                              arg: {
                                name: 'h',
                                highlightType: 'active',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'funcBound',
                                type: 'variable',
                                argPriorityAgg: [1, 2, 3],
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
                                funcPriorityAgg: [3],
                                emphasizePriority: false,
                                bound: true,
                                shorthandUnary: undefined
                              },
                              state: 'default',
                              type: 'call',
                              priority: 3
                            },
                            func: {
                              name: 'c',
                              highlightType: 'highlighted',
                              topLeftBadgeType: 'betaReduced',
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
                  name: 'c',
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
          unaryJustExecuted: undefined,
          matchExists: undefined,
          activePriority: 2
        },
        {
          containerState: 'stepped',
          previouslyChangedExpressionState: 'betaReducePreviewCrossed',
          expression: {
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
                name: 'd',
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
                    name: 'd',
                    highlightType: 'default',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'none',
                    type: 'variable',
                    argPriorityAgg: [1, 3],
                    funcPriorityAgg: [],
                    emphasizePriority: false,
                    bound: true,
                    shorthandUnary: undefined
                  },
                  func: {
                    arg: {
                      name: 'c',
                      highlightType: 'removed',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'callArg',
                      type: 'variable',
                      argPriorityAgg: [2],
                      funcPriorityAgg: [],
                      emphasizePriority: true,
                      bound: true,
                      shorthandUnary: undefined
                    },
                    func: {
                      arg: {
                        name: 'g',
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
                          name: 'h',
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
                            arg: {
                              arg: {
                                name: 'h',
                                highlightType: 'active',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'funcBound',
                                type: 'variable',
                                argPriorityAgg: [1, 2, 3],
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
                                funcPriorityAgg: [3],
                                emphasizePriority: false,
                                bound: true,
                                shorthandUnary: undefined
                              },
                              state: 'default',
                              type: 'call',
                              priority: 3
                            },
                            func: {
                              name: 'c',
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
                  name: 'c',
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
          unaryJustExecuted: undefined,
          matchExists: undefined,
          activePriority: 2
        },
        {
          containerState: 'ready',
          previouslyChangedExpressionState: 'default',
          expression: {
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
                name: 'd',
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
                    name: 'd',
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
                    arg: {
                      name: 'h',
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
                        arg: {
                          arg: {
                            name: 'h',
                            highlightType: 'default',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'none',
                            type: 'variable',
                            argPriorityAgg: [1, 2, 3],
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
                            funcPriorityAgg: [3],
                            emphasizePriority: false,
                            bound: true,
                            shorthandUnary: undefined
                          },
                          state: 'default',
                          type: 'call',
                          priority: 3
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
                        name: 'c',
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
                  name: 'c',
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
          unaryJustExecuted: undefined
        },
        {
          containerState: 'stepped',
          previouslyChangedExpressionState: 'active',
          expression: {
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
                name: 'd',
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
                    name: 'd',
                    highlightType: 'active',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'none',
                    type: 'variable',
                    argPriorityAgg: [1, 2],
                    funcPriorityAgg: [],
                    emphasizePriority: true,
                    bound: true,
                    shorthandUnary: undefined
                  },
                  func: {
                    arg: {
                      name: 'h',
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
                        arg: {
                          arg: {
                            name: 'h',
                            highlightType: 'active',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'none',
                            type: 'variable',
                            argPriorityAgg: [1, 2, 3],
                            funcPriorityAgg: [],
                            emphasizePriority: false,
                            bound: true,
                            shorthandUnary: undefined
                          },
                          func: {
                            name: 'c',
                            highlightType: 'active',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'none',
                            type: 'variable',
                            argPriorityAgg: [],
                            funcPriorityAgg: [3],
                            emphasizePriority: false,
                            bound: true,
                            shorthandUnary: undefined
                          },
                          state: 'default',
                          type: 'call',
                          priority: 3
                        },
                        func: {
                          name: 'c',
                          highlightType: 'active',
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
                        name: 'c',
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
                  name: 'c',
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
          unaryJustExecuted: undefined,
          matchExists: undefined,
          activePriority: 2
        },
        {
          containerState: 'stepped',
          previouslyChangedExpressionState: 'showFuncBound',
          expression: {
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
                name: 'd',
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
                    name: 'd',
                    highlightType: 'active',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'callArg',
                    type: 'variable',
                    argPriorityAgg: [1, 2],
                    funcPriorityAgg: [],
                    emphasizePriority: true,
                    bound: true,
                    shorthandUnary: undefined
                  },
                  func: {
                    arg: {
                      name: 'h',
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
                        arg: {
                          arg: {
                            name: 'h',
                            highlightType: 'active',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'funcBound',
                            type: 'variable',
                            argPriorityAgg: [1, 2, 3],
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
                            funcPriorityAgg: [3],
                            emphasizePriority: false,
                            bound: true,
                            shorthandUnary: undefined
                          },
                          state: 'default',
                          type: 'call',
                          priority: 3
                        },
                        func: {
                          name: 'c',
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
                  state: 'showFuncBound',
                  type: 'call',
                  priority: 2
                },
                func: {
                  name: 'c',
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
          unaryJustExecuted: undefined,
          matchExists: undefined,
          activePriority: 2
        },
        {
          containerState: 'stepped',
          previouslyChangedExpressionState: 'betaReducePreviewBefore',
          expression: {
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
                name: 'd',
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
                    name: 'd',
                    highlightType: 'active',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'callArg',
                    type: 'variable',
                    argPriorityAgg: [1, 2],
                    funcPriorityAgg: [],
                    emphasizePriority: true,
                    bound: true,
                    shorthandUnary: undefined
                  },
                  func: {
                    arg: {
                      name: 'h',
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
                        arg: {
                          arg: {
                            name: 'h',
                            highlightType: 'highlighted',
                            topLeftBadgeType: 'match',
                            bottomRightBadgeType: 'funcBound',
                            type: 'variable',
                            argPriorityAgg: [1, 2, 3],
                            funcPriorityAgg: [],
                            emphasizePriority: false,
                            bound: true,
                            shorthandUnary: undefined
                          },
                          func: {
                            name: 'c',
                            highlightType: 'highlighted',
                            topLeftBadgeType: 'unmatch',
                            bottomRightBadgeType: 'funcBound',
                            type: 'variable',
                            argPriorityAgg: [],
                            funcPriorityAgg: [3],
                            emphasizePriority: false,
                            bound: true,
                            shorthandUnary: undefined
                          },
                          state: 'default',
                          type: 'call',
                          priority: 3
                        },
                        func: {
                          name: 'c',
                          highlightType: 'highlighted',
                          topLeftBadgeType: 'unmatch',
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
                        name: 'c',
                        highlightType: 'highlighted',
                        topLeftBadgeType: 'unmatch',
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
                  name: 'c',
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
          unaryJustExecuted: undefined,
          matchExists: true,
          activePriority: 2
        },
        {
          containerState: 'stepped',
          previouslyChangedExpressionState: 'betaReducePreviewAfter',
          expression: {
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
                name: 'd',
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
                    name: 'd',
                    highlightType: 'betaReduceCallArgHighlighted',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'callArg',
                    type: 'variable',
                    argPriorityAgg: [1, 2],
                    funcPriorityAgg: [],
                    emphasizePriority: true,
                    bound: true,
                    shorthandUnary: undefined
                  },
                  func: {
                    arg: {
                      name: 'h',
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
                        arg: {
                          arg: {
                            name: 'd',
                            highlightType: 'highlighted',
                            topLeftBadgeType: 'betaReduced',
                            bottomRightBadgeType: 'funcBound',
                            type: 'variable',
                            argPriorityAgg: [1, 2, 3],
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
                            funcPriorityAgg: [3],
                            emphasizePriority: false,
                            bound: true,
                            shorthandUnary: undefined
                          },
                          state: 'default',
                          type: 'call',
                          priority: 3
                        },
                        func: {
                          name: 'c',
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
                  state: 'betaReducePreviewAfter',
                  type: 'call',
                  priority: 2
                },
                func: {
                  name: 'c',
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
          unaryJustExecuted: undefined,
          matchExists: undefined,
          activePriority: 2
        },
        {
          containerState: 'stepped',
          previouslyChangedExpressionState: 'betaReducePreviewCrossed',
          expression: {
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
                name: 'd',
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
                    name: 'd',
                    highlightType: 'removed',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'callArg',
                    type: 'variable',
                    argPriorityAgg: [1, 2],
                    funcPriorityAgg: [],
                    emphasizePriority: true,
                    bound: true,
                    shorthandUnary: undefined
                  },
                  func: {
                    arg: {
                      name: 'h',
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
                        arg: {
                          arg: {
                            name: 'd',
                            highlightType: 'active',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'funcBound',
                            type: 'variable',
                            argPriorityAgg: [1, 2, 3],
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
                            funcPriorityAgg: [3],
                            emphasizePriority: false,
                            bound: true,
                            shorthandUnary: undefined
                          },
                          state: 'default',
                          type: 'call',
                          priority: 3
                        },
                        func: {
                          name: 'c',
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
                  name: 'c',
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
          unaryJustExecuted: undefined,
          matchExists: undefined,
          activePriority: 2
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
              argPriorityAgg: [],
              funcPriorityAgg: [],
              emphasizePriority: false,
              bound: false
            },
            body: {
              arg: {
                name: 'd',
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
                    arg: {
                      arg: {
                        name: 'd',
                        highlightType: 'default',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'none',
                        type: 'variable',
                        argPriorityAgg: [1, 2, 3, 4],
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
                      name: 'c',
                      highlightType: 'default',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'none',
                      type: 'variable',
                      argPriorityAgg: [],
                      funcPriorityAgg: [3],
                      emphasizePriority: false,
                      bound: true,
                      shorthandUnary: undefined
                    },
                    state: 'default',
                    type: 'call',
                    priority: 3
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
                  name: 'c',
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
          unaryJustExecuted: undefined
        }
      ],
      speed: 5,
      showOnlyFocused: false,
      caption: undefined,
      hideControls: false,
      explanationsVisibility: 'hiddenInitialPausedOnly',
      hidePriorities: false,
      variableSize: 'sm',
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

export default Unck
