import {
  CallExpression,
  CallExpressionStates,
  Expression,
  FunctionExpression,
  VariableExpression
} from 'src/types/yc/ExpressionTypes'

export function isVariableExpression(
  expression: Expression
): expression is VariableExpression {
  return expression.type === 'variable'
}

export function isCallExpression(
  expression: Expression
): expression is CallExpression {
  return expression.type === 'call'
}

export function isFunctionExpression(
  expression: Expression
): expression is FunctionExpression {
  return expression.type === 'function'
}

export function isCallExpressionWithState<
  E extends CallExpression,
  S extends CallExpressionStates
>(expression: E, state: S): expression is E & { state: S } {
  return expression.state === state
}
