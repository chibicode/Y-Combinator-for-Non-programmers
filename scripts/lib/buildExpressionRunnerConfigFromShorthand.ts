import {
  ExpressionRunnerShorthandConfig,
  expressionRunnerSimpleConfigDefault,
  expressionRunnerPlayButtonOnlyConfigDefault,
  expressionRunnerSingleStepConfigDefault,
  expressionRunnerPredefinedConfigDefault,
  isExpressionRunnerSimpleConfig,
  isExpressionRunnerPlayButtonOnlyConfig,
  isExpressionRunnerSingleStepConfig
} from 'scripts/lib/expressionRunnerShorthandConfig'
import { ExpressionContainer } from 'src/types/ExpressionContainerTypes'
import { allMaxWidths } from 'src/lib/theme/maxWidths'
import {
  InitializeInstruction,
  ExpressionRunnerContextProps,
  expressionRunnerContextDefault
} from 'src/types/ExpressionRunnerTypes'
import { HProps } from 'src/types/HTypes'
import { SteppedExpressionContainer } from 'src/types/ExpressionContainerTypes'
import { ExpressionRunnerProps } from 'src/types/ExpressionRunnerTypes'

export interface ExpressionRunnerConfig {
  initialExpressionContainer?: SteppedExpressionContainer
  initialExpressionContainers?: SteppedExpressionContainer[]
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
  hidePlayButton?: boolean
  speed: number
  showAllShowSteps?: boolean
  skipAlphaConvert?: boolean
  skipToTheEnd: boolean
  hideFuncUnboundBadgeOnExplanation: boolean
  highlightOverridesCallArgAndFuncUnboundOnly: boolean
  bottomRightBadgeOverrides: ExpressionRunnerContextProps['bottomRightBadgeOverrides']
  highlightOverrides: ExpressionRunnerContextProps['highlightOverrides']
  caption?: HProps['args']
  highlightOverrideActiveAfterStart: boolean
  showOnlyFocused: ExpressionRunnerContextProps['showOnlyFocused']
  argPriorityAggHighlights: readonly number[]
  funcPriorityAggHighlights: readonly number[]
  highlightFunctions: boolean
  superFastForward: boolean
  highlightNumber?: number
  convert?: ExpressionRunnerProps['convert']
  specialEffect?: boolean
}

const expressionRunnerDefaults = {
  hidePriorities: expressionRunnerContextDefault.hidePriorities,
  hideBottomRightBadges: expressionRunnerContextDefault.hideBottomRightBadges,
  hideControls: false,
  explanationsVisibility: 'visible',
  variableSize: expressionRunnerContextDefault.variableSize,
  initializeInstructions: [],
  containerSize: 'xxs',
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

function mergeWithDefault<
  A extends Record<string, any>,
  B extends Record<string, any>
>(base: A, defaults: B): A & B {
  let result: Record<string, any> = { ...base }
  Object.keys(defaults).forEach(key => {
    if (base[key] === undefined) {
      result[key] = defaults[key]
    }
  })
  return result as A & B
}

const buildExpressionRunnerConfigFromShorthand = (
  config: ExpressionRunnerShorthandConfig
): ExpressionRunnerConfig => {
  let runnerProps
  if (isExpressionRunnerSimpleConfig(config)) {
    const {
      initialExpressionContainer,
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
      funcPriorityAggHighlights,
      specialEffect
    } = mergeWithDefault<
      typeof config,
      typeof expressionRunnerSimpleConfigDefault
    >(config, expressionRunnerSimpleConfigDefault)

    runnerProps = {
      initialExpressionContainer,
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
      funcPriorityAggHighlights,
      specialEffect
    }
  } else if (isExpressionRunnerPlayButtonOnlyConfig(config)) {
    const {
      initialExpressionContainer,
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
      highlightNumber
    } = mergeWithDefault<
      typeof config,
      typeof expressionRunnerPlayButtonOnlyConfigDefault
    >(config, expressionRunnerPlayButtonOnlyConfigDefault)

    runnerProps = {
      speed,
      highlightNumber,
      initialExpressionContainer,
      hidePriorities: !showPriorities,
      highlightOverrides,
      showAllShowSteps,
      hideFuncUnboundBadgeOnExplanation,
      skipToTheEnd,
      variableSize,
      containerSize,
      skipAlphaConvert,
      explanationsVisibility:
        explanationsVisibility || 'hiddenInitialPausedOnly',
      lastAllowedExpressionState,
      lastAllowedExpressionStateAfterIterations,
      initializeInstructions: buildInitializeInstructions({
        nextIteration,
        nextIterations,
        initialState
      }),
      superFastForward
    }
  } else if (isExpressionRunnerSingleStepConfig(config)) {
    const {
      initialExpressionContainer,
      initialState,
      finalState,
      hideFuncUnboundBadgeOnExplanation,
      showPriorities,
      explanationsVisibility,
      showAllShowSteps,
      variableSize,
      containerSize,
      nextIteration,
      nextIterations
    } = mergeWithDefault<
      typeof config,
      typeof expressionRunnerSingleStepConfigDefault
    >(config, expressionRunnerSingleStepConfigDefault)

    runnerProps = {
      variableSize,
      containerSize,
      initialExpressionContainer,
      hidePriorities: !showPriorities,
      hideFuncUnboundBadgeOnExplanation,
      hidePlayButton: true,
      explanationsVisibility,
      lastAllowedExpressionState: finalState,
      lastAllowedExpressionStateAfterIterations: nextIterations,
      showAllShowSteps,
      initializeInstructions: buildInitializeInstructions({
        nextIteration,
        nextIterations,
        initialState
      })
    }
  } else {
    const {
      initialExpressionContainers,
      hideFuncUnboundBadgeOnExplanation,
      showPriorities,
      explanationsVisibility,
      showAllShowSteps,
      variableSize,
      containerSize,
      nextIterations,
      skipToTheEnd,
      convert
    } = mergeWithDefault<
      typeof config,
      typeof expressionRunnerPredefinedConfigDefault
    >(config, expressionRunnerPredefinedConfigDefault)

    runnerProps = {
      initialExpressionContainers,
      variableSize,
      containerSize,
      hidePriorities: !showPriorities,
      hideFuncUnboundBadgeOnExplanation,
      hidePlayButton: false,
      explanationsVisibility,
      lastAllowedExpressionStateAfterIterations: nextIterations,
      showAllShowSteps,
      skipToTheEnd,
      convert
    }
  }

  return mergeWithDefault<typeof runnerProps, typeof expressionRunnerDefaults>(
    runnerProps,
    expressionRunnerDefaults
  )
}

export default buildExpressionRunnerConfigFromShorthand
