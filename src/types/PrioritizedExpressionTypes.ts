import {
  CallExpression,
  FunctionExpression,
  VariableExpression
} from 'src/types/ExpressionTypes'

export type PrioritizedVariableExpression = VariableExpression

export interface PrioritizedCallExpression extends CallExpression {
  priority: number
  arg: PrioritizedExpression
  func: PrioritizedExpression
}

export function isPrioritizedCallExpression(
  expression: CallExpression
): expression is PrioritizedCallExpression {
  return (expression as PrioritizedCallExpression).priority !== undefined
}

export interface PrioritizedFunctionExpression extends FunctionExpression {
  arg: PrioritizedVariableExpression
  body: PrioritizedExpression
}

export type PrioritizedExpression =
  | PrioritizedVariableExpression
  | PrioritizedCallExpression
  | PrioritizedFunctionExpression
