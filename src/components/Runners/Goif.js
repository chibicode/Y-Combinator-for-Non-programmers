import React from 'react'
import ExpressionRunnerPrecomputed from '../ExpressionRunnerPrecomputed'

const Goif = () => (
  <ExpressionRunnerPrecomputed
    {...{
      expressionContainers: [
        {
          containerState: 'ready',
          previouslyChangedExpressionState: 'default',
          expression: {
            arg: {
              name: 'question',
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
                name: 'question',
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

export default Goif
