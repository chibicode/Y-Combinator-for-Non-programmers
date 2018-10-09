import {
  PrioritizedFunctionExpression,
  PrioritizedVariableExpression
} from 'src/types/yc/PrioritizedExpressionTypes'
import { VariableNames } from 'src/types/yc/VariableNames'

export type CommonStates =
  | 'default'
  | 'highlighted'
  | 'justHighlighted'
  | 'justBetaReduced'

export type BetaReducePreview =
  | PrioritizedVariableExpression
  | PrioritizedFunctionExpression

export interface VariableExpression {
  readonly state: CommonStates
  readonly type: 'variable'
  readonly name: VariableNames
  readonly justAlphaConverted?: boolean
  readonly betaReducePreview?: BetaReducePreview
}

export function isVariableExpression(
  expression: Expression
): expression is VariableExpression {
  return expression.type === 'variable'
}

export type CallExpressionStates =
  | CommonStates
  | 'readyToHighlight'
  | 'needsAlphaConvert'
  | 'readyToBetaReduce'
  | 'betaReducePreviewBefore'
  | 'betaReducePreviewAfter'
  | 'alphaConvertDone'

export type AllExpressionStates = CallExpressionStates

export interface CallExpression {
  readonly state: CallExpressionStates
  readonly type: 'call'
  readonly arg: Expression
  readonly func: Expression
}

export function isCallExpression(
  expression: Expression
): expression is CallExpression {
  return expression.type === 'call'
}

export interface FunctionExpression {
  readonly type: 'function'
  readonly state: CommonStates
  readonly arg: VariableExpression
  readonly body: Expression
}

export function isFunctionExpression(
  expression: Expression
): expression is FunctionExpression {
  return expression.type === 'function'
}

export type Expression =
  | VariableExpression
  | CallExpression
  | FunctionExpression

interface NeedsResetState {
  readonly state: 'needsReset'
}
export type NeedsResetFunctionExpression = FunctionExpression & NeedsResetState
export type NeedsResetCallExpression = CallExpression & NeedsResetState
export type NeedsResetVariableExpression = VariableExpression & NeedsResetState

export type NeedsResetExpression =
  | NeedsResetFunctionExpression
  | NeedsResetCallExpression
  | NeedsResetVariableExpression
