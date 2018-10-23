import {
  CallExpression,
  ExecutableCall,
  Expression,
  FunctionExpression,
  VariableExpression
} from 'src/types/yc/ExpressionTypes'

export function isVariable(
  expression: Expression
): expression is VariableExpression {
  return expression.type === 'variable'
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
