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
import { SteppedExpressionContainer } from 'src/types/ExpressionContainerTypes'
import { ExpressionRunnerProps } from 'src/types/ExpressionRunnerTypes'

export interface ExpressionRunnerConfig {
  initialExpressionContainer?: SteppedExpressionContainer
  initialExpressionContainers?: SteppedExpressionContainer[]
  hidePriorities: ExpressionRunnerContextProps['hidePriorities']
  hideBottomRightBadges: ExpressionRunnerContextProps['hideBottomRightBadges']
  hideControls: boolean
  explanationsVisibility: 'visible' | 'hidden' | 'hiddenInitialPausedOnly'
  variableSize: ExpressionRunnerContextProps['variableSize']
  initializeInstructions: readonly InitializeInstruction[]
  lastAllowedExpressionState?: ExpressionContainer['previouslyChangedExpressionState']
  lastAllowedExpressionStateAfterIterations?: number
  containerSize: keyof typeof allMaxWidths
  hidePlayButton?: boolean
  speed: number
  showAllShowSteps?: boolean
  skipAlphaConvert?: boolean
  skipActive?: boolean
  skipToTheEnd: boolean
  hideFuncUnboundBadgeOnExplanation: boolean
  highlightOverridesCallArgAndFuncUnboundOnly: boolean
  bottomRightBadgeOverrides: ExpressionRunnerContextProps['bottomRightBadgeOverrides']
  highlightOverrides: ExpressionRunnerContextProps['highlightOverrides']
  highlightOverrideActiveAfterStart: boolean
  highlightFunctions: boolean
  convert?: ExpressionRunnerProps['convert']
  crossed?: boolean
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
  highlightFunctions: false
}

const buildInitializeInstructions = ({
  nextIterations,
  isDone,
  initialState
}: {
  nextIterations?: number
  isDone?: boolean
  initialState: ExpressionContainer['previouslyChangedExpressionState']
}): readonly InitializeInstruction[] =>
  nextIterations
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
      skipActive,
      nextIterations,
      showPriorities,
      showAllShowSteps,
      explanationsVisibility,
      bottomRightBadgeOverrides,
      variableSize,
      containerSize,
      highlightOverrides,
      highlightOverrideActiveAfterStart,
      highlightOverridesCallArgAndFuncUnboundOnly,
      highlightFunctions,
      crossed
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
      containerSize,
      skipAlphaConvert,
      skipActive,
      bottomRightBadgeOverrides,
      highlightOverrides,
      highlightFunctions,
      highlightOverrideActiveAfterStart,
      initializeInstructions: buildInitializeInstructions({
        nextIterations,
        isDone,
        initialState
      }),
      crossed
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
      nextIterations,
      showAllShowSteps,
      speed,
      skipAlphaConvert,
      skipActive,
      variableSize,
      containerSize,
      highlightOverrides,
      explanationsVisibility
    } = mergeWithDefault<
      typeof config,
      typeof expressionRunnerPlayButtonOnlyConfigDefault
    >(config, expressionRunnerPlayButtonOnlyConfigDefault)

    runnerProps = {
      speed,
      initialExpressionContainer,
      hidePriorities: !showPriorities,
      highlightOverrides,
      showAllShowSteps,
      hideFuncUnboundBadgeOnExplanation,
      skipToTheEnd,
      variableSize,
      containerSize,
      skipAlphaConvert,
      skipActive,
      explanationsVisibility:
        explanationsVisibility || 'hiddenInitialPausedOnly',
      lastAllowedExpressionState,
      lastAllowedExpressionStateAfterIterations,
      initializeInstructions: buildInitializeInstructions({
        nextIterations,
        initialState
      })
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
      nextIterations,
      skipActive
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
      skipActive,
      initializeInstructions: buildInitializeInstructions({
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
