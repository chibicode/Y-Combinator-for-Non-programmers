import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'

const Kjyi = () => (
  <ExpressionRunnerPrecomputed
    {...{
      expressionContainers: [
        {
          expression: {
            arg: {
              name: 'v',
              highlightType: 'active',
              topLeftBadgeType: 'none',
              bottomRightBadgeType: 'callArg',
              type: 'variable',
              argPriorityAgg: [1],
              funcPriorityAgg: [],
              emphasizePriority: true,
              bound: true
            },
            func: {
              arg: {
                name: 'b',
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
                name: 'b',
                highlightType: 'active',
                topLeftBadgeType: 'none',
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
            state: 'showFuncBound',
            type: 'call',
            priority: 1
          },
          previouslyChangedExpressionState: 'showFuncBound',
          matchExists: undefined,
          activePriority: 1,
          unaryJustExecuted: undefined,
          containerState: 'stepped'
        },
        {
          expression: {
            arg: {
              name: 'v',
              highlightType: 'active',
              topLeftBadgeType: 'none',
              bottomRightBadgeType: 'callArg',
              type: 'variable',
              argPriorityAgg: [1],
              funcPriorityAgg: [],
              emphasizePriority: true,
              bound: true
            },
            func: {
              arg: {
                name: 'b',
                highlightType: 'highlighted',
                topLeftBadgeType: 'match',
                bottomRightBadgeType: 'funcArg',
                type: 'variable',
                argPriorityAgg: [],
                funcPriorityAgg: [1],
                emphasizePriority: true,
                bound: false
              },
              body: {
                name: 'b',
                highlightType: 'highlighted',
                topLeftBadgeType: 'match',
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
            state: 'betaReducePreviewBefore',
            type: 'call',
            priority: 1
          },
          previouslyChangedExpressionState: 'betaReducePreviewBefore',
          matchExists: true,
          activePriority: 1,
          unaryJustExecuted: undefined,
          containerState: 'stepped'
        },
        {
          expression: {
            arg: {
              name: 'v',
              highlightType: 'betaReduceCallArgHighlighted',
              topLeftBadgeType: 'none',
              bottomRightBadgeType: 'callArg',
              type: 'variable',
              argPriorityAgg: [1],
              funcPriorityAgg: [],
              emphasizePriority: true,
              bound: true
            },
            func: {
              arg: {
                name: 'b',
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
                name: 'v',
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
            state: 'betaReducePreviewAfter',
            type: 'call',
            priority: 1
          },
          previouslyChangedExpressionState: 'betaReducePreviewAfter',
          matchExists: undefined,
          activePriority: 1,
          unaryJustExecuted: undefined,
          containerState: 'stepped'
        },
        {
          expression: {
            arg: {
              name: 'v',
              highlightType: 'removed',
              topLeftBadgeType: 'none',
              bottomRightBadgeType: 'callArg',
              type: 'variable',
              argPriorityAgg: [1],
              funcPriorityAgg: [],
              emphasizePriority: true,
              bound: true
            },
            func: {
              arg: {
                name: 'b',
                highlightType: 'removed',
                topLeftBadgeType: 'none',
                bottomRightBadgeType: 'funcArg',
                type: 'variable',
                argPriorityAgg: [],
                funcPriorityAgg: [1],
                emphasizePriority: true,
                bound: false
              },
              body: {
                name: 'v',
                highlightType: 'active',
                topLeftBadgeType: 'none',
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
            state: 'betaReducePreviewCrossed',
            type: 'call',
            priority: 1
          },
          previouslyChangedExpressionState: 'betaReducePreviewCrossed',
          matchExists: undefined,
          activePriority: 1,
          unaryJustExecuted: undefined,
          containerState: 'stepped'
        },
        {
          containerState: 'done',
          previouslyChangedExpressionState: 'default',
          expression: {
            name: 'v',
            highlightType: 'default',
            topLeftBadgeType: 'none',
            bottomRightBadgeType: 'none',
            type: 'variable',
            argPriorityAgg: [],
            funcPriorityAgg: [],
            emphasizePriority: false,
            bound: true,
            shorthandUnary: undefined
          },
          unaryJustExecuted: undefined
        }
      ],
      speed: 1.75,
      showOnlyFocused: false,
      caption: undefined,
      hideControls: false,
      explanationsVisibility: 'hiddenInitialPausedOnly',
      hidePriorities: false,
      variableSize: 'lg',
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

export default Kjyi
