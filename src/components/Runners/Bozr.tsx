import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'

const Bozr = () => (
  <ExpressionRunnerPrecomputed
    {...{
      expressionContainers: [
        {
          containerState: 'ready',
          previouslyChangedExpressionState: 'default',
          expression: {
            arg: {
              name: 'shorthandNumber',
              highlightType: 'initialHighlighted',
              topLeftBadgeType: 'none',
              bottomRightBadgeType: 'none',
              type: 'variable',
              argPriorityAgg: [2],
              funcPriorityAgg: [],
              emphasizePriority: false,
              bound: true,
              shorthandNumber: 5,
              shorthandUnary: undefined
            },
            func: {
              arg: {
                arg: {
                  name: 's',
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
                    name: 't',
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
                            bound: true
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
                          shorthandBinary: 'mult'
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
                        bound: true
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
                    arg: {
                      name: 'b',
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
                        arg: {
                          name: 'b',
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
                          name: 'b',
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
                        name: 'a',
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
                        arg: {
                          name: 'b',
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
                          name: 'b',
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
                        name: 'a',
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
              highlightType: 'initialHighlighted',
              topLeftBadgeType: 'none',
              bottomRightBadgeType: 'none',
              type: 'variable',
              argPriorityAgg: [2],
              funcPriorityAgg: [],
              emphasizePriority: false,
              bound: true,
              shorthandNumber: 5,
              shorthandUnary: undefined
            },
            func: {
              arg: {
                arg: {
                  name: 's',
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
                    name: 't',
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
                    type: 'conditional',
                    state: 'default',
                    checkType: 'isZero',
                    condition: {
                      name: 't',
                      highlightType: 'active',
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
                      highlightType: 'active',
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
                            highlightType: 'active',
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
                            highlightType: 'active',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'none',
                            type: 'variable',
                            argPriorityAgg: [],
                            funcPriorityAgg: [4],
                            emphasizePriority: false,
                            bound: true
                          },
                          state: 'default',
                          type: 'call',
                          priority: 4
                        },
                        func: {
                          name: 'shorthandBinary',
                          highlightType: 'active',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'none',
                          type: 'variable',
                          argPriorityAgg: [],
                          funcPriorityAgg: [3],
                          emphasizePriority: false,
                          bound: true,
                          shorthandBinary: 'mult'
                        },
                        state: 'default',
                        type: 'call',
                        priority: 3
                      },
                      func: {
                        name: 't',
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
                    arg: {
                      name: 'b',
                      highlightType: 'active',
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
                        arg: {
                          name: 'b',
                          highlightType: 'active',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'none',
                          type: 'variable',
                          argPriorityAgg: [1, 2],
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
                          funcPriorityAgg: [2],
                          emphasizePriority: false,
                          bound: true
                        },
                        state: 'default',
                        type: 'call',
                        priority: 2
                      },
                      func: {
                        name: 'a',
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
                  func: {
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
                      arg: {
                        arg: {
                          name: 'b',
                          highlightType: 'active',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'none',
                          type: 'variable',
                          argPriorityAgg: [1, 2],
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
                          funcPriorityAgg: [2],
                          emphasizePriority: false,
                          bound: true
                        },
                        state: 'default',
                        type: 'call',
                        priority: 2
                      },
                      func: {
                        name: 'a',
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
              highlightType: 'initialHighlighted',
              topLeftBadgeType: 'none',
              bottomRightBadgeType: 'none',
              type: 'variable',
              argPriorityAgg: [2],
              funcPriorityAgg: [],
              emphasizePriority: false,
              bound: true,
              shorthandNumber: 5,
              shorthandUnary: undefined
            },
            func: {
              arg: {
                arg: {
                  name: 's',
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
                    name: 't',
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
                    type: 'conditional',
                    state: 'default',
                    checkType: 'isZero',
                    condition: {
                      name: 't',
                      highlightType: 'active',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'callArg',
                      type: 'variable',
                      argPriorityAgg: [],
                      funcPriorityAgg: [],
                      emphasizePriority: false,
                      bound: true,
                      shorthandUnary: 'pred'
                    },
                    trueCase: {
                      name: 'shorthandNumber',
                      highlightType: 'active',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'callArg',
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
                            highlightType: 'active',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'callArg',
                            type: 'variable',
                            argPriorityAgg: [1, 2, 3, 4],
                            funcPriorityAgg: [],
                            emphasizePriority: false,
                            bound: true,
                            shorthandUnary: 'pred'
                          },
                          func: {
                            name: 's',
                            highlightType: 'active',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'callArg',
                            type: 'variable',
                            argPriorityAgg: [],
                            funcPriorityAgg: [4],
                            emphasizePriority: false,
                            bound: true
                          },
                          state: 'default',
                          type: 'call',
                          priority: 4
                        },
                        func: {
                          name: 'shorthandBinary',
                          highlightType: 'active',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'callArg',
                          type: 'variable',
                          argPriorityAgg: [],
                          funcPriorityAgg: [3],
                          emphasizePriority: false,
                          bound: true,
                          shorthandBinary: 'mult'
                        },
                        state: 'default',
                        type: 'call',
                        priority: 3
                      },
                      func: {
                        name: 't',
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
                    arg: {
                      name: 'b',
                      highlightType: 'active',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'funcUnbound',
                      type: 'variable',
                      argPriorityAgg: [1],
                      funcPriorityAgg: [],
                      emphasizePriority: false,
                      bound: false
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
                          bound: true
                        },
                        func: {
                          name: 'b',
                          highlightType: 'active',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'funcBound',
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
                        name: 'a',
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
                  func: {
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
                          bound: true
                        },
                        func: {
                          name: 'b',
                          highlightType: 'active',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'funcBound',
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
                        name: 'a',
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
                  state: 'default',
                  type: 'call',
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
              highlightType: 'initialHighlighted',
              topLeftBadgeType: 'none',
              bottomRightBadgeType: 'none',
              type: 'variable',
              argPriorityAgg: [2],
              funcPriorityAgg: [],
              emphasizePriority: false,
              bound: true,
              shorthandNumber: 5,
              shorthandUnary: undefined
            },
            func: {
              arg: {
                arg: {
                  name: 's',
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
                    name: 't',
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
                    type: 'conditional',
                    state: 'default',
                    checkType: 'isZero',
                    condition: {
                      name: 't',
                      highlightType: 'active',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'callArg',
                      type: 'variable',
                      argPriorityAgg: [],
                      funcPriorityAgg: [],
                      emphasizePriority: false,
                      bound: true,
                      shorthandUnary: 'pred'
                    },
                    trueCase: {
                      name: 'shorthandNumber',
                      highlightType: 'active',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'callArg',
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
                            highlightType: 'active',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'callArg',
                            type: 'variable',
                            argPriorityAgg: [1, 2, 3, 4],
                            funcPriorityAgg: [],
                            emphasizePriority: false,
                            bound: true,
                            shorthandUnary: 'pred'
                          },
                          func: {
                            name: 's',
                            highlightType: 'active',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'callArg',
                            type: 'variable',
                            argPriorityAgg: [],
                            funcPriorityAgg: [4],
                            emphasizePriority: false,
                            bound: true
                          },
                          state: 'default',
                          type: 'call',
                          priority: 4
                        },
                        func: {
                          name: 'shorthandBinary',
                          highlightType: 'active',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'callArg',
                          type: 'variable',
                          argPriorityAgg: [],
                          funcPriorityAgg: [3],
                          emphasizePriority: false,
                          bound: true,
                          shorthandBinary: 'mult'
                        },
                        state: 'default',
                        type: 'call',
                        priority: 3
                      },
                      func: {
                        name: 't',
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
                    arg: {
                      name: 'b',
                      highlightType: 'active',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'funcUnbound',
                      type: 'variable',
                      argPriorityAgg: [1],
                      funcPriorityAgg: [],
                      emphasizePriority: false,
                      bound: false
                    },
                    body: {
                      arg: {
                        arg: {
                          name: 'b',
                          highlightType: 'highlighted',
                          topLeftBadgeType: 'unmatch',
                          bottomRightBadgeType: 'funcBound',
                          type: 'variable',
                          argPriorityAgg: [1, 2],
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
                          funcPriorityAgg: [2],
                          emphasizePriority: false,
                          bound: true
                        },
                        state: 'default',
                        type: 'call',
                        priority: 2
                      },
                      func: {
                        name: 'a',
                        highlightType: 'highlighted',
                        topLeftBadgeType: 'match',
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
                  func: {
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
                      arg: {
                        arg: {
                          name: 'b',
                          highlightType: 'highlighted',
                          topLeftBadgeType: 'unmatch',
                          bottomRightBadgeType: 'funcBound',
                          type: 'variable',
                          argPriorityAgg: [1, 2],
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
                          funcPriorityAgg: [2],
                          emphasizePriority: false,
                          bound: true
                        },
                        state: 'default',
                        type: 'call',
                        priority: 2
                      },
                      func: {
                        name: 'a',
                        highlightType: 'highlighted',
                        topLeftBadgeType: 'match',
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
              highlightType: 'initialHighlighted',
              topLeftBadgeType: 'none',
              bottomRightBadgeType: 'none',
              type: 'variable',
              argPriorityAgg: [2],
              funcPriorityAgg: [],
              emphasizePriority: false,
              bound: true,
              shorthandNumber: 5,
              shorthandUnary: undefined
            },
            func: {
              arg: {
                arg: {
                  name: 's',
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
                    name: 't',
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
                    type: 'conditional',
                    state: 'default',
                    checkType: 'isZero',
                    condition: {
                      name: 't',
                      highlightType: 'betaReduceCallArgHighlighted',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'callArg',
                      type: 'variable',
                      argPriorityAgg: [],
                      funcPriorityAgg: [],
                      emphasizePriority: false,
                      bound: true,
                      shorthandUnary: 'pred'
                    },
                    trueCase: {
                      name: 'shorthandNumber',
                      highlightType: 'betaReduceCallArgHighlighted',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'callArg',
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
                            highlightType: 'betaReduceCallArgHighlighted',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'callArg',
                            type: 'variable',
                            argPriorityAgg: [1, 2, 3, 4],
                            funcPriorityAgg: [],
                            emphasizePriority: false,
                            bound: true,
                            shorthandUnary: 'pred'
                          },
                          func: {
                            name: 's',
                            highlightType: 'betaReduceCallArgHighlighted',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'callArg',
                            type: 'variable',
                            argPriorityAgg: [],
                            funcPriorityAgg: [4],
                            emphasizePriority: false,
                            bound: true
                          },
                          state: 'default',
                          type: 'call',
                          priority: 4
                        },
                        func: {
                          name: 'shorthandBinary',
                          highlightType: 'betaReduceCallArgHighlighted',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'callArg',
                          type: 'variable',
                          argPriorityAgg: [],
                          funcPriorityAgg: [3],
                          emphasizePriority: false,
                          bound: true,
                          shorthandBinary: 'mult'
                        },
                        state: 'default',
                        type: 'call',
                        priority: 3
                      },
                      func: {
                        name: 't',
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
                    arg: {
                      name: 'b',
                      highlightType: 'active',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'funcUnbound',
                      type: 'variable',
                      argPriorityAgg: [1],
                      funcPriorityAgg: [],
                      emphasizePriority: false,
                      bound: false
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
                          bound: true
                        },
                        func: {
                          name: 'b',
                          highlightType: 'active',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'funcBound',
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
                          name: 's',
                          highlightType: 'highlighted',
                          topLeftBadgeType: 'betaReduced',
                          bottomRightBadgeType: 'funcBound',
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
                            type: 'conditional',
                            state: 'default',
                            checkType: 'isZero',
                            condition: {
                              name: 't',
                              highlightType: 'highlighted',
                              topLeftBadgeType: 'betaReduced',
                              bottomRightBadgeType: 'funcBound',
                              type: 'variable',
                              argPriorityAgg: [],
                              funcPriorityAgg: [],
                              emphasizePriority: false,
                              bound: true,
                              shorthandUnary: 'pred'
                            },
                            trueCase: {
                              name: 'shorthandNumber',
                              highlightType: 'highlighted',
                              topLeftBadgeType: 'betaReduced',
                              bottomRightBadgeType: 'funcBound',
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
                                    highlightType: 'highlighted',
                                    topLeftBadgeType: 'betaReduced',
                                    bottomRightBadgeType: 'funcBound',
                                    type: 'variable',
                                    argPriorityAgg: [1, 2, 3, 4],
                                    funcPriorityAgg: [],
                                    emphasizePriority: false,
                                    bound: true,
                                    shorthandUnary: 'pred'
                                  },
                                  func: {
                                    name: 's',
                                    highlightType: 'highlighted',
                                    topLeftBadgeType: 'betaReduced',
                                    bottomRightBadgeType: 'funcBound',
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
                                  highlightType: 'highlighted',
                                  topLeftBadgeType: 'betaReduced',
                                  bottomRightBadgeType: 'funcBound',
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
                          bound: true
                        },
                        func: {
                          name: 'b',
                          highlightType: 'active',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'funcBound',
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
                          name: 's',
                          highlightType: 'highlighted',
                          topLeftBadgeType: 'betaReduced',
                          bottomRightBadgeType: 'funcBound',
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
                            type: 'conditional',
                            state: 'default',
                            checkType: 'isZero',
                            condition: {
                              name: 't',
                              highlightType: 'highlighted',
                              topLeftBadgeType: 'betaReduced',
                              bottomRightBadgeType: 'funcBound',
                              type: 'variable',
                              argPriorityAgg: [],
                              funcPriorityAgg: [],
                              emphasizePriority: false,
                              bound: true,
                              shorthandUnary: 'pred'
                            },
                            trueCase: {
                              name: 'shorthandNumber',
                              highlightType: 'highlighted',
                              topLeftBadgeType: 'betaReduced',
                              bottomRightBadgeType: 'funcBound',
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
                                    highlightType: 'highlighted',
                                    topLeftBadgeType: 'betaReduced',
                                    bottomRightBadgeType: 'funcBound',
                                    type: 'variable',
                                    argPriorityAgg: [1, 2, 3, 4],
                                    funcPriorityAgg: [],
                                    emphasizePriority: false,
                                    bound: true,
                                    shorthandUnary: 'pred'
                                  },
                                  func: {
                                    name: 's',
                                    highlightType: 'highlighted',
                                    topLeftBadgeType: 'betaReduced',
                                    bottomRightBadgeType: 'funcBound',
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
                                  highlightType: 'highlighted',
                                  topLeftBadgeType: 'betaReduced',
                                  bottomRightBadgeType: 'funcBound',
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
              highlightType: 'initialHighlighted',
              topLeftBadgeType: 'none',
              bottomRightBadgeType: 'none',
              type: 'variable',
              argPriorityAgg: [2],
              funcPriorityAgg: [],
              emphasizePriority: false,
              bound: true,
              shorthandNumber: 5,
              shorthandUnary: undefined
            },
            func: {
              arg: {
                arg: {
                  name: 's',
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
                    name: 't',
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
                    type: 'conditional',
                    state: 'default',
                    checkType: 'isZero',
                    condition: {
                      name: 't',
                      highlightType: 'removed',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'callArg',
                      type: 'variable',
                      argPriorityAgg: [],
                      funcPriorityAgg: [],
                      emphasizePriority: false,
                      bound: true,
                      shorthandUnary: 'pred'
                    },
                    trueCase: {
                      name: 'shorthandNumber',
                      highlightType: 'removed',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'callArg',
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
                            highlightType: 'removed',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'callArg',
                            type: 'variable',
                            argPriorityAgg: [1, 2, 3, 4],
                            funcPriorityAgg: [],
                            emphasizePriority: false,
                            bound: true,
                            shorthandUnary: 'pred'
                          },
                          func: {
                            name: 's',
                            highlightType: 'removed',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'callArg',
                            type: 'variable',
                            argPriorityAgg: [],
                            funcPriorityAgg: [4],
                            emphasizePriority: false,
                            bound: true
                          },
                          state: 'default',
                          type: 'call',
                          priority: 4
                        },
                        func: {
                          name: 'shorthandBinary',
                          highlightType: 'removed',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'callArg',
                          type: 'variable',
                          argPriorityAgg: [],
                          funcPriorityAgg: [3],
                          emphasizePriority: false,
                          bound: true,
                          shorthandBinary: 'mult'
                        },
                        state: 'default',
                        type: 'call',
                        priority: 3
                      },
                      func: {
                        name: 't',
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
                    arg: {
                      name: 'b',
                      highlightType: 'active',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'funcUnbound',
                      type: 'variable',
                      argPriorityAgg: [1],
                      funcPriorityAgg: [],
                      emphasizePriority: false,
                      bound: false
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
                          bound: true
                        },
                        func: {
                          name: 'b',
                          highlightType: 'active',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'funcBound',
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
                          name: 's',
                          highlightType: 'active',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'funcUnbound',
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
                            type: 'conditional',
                            state: 'default',
                            checkType: 'isZero',
                            condition: {
                              name: 't',
                              highlightType: 'active',
                              topLeftBadgeType: 'none',
                              bottomRightBadgeType: 'funcBound',
                              type: 'variable',
                              argPriorityAgg: [],
                              funcPriorityAgg: [],
                              emphasizePriority: false,
                              bound: true,
                              shorthandUnary: 'pred'
                            },
                            trueCase: {
                              name: 'shorthandNumber',
                              highlightType: 'active',
                              topLeftBadgeType: 'none',
                              bottomRightBadgeType: 'funcBound',
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
                                    highlightType: 'active',
                                    topLeftBadgeType: 'none',
                                    bottomRightBadgeType: 'funcBound',
                                    type: 'variable',
                                    argPriorityAgg: [1, 2, 3, 4],
                                    funcPriorityAgg: [],
                                    emphasizePriority: false,
                                    bound: true,
                                    shorthandUnary: 'pred'
                                  },
                                  func: {
                                    name: 's',
                                    highlightType: 'active',
                                    topLeftBadgeType: 'none',
                                    bottomRightBadgeType: 'funcBound',
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
                                  highlightType: 'active',
                                  topLeftBadgeType: 'none',
                                  bottomRightBadgeType: 'funcBound',
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
                          bound: true
                        },
                        func: {
                          name: 'b',
                          highlightType: 'active',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'funcBound',
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
                          name: 's',
                          highlightType: 'active',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'funcUnbound',
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
                            type: 'conditional',
                            state: 'default',
                            checkType: 'isZero',
                            condition: {
                              name: 't',
                              highlightType: 'active',
                              topLeftBadgeType: 'none',
                              bottomRightBadgeType: 'funcBound',
                              type: 'variable',
                              argPriorityAgg: [],
                              funcPriorityAgg: [],
                              emphasizePriority: false,
                              bound: true,
                              shorthandUnary: 'pred'
                            },
                            trueCase: {
                              name: 'shorthandNumber',
                              highlightType: 'active',
                              topLeftBadgeType: 'none',
                              bottomRightBadgeType: 'funcBound',
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
                                    highlightType: 'active',
                                    topLeftBadgeType: 'none',
                                    bottomRightBadgeType: 'funcBound',
                                    type: 'variable',
                                    argPriorityAgg: [1, 2, 3, 4],
                                    funcPriorityAgg: [],
                                    emphasizePriority: false,
                                    bound: true,
                                    shorthandUnary: 'pred'
                                  },
                                  func: {
                                    name: 's',
                                    highlightType: 'active',
                                    topLeftBadgeType: 'none',
                                    bottomRightBadgeType: 'funcBound',
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
                                  highlightType: 'active',
                                  topLeftBadgeType: 'none',
                                  bottomRightBadgeType: 'funcBound',
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
              shorthandNumber: 5,
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
                  argPriorityAgg: [1],
                  funcPriorityAgg: [],
                  emphasizePriority: false,
                  bound: false
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
                      bound: true
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
                      bound: true
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
                  funcPriorityAgg: [1, 2],
                  emphasizePriority: false,
                  bound: false
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
                      bound: true
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
                      bound: true
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
              shorthandNumber: 5,
              shorthandUnary: undefined
            },
            func: {
              arg: {
                arg: {
                  name: 'b',
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
                    arg: {
                      name: 'b',
                      highlightType: 'active',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'none',
                      type: 'variable',
                      argPriorityAgg: [1, 2],
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
                      name: 's',
                      highlightType: 'active',
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
                        type: 'conditional',
                        state: 'default',
                        checkType: 'isZero',
                        condition: {
                          name: 't',
                          highlightType: 'active',
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
                          highlightType: 'active',
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
                                highlightType: 'active',
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
                                highlightType: 'active',
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
                              highlightType: 'active',
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
                    arg: {
                      name: 'b',
                      highlightType: 'active',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'none',
                      type: 'variable',
                      argPriorityAgg: [1, 2],
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
                      name: 's',
                      highlightType: 'active',
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
                        type: 'conditional',
                        state: 'default',
                        checkType: 'isZero',
                        condition: {
                          name: 't',
                          highlightType: 'active',
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
                          highlightType: 'active',
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
                                highlightType: 'active',
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
                                highlightType: 'active',
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
                              highlightType: 'active',
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
              shorthandNumber: 5,
              shorthandUnary: undefined
            },
            func: {
              arg: {
                arg: {
                  name: 'b',
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
                    arg: {
                      name: 'b',
                      highlightType: 'active',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'callArg',
                      type: 'variable',
                      argPriorityAgg: [1, 2],
                      funcPriorityAgg: [],
                      emphasizePriority: false,
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
                      name: 's',
                      highlightType: 'active',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'callArg',
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
                        type: 'conditional',
                        state: 'default',
                        checkType: 'isZero',
                        condition: {
                          name: 't',
                          highlightType: 'active',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'callArg',
                          type: 'variable',
                          argPriorityAgg: [],
                          funcPriorityAgg: [],
                          emphasizePriority: false,
                          bound: true,
                          shorthandUnary: 'pred'
                        },
                        trueCase: {
                          name: 'shorthandNumber',
                          highlightType: 'active',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'callArg',
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
                                highlightType: 'active',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'callArg',
                                type: 'variable',
                                argPriorityAgg: [1, 2, 3, 4],
                                funcPriorityAgg: [],
                                emphasizePriority: false,
                                bound: true,
                                shorthandUnary: 'pred'
                              },
                              func: {
                                name: 's',
                                highlightType: 'active',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'callArg',
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
                              highlightType: 'active',
                              topLeftBadgeType: 'none',
                              bottomRightBadgeType: 'callArg',
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
                    arg: {
                      name: 'b',
                      highlightType: 'active',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'funcBound',
                      type: 'variable',
                      argPriorityAgg: [1, 2],
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
                      name: 's',
                      highlightType: 'active',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'funcUnbound',
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
                        type: 'conditional',
                        state: 'default',
                        checkType: 'isZero',
                        condition: {
                          name: 't',
                          highlightType: 'active',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'funcBound',
                          type: 'variable',
                          argPriorityAgg: [],
                          funcPriorityAgg: [],
                          emphasizePriority: false,
                          bound: true,
                          shorthandUnary: 'pred'
                        },
                        trueCase: {
                          name: 'shorthandNumber',
                          highlightType: 'active',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'funcBound',
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
                                highlightType: 'active',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'funcBound',
                                type: 'variable',
                                argPriorityAgg: [1, 2, 3, 4],
                                funcPriorityAgg: [],
                                emphasizePriority: false,
                                bound: true,
                                shorthandUnary: 'pred'
                              },
                              func: {
                                name: 's',
                                highlightType: 'active',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'funcBound',
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
                              highlightType: 'active',
                              topLeftBadgeType: 'none',
                              bottomRightBadgeType: 'funcBound',
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
          previouslyChangedExpressionState: 'needsAlphaConvert',
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
              shorthandNumber: 5,
              shorthandUnary: undefined
            },
            func: {
              arg: {
                arg: {
                  name: 'b',
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
                    arg: {
                      name: 'b',
                      highlightType: 'active',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'callArg',
                      type: 'variable',
                      argPriorityAgg: [1, 2],
                      funcPriorityAgg: [],
                      emphasizePriority: false,
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
                      name: 's',
                      highlightType: 'highlighted',
                      topLeftBadgeType: 'conflict',
                      bottomRightBadgeType: 'callArg',
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
                        type: 'conditional',
                        state: 'default',
                        checkType: 'isZero',
                        condition: {
                          name: 't',
                          highlightType: 'highlighted',
                          topLeftBadgeType: 'conflict',
                          bottomRightBadgeType: 'callArg',
                          type: 'variable',
                          argPriorityAgg: [],
                          funcPriorityAgg: [],
                          emphasizePriority: false,
                          bound: true,
                          shorthandUnary: 'pred'
                        },
                        trueCase: {
                          name: 'shorthandNumber',
                          highlightType: 'active',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'callArg',
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
                                highlightType: 'highlighted',
                                topLeftBadgeType: 'conflict',
                                bottomRightBadgeType: 'callArg',
                                type: 'variable',
                                argPriorityAgg: [1, 2, 3, 4],
                                funcPriorityAgg: [],
                                emphasizePriority: false,
                                bound: true,
                                shorthandUnary: 'pred'
                              },
                              func: {
                                name: 's',
                                highlightType: 'highlighted',
                                topLeftBadgeType: 'conflict',
                                bottomRightBadgeType: 'callArg',
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
                              highlightType: 'active',
                              topLeftBadgeType: 'none',
                              bottomRightBadgeType: 'callArg',
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
                            highlightType: 'highlighted',
                            topLeftBadgeType: 'conflict',
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
                    arg: {
                      name: 'b',
                      highlightType: 'active',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'funcBound',
                      type: 'variable',
                      argPriorityAgg: [1, 2],
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
                      name: 's',
                      highlightType: 'highlighted',
                      topLeftBadgeType: 'conflict',
                      bottomRightBadgeType: 'funcUnbound',
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
                        type: 'conditional',
                        state: 'default',
                        checkType: 'isZero',
                        condition: {
                          name: 't',
                          highlightType: 'active',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'funcBound',
                          type: 'variable',
                          argPriorityAgg: [],
                          funcPriorityAgg: [],
                          emphasizePriority: false,
                          bound: true,
                          shorthandUnary: 'pred'
                        },
                        trueCase: {
                          name: 'shorthandNumber',
                          highlightType: 'active',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'funcBound',
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
                                highlightType: 'active',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'funcBound',
                                type: 'variable',
                                argPriorityAgg: [1, 2, 3, 4],
                                funcPriorityAgg: [],
                                emphasizePriority: false,
                                bound: true,
                                shorthandUnary: 'pred'
                              },
                              func: {
                                name: 's',
                                highlightType: 'active',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'funcBound',
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
                              highlightType: 'active',
                              topLeftBadgeType: 'none',
                              bottomRightBadgeType: 'funcBound',
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
              state: 'needsAlphaConvert',
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
          previouslyChangedExpressionState: 'alphaConvertDone',
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
              shorthandNumber: 5,
              shorthandUnary: undefined
            },
            func: {
              arg: {
                arg: {
                  name: 'b',
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
                    arg: {
                      name: 'b',
                      highlightType: 'active',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'callArg',
                      type: 'variable',
                      argPriorityAgg: [1, 2],
                      funcPriorityAgg: [],
                      emphasizePriority: false,
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
                      name: 's',
                      highlightType: 'active',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'callArg',
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
                        type: 'conditional',
                        state: 'default',
                        checkType: 'isZero',
                        condition: {
                          name: 't',
                          highlightType: 'active',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'callArg',
                          type: 'variable',
                          argPriorityAgg: [],
                          funcPriorityAgg: [],
                          emphasizePriority: false,
                          bound: true,
                          shorthandUnary: 'pred'
                        },
                        trueCase: {
                          name: 'shorthandNumber',
                          highlightType: 'active',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'callArg',
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
                                highlightType: 'active',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'callArg',
                                type: 'variable',
                                argPriorityAgg: [1, 2, 3, 4],
                                funcPriorityAgg: [],
                                emphasizePriority: false,
                                bound: true,
                                shorthandUnary: 'pred'
                              },
                              func: {
                                name: 's',
                                highlightType: 'active',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'callArg',
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
                              highlightType: 'active',
                              topLeftBadgeType: 'none',
                              bottomRightBadgeType: 'callArg',
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
                    arg: {
                      name: 'b',
                      highlightType: 'active',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'funcBound',
                      type: 'variable',
                      argPriorityAgg: [1, 2],
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
                      highlightType: 'conflictResolvedHighlighted',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'funcUnbound',
                      type: 'variable',
                      argPriorityAgg: [],
                      funcPriorityAgg: [1],
                      emphasizePriority: false,
                      bound: false,
                      shorthandUnary: undefined
                    },
                    body: {
                      arg: {
                        name: 'c',
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
                        type: 'conditional',
                        state: 'default',
                        checkType: 'isZero',
                        condition: {
                          name: 'c',
                          highlightType: 'conflictResolvedHighlighted',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'funcBound',
                          type: 'variable',
                          argPriorityAgg: [],
                          funcPriorityAgg: [],
                          emphasizePriority: false,
                          bound: true,
                          shorthandUnary: 'pred'
                        },
                        trueCase: {
                          name: 'shorthandNumber',
                          highlightType: 'active',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'funcBound',
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
                                name: 'c',
                                highlightType: 'conflictResolvedHighlighted',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'funcBound',
                                type: 'variable',
                                argPriorityAgg: [1, 2, 3, 4],
                                funcPriorityAgg: [],
                                emphasizePriority: false,
                                bound: true,
                                shorthandUnary: 'pred'
                              },
                              func: {
                                name: 'a',
                                highlightType: 'conflictResolvedHighlighted',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'funcBound',
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
                              highlightType: 'active',
                              topLeftBadgeType: 'none',
                              bottomRightBadgeType: 'funcBound',
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
                            name: 'c',
                            highlightType: 'conflictResolvedHighlighted',
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
              state: 'alphaConvertDone',
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
              shorthandNumber: 5,
              shorthandUnary: undefined
            },
            func: {
              arg: {
                arg: {
                  name: 'b',
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
                    arg: {
                      name: 'b',
                      highlightType: 'active',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'callArg',
                      type: 'variable',
                      argPriorityAgg: [1, 2],
                      funcPriorityAgg: [],
                      emphasizePriority: false,
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
                      name: 's',
                      highlightType: 'active',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'callArg',
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
                        type: 'conditional',
                        state: 'default',
                        checkType: 'isZero',
                        condition: {
                          name: 't',
                          highlightType: 'active',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'callArg',
                          type: 'variable',
                          argPriorityAgg: [],
                          funcPriorityAgg: [],
                          emphasizePriority: false,
                          bound: true,
                          shorthandUnary: 'pred'
                        },
                        trueCase: {
                          name: 'shorthandNumber',
                          highlightType: 'active',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'callArg',
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
                                highlightType: 'active',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'callArg',
                                type: 'variable',
                                argPriorityAgg: [1, 2, 3, 4],
                                funcPriorityAgg: [],
                                emphasizePriority: false,
                                bound: true,
                                shorthandUnary: 'pred'
                              },
                              func: {
                                name: 's',
                                highlightType: 'active',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'callArg',
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
                              highlightType: 'active',
                              topLeftBadgeType: 'none',
                              bottomRightBadgeType: 'callArg',
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
                    arg: {
                      name: 'b',
                      highlightType: 'highlighted',
                      topLeftBadgeType: 'match',
                      bottomRightBadgeType: 'funcBound',
                      type: 'variable',
                      argPriorityAgg: [1, 2],
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
                      bottomRightBadgeType: 'funcUnbound',
                      type: 'variable',
                      argPriorityAgg: [],
                      funcPriorityAgg: [1],
                      emphasizePriority: false,
                      bound: false,
                      shorthandUnary: undefined
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
                        bound: false,
                        shorthandUnary: undefined
                      },
                      body: {
                        type: 'conditional',
                        state: 'default',
                        checkType: 'isZero',
                        condition: {
                          name: 'c',
                          highlightType: 'highlighted',
                          topLeftBadgeType: 'unmatch',
                          bottomRightBadgeType: 'funcBound',
                          type: 'variable',
                          argPriorityAgg: [],
                          funcPriorityAgg: [],
                          emphasizePriority: false,
                          bound: true,
                          shorthandUnary: 'pred'
                        },
                        trueCase: {
                          name: 'shorthandNumber',
                          highlightType: 'highlighted',
                          topLeftBadgeType: 'unmatch',
                          bottomRightBadgeType: 'funcBound',
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
                                name: 'c',
                                highlightType: 'highlighted',
                                topLeftBadgeType: 'unmatch',
                                bottomRightBadgeType: 'funcBound',
                                type: 'variable',
                                argPriorityAgg: [1, 2, 3, 4],
                                funcPriorityAgg: [],
                                emphasizePriority: false,
                                bound: true,
                                shorthandUnary: 'pred'
                              },
                              func: {
                                name: 'a',
                                highlightType: 'highlighted',
                                topLeftBadgeType: 'unmatch',
                                bottomRightBadgeType: 'funcBound',
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
                              highlightType: 'highlighted',
                              topLeftBadgeType: 'unmatch',
                              bottomRightBadgeType: 'funcBound',
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
              shorthandNumber: 5,
              shorthandUnary: undefined
            },
            func: {
              arg: {
                arg: {
                  name: 'b',
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
                    arg: {
                      name: 'b',
                      highlightType: 'betaReduceCallArgHighlighted',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'callArg',
                      type: 'variable',
                      argPriorityAgg: [1, 2],
                      funcPriorityAgg: [],
                      emphasizePriority: false,
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
                      name: 's',
                      highlightType: 'betaReduceCallArgHighlighted',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'callArg',
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
                        type: 'conditional',
                        state: 'default',
                        checkType: 'isZero',
                        condition: {
                          name: 't',
                          highlightType: 'betaReduceCallArgHighlighted',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'callArg',
                          type: 'variable',
                          argPriorityAgg: [],
                          funcPriorityAgg: [],
                          emphasizePriority: false,
                          bound: true,
                          shorthandUnary: 'pred'
                        },
                        trueCase: {
                          name: 'shorthandNumber',
                          highlightType: 'betaReduceCallArgHighlighted',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'callArg',
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
                                highlightType: 'betaReduceCallArgHighlighted',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'callArg',
                                type: 'variable',
                                argPriorityAgg: [1, 2, 3, 4],
                                funcPriorityAgg: [],
                                emphasizePriority: false,
                                bound: true,
                                shorthandUnary: 'pred'
                              },
                              func: {
                                name: 's',
                                highlightType: 'betaReduceCallArgHighlighted',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'callArg',
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
                              highlightType: 'betaReduceCallArgHighlighted',
                              topLeftBadgeType: 'none',
                              bottomRightBadgeType: 'callArg',
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
                    arg: {
                      arg: {
                        name: 'b',
                        highlightType: 'highlighted',
                        topLeftBadgeType: 'betaReduced',
                        bottomRightBadgeType: 'funcBound',
                        type: 'variable',
                        argPriorityAgg: [1, 2],
                        funcPriorityAgg: [],
                        emphasizePriority: false,
                        bound: false,
                        shorthandUnary: undefined
                      },
                      body: {
                        arg: {
                          arg: {
                            name: 'b',
                            highlightType: 'highlighted',
                            topLeftBadgeType: 'betaReduced',
                            bottomRightBadgeType: 'funcBound',
                            type: 'variable',
                            argPriorityAgg: [1, 2],
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
                            highlightType: 'highlighted',
                            topLeftBadgeType: 'betaReduced',
                            bottomRightBadgeType: 'funcBound',
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
                              type: 'conditional',
                              state: 'default',
                              checkType: 'isZero',
                              condition: {
                                name: 't',
                                highlightType: 'highlighted',
                                topLeftBadgeType: 'betaReduced',
                                bottomRightBadgeType: 'funcBound',
                                type: 'variable',
                                argPriorityAgg: [],
                                funcPriorityAgg: [],
                                emphasizePriority: false,
                                bound: true,
                                shorthandUnary: 'pred'
                              },
                              trueCase: {
                                name: 'shorthandNumber',
                                highlightType: 'highlighted',
                                topLeftBadgeType: 'betaReduced',
                                bottomRightBadgeType: 'funcBound',
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
                                      highlightType: 'highlighted',
                                      topLeftBadgeType: 'betaReduced',
                                      bottomRightBadgeType: 'funcBound',
                                      type: 'variable',
                                      argPriorityAgg: [1, 2, 3, 4],
                                      funcPriorityAgg: [],
                                      emphasizePriority: false,
                                      bound: true,
                                      shorthandUnary: 'pred'
                                    },
                                    func: {
                                      name: 's',
                                      highlightType: 'highlighted',
                                      topLeftBadgeType: 'betaReduced',
                                      bottomRightBadgeType: 'funcBound',
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
                                    highlightType: 'highlighted',
                                    topLeftBadgeType: 'betaReduced',
                                    bottomRightBadgeType: 'funcBound',
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
                        highlightType: 'highlighted',
                        topLeftBadgeType: 'betaReduced',
                        bottomRightBadgeType: 'funcBound',
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
                            name: 'b',
                            highlightType: 'highlighted',
                            topLeftBadgeType: 'betaReduced',
                            bottomRightBadgeType: 'funcBound',
                            type: 'variable',
                            argPriorityAgg: [1, 2],
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
                            highlightType: 'highlighted',
                            topLeftBadgeType: 'betaReduced',
                            bottomRightBadgeType: 'funcBound',
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
                              type: 'conditional',
                              state: 'default',
                              checkType: 'isZero',
                              condition: {
                                name: 't',
                                highlightType: 'highlighted',
                                topLeftBadgeType: 'betaReduced',
                                bottomRightBadgeType: 'funcBound',
                                type: 'variable',
                                argPriorityAgg: [],
                                funcPriorityAgg: [],
                                emphasizePriority: false,
                                bound: true,
                                shorthandUnary: 'pred'
                              },
                              trueCase: {
                                name: 'shorthandNumber',
                                highlightType: 'highlighted',
                                topLeftBadgeType: 'betaReduced',
                                bottomRightBadgeType: 'funcBound',
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
                                      highlightType: 'highlighted',
                                      topLeftBadgeType: 'betaReduced',
                                      bottomRightBadgeType: 'funcBound',
                                      type: 'variable',
                                      argPriorityAgg: [1, 2, 3, 4],
                                      funcPriorityAgg: [],
                                      emphasizePriority: false,
                                      bound: true,
                                      shorthandUnary: 'pred'
                                    },
                                    func: {
                                      name: 's',
                                      highlightType: 'highlighted',
                                      topLeftBadgeType: 'betaReduced',
                                      bottomRightBadgeType: 'funcBound',
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
                                    highlightType: 'highlighted',
                                    topLeftBadgeType: 'betaReduced',
                                    bottomRightBadgeType: 'funcBound',
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
                    priority: 2
                  },
                  func: {
                    arg: {
                      name: 'a',
                      highlightType: 'active',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'funcUnbound',
                      type: 'variable',
                      argPriorityAgg: [],
                      funcPriorityAgg: [1],
                      emphasizePriority: false,
                      bound: false,
                      shorthandUnary: undefined
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
                        bound: false,
                        shorthandUnary: undefined
                      },
                      body: {
                        type: 'conditional',
                        state: 'default',
                        checkType: 'isZero',
                        condition: {
                          name: 'c',
                          highlightType: 'active',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'funcBound',
                          type: 'variable',
                          argPriorityAgg: [],
                          funcPriorityAgg: [],
                          emphasizePriority: false,
                          bound: true,
                          shorthandUnary: 'pred'
                        },
                        trueCase: {
                          name: 'shorthandNumber',
                          highlightType: 'active',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'funcBound',
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
                                name: 'c',
                                highlightType: 'active',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'funcBound',
                                type: 'variable',
                                argPriorityAgg: [1, 2, 3, 4],
                                funcPriorityAgg: [],
                                emphasizePriority: false,
                                bound: true,
                                shorthandUnary: 'pred'
                              },
                              func: {
                                name: 'a',
                                highlightType: 'active',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'funcBound',
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
                              highlightType: 'active',
                              topLeftBadgeType: 'none',
                              bottomRightBadgeType: 'funcBound',
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
              shorthandNumber: 5,
              shorthandUnary: undefined
            },
            func: {
              arg: {
                arg: {
                  name: 'b',
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
                    arg: {
                      name: 'b',
                      highlightType: 'removed',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'callArg',
                      type: 'variable',
                      argPriorityAgg: [1, 2],
                      funcPriorityAgg: [],
                      emphasizePriority: false,
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
                      name: 's',
                      highlightType: 'removed',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'callArg',
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
                        type: 'conditional',
                        state: 'default',
                        checkType: 'isZero',
                        condition: {
                          name: 't',
                          highlightType: 'removed',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'callArg',
                          type: 'variable',
                          argPriorityAgg: [],
                          funcPriorityAgg: [],
                          emphasizePriority: false,
                          bound: true,
                          shorthandUnary: 'pred'
                        },
                        trueCase: {
                          name: 'shorthandNumber',
                          highlightType: 'removed',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'callArg',
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
                                highlightType: 'removed',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'callArg',
                                type: 'variable',
                                argPriorityAgg: [1, 2, 3, 4],
                                funcPriorityAgg: [],
                                emphasizePriority: false,
                                bound: true,
                                shorthandUnary: 'pred'
                              },
                              func: {
                                name: 's',
                                highlightType: 'removed',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'callArg',
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
                              highlightType: 'removed',
                              topLeftBadgeType: 'none',
                              bottomRightBadgeType: 'callArg',
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
                    arg: {
                      arg: {
                        name: 'b',
                        highlightType: 'active',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'funcUnbound',
                        type: 'variable',
                        argPriorityAgg: [1, 2],
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
                            name: 'b',
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
                          arg: {
                            name: 's',
                            highlightType: 'active',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'funcUnbound',
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
                              type: 'conditional',
                              state: 'default',
                              checkType: 'isZero',
                              condition: {
                                name: 't',
                                highlightType: 'active',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'funcBound',
                                type: 'variable',
                                argPriorityAgg: [],
                                funcPriorityAgg: [],
                                emphasizePriority: false,
                                bound: true,
                                shorthandUnary: 'pred'
                              },
                              trueCase: {
                                name: 'shorthandNumber',
                                highlightType: 'active',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'funcBound',
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
                                      highlightType: 'active',
                                      topLeftBadgeType: 'none',
                                      bottomRightBadgeType: 'funcBound',
                                      type: 'variable',
                                      argPriorityAgg: [1, 2, 3, 4],
                                      funcPriorityAgg: [],
                                      emphasizePriority: false,
                                      bound: true,
                                      shorthandUnary: 'pred'
                                    },
                                    func: {
                                      name: 's',
                                      highlightType: 'active',
                                      topLeftBadgeType: 'none',
                                      bottomRightBadgeType: 'funcBound',
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
                                    highlightType: 'active',
                                    topLeftBadgeType: 'none',
                                    bottomRightBadgeType: 'funcBound',
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
                        highlightType: 'active',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'funcUnbound',
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
                            name: 'b',
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
                          arg: {
                            name: 's',
                            highlightType: 'active',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'funcUnbound',
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
                              type: 'conditional',
                              state: 'default',
                              checkType: 'isZero',
                              condition: {
                                name: 't',
                                highlightType: 'active',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'funcBound',
                                type: 'variable',
                                argPriorityAgg: [],
                                funcPriorityAgg: [],
                                emphasizePriority: false,
                                bound: true,
                                shorthandUnary: 'pred'
                              },
                              trueCase: {
                                name: 'shorthandNumber',
                                highlightType: 'active',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'funcBound',
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
                                      highlightType: 'active',
                                      topLeftBadgeType: 'none',
                                      bottomRightBadgeType: 'funcBound',
                                      type: 'variable',
                                      argPriorityAgg: [1, 2, 3, 4],
                                      funcPriorityAgg: [],
                                      emphasizePriority: false,
                                      bound: true,
                                      shorthandUnary: 'pred'
                                    },
                                    func: {
                                      name: 's',
                                      highlightType: 'active',
                                      topLeftBadgeType: 'none',
                                      bottomRightBadgeType: 'funcBound',
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
                                    highlightType: 'active',
                                    topLeftBadgeType: 'none',
                                    bottomRightBadgeType: 'funcBound',
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
                    priority: 2
                  },
                  func: {
                    arg: {
                      name: 'a',
                      highlightType: 'active',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'funcUnbound',
                      type: 'variable',
                      argPriorityAgg: [],
                      funcPriorityAgg: [1],
                      emphasizePriority: false,
                      bound: false,
                      shorthandUnary: undefined
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
                        bound: false,
                        shorthandUnary: undefined
                      },
                      body: {
                        type: 'conditional',
                        state: 'default',
                        checkType: 'isZero',
                        condition: {
                          name: 'c',
                          highlightType: 'active',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'funcBound',
                          type: 'variable',
                          argPriorityAgg: [],
                          funcPriorityAgg: [],
                          emphasizePriority: false,
                          bound: true,
                          shorthandUnary: 'pred'
                        },
                        trueCase: {
                          name: 'shorthandNumber',
                          highlightType: 'active',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'funcBound',
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
                                name: 'c',
                                highlightType: 'active',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'funcBound',
                                type: 'variable',
                                argPriorityAgg: [1, 2, 3, 4],
                                funcPriorityAgg: [],
                                emphasizePriority: false,
                                bound: true,
                                shorthandUnary: 'pred'
                              },
                              func: {
                                name: 'a',
                                highlightType: 'active',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'funcBound',
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
                              highlightType: 'active',
                              topLeftBadgeType: 'none',
                              bottomRightBadgeType: 'funcBound',
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
              argPriorityAgg: [3],
              funcPriorityAgg: [],
              emphasizePriority: false,
              bound: true,
              shorthandNumber: 5,
              shorthandUnary: undefined
            },
            func: {
              arg: {
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
                    funcPriorityAgg: [2],
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
                priority: 2
              },
              func: {
                arg: {
                  name: 'a',
                  highlightType: 'default',
                  topLeftBadgeType: 'none',
                  bottomRightBadgeType: 'none',
                  type: 'variable',
                  argPriorityAgg: [],
                  funcPriorityAgg: [1, 3],
                  emphasizePriority: false,
                  bound: false,
                  shorthandUnary: undefined
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
                    bound: false,
                    shorthandUnary: undefined
                  },
                  body: {
                    type: 'conditional',
                    state: 'default',
                    checkType: 'isZero',
                    condition: {
                      name: 'c',
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
                            name: 'c',
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
                            name: 'a',
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
            priority: 3
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
              argPriorityAgg: [3],
              funcPriorityAgg: [],
              emphasizePriority: false,
              bound: true,
              shorthandNumber: 5,
              shorthandUnary: undefined
            },
            func: {
              arg: {
                arg: {
                  arg: {
                    name: 'b',
                    highlightType: 'active',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'none',
                    type: 'variable',
                    argPriorityAgg: [1, 2],
                    funcPriorityAgg: [],
                    emphasizePriority: true,
                    bound: false,
                    shorthandUnary: undefined
                  },
                  body: {
                    arg: {
                      arg: {
                        name: 'b',
                        highlightType: 'active',
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
                      arg: {
                        name: 's',
                        highlightType: 'active',
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
                          type: 'conditional',
                          state: 'default',
                          checkType: 'isZero',
                          condition: {
                            name: 't',
                            highlightType: 'active',
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
                            highlightType: 'active',
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
                                  highlightType: 'active',
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
                                  highlightType: 'active',
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
                                highlightType: 'active',
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
                    highlightType: 'active',
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
                        name: 'b',
                        highlightType: 'active',
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
                      arg: {
                        name: 's',
                        highlightType: 'active',
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
                          type: 'conditional',
                          state: 'default',
                          checkType: 'isZero',
                          condition: {
                            name: 't',
                            highlightType: 'active',
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
                            highlightType: 'active',
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
                                  highlightType: 'active',
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
                                  highlightType: 'active',
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
                                highlightType: 'active',
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
                  funcPriorityAgg: [1, 3],
                  emphasizePriority: true,
                  bound: false,
                  shorthandUnary: undefined
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
                    bound: false,
                    shorthandUnary: undefined
                  },
                  body: {
                    type: 'conditional',
                    state: 'default',
                    checkType: 'isZero',
                    condition: {
                      name: 'c',
                      highlightType: 'active',
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
                      highlightType: 'active',
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
                            name: 'c',
                            highlightType: 'active',
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
                            name: 'a',
                            highlightType: 'active',
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
                          highlightType: 'active',
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
            priority: 3
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
              argPriorityAgg: [3],
              funcPriorityAgg: [],
              emphasizePriority: false,
              bound: true,
              shorthandNumber: 5,
              shorthandUnary: undefined
            },
            func: {
              arg: {
                arg: {
                  arg: {
                    name: 'b',
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
                        name: 'b',
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
                      arg: {
                        name: 's',
                        highlightType: 'active',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'callArg',
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
                          type: 'conditional',
                          state: 'default',
                          checkType: 'isZero',
                          condition: {
                            name: 't',
                            highlightType: 'active',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'callArg',
                            type: 'variable',
                            argPriorityAgg: [],
                            funcPriorityAgg: [],
                            emphasizePriority: false,
                            bound: true,
                            shorthandUnary: 'pred'
                          },
                          trueCase: {
                            name: 'shorthandNumber',
                            highlightType: 'active',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'callArg',
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
                                  highlightType: 'active',
                                  topLeftBadgeType: 'none',
                                  bottomRightBadgeType: 'callArg',
                                  type: 'variable',
                                  argPriorityAgg: [1, 2, 3, 4],
                                  funcPriorityAgg: [],
                                  emphasizePriority: false,
                                  bound: true,
                                  shorthandUnary: 'pred'
                                },
                                func: {
                                  name: 's',
                                  highlightType: 'active',
                                  topLeftBadgeType: 'none',
                                  bottomRightBadgeType: 'callArg',
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
                                highlightType: 'active',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'callArg',
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
                        name: 'b',
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
                      arg: {
                        name: 's',
                        highlightType: 'active',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'callArg',
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
                          type: 'conditional',
                          state: 'default',
                          checkType: 'isZero',
                          condition: {
                            name: 't',
                            highlightType: 'active',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'callArg',
                            type: 'variable',
                            argPriorityAgg: [],
                            funcPriorityAgg: [],
                            emphasizePriority: false,
                            bound: true,
                            shorthandUnary: 'pred'
                          },
                          trueCase: {
                            name: 'shorthandNumber',
                            highlightType: 'active',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'callArg',
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
                                  highlightType: 'active',
                                  topLeftBadgeType: 'none',
                                  bottomRightBadgeType: 'callArg',
                                  type: 'variable',
                                  argPriorityAgg: [1, 2, 3, 4],
                                  funcPriorityAgg: [],
                                  emphasizePriority: false,
                                  bound: true,
                                  shorthandUnary: 'pred'
                                },
                                func: {
                                  name: 's',
                                  highlightType: 'active',
                                  topLeftBadgeType: 'none',
                                  bottomRightBadgeType: 'callArg',
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
                                highlightType: 'active',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'callArg',
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
                  funcPriorityAgg: [1, 3],
                  emphasizePriority: true,
                  bound: false,
                  shorthandUnary: undefined
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
                    bound: false,
                    shorthandUnary: undefined
                  },
                  body: {
                    type: 'conditional',
                    state: 'default',
                    checkType: 'isZero',
                    condition: {
                      name: 'c',
                      highlightType: 'active',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'funcBound',
                      type: 'variable',
                      argPriorityAgg: [],
                      funcPriorityAgg: [],
                      emphasizePriority: false,
                      bound: true,
                      shorthandUnary: 'pred'
                    },
                    trueCase: {
                      name: 'shorthandNumber',
                      highlightType: 'active',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'funcBound',
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
                            name: 'c',
                            highlightType: 'active',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'funcBound',
                            type: 'variable',
                            argPriorityAgg: [1, 2, 3, 4],
                            funcPriorityAgg: [],
                            emphasizePriority: false,
                            bound: true,
                            shorthandUnary: 'pred'
                          },
                          func: {
                            name: 'a',
                            highlightType: 'active',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'funcBound',
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
                          highlightType: 'active',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'funcBound',
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
            priority: 3
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
              argPriorityAgg: [3],
              funcPriorityAgg: [],
              emphasizePriority: false,
              bound: true,
              shorthandNumber: 5,
              shorthandUnary: undefined
            },
            func: {
              arg: {
                arg: {
                  arg: {
                    name: 'b',
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
                        name: 'b',
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
                      arg: {
                        name: 's',
                        highlightType: 'active',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'callArg',
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
                          type: 'conditional',
                          state: 'default',
                          checkType: 'isZero',
                          condition: {
                            name: 't',
                            highlightType: 'active',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'callArg',
                            type: 'variable',
                            argPriorityAgg: [],
                            funcPriorityAgg: [],
                            emphasizePriority: false,
                            bound: true,
                            shorthandUnary: 'pred'
                          },
                          trueCase: {
                            name: 'shorthandNumber',
                            highlightType: 'active',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'callArg',
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
                                  highlightType: 'active',
                                  topLeftBadgeType: 'none',
                                  bottomRightBadgeType: 'callArg',
                                  type: 'variable',
                                  argPriorityAgg: [1, 2, 3, 4],
                                  funcPriorityAgg: [],
                                  emphasizePriority: false,
                                  bound: true,
                                  shorthandUnary: 'pred'
                                },
                                func: {
                                  name: 's',
                                  highlightType: 'active',
                                  topLeftBadgeType: 'none',
                                  bottomRightBadgeType: 'callArg',
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
                                highlightType: 'active',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'callArg',
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
                        name: 'b',
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
                      arg: {
                        name: 's',
                        highlightType: 'active',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'callArg',
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
                          type: 'conditional',
                          state: 'default',
                          checkType: 'isZero',
                          condition: {
                            name: 't',
                            highlightType: 'active',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'callArg',
                            type: 'variable',
                            argPriorityAgg: [],
                            funcPriorityAgg: [],
                            emphasizePriority: false,
                            bound: true,
                            shorthandUnary: 'pred'
                          },
                          trueCase: {
                            name: 'shorthandNumber',
                            highlightType: 'active',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'callArg',
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
                                  highlightType: 'active',
                                  topLeftBadgeType: 'none',
                                  bottomRightBadgeType: 'callArg',
                                  type: 'variable',
                                  argPriorityAgg: [1, 2, 3, 4],
                                  funcPriorityAgg: [],
                                  emphasizePriority: false,
                                  bound: true,
                                  shorthandUnary: 'pred'
                                },
                                func: {
                                  name: 's',
                                  highlightType: 'active',
                                  topLeftBadgeType: 'none',
                                  bottomRightBadgeType: 'callArg',
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
                                highlightType: 'active',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'callArg',
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
                  funcPriorityAgg: [1, 3],
                  emphasizePriority: true,
                  bound: false,
                  shorthandUnary: undefined
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
                    bound: false,
                    shorthandUnary: undefined
                  },
                  body: {
                    type: 'conditional',
                    state: 'default',
                    checkType: 'isZero',
                    condition: {
                      name: 'c',
                      highlightType: 'highlighted',
                      topLeftBadgeType: 'unmatch',
                      bottomRightBadgeType: 'funcBound',
                      type: 'variable',
                      argPriorityAgg: [],
                      funcPriorityAgg: [],
                      emphasizePriority: false,
                      bound: true,
                      shorthandUnary: 'pred'
                    },
                    trueCase: {
                      name: 'shorthandNumber',
                      highlightType: 'highlighted',
                      topLeftBadgeType: 'unmatch',
                      bottomRightBadgeType: 'funcBound',
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
                            name: 'c',
                            highlightType: 'highlighted',
                            topLeftBadgeType: 'unmatch',
                            bottomRightBadgeType: 'funcBound',
                            type: 'variable',
                            argPriorityAgg: [1, 2, 3, 4],
                            funcPriorityAgg: [],
                            emphasizePriority: false,
                            bound: true,
                            shorthandUnary: 'pred'
                          },
                          func: {
                            name: 'a',
                            highlightType: 'highlighted',
                            topLeftBadgeType: 'match',
                            bottomRightBadgeType: 'funcBound',
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
                          highlightType: 'highlighted',
                          topLeftBadgeType: 'unmatch',
                          bottomRightBadgeType: 'funcBound',
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
            priority: 3
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
              argPriorityAgg: [3],
              funcPriorityAgg: [],
              emphasizePriority: false,
              bound: true,
              shorthandNumber: 5,
              shorthandUnary: undefined
            },
            func: {
              arg: {
                arg: {
                  arg: {
                    name: 'b',
                    highlightType: 'betaReduceCallArgHighlighted',
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
                    arg: {
                      arg: {
                        name: 'b',
                        highlightType: 'betaReduceCallArgHighlighted',
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
                        name: 'b',
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
                      arg: {
                        name: 's',
                        highlightType: 'betaReduceCallArgHighlighted',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'callArg',
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
                          type: 'conditional',
                          state: 'default',
                          checkType: 'isZero',
                          condition: {
                            name: 't',
                            highlightType: 'betaReduceCallArgHighlighted',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'callArg',
                            type: 'variable',
                            argPriorityAgg: [],
                            funcPriorityAgg: [],
                            emphasizePriority: false,
                            bound: true,
                            shorthandUnary: 'pred'
                          },
                          trueCase: {
                            name: 'shorthandNumber',
                            highlightType: 'betaReduceCallArgHighlighted',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'callArg',
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
                                  highlightType: 'betaReduceCallArgHighlighted',
                                  topLeftBadgeType: 'none',
                                  bottomRightBadgeType: 'callArg',
                                  type: 'variable',
                                  argPriorityAgg: [1, 2, 3, 4],
                                  funcPriorityAgg: [],
                                  emphasizePriority: false,
                                  bound: true,
                                  shorthandUnary: 'pred'
                                },
                                func: {
                                  name: 's',
                                  highlightType: 'betaReduceCallArgHighlighted',
                                  topLeftBadgeType: 'none',
                                  bottomRightBadgeType: 'callArg',
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
                                highlightType: 'betaReduceCallArgHighlighted',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'callArg',
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
                    highlightType: 'betaReduceCallArgHighlighted',
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
                      arg: {
                        name: 'b',
                        highlightType: 'betaReduceCallArgHighlighted',
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
                        name: 'b',
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
                      arg: {
                        name: 's',
                        highlightType: 'betaReduceCallArgHighlighted',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'callArg',
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
                          type: 'conditional',
                          state: 'default',
                          checkType: 'isZero',
                          condition: {
                            name: 't',
                            highlightType: 'betaReduceCallArgHighlighted',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'callArg',
                            type: 'variable',
                            argPriorityAgg: [],
                            funcPriorityAgg: [],
                            emphasizePriority: false,
                            bound: true,
                            shorthandUnary: 'pred'
                          },
                          trueCase: {
                            name: 'shorthandNumber',
                            highlightType: 'betaReduceCallArgHighlighted',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'callArg',
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
                                  highlightType: 'betaReduceCallArgHighlighted',
                                  topLeftBadgeType: 'none',
                                  bottomRightBadgeType: 'callArg',
                                  type: 'variable',
                                  argPriorityAgg: [1, 2, 3, 4],
                                  funcPriorityAgg: [],
                                  emphasizePriority: false,
                                  bound: true,
                                  shorthandUnary: 'pred'
                                },
                                func: {
                                  name: 's',
                                  highlightType: 'betaReduceCallArgHighlighted',
                                  topLeftBadgeType: 'none',
                                  bottomRightBadgeType: 'callArg',
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
                                highlightType: 'betaReduceCallArgHighlighted',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'callArg',
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
                  funcPriorityAgg: [1, 3],
                  emphasizePriority: true,
                  bound: false,
                  shorthandUnary: undefined
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
                    bound: false,
                    shorthandUnary: undefined
                  },
                  body: {
                    type: 'conditional',
                    state: 'default',
                    checkType: 'isZero',
                    condition: {
                      name: 'c',
                      highlightType: 'active',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'funcBound',
                      type: 'variable',
                      argPriorityAgg: [],
                      funcPriorityAgg: [],
                      emphasizePriority: false,
                      bound: true,
                      shorthandUnary: 'pred'
                    },
                    trueCase: {
                      name: 'shorthandNumber',
                      highlightType: 'active',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'funcBound',
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
                            name: 'c',
                            highlightType: 'active',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'funcBound',
                            type: 'variable',
                            argPriorityAgg: [1, 2, 3, 5],
                            funcPriorityAgg: [],
                            emphasizePriority: false,
                            bound: true,
                            shorthandUnary: 'pred'
                          },
                          func: {
                            arg: {
                              arg: {
                                name: 'b',
                                highlightType: 'highlighted',
                                topLeftBadgeType: 'betaReduced',
                                bottomRightBadgeType: 'funcBound',
                                type: 'variable',
                                argPriorityAgg: [4],
                                funcPriorityAgg: [],
                                emphasizePriority: false,
                                bound: false,
                                shorthandUnary: undefined
                              },
                              body: {
                                arg: {
                                  arg: {
                                    name: 'b',
                                    highlightType: 'highlighted',
                                    topLeftBadgeType: 'betaReduced',
                                    bottomRightBadgeType: 'funcBound',
                                    type: 'variable',
                                    argPriorityAgg: [1, 2],
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
                                    highlightType: 'highlighted',
                                    topLeftBadgeType: 'betaReduced',
                                    bottomRightBadgeType: 'funcBound',
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
                                      type: 'conditional',
                                      state: 'default',
                                      checkType: 'isZero',
                                      condition: {
                                        name: 't',
                                        highlightType: 'highlighted',
                                        topLeftBadgeType: 'betaReduced',
                                        bottomRightBadgeType: 'funcBound',
                                        type: 'variable',
                                        argPriorityAgg: [],
                                        funcPriorityAgg: [],
                                        emphasizePriority: false,
                                        bound: true,
                                        shorthandUnary: 'pred'
                                      },
                                      trueCase: {
                                        name: 'shorthandNumber',
                                        highlightType: 'highlighted',
                                        topLeftBadgeType: 'betaReduced',
                                        bottomRightBadgeType: 'funcBound',
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
                                              highlightType: 'highlighted',
                                              topLeftBadgeType: 'betaReduced',
                                              bottomRightBadgeType: 'funcBound',
                                              type: 'variable',
                                              argPriorityAgg: [1, 2, 3, 4],
                                              funcPriorityAgg: [],
                                              emphasizePriority: false,
                                              bound: true,
                                              shorthandUnary: 'pred'
                                            },
                                            func: {
                                              name: 's',
                                              highlightType: 'highlighted',
                                              topLeftBadgeType: 'betaReduced',
                                              bottomRightBadgeType: 'funcBound',
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
                                            highlightType: 'highlighted',
                                            topLeftBadgeType: 'betaReduced',
                                            bottomRightBadgeType: 'funcBound',
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
                                highlightType: 'highlighted',
                                topLeftBadgeType: 'betaReduced',
                                bottomRightBadgeType: 'funcBound',
                                type: 'variable',
                                argPriorityAgg: [],
                                funcPriorityAgg: [4, 5],
                                emphasizePriority: false,
                                bound: false,
                                shorthandUnary: undefined
                              },
                              body: {
                                arg: {
                                  arg: {
                                    name: 'b',
                                    highlightType: 'highlighted',
                                    topLeftBadgeType: 'betaReduced',
                                    bottomRightBadgeType: 'funcBound',
                                    type: 'variable',
                                    argPriorityAgg: [1, 2],
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
                                    highlightType: 'highlighted',
                                    topLeftBadgeType: 'betaReduced',
                                    bottomRightBadgeType: 'funcBound',
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
                                      type: 'conditional',
                                      state: 'default',
                                      checkType: 'isZero',
                                      condition: {
                                        name: 't',
                                        highlightType: 'highlighted',
                                        topLeftBadgeType: 'betaReduced',
                                        bottomRightBadgeType: 'funcBound',
                                        type: 'variable',
                                        argPriorityAgg: [],
                                        funcPriorityAgg: [],
                                        emphasizePriority: false,
                                        bound: true,
                                        shorthandUnary: 'pred'
                                      },
                                      trueCase: {
                                        name: 'shorthandNumber',
                                        highlightType: 'highlighted',
                                        topLeftBadgeType: 'betaReduced',
                                        bottomRightBadgeType: 'funcBound',
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
                                              highlightType: 'highlighted',
                                              topLeftBadgeType: 'betaReduced',
                                              bottomRightBadgeType: 'funcBound',
                                              type: 'variable',
                                              argPriorityAgg: [1, 2, 3, 4],
                                              funcPriorityAgg: [],
                                              emphasizePriority: false,
                                              bound: true,
                                              shorthandUnary: 'pred'
                                            },
                                            func: {
                                              name: 's',
                                              highlightType: 'highlighted',
                                              topLeftBadgeType: 'betaReduced',
                                              bottomRightBadgeType: 'funcBound',
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
                                            highlightType: 'highlighted',
                                            topLeftBadgeType: 'betaReduced',
                                            bottomRightBadgeType: 'funcBound',
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
                            priority: 4
                          },
                          state: 'default',
                          type: 'call',
                          priority: 5
                        },
                        func: {
                          name: 'shorthandBinary',
                          highlightType: 'active',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'funcBound',
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
            priority: 3
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
              argPriorityAgg: [3],
              funcPriorityAgg: [],
              emphasizePriority: false,
              bound: true,
              shorthandNumber: 5,
              shorthandUnary: undefined
            },
            func: {
              arg: {
                arg: {
                  arg: {
                    name: 'b',
                    highlightType: 'removed',
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
                    arg: {
                      arg: {
                        name: 'b',
                        highlightType: 'removed',
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
                        name: 'b',
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
                      arg: {
                        name: 's',
                        highlightType: 'removed',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'callArg',
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
                          type: 'conditional',
                          state: 'default',
                          checkType: 'isZero',
                          condition: {
                            name: 't',
                            highlightType: 'removed',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'callArg',
                            type: 'variable',
                            argPriorityAgg: [],
                            funcPriorityAgg: [],
                            emphasizePriority: false,
                            bound: true,
                            shorthandUnary: 'pred'
                          },
                          trueCase: {
                            name: 'shorthandNumber',
                            highlightType: 'removed',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'callArg',
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
                                  highlightType: 'removed',
                                  topLeftBadgeType: 'none',
                                  bottomRightBadgeType: 'callArg',
                                  type: 'variable',
                                  argPriorityAgg: [1, 2, 3, 4],
                                  funcPriorityAgg: [],
                                  emphasizePriority: false,
                                  bound: true,
                                  shorthandUnary: 'pred'
                                },
                                func: {
                                  name: 's',
                                  highlightType: 'removed',
                                  topLeftBadgeType: 'none',
                                  bottomRightBadgeType: 'callArg',
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
                                highlightType: 'removed',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'callArg',
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
                    highlightType: 'removed',
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
                      arg: {
                        name: 'b',
                        highlightType: 'removed',
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
                        name: 'b',
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
                      arg: {
                        name: 's',
                        highlightType: 'removed',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'callArg',
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
                          type: 'conditional',
                          state: 'default',
                          checkType: 'isZero',
                          condition: {
                            name: 't',
                            highlightType: 'removed',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'callArg',
                            type: 'variable',
                            argPriorityAgg: [],
                            funcPriorityAgg: [],
                            emphasizePriority: false,
                            bound: true,
                            shorthandUnary: 'pred'
                          },
                          trueCase: {
                            name: 'shorthandNumber',
                            highlightType: 'removed',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'callArg',
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
                                  highlightType: 'removed',
                                  topLeftBadgeType: 'none',
                                  bottomRightBadgeType: 'callArg',
                                  type: 'variable',
                                  argPriorityAgg: [1, 2, 3, 4],
                                  funcPriorityAgg: [],
                                  emphasizePriority: false,
                                  bound: true,
                                  shorthandUnary: 'pred'
                                },
                                func: {
                                  name: 's',
                                  highlightType: 'removed',
                                  topLeftBadgeType: 'none',
                                  bottomRightBadgeType: 'callArg',
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
                                highlightType: 'removed',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'callArg',
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
                  funcPriorityAgg: [1, 3],
                  emphasizePriority: true,
                  bound: false,
                  shorthandUnary: undefined
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
                    bound: false,
                    shorthandUnary: undefined
                  },
                  body: {
                    type: 'conditional',
                    state: 'default',
                    checkType: 'isZero',
                    condition: {
                      name: 'c',
                      highlightType: 'active',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'funcBound',
                      type: 'variable',
                      argPriorityAgg: [],
                      funcPriorityAgg: [],
                      emphasizePriority: false,
                      bound: true,
                      shorthandUnary: 'pred'
                    },
                    trueCase: {
                      name: 'shorthandNumber',
                      highlightType: 'active',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'funcBound',
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
                            name: 'c',
                            highlightType: 'active',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'funcBound',
                            type: 'variable',
                            argPriorityAgg: [1, 2, 3, 5],
                            funcPriorityAgg: [],
                            emphasizePriority: false,
                            bound: true,
                            shorthandUnary: 'pred'
                          },
                          func: {
                            arg: {
                              arg: {
                                name: 'b',
                                highlightType: 'active',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'funcUnbound',
                                type: 'variable',
                                argPriorityAgg: [4],
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
                                    name: 'b',
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
                                  arg: {
                                    name: 's',
                                    highlightType: 'active',
                                    topLeftBadgeType: 'none',
                                    bottomRightBadgeType: 'funcUnbound',
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
                                      type: 'conditional',
                                      state: 'default',
                                      checkType: 'isZero',
                                      condition: {
                                        name: 't',
                                        highlightType: 'active',
                                        topLeftBadgeType: 'none',
                                        bottomRightBadgeType: 'funcBound',
                                        type: 'variable',
                                        argPriorityAgg: [],
                                        funcPriorityAgg: [],
                                        emphasizePriority: false,
                                        bound: true,
                                        shorthandUnary: 'pred'
                                      },
                                      trueCase: {
                                        name: 'shorthandNumber',
                                        highlightType: 'active',
                                        topLeftBadgeType: 'none',
                                        bottomRightBadgeType: 'funcBound',
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
                                              highlightType: 'active',
                                              topLeftBadgeType: 'none',
                                              bottomRightBadgeType: 'funcBound',
                                              type: 'variable',
                                              argPriorityAgg: [1, 2, 3, 4],
                                              funcPriorityAgg: [],
                                              emphasizePriority: false,
                                              bound: true,
                                              shorthandUnary: 'pred'
                                            },
                                            func: {
                                              name: 's',
                                              highlightType: 'active',
                                              topLeftBadgeType: 'none',
                                              bottomRightBadgeType: 'funcBound',
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
                                            highlightType: 'active',
                                            topLeftBadgeType: 'none',
                                            bottomRightBadgeType: 'funcBound',
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
                                highlightType: 'active',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'funcUnbound',
                                type: 'variable',
                                argPriorityAgg: [],
                                funcPriorityAgg: [4, 5],
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
                                    name: 'b',
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
                                  arg: {
                                    name: 's',
                                    highlightType: 'active',
                                    topLeftBadgeType: 'none',
                                    bottomRightBadgeType: 'funcUnbound',
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
                                      type: 'conditional',
                                      state: 'default',
                                      checkType: 'isZero',
                                      condition: {
                                        name: 't',
                                        highlightType: 'active',
                                        topLeftBadgeType: 'none',
                                        bottomRightBadgeType: 'funcBound',
                                        type: 'variable',
                                        argPriorityAgg: [],
                                        funcPriorityAgg: [],
                                        emphasizePriority: false,
                                        bound: true,
                                        shorthandUnary: 'pred'
                                      },
                                      trueCase: {
                                        name: 'shorthandNumber',
                                        highlightType: 'active',
                                        topLeftBadgeType: 'none',
                                        bottomRightBadgeType: 'funcBound',
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
                                              highlightType: 'active',
                                              topLeftBadgeType: 'none',
                                              bottomRightBadgeType: 'funcBound',
                                              type: 'variable',
                                              argPriorityAgg: [1, 2, 3, 4],
                                              funcPriorityAgg: [],
                                              emphasizePriority: false,
                                              bound: true,
                                              shorthandUnary: 'pred'
                                            },
                                            func: {
                                              name: 's',
                                              highlightType: 'active',
                                              topLeftBadgeType: 'none',
                                              bottomRightBadgeType: 'funcBound',
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
                                            highlightType: 'active',
                                            topLeftBadgeType: 'none',
                                            bottomRightBadgeType: 'funcBound',
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
                            priority: 4
                          },
                          state: 'default',
                          type: 'call',
                          priority: 5
                        },
                        func: {
                          name: 'shorthandBinary',
                          highlightType: 'active',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'funcBound',
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
            priority: 3
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
              argPriorityAgg: [1],
              funcPriorityAgg: [],
              emphasizePriority: false,
              bound: true,
              shorthandNumber: 5,
              shorthandUnary: undefined
            },
            func: {
              arg: {
                name: 'c',
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
                type: 'conditional',
                state: 'default',
                checkType: 'isZero',
                condition: {
                  name: 'c',
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
                        name: 'c',
                        highlightType: 'default',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'none',
                        type: 'variable',
                        argPriorityAgg: [1, 2, 3, 5],
                        funcPriorityAgg: [],
                        emphasizePriority: false,
                        bound: true,
                        shorthandUnary: 'pred'
                      },
                      func: {
                        arg: {
                          arg: {
                            name: 'b',
                            highlightType: 'default',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'none',
                            type: 'variable',
                            argPriorityAgg: [4],
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
                            funcPriorityAgg: [4, 5],
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
                        priority: 4
                      },
                      state: 'default',
                      type: 'call',
                      priority: 5
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
                priority: 1
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
              name: 'shorthandNumber',
              highlightType: 'active',
              topLeftBadgeType: 'none',
              bottomRightBadgeType: 'none',
              type: 'variable',
              argPriorityAgg: [1],
              funcPriorityAgg: [],
              emphasizePriority: true,
              bound: true,
              shorthandNumber: 5,
              shorthandUnary: undefined
            },
            func: {
              arg: {
                name: 'c',
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
                type: 'conditional',
                state: 'default',
                checkType: 'isZero',
                condition: {
                  name: 'c',
                  highlightType: 'active',
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
                  highlightType: 'active',
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
                        name: 'c',
                        highlightType: 'active',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'none',
                        type: 'variable',
                        argPriorityAgg: [1, 2, 3, 5],
                        funcPriorityAgg: [],
                        emphasizePriority: false,
                        bound: true,
                        shorthandUnary: 'pred'
                      },
                      func: {
                        arg: {
                          arg: {
                            name: 'b',
                            highlightType: 'active',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'none',
                            type: 'variable',
                            argPriorityAgg: [4],
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
                              arg: {
                                name: 's',
                                highlightType: 'active',
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
                                  type: 'conditional',
                                  state: 'default',
                                  checkType: 'isZero',
                                  condition: {
                                    name: 't',
                                    highlightType: 'active',
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
                                    highlightType: 'active',
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
                                          highlightType: 'active',
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
                                          highlightType: 'active',
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
                                        highlightType: 'active',
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
                            highlightType: 'active',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'none',
                            type: 'variable',
                            argPriorityAgg: [],
                            funcPriorityAgg: [4, 5],
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
                              arg: {
                                name: 's',
                                highlightType: 'active',
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
                                  type: 'conditional',
                                  state: 'default',
                                  checkType: 'isZero',
                                  condition: {
                                    name: 't',
                                    highlightType: 'active',
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
                                    highlightType: 'active',
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
                                          highlightType: 'active',
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
                                          highlightType: 'active',
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
                                        highlightType: 'active',
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
                        priority: 4
                      },
                      state: 'default',
                      type: 'call',
                      priority: 5
                    },
                    func: {
                      name: 'shorthandBinary',
                      highlightType: 'active',
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
                priority: 1
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
              name: 'shorthandNumber',
              highlightType: 'active',
              topLeftBadgeType: 'none',
              bottomRightBadgeType: 'callArg',
              type: 'variable',
              argPriorityAgg: [1],
              funcPriorityAgg: [],
              emphasizePriority: true,
              bound: true,
              shorthandNumber: 5,
              shorthandUnary: undefined
            },
            func: {
              arg: {
                name: 'c',
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
                type: 'conditional',
                state: 'default',
                checkType: 'isZero',
                condition: {
                  name: 'c',
                  highlightType: 'active',
                  topLeftBadgeType: 'none',
                  bottomRightBadgeType: 'funcBound',
                  type: 'variable',
                  argPriorityAgg: [],
                  funcPriorityAgg: [],
                  emphasizePriority: false,
                  bound: true,
                  shorthandUnary: 'pred'
                },
                trueCase: {
                  name: 'shorthandNumber',
                  highlightType: 'active',
                  topLeftBadgeType: 'none',
                  bottomRightBadgeType: 'funcBound',
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
                        name: 'c',
                        highlightType: 'active',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'funcBound',
                        type: 'variable',
                        argPriorityAgg: [1, 2, 3, 5],
                        funcPriorityAgg: [],
                        emphasizePriority: false,
                        bound: true,
                        shorthandUnary: 'pred'
                      },
                      func: {
                        arg: {
                          arg: {
                            name: 'b',
                            highlightType: 'active',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'funcUnbound',
                            type: 'variable',
                            argPriorityAgg: [4],
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
                                name: 'b',
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
                              arg: {
                                name: 's',
                                highlightType: 'active',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'funcUnbound',
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
                                  type: 'conditional',
                                  state: 'default',
                                  checkType: 'isZero',
                                  condition: {
                                    name: 't',
                                    highlightType: 'active',
                                    topLeftBadgeType: 'none',
                                    bottomRightBadgeType: 'funcBound',
                                    type: 'variable',
                                    argPriorityAgg: [],
                                    funcPriorityAgg: [],
                                    emphasizePriority: false,
                                    bound: true,
                                    shorthandUnary: 'pred'
                                  },
                                  trueCase: {
                                    name: 'shorthandNumber',
                                    highlightType: 'active',
                                    topLeftBadgeType: 'none',
                                    bottomRightBadgeType: 'funcBound',
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
                                          highlightType: 'active',
                                          topLeftBadgeType: 'none',
                                          bottomRightBadgeType: 'funcBound',
                                          type: 'variable',
                                          argPriorityAgg: [1, 2, 3, 4],
                                          funcPriorityAgg: [],
                                          emphasizePriority: false,
                                          bound: true,
                                          shorthandUnary: 'pred'
                                        },
                                        func: {
                                          name: 's',
                                          highlightType: 'active',
                                          topLeftBadgeType: 'none',
                                          bottomRightBadgeType: 'funcBound',
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
                                        highlightType: 'active',
                                        topLeftBadgeType: 'none',
                                        bottomRightBadgeType: 'funcBound',
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
                            highlightType: 'active',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'funcUnbound',
                            type: 'variable',
                            argPriorityAgg: [],
                            funcPriorityAgg: [4, 5],
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
                                name: 'b',
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
                              arg: {
                                name: 's',
                                highlightType: 'active',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'funcUnbound',
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
                                  type: 'conditional',
                                  state: 'default',
                                  checkType: 'isZero',
                                  condition: {
                                    name: 't',
                                    highlightType: 'active',
                                    topLeftBadgeType: 'none',
                                    bottomRightBadgeType: 'funcBound',
                                    type: 'variable',
                                    argPriorityAgg: [],
                                    funcPriorityAgg: [],
                                    emphasizePriority: false,
                                    bound: true,
                                    shorthandUnary: 'pred'
                                  },
                                  trueCase: {
                                    name: 'shorthandNumber',
                                    highlightType: 'active',
                                    topLeftBadgeType: 'none',
                                    bottomRightBadgeType: 'funcBound',
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
                                          highlightType: 'active',
                                          topLeftBadgeType: 'none',
                                          bottomRightBadgeType: 'funcBound',
                                          type: 'variable',
                                          argPriorityAgg: [1, 2, 3, 4],
                                          funcPriorityAgg: [],
                                          emphasizePriority: false,
                                          bound: true,
                                          shorthandUnary: 'pred'
                                        },
                                        func: {
                                          name: 's',
                                          highlightType: 'active',
                                          topLeftBadgeType: 'none',
                                          bottomRightBadgeType: 'funcBound',
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
                                        highlightType: 'active',
                                        topLeftBadgeType: 'none',
                                        bottomRightBadgeType: 'funcBound',
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
                        priority: 4
                      },
                      state: 'default',
                      type: 'call',
                      priority: 5
                    },
                    func: {
                      name: 'shorthandBinary',
                      highlightType: 'active',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'funcBound',
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
                priority: 1
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
              name: 'shorthandNumber',
              highlightType: 'active',
              topLeftBadgeType: 'none',
              bottomRightBadgeType: 'callArg',
              type: 'variable',
              argPriorityAgg: [1],
              funcPriorityAgg: [],
              emphasizePriority: true,
              bound: true,
              shorthandNumber: 5,
              shorthandUnary: undefined
            },
            func: {
              arg: {
                name: 'c',
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
                type: 'conditional',
                state: 'default',
                checkType: 'isZero',
                condition: {
                  name: 'c',
                  highlightType: 'highlighted',
                  topLeftBadgeType: 'match',
                  bottomRightBadgeType: 'funcBound',
                  type: 'variable',
                  argPriorityAgg: [],
                  funcPriorityAgg: [],
                  emphasizePriority: false,
                  bound: true,
                  shorthandUnary: 'pred'
                },
                trueCase: {
                  name: 'shorthandNumber',
                  highlightType: 'highlighted',
                  topLeftBadgeType: 'unmatch',
                  bottomRightBadgeType: 'funcBound',
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
                        name: 'c',
                        highlightType: 'highlighted',
                        topLeftBadgeType: 'match',
                        bottomRightBadgeType: 'funcBound',
                        type: 'variable',
                        argPriorityAgg: [1, 2, 3, 5],
                        funcPriorityAgg: [],
                        emphasizePriority: false,
                        bound: true,
                        shorthandUnary: 'pred'
                      },
                      func: {
                        arg: {
                          arg: {
                            name: 'b',
                            highlightType: 'active',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'funcUnbound',
                            type: 'variable',
                            argPriorityAgg: [4],
                            funcPriorityAgg: [],
                            emphasizePriority: false,
                            bound: false,
                            shorthandUnary: undefined
                          },
                          body: {
                            arg: {
                              arg: {
                                name: 'b',
                                highlightType: 'highlighted',
                                topLeftBadgeType: 'unmatch',
                                bottomRightBadgeType: 'funcBound',
                                type: 'variable',
                                argPriorityAgg: [1, 2],
                                funcPriorityAgg: [],
                                emphasizePriority: false,
                                bound: true,
                                shorthandUnary: undefined
                              },
                              func: {
                                name: 'b',
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
                              arg: {
                                name: 's',
                                highlightType: 'active',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'funcUnbound',
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
                                  type: 'conditional',
                                  state: 'default',
                                  checkType: 'isZero',
                                  condition: {
                                    name: 't',
                                    highlightType: 'highlighted',
                                    topLeftBadgeType: 'unmatch',
                                    bottomRightBadgeType: 'funcBound',
                                    type: 'variable',
                                    argPriorityAgg: [],
                                    funcPriorityAgg: [],
                                    emphasizePriority: false,
                                    bound: true,
                                    shorthandUnary: 'pred'
                                  },
                                  trueCase: {
                                    name: 'shorthandNumber',
                                    highlightType: 'highlighted',
                                    topLeftBadgeType: 'unmatch',
                                    bottomRightBadgeType: 'funcBound',
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
                                          highlightType: 'highlighted',
                                          topLeftBadgeType: 'unmatch',
                                          bottomRightBadgeType: 'funcBound',
                                          type: 'variable',
                                          argPriorityAgg: [1, 2, 3, 4],
                                          funcPriorityAgg: [],
                                          emphasizePriority: false,
                                          bound: true,
                                          shorthandUnary: 'pred'
                                        },
                                        func: {
                                          name: 's',
                                          highlightType: 'highlighted',
                                          topLeftBadgeType: 'unmatch',
                                          bottomRightBadgeType: 'funcBound',
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
                                        highlightType: 'highlighted',
                                        topLeftBadgeType: 'unmatch',
                                        bottomRightBadgeType: 'funcBound',
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
                            highlightType: 'active',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'funcUnbound',
                            type: 'variable',
                            argPriorityAgg: [],
                            funcPriorityAgg: [4, 5],
                            emphasizePriority: false,
                            bound: false,
                            shorthandUnary: undefined
                          },
                          body: {
                            arg: {
                              arg: {
                                name: 'b',
                                highlightType: 'highlighted',
                                topLeftBadgeType: 'unmatch',
                                bottomRightBadgeType: 'funcBound',
                                type: 'variable',
                                argPriorityAgg: [1, 2],
                                funcPriorityAgg: [],
                                emphasizePriority: false,
                                bound: true,
                                shorthandUnary: undefined
                              },
                              func: {
                                name: 'b',
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
                              arg: {
                                name: 's',
                                highlightType: 'active',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'funcUnbound',
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
                                  type: 'conditional',
                                  state: 'default',
                                  checkType: 'isZero',
                                  condition: {
                                    name: 't',
                                    highlightType: 'highlighted',
                                    topLeftBadgeType: 'unmatch',
                                    bottomRightBadgeType: 'funcBound',
                                    type: 'variable',
                                    argPriorityAgg: [],
                                    funcPriorityAgg: [],
                                    emphasizePriority: false,
                                    bound: true,
                                    shorthandUnary: 'pred'
                                  },
                                  trueCase: {
                                    name: 'shorthandNumber',
                                    highlightType: 'highlighted',
                                    topLeftBadgeType: 'unmatch',
                                    bottomRightBadgeType: 'funcBound',
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
                                          highlightType: 'highlighted',
                                          topLeftBadgeType: 'unmatch',
                                          bottomRightBadgeType: 'funcBound',
                                          type: 'variable',
                                          argPriorityAgg: [1, 2, 3, 4],
                                          funcPriorityAgg: [],
                                          emphasizePriority: false,
                                          bound: true,
                                          shorthandUnary: 'pred'
                                        },
                                        func: {
                                          name: 's',
                                          highlightType: 'highlighted',
                                          topLeftBadgeType: 'unmatch',
                                          bottomRightBadgeType: 'funcBound',
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
                                        highlightType: 'highlighted',
                                        topLeftBadgeType: 'unmatch',
                                        bottomRightBadgeType: 'funcBound',
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
                        priority: 4
                      },
                      state: 'default',
                      type: 'call',
                      priority: 5
                    },
                    func: {
                      name: 'shorthandBinary',
                      highlightType: 'highlighted',
                      topLeftBadgeType: 'unmatch',
                      bottomRightBadgeType: 'funcBound',
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
                    name: 'c',
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
        },
        {
          expression: {
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
              shorthandNumber: 5,
              shorthandUnary: undefined
            },
            func: {
              arg: {
                name: 'c',
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
                  shorthandNumber: 5,
                  shorthandUnary: 'pred'
                },
                trueCase: {
                  name: 'shorthandNumber',
                  highlightType: 'active',
                  topLeftBadgeType: 'none',
                  bottomRightBadgeType: 'funcBound',
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
                        name: 'shorthandNumber',
                        highlightType: 'highlighted',
                        topLeftBadgeType: 'betaReduced',
                        bottomRightBadgeType: 'funcBound',
                        type: 'variable',
                        argPriorityAgg: [1, 2, 3, 5],
                        funcPriorityAgg: [],
                        emphasizePriority: false,
                        bound: true,
                        shorthandNumber: 5,
                        shorthandUnary: 'pred'
                      },
                      func: {
                        arg: {
                          arg: {
                            name: 'b',
                            highlightType: 'active',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'funcUnbound',
                            type: 'variable',
                            argPriorityAgg: [4],
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
                                name: 'b',
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
                              arg: {
                                name: 's',
                                highlightType: 'active',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'funcUnbound',
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
                                  type: 'conditional',
                                  state: 'default',
                                  checkType: 'isZero',
                                  condition: {
                                    name: 't',
                                    highlightType: 'active',
                                    topLeftBadgeType: 'none',
                                    bottomRightBadgeType: 'funcBound',
                                    type: 'variable',
                                    argPriorityAgg: [],
                                    funcPriorityAgg: [],
                                    emphasizePriority: false,
                                    bound: true,
                                    shorthandUnary: 'pred'
                                  },
                                  trueCase: {
                                    name: 'shorthandNumber',
                                    highlightType: 'active',
                                    topLeftBadgeType: 'none',
                                    bottomRightBadgeType: 'funcBound',
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
                                          highlightType: 'active',
                                          topLeftBadgeType: 'none',
                                          bottomRightBadgeType: 'funcBound',
                                          type: 'variable',
                                          argPriorityAgg: [1, 2, 3, 4],
                                          funcPriorityAgg: [],
                                          emphasizePriority: false,
                                          bound: true,
                                          shorthandUnary: 'pred'
                                        },
                                        func: {
                                          name: 's',
                                          highlightType: 'active',
                                          topLeftBadgeType: 'none',
                                          bottomRightBadgeType: 'funcBound',
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
                                        highlightType: 'active',
                                        topLeftBadgeType: 'none',
                                        bottomRightBadgeType: 'funcBound',
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
                            highlightType: 'active',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'funcUnbound',
                            type: 'variable',
                            argPriorityAgg: [],
                            funcPriorityAgg: [4, 5],
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
                                name: 'b',
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
                              arg: {
                                name: 's',
                                highlightType: 'active',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'funcUnbound',
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
                                  type: 'conditional',
                                  state: 'default',
                                  checkType: 'isZero',
                                  condition: {
                                    name: 't',
                                    highlightType: 'active',
                                    topLeftBadgeType: 'none',
                                    bottomRightBadgeType: 'funcBound',
                                    type: 'variable',
                                    argPriorityAgg: [],
                                    funcPriorityAgg: [],
                                    emphasizePriority: false,
                                    bound: true,
                                    shorthandUnary: 'pred'
                                  },
                                  trueCase: {
                                    name: 'shorthandNumber',
                                    highlightType: 'active',
                                    topLeftBadgeType: 'none',
                                    bottomRightBadgeType: 'funcBound',
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
                                          highlightType: 'active',
                                          topLeftBadgeType: 'none',
                                          bottomRightBadgeType: 'funcBound',
                                          type: 'variable',
                                          argPriorityAgg: [1, 2, 3, 4],
                                          funcPriorityAgg: [],
                                          emphasizePriority: false,
                                          bound: true,
                                          shorthandUnary: 'pred'
                                        },
                                        func: {
                                          name: 's',
                                          highlightType: 'active',
                                          topLeftBadgeType: 'none',
                                          bottomRightBadgeType: 'funcBound',
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
                                        highlightType: 'active',
                                        topLeftBadgeType: 'none',
                                        bottomRightBadgeType: 'funcBound',
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
                        priority: 4
                      },
                      state: 'default',
                      type: 'call',
                      priority: 5
                    },
                    func: {
                      name: 'shorthandBinary',
                      highlightType: 'active',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'funcBound',
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
                    name: 'shorthandNumber',
                    highlightType: 'highlighted',
                    topLeftBadgeType: 'betaReduced',
                    bottomRightBadgeType: 'funcBound',
                    type: 'variable',
                    argPriorityAgg: [],
                    funcPriorityAgg: [2],
                    emphasizePriority: false,
                    bound: true,
                    shorthandNumber: 5,
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
              name: 'shorthandNumber',
              highlightType: 'removed',
              topLeftBadgeType: 'none',
              bottomRightBadgeType: 'callArg',
              type: 'variable',
              argPriorityAgg: [1],
              funcPriorityAgg: [],
              emphasizePriority: true,
              bound: true,
              shorthandNumber: 5,
              shorthandUnary: undefined
            },
            func: {
              arg: {
                name: 'c',
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
                  shorthandNumber: 5,
                  shorthandUnary: 'pred'
                },
                trueCase: {
                  name: 'shorthandNumber',
                  highlightType: 'active',
                  topLeftBadgeType: 'none',
                  bottomRightBadgeType: 'funcBound',
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
                        name: 'shorthandNumber',
                        highlightType: 'active',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'funcBound',
                        type: 'variable',
                        argPriorityAgg: [1, 2, 3, 5],
                        funcPriorityAgg: [],
                        emphasizePriority: false,
                        bound: true,
                        shorthandNumber: 5,
                        shorthandUnary: 'pred'
                      },
                      func: {
                        arg: {
                          arg: {
                            name: 'b',
                            highlightType: 'active',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'funcUnbound',
                            type: 'variable',
                            argPriorityAgg: [4],
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
                                name: 'b',
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
                              arg: {
                                name: 's',
                                highlightType: 'active',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'funcUnbound',
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
                                  type: 'conditional',
                                  state: 'default',
                                  checkType: 'isZero',
                                  condition: {
                                    name: 't',
                                    highlightType: 'active',
                                    topLeftBadgeType: 'none',
                                    bottomRightBadgeType: 'funcBound',
                                    type: 'variable',
                                    argPriorityAgg: [],
                                    funcPriorityAgg: [],
                                    emphasizePriority: false,
                                    bound: true,
                                    shorthandUnary: 'pred'
                                  },
                                  trueCase: {
                                    name: 'shorthandNumber',
                                    highlightType: 'active',
                                    topLeftBadgeType: 'none',
                                    bottomRightBadgeType: 'funcBound',
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
                                          highlightType: 'active',
                                          topLeftBadgeType: 'none',
                                          bottomRightBadgeType: 'funcBound',
                                          type: 'variable',
                                          argPriorityAgg: [1, 2, 3, 4],
                                          funcPriorityAgg: [],
                                          emphasizePriority: false,
                                          bound: true,
                                          shorthandUnary: 'pred'
                                        },
                                        func: {
                                          name: 's',
                                          highlightType: 'active',
                                          topLeftBadgeType: 'none',
                                          bottomRightBadgeType: 'funcBound',
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
                                        highlightType: 'active',
                                        topLeftBadgeType: 'none',
                                        bottomRightBadgeType: 'funcBound',
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
                            highlightType: 'active',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'funcUnbound',
                            type: 'variable',
                            argPriorityAgg: [],
                            funcPriorityAgg: [4, 5],
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
                                name: 'b',
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
                              arg: {
                                name: 's',
                                highlightType: 'active',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'funcUnbound',
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
                                  type: 'conditional',
                                  state: 'default',
                                  checkType: 'isZero',
                                  condition: {
                                    name: 't',
                                    highlightType: 'active',
                                    topLeftBadgeType: 'none',
                                    bottomRightBadgeType: 'funcBound',
                                    type: 'variable',
                                    argPriorityAgg: [],
                                    funcPriorityAgg: [],
                                    emphasizePriority: false,
                                    bound: true,
                                    shorthandUnary: 'pred'
                                  },
                                  trueCase: {
                                    name: 'shorthandNumber',
                                    highlightType: 'active',
                                    topLeftBadgeType: 'none',
                                    bottomRightBadgeType: 'funcBound',
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
                                          highlightType: 'active',
                                          topLeftBadgeType: 'none',
                                          bottomRightBadgeType: 'funcBound',
                                          type: 'variable',
                                          argPriorityAgg: [1, 2, 3, 4],
                                          funcPriorityAgg: [],
                                          emphasizePriority: false,
                                          bound: true,
                                          shorthandUnary: 'pred'
                                        },
                                        func: {
                                          name: 's',
                                          highlightType: 'active',
                                          topLeftBadgeType: 'none',
                                          bottomRightBadgeType: 'funcBound',
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
                                        highlightType: 'active',
                                        topLeftBadgeType: 'none',
                                        bottomRightBadgeType: 'funcBound',
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
                        priority: 4
                      },
                      state: 'default',
                      type: 'call',
                      priority: 5
                    },
                    func: {
                      name: 'shorthandBinary',
                      highlightType: 'active',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'funcBound',
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
                    name: 'shorthandNumber',
                    highlightType: 'active',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'funcBound',
                    type: 'variable',
                    argPriorityAgg: [],
                    funcPriorityAgg: [2],
                    emphasizePriority: false,
                    bound: true,
                    shorthandNumber: 5,
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
              shorthandNumber: 5,
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
                    name: 'shorthandNumber',
                    highlightType: 'default',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'none',
                    type: 'variable',
                    argPriorityAgg: [1, 2, 3, 5],
                    funcPriorityAgg: [],
                    emphasizePriority: false,
                    bound: true,
                    shorthandNumber: 5,
                    shorthandUnary: 'pred'
                  },
                  func: {
                    arg: {
                      arg: {
                        name: 'b',
                        highlightType: 'default',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'none',
                        type: 'variable',
                        argPriorityAgg: [4],
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
                        funcPriorityAgg: [4, 5],
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
                    priority: 4
                  },
                  state: 'default',
                  type: 'call',
                  priority: 5
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
                name: 'shorthandNumber',
                highlightType: 'default',
                topLeftBadgeType: 'none',
                bottomRightBadgeType: 'none',
                type: 'variable',
                argPriorityAgg: [],
                funcPriorityAgg: [2],
                emphasizePriority: false,
                bound: true,
                shorthandNumber: 5,
                shorthandUnary: undefined
              },
              state: 'default',
              type: 'call',
              priority: 2
            },
            priority: 1
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
      superFastForward: true,
      highlightNumber: undefined,
      showAllShowSteps: undefined
    }}
  />
)

export default Bozr
