import {
  ExpressionRunnerShorthandConfig,
  expressionRunnerSimpleConfigDefault,
  expressionRunnerPlayButtonOnlyConfigDefault,
  expressionRunnerPairSimpleConfigDefault,
  expressionRunnerSingleStepConfigDefault,
  isExpressionRunnerSimpleConfig,
  isExpressionRunnerPlayButtonOnlyConfig,
  isExpressionRunnerPairSimpleConfig,
  ExpressionRunnerSimpleConfig,
  ExpressionRunnerPlayButtonOnlyConfig,
  ExpressionRunnerPairSimpleConfig,
  ExpressionRunnerSingleStepConfig,
} from 'scripts/lib/expressionRunnerShorthandConfig'
import {
  SteppedExpressionContainer,
  ExpressionContainer
} from 'src/types/ExpressionContainerTypes'
import { allMaxWidths } from 'src/lib/theme/maxWidths'
import {
  InitializeInstruction,
  ExpressionRunnerContextProps,
  expressionRunnerContextDefault
} from 'src/types/ExpressionRunnerTypes'

interface ExpressionRunnerConfig {
  expressionContainer: SteppedExpressionContainer
  hidePriorities: ExpressionRunnerContextProps['hidePriorities']
  hideBottomRightBadges: ExpressionRunnerContextProps['hideBottomRightBadges']
  hideControls: boolean
  explanationsVisibility:
    | 'visible'
    | 'hidden'
    | 'hiddenInitialPausedOnly'
    | 'hiddenInitialAndLastPausedOnly'
  variableSize: ExpressionRunnerContextProps['variableSize']
  initializeInstructions: readonly InitializeInstruction[]
  maxStepsAllowed?: number
  lastAllowedExpressionState?: ExpressionContainer['previouslyChangedExpressionState']
  lastAllowedExpressionStateAfterIterations?: number
  containerSize: keyof typeof allMaxWidths
  resetIndex: boolean
  hidePlayButton?: boolean
  speed: number
  showAllShowSteps?: boolean
  skipAlphaConvert?: boolean
  skipToTheEnd: boolean
  hideFuncUnboundBadgeOnExplanation: boolean
  highlightOverridesCallArgAndFuncUnboundOnly: boolean
  bottomRightBadgeOverrides: ExpressionRunnerContextProps['bottomRightBadgeOverrides']
  highlightOverrides: ExpressionRunnerContextProps['highlightOverrides']
  caption?: React.ReactNode
  highlightOverrideActiveAfterStart: boolean
  showOnlyFocused: ExpressionRunnerContextProps['showOnlyFocused']
  argPriorityAggHighlights: readonly number[]
  funcPriorityAggHighlights: readonly number[]
  highlightFunctions: boolean
  superFastForward: boolean
  highlightNumber?: number
}

const expressionRunnerDefaults = {
  hidePriorities: expressionRunnerContextDefault.hidePriorities,
  hideBottomRightBadges: expressionRunnerContextDefault.hideBottomRightBadges,
  hideControls: false,
  explanationsVisibility: 'visible',
  variableSize: expressionRunnerContextDefault.variableSize,
  initializeInstructions: [],
  containerSize: 'xxs',
  resetIndex: false,
  skipToTheEnd: false,
  hidePlayButton: false,
  speed: 1,
  hideFuncUnboundBadgeOnExplanation: false,
  highlightOverridesCallArgAndFuncUnboundOnly: false,
  bottomRightBadgeOverrides:
    expressionRunnerContextDefault.bottomRightBadgeOverrides,
  highlightOverrides: expressionRunnerContextDefault.highlightOverrides,
  highlightOverrideActiveAfterStart:
    expressionRunnerContextDefault.highlightOverrideActiveAfterStart,
  showOnlyFocused: expressionRunnerContextDefault.showOnlyFocused,
  argPriorityAggHighlights: [],
  funcPriorityAggHighlights: [],
  highlightFunctions: false,
  superFastForward: false
}

const buildInitializeInstructions = ({
  nextIteration,
  nextIterations,
  isDone,
  initialState
}: {
  nextIteration?: boolean
  nextIterations?: number
  isDone?: boolean
  initialState: ExpressionContainer['previouslyChangedExpressionState']
}): readonly InitializeInstruction[] =>
  nextIteration
    ? [
        {
          type: 'nextIteration'
        },
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: initialState
        }
      ]
    : nextIterations
    ? [
        ...Array(nextIterations).fill({ type: 'nextIteration' }),
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: initialState
        }
      ]
    : [
        isDone
          ? {
              type: 'stepForwardUntilTheEnd'
            }
          : {
              type: 'stepForwardUntilPreviouslyChangedExpressionState',
              state: initialState
            }
      ]

function mergeWithDefault<A extends Record<string, any>, B extends Record<string, any>>(base: A, defaults: B): A & B {
  let result: Record<string, any> = {}
  Object.keys(base).forEach(key => {
    if (base[key] === undefined) {
      result[key] = defaults[key]
    } else {
      result[key] = base[key]
    }
  })
  return result as A & B
}


// TODO: Must return a single ExpressionRunnerConfig or an object for pairs
const convertConfig = (config: ExpressionRunnerShorthandConfig): ExpressionRunnerConfig[] => {
  let runnerProps
  if (isExpressionRunnerSimpleConfig(config)) {
    const {
      expressionContainer,
      initialState,
      isDone,
      skipAlphaConvert,
      nextIteration,
      nextIterations,
      showPriorities,
      showAllShowSteps,
      explanationsVisibility,
      caption,
      bottomRightBadgeOverrides,
      variableSize,
      containerSize,
      highlightOverrides,
      highlightOverrideActiveAfterStart,
      highlightOverridesCallArgAndFuncUnboundOnly,
      showOnlyFocused,
      highlightFunctions,
      argPriorityAggHighlights,
      funcPriorityAggHighlights
    } = mergeWithDefault<typeof config, typeof expressionRunnerSimpleConfigDefault>(config, expressionRunnerSimpleConfigDefault)

    runnerProps = [{
      expressionContainer,
      hideControls: true,
      hidePriorities: !showPriorities,
      explanationsVisibility,
      showAllShowSteps,
      variableSize,
      highlightOverridesCallArgAndFuncUnboundOnly,
      showOnlyFocused,
      containerSize,
      caption,
      skipAlphaConvert,
      bottomRightBadgeOverrides,
      highlightOverrides,
      highlightFunctions,
      highlightOverrideActiveAfterStart,
      initializeInstructions: buildInitializeInstructions({
        nextIteration,
        nextIterations,
        isDone,
        initialState
      }),
      argPriorityAggHighlights,
      funcPriorityAggHighlights
    }]
  } else if (isExpressionRunnerPlayButtonOnlyConfig(config)) {
    const {
      expressionContainer,
      initialState,
      skipToTheEnd,
      hideFuncUnboundBadgeOnExplanation,
      showPriorities,
      lastAllowedExpressionState,
      lastAllowedExpressionStateAfterIterations,
      nextIteration,
      nextIterations,
      showAllShowSteps,
      speed,
      skipAlphaConvert,
      variableSize,
      containerSize,
      highlightOverrides,
      explanationsVisibility,
      superFastForward,
      highlightNumber,
    } = mergeWithDefault<typeof config, typeof expressionRunnerPlayButtonOnlyConfigDefault>(config, expressionRunnerPlayButtonOnlyConfigDefault)

    runnerProps = [{
      speed,
      highlightNumber,
      expressionContainer,
      hidePriorities: !showPriorities,
      highlightOverrides,
      resetIndex: true,
      showAllShowSteps,
      hideFuncUnboundBadgeOnExplanation,
      skipToTheEnd,
      variableSize,
      containerSize,
      skipAlphaConvert,
      explanationsVisibility: explanationsVisibility || 'hiddenInitialPausedOnly',
      lastAllowedExpressionState,
      lastAllowedExpressionStateAfterIterations,
      initializeInstructions: buildInitializeInstructions({
        nextIteration,
        nextIterations,
        initialState
      }),
      superFastForward
    }]
  } else if (isExpressionRunnerPairSimpleConfig(config)) {
    const {
      expressionContainer,
      initialState,
      isDone,
      explanationsVisibility,
      hideFirstExplanations,
      showPriorities,
      showAllShowSteps,
      caption,
      bottomRightBadgeOverrides,
      highlightOverrides,
      highlightOverrideActiveAfterStart,
      variableSize,
      containerSize,
      skipAlphaConvert,
      nextIteration,
      nextIterations,
      showOnlyFocused,
      highlightOverridesCallArgAndFuncUnboundOnly,
      finalState,
      finalCaption,
      finalNextIteration,
      finalNextIterations,
      finalFastForward,
      finalArgPriorityAggHighlights,
      finalFuncPriorityAggHighlights,
      intermediateState,
      intermediateCaption,
      intermediateNextIteration,
      intermediateNextIterations,
      intermediateArgPriorityAggHighlights,
      intermediateFuncPriorityAggHighlights
    } = mergeWithDefault<typeof config, typeof expressionRunnerPairSimpleConfigDefault>(config, expressionRunnerPairSimpleConfigDefault)

    if (intermediateState) {
      runnerProps = [{

      }, {

      }]
    } else {

    }
  } else {

  }

  return mergeWithDefault<typeof runnerProps, typeof expressionRunnerDefaults>(runnerProps, expressionRunnerDefaults)
}

const buildExpressionRunnerConfigFromShorthand = (
  shorthand: Record<string, ExpressionRunnerShorthandConfig>
): Record<string, ExpressionRunnerConfig> => {
  return Object.entries(shorthand)
    .map(([key, config]) => {

      }
    })
    .reduce((acc, current) => ({ ...acc, ...current }), {})
}

export default buildExpressionRunnerConfigFromShorthand
