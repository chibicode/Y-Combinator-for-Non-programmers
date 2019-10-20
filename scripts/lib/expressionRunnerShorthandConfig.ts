import { ExpressionContainer } from 'src/types/ExpressionContainerTypes'
import { ExpressionRunnerProps } from 'src/types/ExpressionRunnerTypes'
import { SteppedExpressionContainer } from 'src/types/ExpressionContainerTypes'

export const expressionRunnerSimpleConfigDefault = {
  isDone: false,
  initialState: 'default',
  showPriorities: false,
  explanationsVisibility: 'hidden',
  skipAlphaConvert: false
}

interface ExpressionRunnerSimpleConfig {
  runner: 'simple'
  initialExpressionContainer: SteppedExpressionContainer
  initialState?: ExpressionContainer['previouslyChangedExpressionState']
  isDone?: boolean
  skipAlphaConvert?: boolean
  skipActive?: boolean
  showDefaultAndActiveOnly?: boolean
  nextIterations?: number
  showPriorities?: boolean
  showAllShowSteps?: ExpressionRunnerProps['showAllShowSteps']
  explanationsVisibility?: ExpressionRunnerProps['explanationsVisibility']
  bottomRightBadgeOverrides?: ExpressionRunnerProps['bottomRightBadgeOverrides']
  highlightOverrides?: ExpressionRunnerProps['highlightOverrides']
  highlightOverrideActiveAfterStart?: ExpressionRunnerProps['highlightOverrideActiveAfterStart']
  highlightOverridesCallArgAndFuncUnboundOnly?: ExpressionRunnerProps['highlightOverridesCallArgAndFuncUnboundOnly']
  highlightFunctions?: ExpressionRunnerProps['highlightFunctions']
  crossed?: boolean
}

export function isExpressionRunnerSimpleConfig(
  c: ExpressionRunnerShorthandConfig
): c is ExpressionRunnerSimpleConfig {
  return c.runner === 'simple'
}

export const expressionRunnerRunButtonOnlyConfigDefault = {
  initialState: 'default',
  skipToTheEnd: true,
  hideFuncUnboundBadgeOnExplanation: true,
  showPriorities: false,
  speed: 1,
  skipAlphaConvert: false,
  explanationsVisibility: 'hiddenInitialPausedOnly'
}

export function isExpressionRunnerRunButtonOnlyConfig(
  c: ExpressionRunnerShorthandConfig
): c is ExpressionRunnerRunButtonOnlyConfig {
  return c.runner === 'runButtonOnly'
}

interface ExpressionRunnerRunButtonOnlyConfig {
  runner: 'runButtonOnly'
  initialExpressionContainer: SteppedExpressionContainer
  initialState?: ExpressionContainer['previouslyChangedExpressionState']
  skipToTheEnd?: boolean
  hideFuncUnboundBadgeOnExplanation?: boolean
  showPriorities?: boolean
  lastAllowedExpressionState?: ExpressionContainer['previouslyChangedExpressionState']
  lastAllowedExpressionStateAfterIterations?: number
  nextIterations?: number
  showAllShowSteps?: ExpressionRunnerProps['showAllShowSteps']
  speed?: number
  skipAlphaConvert?: boolean
  skipActive?: boolean
  showDefaultAndActiveOnly?: boolean
  highlightOverrides?: ExpressionRunnerProps['highlightOverrides']
  explanationsVisibility?: ExpressionRunnerProps['explanationsVisibility']
}

export const expressionRunnerSingleStepConfigDefault = {
  hideFuncUnboundBadgeOnExplanation: false,
  showPriorities: false,
  explanationsVisibility: 'hiddenInitialPausedOnly'
}

export function isExpressionRunnerSingleStepConfig(
  c: ExpressionRunnerShorthandConfig
): c is ExpressionRunnerSingleStepConfig {
  return c.runner === 'singleStep'
}

interface ExpressionRunnerSingleStepConfig {
  runner: 'singleStep'
  initialExpressionContainer: SteppedExpressionContainer
  initialState: ExpressionContainer['previouslyChangedExpressionState']
  finalState: ExpressionContainer['previouslyChangedExpressionState']
  hideFuncUnboundBadgeOnExplanation?: boolean
  showPriorities?: boolean
  skipActive?: boolean
  showDefaultAndActiveOnly?: boolean
  nextIterations?: number
  explanationsVisibility?: ExpressionRunnerProps['explanationsVisibility']
  showAllShowSteps?: ExpressionRunnerProps['showAllShowSteps']
}

export function isExpressionRunnerPredefinedConfig(
  c: ExpressionRunnerShorthandConfig
): c is ExpressionRunnerPredefinedConfig {
  return c.runner === 'predefined'
}

export const expressionRunnerPredefinedConfigDefault = {
  hideFuncUnboundBadgeOnExplanation: false,
  showPriorities: false,
  explanationsVisibility: 'hiddenInitialPausedOnly',
  skipToTheEnd: true
}

interface ExpressionRunnerPredefinedConfig {
  runner: 'predefined'
  initialExpressionContainers: SteppedExpressionContainer[]
  hideFuncUnboundBadgeOnExplanation?: boolean
  showPriorities?: boolean
  nextIterations?: number
  explanationsVisibility?: ExpressionRunnerProps['explanationsVisibility']
  showAllShowSteps?: ExpressionRunnerProps['showAllShowSteps']
  skipToTheEnd?: boolean
  convert?: ExpressionRunnerProps['convert']
}

export type ExpressionRunnerShorthandConfig =
  | ExpressionRunnerSimpleConfig
  | ExpressionRunnerRunButtonOnlyConfig
  | ExpressionRunnerSingleStepConfig
  | ExpressionRunnerPredefinedConfig
