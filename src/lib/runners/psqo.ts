import { ExpressionRunnerPrecomputedProps } from 'src/components/ExpressionRunnerPrecomputed'

const params: ExpressionRunnerPrecomputedProps = {
  expressionContainers: [
    {
      expression: {
        type: 'conditional',
        state: 'falseCaseActive',
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
          shorthandNumber: 3,
          shorthandUnary: undefined
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
          shorthandNumber: 4,
          shorthandUnary: undefined
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
          shorthandNumber: 2,
          shorthandUnary: undefined
        },
        priority: 1
      },
      previouslyChangedExpressionState: 'falseCaseActive',
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
  explanationsVisibility: 'visible',
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
}

export default params