import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'

const Syfp = () => (
  <ExpressionRunnerPrecomputed
    {...{
      expressionContainers: [
        {
          containerState: 'ready',
          previouslyChangedExpressionState: 'default',
          expression: {
            state: 'default',
            func: {
              type: 'function',
              arg: {
                type: 'variable',
                bound: false,
                emphasizePriority: false,
                argPriorityAgg: [],
                funcPriorityAgg: [1],
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
            priority: 1,
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
              shorthandNumber: 3,
              shorthandUnary: undefined
            }
          },
          unaryJustExecuted: undefined
        },
        {
          expression: {
            state: 'active',
            func: {
              type: 'function',
              arg: {
                type: 'variable',
                bound: false,
                emphasizePriority: true,
                argPriorityAgg: [],
                funcPriorityAgg: [1],
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
              shorthandNumber: 3,
              shorthandUnary: undefined
            }
          },
          previouslyChangedExpressionState: 'active',
          matchExists: undefined,
          activePriority: 1,
          unaryJustExecuted: undefined,
          containerState: 'stepped'
        },
        {
          expression: {
            state: 'showFuncBound',
            func: {
              type: 'function',
              arg: {
                type: 'variable',
                bound: false,
                emphasizePriority: true,
                argPriorityAgg: [],
                funcPriorityAgg: [1],
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
            priority: 1,
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
              shorthandNumber: 3,
              shorthandUnary: undefined
            }
          },
          previouslyChangedExpressionState: 'showFuncBound',
          matchExists: undefined,
          activePriority: 1,
          unaryJustExecuted: undefined,
          containerState: 'stepped'
        }
      ],
      speed: 1,
      showOnlyFocused: false,
      caption: undefined,
      hideControls: false,
      explanationsVisibility: 'hiddenInitialPausedOnly',
      hidePriorities: false,
      variableSize: 'md',
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

export default Syfp
