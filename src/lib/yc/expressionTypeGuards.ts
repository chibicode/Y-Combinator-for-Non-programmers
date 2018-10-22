import {
  CallExpression,
  CallExpressionStates,
  ExecutableCallExpression,
  ExecutableInactiveCallExpression,
  Expression,
  FunctionExpression,
  InactiveCallExpression,
  InactiveExpression,
  VariableExpression
} from 'src/types/yc/ExpressionTypes'
import { isFunction } from 'util'

export function isVariableExpression(
  expression: Expression
): expression is VariableExpression {
  return expression.type === 'variable'
}

export function isCallExpression<E extends CallExpression = CallExpression>(
  expression: Expression
): expression is E {
  return expression.type === 'call'
}

export function isFunctionExpression<
  E extends FunctionExpression = FunctionExpression
>(expression: Expression): expression is E {
  return expression.type === 'function'
}

export function isCallExpressionWithState<
  E extends CallExpression,
  S extends CallExpressionStates
>(expression: E, state: S): expression is E & { state: S } {
  return expression.state === state
}

export function isExecutableCallExpression<E extends ExecutableCallExpression>(
  expression: CallExpression
): expression is E {
  return (
    (isFunctionExpression(expression.arg) ||
      isVariableExpression(expression.arg)) &&
    isFunction(expression.func) &&
    expression.priority === 1
  )
}
