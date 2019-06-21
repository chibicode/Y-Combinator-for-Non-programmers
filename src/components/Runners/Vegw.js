import React from 'react'
import ExpressionRunnerPrecomputed from '../ExpressionRunnerPrecomputed'

const Vegw = () => (
  <ExpressionRunnerPrecomputed
    {...{
      expressionContainers: [
        {
          expression: {
            arg: {
              arg: {
                name: 'e',
                highlightType: 'betaReduceCallArgHighlighted',
                topLeftBadgeType: 'none',
                bottomRightBadgeType: 'callArg',
                type: 'variable',
                argPriorityAgg: [1],
                funcPriorityAgg: [],
                emphasizePriority: true,
                bound: false
              },
              body: {
                name: 'f',
                highlightType: 'betaReduceCallArgHighlighted',
                topLeftBadgeType: 'none',
                bottomRightBadgeType: 'callArg',
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
                name: 'd',
                highlightType: 'active',
                topLeftBadgeType: 'none',
                bottomRightBadgeType: 'funcArg',
                type: 'variable',
                argPriorityAgg: [],
                funcPriorityAgg: [1],
                emphasizePriority: true,
                bound: false
              },
              body: {
                arg: {
                  name: 'e',
                  highlightType: 'highlighted',
                  topLeftBadgeType: 'betaReduced',
                  bottomRightBadgeType: 'funcBound',
                  type: 'variable',
                  argPriorityAgg: [],
                  funcPriorityAgg: [],
                  emphasizePriority: false,
                  bound: false,
                  shorthandUnary: undefined
                },
                body: {
                  name: 'f',
                  highlightType: 'highlighted',
                  topLeftBadgeType: 'betaReduced',
                  bottomRightBadgeType: 'funcBound',
                  type: 'variable',
                  argPriorityAgg: [],
                  funcPriorityAgg: [],
                  emphasizePriority: false,
                  bound: true,
                  shorthandUnary: undefined
                },
                type: 'function',
                meta: undefined
              },
              type: 'function',
              meta: undefined
            },
            state: 'betaReducePreviewAfter',
            type: 'call',
            priority: 1
          },
          previouslyChangedExpressionState: 'betaReducePreviewAfter',
          matchExists: undefined,
          activePriority: 1,
          unaryJustExecuted: undefined,
          containerState: 'stepped'
        }
      ],
      speed: 1,
      showOnlyFocused: false,
      caption: undefined,
      hideControls: true,
      explanationsVisibility: 'hidden',
      hidePriorities: true,
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

export default Vegw
