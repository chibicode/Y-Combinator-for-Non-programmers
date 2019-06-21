import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'

const Itzl = () => (
  <ExpressionRunnerPrecomputed
    {...{
      expressionContainers: [
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
              shorthandNumber: 3,
              shorthandUnary: undefined
            },
            func: {
              name: 'magical',
              highlightType: 'active',
              topLeftBadgeType: 'none',
              bottomRightBadgeType: 'none',
              type: 'variable',
              argPriorityAgg: [],
              funcPriorityAgg: [1],
              emphasizePriority: true,
              bound: true,
              magical: true
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
              shorthandNumber: 3,
              shorthandUnary: undefined
            }
          },
          previouslyChangedExpressionState: 'magicalExpanded',
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
      hidePlayButton: true,
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

export default Itzl
