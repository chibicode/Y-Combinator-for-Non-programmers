import {
  CallExpression,
  Expression,
  FunctionExpression,
  VariableExpression,
  ConditionalExpression,
  VariableShorthandBinary,
  VariableShorthandUnary,
  VariableShorthandNumber,
  ExecutableCallRegular,
  ExecutableCall,
  ExecutableConditional,
  ExecutableCallBinary,
  VariableShorthandUnaryNumber,
  RepeatExpression,
  ExecutableCallShorthand,
  VariableShorthandFunc
} from 'src/types/ExpressionTypes'

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

export function isConditional<
  E extends ConditionalExpression = ConditionalExpression
>(expression: Expression): expression is E {
  return expression.type === 'conditional'
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

export function isVariableShorthandFunc<
  V extends VariableShorthandFunc = VariableShorthandFunc
>(expression: Expression): expression is V {
  return isVariable(expression) && expression.shorthandFunc !== undefined
}

export function isVariableShorthandUnaryNumber<
  V extends VariableShorthandUnaryNumber = VariableShorthandUnaryNumber
>(expression: Expression): expression is V {
  return (
    isVariableShorthandNumber(expression) &&
    isVariableShorthandUnary(expression)
  )
}

export function isExecutableCallRegular<E extends ExecutableCallRegular>(
  expression: CallExpression
): expression is E {
  return isFunction(expression.func)
}

export function isExecutableCallBinary<E extends ExecutableCallBinary>(
  expression: CallExpression
): expression is E {
  return (
    isCall(expression.arg) &&
    isVariableShorthandNumber(expression.func) &&
    isVariableShorthandNumber(expression.arg.arg) &&
    isVariableShorthandBinary(expression.arg.func)
  )
}

export function isExecutableCallShorthand<E extends ExecutableCallShorthand>(
  expression: CallExpression
): expression is E {
  return (
    isVariableShorthandFunc(expression.func) &&
    isVariableShorthandNumber(expression.arg)
  )
}

export function isExecutableCall<E extends ExecutableCall>(
  expression: CallExpression
): expression is E {
  return (
    isExecutableCallRegular(expression) ||
    isExecutableCallBinary(expression) ||
    isExecutableCallShorthand(expression)
  )
}

export function isExecutableConditional<E extends ExecutableConditional>(
  expression: ConditionalExpression
): expression is E {
  return isVariableShorthandNumber(expression.condition)
}

export function isRepeat<E extends RepeatExpression = RepeatExpression>(
  expression: Expression
): expression is E {
  return expression.type === 'repeat'
}
