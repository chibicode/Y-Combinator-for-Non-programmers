export interface VariableExpression {
  state: 'default' | 'highlighted' | 'needsReset'
  type: 'variable'
  value: string
}

export function isVariableExpression(
  expression: Expression
): expression is VariableExpression {
  return expression.type === 'variable'
}

export interface CallExpression {
  state:
    | 'default'
    | 'readyToHighlight'
    | 'highlighted'
    | 'done'
    | 'checkForConflictingVariables'
    | 'needsAlphaConvert'
    | 'readyToBetaReduce'
    | 'needsReset'
  type: 'call'
  priority?: number
  value: {
    arg: Expression
    func: Expression
  }
}

export function isCallExpression(
  expression: Expression
): expression is CallExpression {
  return expression.type === 'call'
}

export interface FunctionExpression {
  type: 'function'
  state: 'default' | 'highlighted' | 'needsReset'
  value: {
    arg: VariableExpression
    body: Expression
  }
}

export function isFunctionExpression(
  expression: Expression
): expression is FunctionExpression {
  return expression.type === 'function'
}

export interface UnprioritizedCallExpression extends CallExpression {
  priority: undefined
}

export interface PrioritizedCallExpression extends CallExpression {
  priority: number
}

export interface ImmediatelyExecutableCallExpression extends CallExpression {
  priority: 1
  value: {
    arg: VariableExpression | FunctionExpression
    func: FunctionExpression
  }
}

export interface UnexecutableCallExpression extends CallExpression {
  state: 'done'
}

interface NeedsResetState {
  state: 'needsReset'
}
export type NeedsResetFunctionExpression = FunctionExpression & NeedsResetState
export type NeedsResetCallExpression = CallExpression & NeedsResetState
export type NeedsResetVariableExpression = VariableExpression & NeedsResetState

export type NeedsResetExpression =
  | NeedsResetFunctionExpression
  | NeedsResetCallExpression
  | NeedsResetVariableExpression

export type Expression =
  | VariableExpression
  | CallExpression
  | FunctionExpression
