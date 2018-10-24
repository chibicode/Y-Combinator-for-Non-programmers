import {
  Bound,
  CallExpression,
  ExecutableCall,
  Expression,
  FunctionExpression,
  Unbound,
  VariableExpression
} from 'src/types/yc/ExpressionTypes'

export function isVariable(
  expression: Expression
): expression is VariableExpression {
  return expression.type === 'variable'
}

export function isBound<V extends VariableExpression>(
  expression: V
): expression is Bound<V> {
  return expression.bound
}

export function isUnbound<V extends VariableExpression>(
  expression: V
): expression is Unbound<V> {
  return !expression.bound
}

export function isCall<E extends CallExpression = CallExpression>(
  expression: Expression
): expression is E {
  return expression.type === 'call'
}

export function isFunction<E extends FunctionExpression = FunctionExpression>(
  expression: Expression
): expression is E {
  return expression.type === 'function'
}

export function isExecutableCall<E extends ExecutableCall>(
  expression: CallExpression
): expression is E {
  return (
    (isFunction(expression.arg) || isVariable(expression.arg)) &&
    isFunction(expression.func) &&
    expression.priority === 1
  )
}
