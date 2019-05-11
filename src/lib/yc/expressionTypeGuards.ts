import {
  CallExpression,
  Expression,
  FunctionExpression,
  VariableExpression,
  VariableShorthandFunc,
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

export function isExecutableCall<E extends ExecutableCall>(
  expression: CallExpression
): expression is E {
  return isFunction(expression.func) || isVariableShorthandFunc(expression.func)
}
