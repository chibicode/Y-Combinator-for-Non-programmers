import React from 'react'
import ExpressionRunnerPrecomputed from '../ExpressionRunnerPrecomputed'

const Fapu = () => (
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
              argPriorityAgg: [8],
              funcPriorityAgg: [],
              emphasizePriority: false,
              bound: true,
              shorthandNumber: 1,
              shorthandUnary: undefined
            },
            func: {
              arg: {
                name: 'shorthandBinary',
                highlightType: 'default',
                topLeftBadgeType: 'none',
                bottomRightBadgeType: 'none',
                type: 'variable',
                argPriorityAgg: [7],
                funcPriorityAgg: [],
                emphasizePriority: false,
                bound: true,
                shorthandBinary: 'mult'
              },
              func: {
                arg: {
                  name: 'shorthandNumber',
                  highlightType: 'default',
                  topLeftBadgeType: 'none',
                  bottomRightBadgeType: 'none',
                  type: 'variable',
                  argPriorityAgg: [6],
                  funcPriorityAgg: [],
                  emphasizePriority: false,
                  bound: true,
                  shorthandNumber: 2,
                  shorthandUnary: undefined
                },
                func: {
                  arg: {
                    name: 'shorthandBinary',
                    highlightType: 'default',
                    topLeftBadgeType: 'none',
                    bottomRightBadgeType: 'none',
                    type: 'variable',
                    argPriorityAgg: [5],
                    funcPriorityAgg: [],
                    emphasizePriority: false,
                    bound: true,
                    shorthandBinary: 'mult'
                  },
                  func: {
                    arg: {
                      name: 'abbreviated',
                      highlightType: 'default',
                      topLeftBadgeType: 'none',
                      bottomRightBadgeType: 'none',
                      type: 'variable',
                      argPriorityAgg: [4],
                      funcPriorityAgg: [],
                      emphasizePriority: false,
                      bound: true
                    },
                    func: {
                      arg: {
                        name: 'shorthandBinary',
                        highlightType: 'default',
                        topLeftBadgeType: 'none',
                        bottomRightBadgeType: 'none',
                        type: 'variable',
                        argPriorityAgg: [3],
                        funcPriorityAgg: [],
                        emphasizePriority: false,
                        bound: true,
                        shorthandBinary: 'mult'
                      },
                      func: {
                        arg: {
                          name: 'someNumber',
                          highlightType: 'default',
                          topLeftBadgeType: 'none',
                          bottomRightBadgeType: 'none',
                          type: 'variable',
                          argPriorityAgg: [2],
                          funcPriorityAgg: [],
                          emphasizePriority: false,
                          bound: true,
                          shorthandNumber: 1,
                          shorthandUnary: undefined
                        },
                        func: {
                          arg: {
                            name: 'shorthandBinary',
                            highlightType: 'default',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'none',
                            type: 'variable',
                            argPriorityAgg: [1],
                            funcPriorityAgg: [],
                            emphasizePriority: false,
                            bound: true,
                            shorthandBinary: 'mult'
                          },
                          func: {
                            name: 'someNumber',
                            highlightType: 'default',
                            topLeftBadgeType: 'none',
                            bottomRightBadgeType: 'none',
                            type: 'variable',
                            argPriorityAgg: [],
                            funcPriorityAgg: [1, 2, 3, 4, 5, 6, 7, 8],
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
                  state: 'default',
                  type: 'call',
                  priority: 5
                },
                state: 'default',
                type: 'call',
                priority: 6
              },
              state: 'default',
              type: 'call',
              priority: 7
            },
            state: 'default',
            type: 'call',
            priority: 8
          },
          unaryJustExecuted: undefined
        }
      ],
      speed: 1,
      showOnlyFocused: false,
      caption: undefined,
      hideControls: true,
      explanationsVisibility: 'hidden',
      hidePriorities: true,
      variableSize: 'sm',
      containerSize: 'xxs',
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

export default Fapu
