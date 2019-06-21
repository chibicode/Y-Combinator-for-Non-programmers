import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'

const Zvet = () => (
  <ExpressionRunnerPrecomputed
    {...{
      expressionContainers: [
        {
          containerState: 'stepped',
          previouslyChangedExpressionState: 'magicalExpanded',
          expression: {
            type: 'call',
            state: 'default',
            priority: 1,
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
            arg: {
              type: 'call',
              state: 'default',
              priority: 2,
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
                shorthandBinary: 'mult'
              },
              arg: {
                type: 'call',
                state: 'default',
                priority: 3,
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
                arg: {
                  type: 'call',
                  state: 'default',
                  priority: 4,
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
                    shorthandBinary: 'mult'
                  },
                  arg: {
                    state: 'magicalExpanded',
                    func: {
                      type: 'function',
                      arg: {
                        type: 'variable',
                        bound: false,
                        emphasizePriority: true,
                        argPriorityAgg: [],
                        funcPriorityAgg: [1],
                        name: 't',
                        highlightType: 'highlighted',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'none'
                      },
                      body: {
                        type: 'conditional',
                        checkType: 'isZero',
                        condition: {
                          type: 'variable',
                          bound: true,
                          emphasizePriority: true,
                          argPriorityAgg: [],
                          funcPriorityAgg: [],
                          name: 't',
                          highlightType: 'highlighted',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'none',
                          shorthandUnary: 'pred'
                        },
                        priority: 1,
                        state: 'default',
                        trueCase: {
                          name: 'shorthandNumber',
                          highlightType: 'highlighted',
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
                          type: 'call',
                          state: 'default',
                          priority: 2,
                          func: {
                            type: 'variable',
                            bound: true,
                            emphasizePriority: true,
                            argPriorityAgg: [],
                            funcPriorityAgg: [2],
                            name: 't',
                            highlightType: 'highlighted',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'none'
                          },
                          arg: {
                            type: 'call',
                            state: 'default',
                            priority: 3,
                            func: {
                              name: 'shorthandBinary',
                              highlightType: 'highlighted',
                              topLeftBadgeType: 'none',
                              bottomRightBadgeType: 'none',
                              type: 'variable',
                              argPriorityAgg: [],
                              funcPriorityAgg: [3],
                              emphasizePriority: false,
                              bound: true,
                              shorthandBinary: 'mult'
                            },
                            arg: {
                              type: 'call',
                              state: 'default',
                              priority: 4,
                              func: {
                                type: 'variable',
                                bound: true,
                                emphasizePriority: false,
                                name: 'magical',
                                argPriorityAgg: [],
                                funcPriorityAgg: [4],
                                highlightType: 'highlighted',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'none',
                                magical: true
                              },
                              arg: {
                                type: 'variable',
                                bound: true,
                                emphasizePriority: true,
                                argPriorityAgg: [1, 2, 3, 4],
                                funcPriorityAgg: [],
                                name: 't',
                                highlightType: 'highlighted',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'none',
                                shorthandUnary: 'pred'
                              }
                            }
                          }
                        }
                      }
                    },
                    type: 'call',
                    priority: 1,
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
                      shorthandNumber: 1,
                      shorthandUnary: undefined
                    }
                  }
                }
              }
            }
          },
          unaryJustExecuted: undefined,
          matchExists: undefined,
          activePriority: 5
        },
        {
          containerState: 'ready',
          previouslyChangedExpressionState: 'default',
          expression: {
            type: 'call',
            state: 'default',
            priority: 1,
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
            arg: {
              type: 'call',
              state: 'default',
              priority: 2,
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
                shorthandBinary: 'mult'
              },
              arg: {
                type: 'call',
                state: 'default',
                priority: 3,
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
                arg: {
                  type: 'call',
                  state: 'default',
                  priority: 4,
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
                    shorthandBinary: 'mult'
                  },
                  arg: {
                    state: 'default',
                    func: {
                      type: 'function',
                      arg: {
                        type: 'variable',
                        bound: false,
                        emphasizePriority: false,
                        argPriorityAgg: [],
                        funcPriorityAgg: [5],
                        name: 't',
                        highlightType: 'default',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'none'
                      },
                      body: {
                        type: 'conditional',
                        checkType: 'isZero',
                        condition: {
                          type: 'variable',
                          bound: true,
                          emphasizePriority: false,
                          argPriorityAgg: [],
                          funcPriorityAgg: [],
                          name: 't',
                          highlightType: 'default',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'none',
                          shorthandUnary: 'pred'
                        },
                        priority: 1,
                        state: 'default',
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
                          type: 'call',
                          state: 'default',
                          priority: 2,
                          func: {
                            type: 'variable',
                            bound: true,
                            emphasizePriority: false,
                            argPriorityAgg: [],
                            funcPriorityAgg: [2],
                            name: 't',
                            highlightType: 'default',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'none'
                          },
                          arg: {
                            type: 'call',
                            state: 'default',
                            priority: 3,
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
                            arg: {
                              type: 'call',
                              state: 'default',
                              priority: 4,
                              func: {
                                type: 'variable',
                                bound: true,
                                emphasizePriority: false,
                                name: 'magical',
                                argPriorityAgg: [],
                                funcPriorityAgg: [4],
                                highlightType: 'default',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'none',
                                magical: true
                              },
                              arg: {
                                type: 'variable',
                                bound: true,
                                emphasizePriority: false,
                                argPriorityAgg: [1, 2, 3, 4],
                                funcPriorityAgg: [],
                                name: 't',
                                highlightType: 'default',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'none',
                                shorthandUnary: 'pred'
                              }
                            }
                          }
                        }
                      }
                    },
                    type: 'call',
                    priority: 5,
                    arg: {
                      name: 'shorthandNumber',
                      highlightType: 'default',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'none',
                      type: 'variable',
                      argPriorityAgg: [1, 2, 3, 4, 5],
                      funcPriorityAgg: [],
                      emphasizePriority: false,
                      bound: true,
                      shorthandNumber: 1,
                      shorthandUnary: undefined
                    }
                  }
                }
              }
            }
          },
          unaryJustExecuted: undefined
        },
        {
          containerState: 'stepped',
          previouslyChangedExpressionState: 'active',
          expression: {
            type: 'call',
            state: 'default',
            priority: 1,
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
            arg: {
              type: 'call',
              state: 'default',
              priority: 2,
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
                shorthandBinary: 'mult'
              },
              arg: {
                type: 'call',
                state: 'default',
                priority: 3,
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
                arg: {
                  type: 'call',
                  state: 'default',
                  priority: 4,
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
                    shorthandBinary: 'mult'
                  },
                  arg: {
                    state: 'active',
                    func: {
                      type: 'function',
                      arg: {
                        type: 'variable',
                        bound: false,
                        emphasizePriority: true,
                        argPriorityAgg: [],
                        funcPriorityAgg: [5],
                        name: 't',
                        highlightType: 'active',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'none'
                      },
                      body: {
                        type: 'conditional',
                        checkType: 'isZero',
                        condition: {
                          type: 'variable',
                          bound: true,
                          emphasizePriority: false,
                          argPriorityAgg: [],
                          funcPriorityAgg: [],
                          name: 't',
                          highlightType: 'active',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'none',
                          shorthandUnary: 'pred'
                        },
                        priority: 1,
                        state: 'default',
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
                          type: 'call',
                          state: 'default',
                          priority: 2,
                          func: {
                            type: 'variable',
                            bound: true,
                            emphasizePriority: false,
                            argPriorityAgg: [],
                            funcPriorityAgg: [2],
                            name: 't',
                            highlightType: 'active',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'none'
                          },
                          arg: {
                            type: 'call',
                            state: 'default',
                            priority: 3,
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
                            arg: {
                              type: 'call',
                              state: 'default',
                              priority: 4,
                              func: {
                                type: 'variable',
                                bound: true,
                                emphasizePriority: false,
                                name: 'magical',
                                argPriorityAgg: [],
                                funcPriorityAgg: [4],
                                highlightType: 'active',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'none',
                                magical: true
                              },
                              arg: {
                                type: 'variable',
                                bound: true,
                                emphasizePriority: false,
                                argPriorityAgg: [1, 2, 3, 4],
                                funcPriorityAgg: [],
                                name: 't',
                                highlightType: 'active',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'none',
                                shorthandUnary: 'pred'
                              }
                            }
                          }
                        }
                      }
                    },
                    type: 'call',
                    priority: 5,
                    arg: {
                      name: 'shorthandNumber',
                      highlightType: 'active',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'none',
                      type: 'variable',
                      argPriorityAgg: [1, 2, 3, 4, 5],
                      funcPriorityAgg: [],
                      emphasizePriority: true,
                      bound: true,
                      shorthandNumber: 1,
                      shorthandUnary: undefined
                    }
                  }
                }
              }
            }
          },
          unaryJustExecuted: undefined,
          matchExists: undefined,
          activePriority: 5
        },
        {
          containerState: 'stepped',
          previouslyChangedExpressionState: 'showFuncBound',
          expression: {
            type: 'call',
            state: 'default',
            priority: 1,
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
            arg: {
              type: 'call',
              state: 'default',
              priority: 2,
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
                shorthandBinary: 'mult'
              },
              arg: {
                type: 'call',
                state: 'default',
                priority: 3,
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
                arg: {
                  type: 'call',
                  state: 'default',
                  priority: 4,
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
                    shorthandBinary: 'mult'
                  },
                  arg: {
                    state: 'showFuncBound',
                    func: {
                      type: 'function',
                      arg: {
                        type: 'variable',
                        bound: false,
                        emphasizePriority: true,
                        argPriorityAgg: [],
                        funcPriorityAgg: [5],
                        name: 't',
                        highlightType: 'active',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'funcArg'
                      },
                      body: {
                        type: 'conditional',
                        checkType: 'isZero',
                        condition: {
                          type: 'variable',
                          bound: true,
                          emphasizePriority: false,
                          argPriorityAgg: [],
                          funcPriorityAgg: [],
                          name: 't',
                          highlightType: 'active',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'funcBound',
                          shorthandUnary: 'pred'
                        },
                        priority: 1,
                        state: 'default',
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
                          type: 'call',
                          state: 'default',
                          priority: 2,
                          func: {
                            type: 'variable',
                            bound: true,
                            emphasizePriority: false,
                            argPriorityAgg: [],
                            funcPriorityAgg: [2],
                            name: 't',
                            highlightType: 'active',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'funcBound'
                          },
                          arg: {
                            type: 'call',
                            state: 'default',
                            priority: 3,
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
                              shorthandBinary: 'mult'
                            },
                            arg: {
                              type: 'call',
                              state: 'default',
                              priority: 4,
                              func: {
                                type: 'variable',
                                bound: true,
                                emphasizePriority: false,
                                name: 'magical',
                                argPriorityAgg: [],
                                funcPriorityAgg: [4],
                                highlightType: 'active',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'funcBound',
                                magical: true
                              },
                              arg: {
                                type: 'variable',
                                bound: true,
                                emphasizePriority: false,
                                argPriorityAgg: [1, 2, 3, 4],
                                funcPriorityAgg: [],
                                name: 't',
                                highlightType: 'active',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'funcBound',
                                shorthandUnary: 'pred'
                              }
                            }
                          }
                        }
                      }
                    },
                    type: 'call',
                    priority: 5,
                    arg: {
                      name: 'shorthandNumber',
                      highlightType: 'active',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'callArg',
                      type: 'variable',
                      argPriorityAgg: [1, 2, 3, 4, 5],
                      funcPriorityAgg: [],
                      emphasizePriority: true,
                      bound: true,
                      shorthandNumber: 1,
                      shorthandUnary: undefined
                    }
                  }
                }
              }
            }
          },
          unaryJustExecuted: undefined,
          matchExists: undefined,
          activePriority: 5
        },
        {
          containerState: 'stepped',
          previouslyChangedExpressionState: 'betaReducePreviewBefore',
          expression: {
            type: 'call',
            state: 'default',
            priority: 1,
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
            arg: {
              type: 'call',
              state: 'default',
              priority: 2,
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
                shorthandBinary: 'mult'
              },
              arg: {
                type: 'call',
                state: 'default',
                priority: 3,
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
                arg: {
                  type: 'call',
                  state: 'default',
                  priority: 4,
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
                    shorthandBinary: 'mult'
                  },
                  arg: {
                    state: 'betaReducePreviewBefore',
                    func: {
                      type: 'function',
                      arg: {
                        type: 'variable',
                        bound: false,
                        emphasizePriority: true,
                        argPriorityAgg: [],
                        funcPriorityAgg: [5],
                        name: 't',
                        highlightType: 'highlighted',
                        topLeftBadgeType: 'match',
                        bottomRightBadgeType: 'funcArg'
                      },
                      body: {
                        type: 'conditional',
                        checkType: 'isZero',
                        condition: {
                          type: 'variable',
                          bound: true,
                          emphasizePriority: false,
                          argPriorityAgg: [],
                          funcPriorityAgg: [],
                          name: 't',
                          highlightType: 'highlighted',
                          topLeftBadgeType: 'match',
                          bottomRightBadgeType: 'funcBound',
                          shorthandUnary: 'pred'
                        },
                        priority: 1,
                        state: 'default',
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
                          type: 'call',
                          state: 'default',
                          priority: 2,
                          func: {
                            type: 'variable',
                            bound: true,
                            emphasizePriority: false,
                            argPriorityAgg: [],
                            funcPriorityAgg: [2],
                            name: 't',
                            highlightType: 'highlighted',
                            topLeftBadgeType: 'match',
                            bottomRightBadgeType: 'funcBound'
                          },
                          arg: {
                            type: 'call',
                            state: 'default',
                            priority: 3,
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
                              shorthandBinary: 'mult'
                            },
                            arg: {
                              type: 'call',
                              state: 'default',
                              priority: 4,
                              func: {
                                type: 'variable',
                                bound: true,
                                emphasizePriority: false,
                                name: 'magical',
                                argPriorityAgg: [],
                                funcPriorityAgg: [4],
                                highlightType: 'highlighted',
                                topLeftBadgeType: 'unmatch',
                                bottomRightBadgeType: 'funcBound',
                                magical: true
                              },
                              arg: {
                                type: 'variable',
                                bound: true,
                                emphasizePriority: false,
                                argPriorityAgg: [1, 2, 3, 4],
                                funcPriorityAgg: [],
                                name: 't',
                                highlightType: 'highlighted',
                                topLeftBadgeType: 'match',
                                bottomRightBadgeType: 'funcBound',
                                shorthandUnary: 'pred'
                              }
                            }
                          }
                        }
                      }
                    },
                    type: 'call',
                    priority: 5,
                    arg: {
                      name: 'shorthandNumber',
                      highlightType: 'active',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'callArg',
                      type: 'variable',
                      argPriorityAgg: [1, 2, 3, 4, 5],
                      funcPriorityAgg: [],
                      emphasizePriority: true,
                      bound: true,
                      shorthandNumber: 1,
                      shorthandUnary: undefined
                    }
                  }
                }
              }
            }
          },
          unaryJustExecuted: undefined,
          matchExists: true,
          activePriority: 5
        },
        {
          containerState: 'stepped',
          previouslyChangedExpressionState: 'betaReducePreviewAfter',
          expression: {
            type: 'call',
            state: 'default',
            priority: 1,
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
            arg: {
              type: 'call',
              state: 'default',
              priority: 2,
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
                shorthandBinary: 'mult'
              },
              arg: {
                type: 'call',
                state: 'default',
                priority: 3,
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
                arg: {
                  type: 'call',
                  state: 'default',
                  priority: 4,
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
                    shorthandBinary: 'mult'
                  },
                  arg: {
                    state: 'betaReducePreviewAfter',
                    func: {
                      type: 'function',
                      arg: {
                        type: 'variable',
                        bound: false,
                        emphasizePriority: true,
                        argPriorityAgg: [],
                        funcPriorityAgg: [5],
                        name: 't',
                        highlightType: 'active',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'funcArg'
                      },
                      body: {
                        type: 'conditional',
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
                          shorthandNumber: 1,
                          shorthandUnary: 'pred'
                        },
                        priority: 1,
                        state: 'default',
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
                          type: 'call',
                          state: 'default',
                          priority: 2,
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
                            shorthandNumber: 1,
                            shorthandUnary: undefined
                          },
                          arg: {
                            type: 'call',
                            state: 'default',
                            priority: 3,
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
                              shorthandBinary: 'mult'
                            },
                            arg: {
                              type: 'call',
                              state: 'default',
                              priority: 4,
                              func: {
                                type: 'variable',
                                bound: true,
                                emphasizePriority: false,
                                name: 'magical',
                                argPriorityAgg: [],
                                funcPriorityAgg: [4],
                                highlightType: 'active',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'funcBound',
                                magical: true
                              },
                              arg: {
                                name: 'shorthandNumber',
                                highlightType: 'highlighted',
                                topLeftBadgeType: 'betaReduced',
                                bottomRightBadgeType: 'funcBound',
                                type: 'variable',
                                argPriorityAgg: [1, 2, 3, 4],
                                funcPriorityAgg: [],
                                emphasizePriority: false,
                                bound: true,
                                shorthandNumber: 1,
                                shorthandUnary: 'pred'
                              }
                            }
                          }
                        }
                      }
                    },
                    type: 'call',
                    priority: 5,
                    arg: {
                      name: 'shorthandNumber',
                      highlightType: 'betaReduceCallArgHighlighted',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'callArg',
                      type: 'variable',
                      argPriorityAgg: [1, 2, 3, 4, 5],
                      funcPriorityAgg: [],
                      emphasizePriority: true,
                      bound: true,
                      shorthandNumber: 1,
                      shorthandUnary: undefined
                    }
                  }
                }
              }
            }
          },
          unaryJustExecuted: undefined,
          matchExists: undefined,
          activePriority: 5
        },
        {
          containerState: 'stepped',
          previouslyChangedExpressionState: 'betaReducePreviewCrossed',
          expression: {
            type: 'call',
            state: 'default',
            priority: 1,
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
            arg: {
              type: 'call',
              state: 'default',
              priority: 2,
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
                shorthandBinary: 'mult'
              },
              arg: {
                type: 'call',
                state: 'default',
                priority: 3,
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
                arg: {
                  type: 'call',
                  state: 'default',
                  priority: 4,
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
                    shorthandBinary: 'mult'
                  },
                  arg: {
                    state: 'betaReducePreviewCrossed',
                    func: {
                      type: 'function',
                      arg: {
                        type: 'variable',
                        bound: false,
                        emphasizePriority: true,
                        argPriorityAgg: [],
                        funcPriorityAgg: [5],
                        name: 't',
                        highlightType: 'removed',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'funcArg'
                      },
                      body: {
                        type: 'conditional',
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
                          shorthandNumber: 1,
                          shorthandUnary: 'pred'
                        },
                        priority: 1,
                        state: 'default',
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
                          type: 'call',
                          state: 'default',
                          priority: 2,
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
                            shorthandNumber: 1,
                            shorthandUnary: undefined
                          },
                          arg: {
                            type: 'call',
                            state: 'default',
                            priority: 3,
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
                              shorthandBinary: 'mult'
                            },
                            arg: {
                              type: 'call',
                              state: 'default',
                              priority: 4,
                              func: {
                                type: 'variable',
                                bound: true,
                                emphasizePriority: false,
                                name: 'magical',
                                argPriorityAgg: [],
                                funcPriorityAgg: [4],
                                highlightType: 'active',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'funcBound',
                                magical: true
                              },
                              arg: {
                                name: 'shorthandNumber',
                                highlightType: 'active',
                                topLeftBadgeType: 'none',
                                bottomRightBadgeType: 'funcBound',
                                type: 'variable',
                                argPriorityAgg: [1, 2, 3, 4],
                                funcPriorityAgg: [],
                                emphasizePriority: false,
                                bound: true,
                                shorthandNumber: 1,
                                shorthandUnary: 'pred'
                              }
                            }
                          }
                        }
                      }
                    },
                    type: 'call',
                    priority: 5,
                    arg: {
                      name: 'shorthandNumber',
                      highlightType: 'removed',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'callArg',
                      type: 'variable',
                      argPriorityAgg: [1, 2, 3, 4, 5],
                      funcPriorityAgg: [],
                      emphasizePriority: true,
                      bound: true,
                      shorthandNumber: 1,
                      shorthandUnary: undefined
                    }
                  }
                }
              }
            }
          },
          unaryJustExecuted: undefined,
          matchExists: undefined,
          activePriority: 5
        },
        {
          containerState: 'ready',
          previouslyChangedExpressionState: 'default',
          expression: {
            type: 'call',
            state: 'default',
            priority: 1,
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
            arg: {
              type: 'call',
              state: 'default',
              priority: 2,
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
                shorthandBinary: 'mult'
              },
              arg: {
                type: 'call',
                state: 'default',
                priority: 3,
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
                arg: {
                  type: 'call',
                  state: 'default',
                  priority: 4,
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
                    shorthandBinary: 'mult'
                  },
                  arg: {
                    type: 'conditional',
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
                      shorthandNumber: 1,
                      shorthandUnary: 'pred'
                    },
                    priority: 5,
                    state: 'default',
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
                      type: 'call',
                      state: 'default',
                      priority: 6,
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
                      arg: {
                        type: 'call',
                        state: 'default',
                        priority: 7,
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
                          shorthandBinary: 'mult'
                        },
                        arg: {
                          type: 'call',
                          state: 'default',
                          priority: 8,
                          func: {
                            type: 'variable',
                            bound: true,
                            emphasizePriority: false,
                            name: 'magical',
                            argPriorityAgg: [],
                            funcPriorityAgg: [8],
                            highlightType: 'default',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'none',
                            magical: true
                          },
                          arg: {
                            name: 'shorthandNumber',
                            highlightType: 'default',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'none',
                            type: 'variable',
                            argPriorityAgg: [1, 2, 3, 4, 5, 6, 7, 8],
                            funcPriorityAgg: [],
                            emphasizePriority: false,
                            bound: true,
                            shorthandNumber: 1,
                            shorthandUnary: 'pred'
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          unaryJustExecuted: undefined
        },
        {
          containerState: 'ready',
          previouslyChangedExpressionState: 'showExecutableUnary',
          expression: {
            type: 'call',
            state: 'default',
            priority: 1,
            func: {
              name: 'shorthandNumber',
              highlightType: 'active',
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
            arg: {
              type: 'call',
              state: 'default',
              priority: 2,
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
                shorthandBinary: 'mult'
              },
              arg: {
                type: 'call',
                state: 'default',
                priority: 3,
                func: {
                  name: 'shorthandNumber',
                  highlightType: 'active',
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
                arg: {
                  type: 'call',
                  state: 'default',
                  priority: 4,
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
                    shorthandBinary: 'mult'
                  },
                  arg: {
                    type: 'conditional',
                    checkType: 'isZero',
                    condition: {
                      name: 'shorthandNumber',
                      highlightType: 'highlighted',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'none',
                      type: 'variable',
                      argPriorityAgg: [],
                      funcPriorityAgg: [],
                      emphasizePriority: false,
                      bound: true,
                      shorthandNumber: 1,
                      shorthandUnary: 'pred'
                    },
                    priority: 5,
                    state: 'default',
                    trueCase: {
                      name: 'shorthandNumber',
                      highlightType: 'active',
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
                      type: 'call',
                      state: 'default',
                      priority: 6,
                      func: {
                        name: 'shorthandNumber',
                        highlightType: 'active',
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
                      arg: {
                        type: 'call',
                        state: 'default',
                        priority: 7,
                        func: {
                          name: 'shorthandBinary',
                          highlightType: 'active',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'none',
                          type: 'variable',
                          argPriorityAgg: [],
                          funcPriorityAgg: [7],
                          emphasizePriority: false,
                          bound: true,
                          shorthandBinary: 'mult'
                        },
                        arg: {
                          type: 'call',
                          state: 'default',
                          priority: 8,
                          func: {
                            type: 'variable',
                            bound: true,
                            emphasizePriority: false,
                            name: 'magical',
                            argPriorityAgg: [],
                            funcPriorityAgg: [8],
                            highlightType: 'active',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'none',
                            magical: true
                          },
                          arg: {
                            name: 'shorthandNumber',
                            highlightType: 'highlighted',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'none',
                            type: 'variable',
                            argPriorityAgg: [1, 2, 3, 4, 5, 6, 7, 8],
                            funcPriorityAgg: [],
                            emphasizePriority: false,
                            bound: true,
                            shorthandNumber: 1,
                            shorthandUnary: 'pred'
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          unaryJustExecuted: undefined
        },
        {
          containerState: 'ready',
          previouslyChangedExpressionState: 'default',
          expression: {
            type: 'call',
            state: 'default',
            priority: 1,
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
            arg: {
              type: 'call',
              state: 'default',
              priority: 2,
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
                shorthandBinary: 'mult'
              },
              arg: {
                type: 'call',
                state: 'default',
                priority: 3,
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
                arg: {
                  type: 'call',
                  state: 'default',
                  priority: 4,
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
                    shorthandBinary: 'mult'
                  },
                  arg: {
                    type: 'conditional',
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
                    priority: 5,
                    state: 'default',
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
                      type: 'call',
                      state: 'default',
                      priority: 6,
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
                      arg: {
                        type: 'call',
                        state: 'default',
                        priority: 7,
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
                          shorthandBinary: 'mult'
                        },
                        arg: {
                          type: 'call',
                          state: 'default',
                          priority: 8,
                          func: {
                            type: 'variable',
                            bound: true,
                            emphasizePriority: false,
                            name: 'magical',
                            argPriorityAgg: [],
                            funcPriorityAgg: [8],
                            highlightType: 'default',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'none',
                            magical: true
                          },
                          arg: {
                            name: 'shorthandNumber',
                            highlightType: 'default',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'none',
                            type: 'variable',
                            argPriorityAgg: [1, 2, 3, 4, 5, 6, 7, 8],
                            funcPriorityAgg: [],
                            emphasizePriority: false,
                            bound: true,
                            shorthandNumber: 0,
                            shorthandUnary: undefined
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          unaryJustExecuted: true
        },
        {
          containerState: 'stepped',
          previouslyChangedExpressionState: 'conditionActive',
          expression: {
            type: 'call',
            state: 'default',
            priority: 1,
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
            arg: {
              type: 'call',
              state: 'default',
              priority: 2,
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
                shorthandBinary: 'mult'
              },
              arg: {
                type: 'call',
                state: 'default',
                priority: 3,
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
                arg: {
                  type: 'call',
                  state: 'default',
                  priority: 4,
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
                    shorthandBinary: 'mult'
                  },
                  arg: {
                    type: 'conditional',
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
                    priority: 5,
                    state: 'conditionActive',
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
                      type: 'call',
                      state: 'default',
                      priority: 6,
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
                      arg: {
                        type: 'call',
                        state: 'default',
                        priority: 7,
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
                          shorthandBinary: 'mult'
                        },
                        arg: {
                          type: 'call',
                          state: 'default',
                          priority: 8,
                          func: {
                            type: 'variable',
                            bound: true,
                            emphasizePriority: false,
                            name: 'magical',
                            argPriorityAgg: [],
                            funcPriorityAgg: [8],
                            highlightType: 'default',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'none',
                            magical: true
                          },
                          arg: {
                            name: 'shorthandNumber',
                            highlightType: 'default',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'none',
                            type: 'variable',
                            argPriorityAgg: [1, 2, 3, 4, 5, 6, 7, 8],
                            funcPriorityAgg: [],
                            emphasizePriority: false,
                            bound: true,
                            shorthandNumber: 0,
                            shorthandUnary: undefined
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          unaryJustExecuted: undefined,
          matchExists: undefined,
          activePriority: 5
        },
        {
          containerState: 'stepped',
          previouslyChangedExpressionState: 'trueCaseActive',
          expression: {
            type: 'call',
            state: 'default',
            priority: 1,
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
            arg: {
              type: 'call',
              state: 'default',
              priority: 2,
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
                shorthandBinary: 'mult'
              },
              arg: {
                type: 'call',
                state: 'default',
                priority: 3,
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
                arg: {
                  type: 'call',
                  state: 'default',
                  priority: 4,
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
                    shorthandBinary: 'mult'
                  },
                  arg: {
                    type: 'conditional',
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
                    priority: 5,
                    state: 'trueCaseActive',
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
                      type: 'call',
                      state: 'default',
                      priority: 6,
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
                      arg: {
                        type: 'call',
                        state: 'default',
                        priority: 7,
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
                          shorthandBinary: 'mult'
                        },
                        arg: {
                          type: 'call',
                          state: 'default',
                          priority: 8,
                          func: {
                            type: 'variable',
                            bound: true,
                            emphasizePriority: false,
                            name: 'magical',
                            argPriorityAgg: [],
                            funcPriorityAgg: [8],
                            highlightType: 'default',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'none',
                            magical: true
                          },
                          arg: {
                            name: 'shorthandNumber',
                            highlightType: 'default',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'none',
                            type: 'variable',
                            argPriorityAgg: [1, 2, 3, 4, 5, 6, 7, 8],
                            funcPriorityAgg: [],
                            emphasizePriority: false,
                            bound: true,
                            shorthandNumber: 0,
                            shorthandUnary: undefined
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          unaryJustExecuted: undefined,
          matchExists: undefined,
          activePriority: 5
        },
        {
          containerState: 'stepped',
          previouslyChangedExpressionState: 'trueCaseOnly',
          expression: {
            type: 'call',
            state: 'default',
            priority: 1,
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
            arg: {
              type: 'call',
              state: 'default',
              priority: 2,
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
                shorthandBinary: 'mult'
              },
              arg: {
                type: 'call',
                state: 'default',
                priority: 3,
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
                arg: {
                  type: 'call',
                  state: 'default',
                  priority: 4,
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
                    shorthandBinary: 'mult'
                  },
                  arg: {
                    type: 'conditional',
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
                    priority: 5,
                    state: 'trueCaseOnly',
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
                      type: 'call',
                      state: 'default',
                      priority: 6,
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
                      arg: {
                        type: 'call',
                        state: 'default',
                        priority: 7,
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
                          shorthandBinary: 'mult'
                        },
                        arg: {
                          type: 'call',
                          state: 'default',
                          priority: 8,
                          func: {
                            type: 'variable',
                            bound: true,
                            emphasizePriority: false,
                            name: 'magical',
                            argPriorityAgg: [],
                            funcPriorityAgg: [8],
                            highlightType: 'default',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'none',
                            magical: true
                          },
                          arg: {
                            name: 'shorthandNumber',
                            highlightType: 'default',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'none',
                            type: 'variable',
                            argPriorityAgg: [1, 2, 3, 4, 5, 6, 7, 8],
                            funcPriorityAgg: [],
                            emphasizePriority: false,
                            bound: true,
                            shorthandNumber: 0,
                            shorthandUnary: undefined
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          unaryJustExecuted: undefined,
          matchExists: undefined,
          activePriority: 5
        },
        {
          containerState: 'ready',
          previouslyChangedExpressionState: 'default',
          expression: {
            type: 'call',
            state: 'default',
            priority: 1,
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
            arg: {
              type: 'call',
              state: 'default',
              priority: 2,
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
                shorthandBinary: 'mult'
              },
              arg: {
                type: 'call',
                state: 'default',
                priority: 3,
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
                arg: {
                  type: 'call',
                  state: 'default',
                  priority: 4,
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
                    shorthandBinary: 'mult'
                  },
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
                  }
                }
              }
            }
          },
          unaryJustExecuted: undefined
        },
        {
          containerState: 'stepped',
          previouslyChangedExpressionState: 'active',
          expression: {
            type: 'call',
            state: 'default',
            priority: 1,
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
            arg: {
              type: 'call',
              state: 'default',
              priority: 2,
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
                shorthandBinary: 'mult'
              },
              arg: {
                type: 'call',
                state: 'active',
                priority: 3,
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
                arg: {
                  type: 'call',
                  state: 'default',
                  priority: 4,
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
                    shorthandBinary: 'mult'
                  },
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
                  }
                }
              }
            }
          },
          unaryJustExecuted: undefined,
          matchExists: undefined,
          activePriority: 3
        },
        {
          containerState: 'ready',
          previouslyChangedExpressionState: 'default',
          expression: {
            type: 'call',
            state: 'default',
            priority: 1,
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
            arg: {
              type: 'call',
              state: 'default',
              priority: 2,
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
                shorthandBinary: 'mult'
              },
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
              }
            }
          },
          unaryJustExecuted: undefined
        },
        {
          expression: {
            type: 'call',
            state: 'active',
            priority: 1,
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
            arg: {
              type: 'call',
              state: 'default',
              priority: 2,
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
                shorthandBinary: 'mult'
              },
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
              }
            }
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
      speed: 1.75,
      showOnlyFocused: false,
      caption: undefined,
      hideControls: false,
      explanationsVisibility: 'hiddenInitialPausedOnly',
      hidePriorities: false,
      variableSize: 'sm',
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

export default Zvet
