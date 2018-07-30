import {
  CallExpression,
  Expression,
  FunctionExpression,
  isCallExpression,
  isFunctionExpression,
  isVariableExpression,
  VariableExpression
} from 'src/types/ExpressionTypes'

export type PrioritizedVariableExpression = VariableExpression

export function isPrioritizedVariableExpression(
  expression: PrioritizedExpression | VariableExpression
): expression is PrioritizedVariableExpression {
  return isVariableExpression(expression)
}

export interface PrioritizedCallExpression extends CallExpression {
  priority: number
  arg: PrioritizedExpression
  func: PrioritizedExpression
}

export function isPrioritizedCallExpression(
  expression: PrioritizedExpression | CallExpression
): expression is PrioritizedCallExpression {
  if (isCallExpression(expression)) {
    return (
      (expression as PrioritizedCallExpression).priority !== undefined &&
      isPrioritizedExpression(expression.arg) &&
      isPrioritizedExpression(expression.func)
    )
  } else {
    return false
  }
}

export interface PrioritizedFunctionExpression extends FunctionExpression {
  arg: PrioritizedVariableExpression
  body: PrioritizedExpression
}

export function isPrioritizedFunctionExpression(
  expression: PrioritizedExpression | FunctionExpression
): expression is PrioritizedFunctionExpression {
  if (isFunctionExpression(expression)) {
    return (
      isPrioritizedVariableExpression(expression.arg) &&
      isPrioritizedExpression(expression.body)
    )
  } else {
    return false
  }
}

export type PrioritizedExpression =
  | PrioritizedVariableExpression
  | PrioritizedCallExpression
  | PrioritizedFunctionExpression

export function isPrioritizedExpression(
  expression: Expression
): expression is PrioritizedExpression {
  if (isVariableExpression(expression)) {
    return isPrioritizedVariableExpression(expression)
  } else if (isCallExpression(expression)) {
    return isPrioritizedCallExpression(expression)
  } else {
    return isPrioritizedFunctionExpression(expression)
  }
}
