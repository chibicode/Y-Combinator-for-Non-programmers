import {
  CallExpression,
  Expression,
  FunctionExpression,
  VariableExpression,
  VariableShorthandBinary,
  VariableShorthandUnary,
  VariableShorthandNumber,
  ExecutableCallRegular,
  ExecutableCallShorthandBinary,
  ExecutableCall
} from 'src/types/yc/ExpressionTypes'

export function isVariable<V extends VariableExpression = VariableExpression>(
  expression: Expression
): expression is V {
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

export function isVariableShorthandUnary<
  V extends VariableShorthandUnary = VariableShorthandUnary
>(expression: Expression): expression is V {
  return isVariable(expression) && expression.shorthandUnary !== undefined
}

export function isVariableShorthandNumber<
  V extends VariableShorthandNumber = VariableShorthandNumber
>(expression: Expression): expression is V {
  return isVariable(expression) && expression.shorthandNumber !== undefined
}

export function isVariableShorthandBinary<
  V extends VariableShorthandBinary = VariableShorthandBinary
>(expression: Expression): expression is V {
  return isVariable(expression) && expression.shorthandBinary !== undefined
}

export function isExecutableCallRegular<E extends ExecutableCallRegular>(
  expression: CallExpression
): expression is E {
  return isFunction(expression.func)
}

export function isExecutableCallShorthandBinary<
  E extends ExecutableCallShorthandBinary
>(expression: CallExpression): expression is E {
  return isVariableShorthandBinary(expression.func)
}

export function isExecutableCall<E extends ExecutableCall>(
  expression: CallExpression
): expression is E {
  return (
    isExecutableCallShorthandBinary(expression) ||
    isExecutableCallRegular(expression)
  )
}
