import { FunctionExpressionParams } from 'src/types/ExpressionParams'

export interface VariableExpression {
  state: 'default' | 'highlighted' | 'needsReset'
  type: 'variable'
  value: string
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

export interface UnprioritizedCallExpression extends CallExpression {
  priority: undefined
}

export interface PrioritizedCallExpression extends CallExpression {
  priority: number
}

export interface ExecutableCallExpression extends CallExpression {
  priority: 1
  value: {
    arg: VariableExpression | FunctionExpression
    func: FunctionExpression
  }
}

export interface UnexecutableCallExpression extends CallExpression {
  state: 'done'
}

export interface FunctionExpression {
  type: 'function'
  state: 'default' | 'highlighted' | 'needsReset'
  value: {
    arg: VariableExpression
    body: Expression
  }
}

type NeedsResetState = { state: 'needsReset' }
type NeedsResetFunctionExpression = FunctionExpression & NeedsResetState
type NeedsResetCallExpression = CallExpression & NeedsResetState
type NeedsResetVariableExpression = VariableExpression & NeedsResetState

export type NeedsResetExpression =
  | NeedsResetFunctionExpression
  | NeedsResetCallExpression
  | NeedsResetVariableExpression

export type Expression =
  | VariableExpression
  | CallExpression
  | FunctionExpression
