import React from 'react'
import ExpressionRunnerPrecomputed from '../ExpressionRunnerPrecomputed'

const Vqcw = () => (
  <ExpressionRunnerPrecomputed
    {...{
      expressionContainers: [
        {
          containerState: 'ready',
          previouslyChangedExpressionState: 'default',
          expression: {
            arg: {
              arg: {
                name: 'l',
                highlightType: 'initialHighlighted',
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
                  name: 'm',
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
                    arg: {
                      name: 'm',
                      highlightType: 'initialHighlighted',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'none',
                      type: 'variable',
                      argPriorityAgg: [1, 2],
                      funcPriorityAgg: [],
                      emphasizePriority: false,
                      bound: true
                    },
                    func: {
                      name: 'l',
                      highlightType: 'initialHighlighted',
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
                    name: 'l',
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
                arg: {
                  name: 'j',
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
                    name: 'k',
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
                    name: 'k',
                    highlightType: 'initialHighlighted',
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
                      name: 'h',
                      highlightType: 'initialHighlighted',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'none',
                      type: 'variable',
                      argPriorityAgg: [4],
                      funcPriorityAgg: [],
                      emphasizePriority: false,
                      bound: false
                    },
                    body: {
                      arg: {
                        name: 'i',
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
                          name: 'i',
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
                          name: 'h',
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
                      arg: {
                        name: 'g',
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
                        name: 'g',
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
                          name: 'd',
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
                            name: 'e',
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
                            name: 'd',
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
                        type: 'function',
                        meta: undefined
                      },
                      func: {
                        arg: {
                          arg: {
                            name: 'f',
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
                                name: 'c',
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
                            type: 'function',
                            meta: undefined
                          },
                          type: 'function',
                          meta: undefined
                        },
                        func: {
                          name: 'a',
                          highlightType: 'default',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'none',
                          type: 'variable',
                          argPriorityAgg: [],
                          funcPriorityAgg: [1, 2, 3, 4],
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
                    state: 'default',
                    type: 'call',
                    priority: 3
                  },
                  state: 'default',
                  type: 'call',
                  priority: 4
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
        }
      ],
      speed: 1,
      showOnlyFocused: false,
      caption: undefined,
      hideControls: true,
      explanationsVisibility: 'hidden',
      hidePriorities: false,
      variableSize: 'md',
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
      highlightFunctions: false,
      superFastForward: false,
      highlightNumber: undefined,
      showAllShowSteps: undefined
    }}
  />
)

export default Vqcw
