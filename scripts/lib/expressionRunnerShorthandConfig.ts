import * as lessonExpressions from 'src/lib/lessonExpressions'
import { ExpressionContainer } from 'src/types/ExpressionContainerTypes'
import { ExpressionRunnerProps } from 'src/types/ExpressionRunnerTypes'
import { HProps } from 'src/types/HTypes'

export const expressionRunnerSimpleConfigDefault = {
  isDone: false,
  initialState: 'default',
  showPriorities: false,
  explanationsVisibility: 'hidden',
  variableSize: 'lg',
  skipAlphaConvert: false
}

interface ExpressionRunnerSimpleConfig {
  runner: 'simple'
  lessonExpressionsKey: keyof typeof lessonExpressions
  initialState?: ExpressionContainer['previouslyChangedExpressionState']
  isDone?: boolean
  skipAlphaConvert?: boolean
  nextIteration?: boolean
  nextIterations?: number
  showPriorities?: boolean
  showAllShowSteps?: ExpressionRunnerProps['showAllShowSteps']
  explanationsVisibility?: ExpressionRunnerProps['explanationsVisibility']
  caption?: HProps['args']
  bottomRightBadgeOverrides?: ExpressionRunnerProps['bottomRightBadgeOverrides']
  variableSize?: ExpressionRunnerProps['variableSize']
  containerSize?: ExpressionRunnerProps['containerSize']
  highlightOverrides?: ExpressionRunnerProps['highlightOverrides']
  highlightOverrideActiveAfterStart?: ExpressionRunnerProps['highlightOverrideActiveAfterStart']
  highlightOverridesCallArgAndFuncUnboundOnly?: ExpressionRunnerProps['highlightOverridesCallArgAndFuncUnboundOnly']
  showOnlyFocused?: ExpressionRunnerProps['showOnlyFocused']
  highlightFunctions?: ExpressionRunnerProps['highlightFunctions']
  argPriorityAggHighlights?: readonly number[]
  funcPriorityAggHighlights?: readonly number[]
}

export function isExpressionRunnerSimpleConfig(
  c: ExpressionRunnerShorthandConfig
): c is ExpressionRunnerSimpleConfig {
  return c.runner === 'simple'
}

export const expressionRunnerPlayButtonOnlyConfigDefault = {
  initialState: 'default',
  skipToTheEnd: true,
  hideFuncUnboundBadgeOnExplanation: true,
  showPriorities: false,
  speed: 1,
  skipAlphaConvert: false,
  variableSize: 'lg',
  explanationsVisibility: 'hiddenInitialPausedOnly'
}

export function isExpressionRunnerPlayButtonOnlyConfig(
  c: ExpressionRunnerShorthandConfig
): c is ExpressionRunnerPlayButtonOnlyConfig {
  return c.runner === 'playButtonOnly'
}

interface ExpressionRunnerPlayButtonOnlyConfig {
  runner: 'playButtonOnly'
  lessonExpressionsKey: keyof typeof lessonExpressions
  initialState?: ExpressionContainer['previouslyChangedExpressionState']
  skipToTheEnd?: boolean
  hideFuncUnboundBadgeOnExplanation?: boolean
  showPriorities?: boolean
  lastAllowedExpressionState?: ExpressionContainer['previouslyChangedExpressionState']
  lastAllowedExpressionStateAfterIterations?: number
  nextIteration?: boolean
  nextIterations?: number
  showAllShowSteps?: ExpressionRunnerProps['showAllShowSteps']
  speed?: number
  skipAlphaConvert?: boolean
  variableSize?: ExpressionRunnerProps['variableSize']
  containerSize?: ExpressionRunnerProps['containerSize']
  highlightOverrides?: ExpressionRunnerProps['highlightOverrides']
  explanationsVisibility?: ExpressionRunnerProps['explanationsVisibility']
  superFastForward?: ExpressionRunnerProps['superFastForward']
  highlightNumber?: number
}

export const expressionRunnerSingleStepConfigDefault = {
  hideFuncUnboundBadgeOnExplanation: false,
  showPriorities: false,
  explanationsVisibility: 'hiddenInitialPausedOnly',
  variableSize: 'lg'
}

export function isExpressionRunnerSingleStepConfig(
  c: ExpressionRunnerShorthandConfig
): c is ExpressionRunnerSingleStepConfig {
  return c.runner === 'singleStep'
}

interface ExpressionRunnerSingleStepConfig {
  runner: 'singleStep'
  lessonExpressionsKey: keyof typeof lessonExpressions
  initialState: ExpressionContainer['previouslyChangedExpressionState']
  finalState: ExpressionContainer['previouslyChangedExpressionState']
  hideFuncUnboundBadgeOnExplanation?: boolean
  showPriorities?: boolean
  nextIteration?: boolean
  nextIterations?: number
  variableSize?: ExpressionRunnerProps['variableSize']
  containerSize?: ExpressionRunnerProps['containerSize']
  explanationsVisibility?: ExpressionRunnerProps['explanationsVisibility']
  showAllShowSteps?: ExpressionRunnerProps['showAllShowSteps']
}

export type ExpressionRunnerShorthandConfig =
  | ExpressionRunnerSimpleConfig
  | ExpressionRunnerPlayButtonOnlyConfig
  | ExpressionRunnerSingleStepConfig
