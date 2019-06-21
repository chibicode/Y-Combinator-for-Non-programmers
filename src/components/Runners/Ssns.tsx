import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'

const Ssns = () => (
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
              argPriorityAgg: [1],
              funcPriorityAgg: [],
              emphasizePriority: false,
              bound: true,
              shorthandNumber: 1,
              shorthandUnary: undefined
            },
            func: {
              arg: {
                name: 'i',
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
                              name: 'f',
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
                          func: {
                            arg: {
                              arg: {
                                name: 'd',
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
                                      name: 'd',
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
                              name: 'a',
                              highlightType: 'default',
                              topLeftBadgeType: 'none',
                              bottomRightBadgeType: 'none',
                              type: 'variable',
                              argPriorityAgg: [],
                              funcPriorityAgg: [1, 2, 3],
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
              type: 'function',
              meta: undefined
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
      variableSize: 'md',
      containerSize: 'xs',
      hidePlayButton: false,
      hideBottomRightBadges: false,
      skipToTheEnd: false,
      hideFuncUnboundBadgeOnExplanation: false,
      highlightOverridesCallArgAndFuncUnboundOnly: false,
      bottomRightBadgeOverrides: {},
      highlightOverrides: {
        a: 'highlighted',
        b: 'highlighted',
        c: 'highlighted',
        d: 'highlighted',
        e: 'highlighted',
        f: 'highlighted'
      },
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

export default Ssns
