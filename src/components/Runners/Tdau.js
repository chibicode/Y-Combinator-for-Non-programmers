import React from 'react'
import ExpressionRunnerPrecomputed from '../ExpressionRunnerPrecomputed'

const Tdau = () => (
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
              argPriorityAgg: [1],
              funcPriorityAgg: [],
              emphasizePriority: false,
              bound: true
            },
            func: {
              arg: {
                name: 't',
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
            state: 'default',
            type: 'call',
            priority: 1
          },
          unaryJustExecuted: undefined
        }
      ],
      speed: 1,
      showOnlyFocused: false,
      caption: { name: 'witchReplacedCaption' },
      hideControls: true,
      explanationsVisibility: 'hidden',
      hidePriorities: false,
      variableSize: 'md',
      containerSize: 'xxs',
      hidePlayButton: false,
      hideBottomRightBadges: false,
      skipToTheEnd: false,
      hideFuncUnboundBadgeOnExplanation: false,
      highlightOverridesCallArgAndFuncUnboundOnly: false,
      bottomRightBadgeOverrides: {},
      highlightOverrides: { s: 'highlighted' },
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

export default Tdau
