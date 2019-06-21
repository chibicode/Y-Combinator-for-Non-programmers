import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'

const Umce = () => (
  <ExpressionRunnerPrecomputed
    {...{
      expressionContainers: [
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
        }
      ],
      speed: 1,
      showOnlyFocused: false,
      caption: undefined,
      hideControls: true,
      explanationsVisibility: 'visible',
      hidePriorities: false,
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

export default Umce
