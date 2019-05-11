import {
  CallExpression,
  Expression,
  FunctionExpression,
  VariableExpression,
  VariableShorthandFunc,
  ExecutableCallRegular,
  ExecutableCallShorthand,
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

export function isVariableShorthandFunc<
  V extends VariableShorthandFunc = VariableShorthandFunc
>(expression: Expression): expression is V {
  return isVariable(expression) && expression.shorthandFunc !== undefined
}

export function isExecutableCallRegular<E extends ExecutableCallRegular>(
  expression: CallExpression
): expression is E {
  return isFunction(expression.func)
}

export function isExecutableCallShorthand<E extends ExecutableCallShorthand>(
  expression: CallExpression
): expression is E {
  return isVariableShorthandFunc(expression.func)
}

export function isExecutableCall<E extends ExecutableCall>(
  expression: CallExpression
): expression is E {
  return (
    isExecutableCallShorthand(expression) || isExecutableCallRegular(expression)
  )
}
