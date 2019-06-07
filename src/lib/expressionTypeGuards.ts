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
  ExecutableCallMagical,
  MagicalVariable
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

export function isVariableShorthandUnaryNumber<
  V extends VariableShorthandUnaryNumber = VariableShorthandUnaryNumber
>(expression: Expression): expression is V {
  return (
    isVariableShorthandNumber(expression) &&
    isVariableShorthandUnary(expression)
  )
}

export function isMagicalVariable<V extends MagicalVariable = MagicalVariable>(
  expression: Expression
): expression is V {
  return !!(isVariable(expression) && expression.magical)
}

export function isExecutableCallRegular<E extends ExecutableCallRegular>(
  expression: CallExpression
): expression is E {
  return isFunction(expression.func)
}

export function isExecutableCallMagical<E extends ExecutableCallMagical>(
  expression: CallExpression
): expression is E {
  return isMagicalVariable(expression.func)
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

export function isExecutableCall<E extends ExecutableCall>(
  expression: CallExpression
): expression is E {
  return (
    isExecutableCallRegular(expression) ||
    isExecutableCallMagical(expression) ||
    isExecutableCallBinary(expression)
  )
}

export function isExecutableConditional<E extends ExecutableConditional>(
  expression: ConditionalExpression
): expression is E {
  return isVariableShorthandNumber(expression.condition)
}
