import React from 'react'
import ExpressionRunnerPrecomputed from '../ExpressionRunnerPrecomputed'

const Lrrr = () => (
  <ExpressionRunnerPrecomputed
    {...{
      expressionContainers: [
        {
          containerState: 'stepped',
          previouslyChangedExpressionState: 'trueCaseActive',
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
              shorthandNumber: 2,
              shorthandUnary: undefined
            },
            func: {
              type: 'conditional',
              state: 'trueCaseActive',
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
              trueCase: {
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
                  name: 'b',
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
              falseCase: {
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
              priority: 1
            },
            state: 'default',
            type: 'call',
            priority: 2
          },
          unaryJustExecuted: undefined,
          matchExists: undefined,
          activePriority: 1
        }
      ],
      speed: 1,
      showOnlyFocused: false,
      caption: undefined,
      hideControls: true,
      explanationsVisibility: 'visible',
      hidePriorities: false,
      variableSize: 'lg',
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

export default Lrrr
