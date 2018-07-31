import { VariableNames } from 'src/types/VariableNames'

export interface VariableExpression {
  readonly state: 'default' | 'highlighted' | 'needsReset'
  readonly type: 'variable'
  readonly name: VariableNames
}

export function isVariableExpression(
  expression: Expression
): expression is VariableExpression {
  return expression.type === 'variable'
}

export interface CallExpression {
  readonly state:
    | 'default'
    | 'readyToHighlight'
    | 'highlighted'
    | 'done'
    | 'checkForConflictingVariables'
    | 'needsAlphaConvert'
    | 'readyToBetaReduce'
    | 'needsReset'
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
  readonly state: 'default' | 'highlighted' | 'needsReset'
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
