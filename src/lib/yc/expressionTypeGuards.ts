import {
  CallExpression,
  ExecutableCallRegular,
  Expression,
  FunctionExpression,
  VariableExpression,
  ShorthandFunctionExpression,
  ExecutableCallShorthand,
  ExecutableCall,
  NumberExpression
} from 'src/types/yc/ExpressionTypes'
import { VariableNames } from 'src/types/yc/VariableNames'

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

export function isShorthandFunction<
  E extends ShorthandFunctionExpression = ShorthandFunctionExpression
>(expression: Expression): expression is E {
  return expression.type === 'shorthandFunction'
}

export function isExecutableCall<E extends ExecutableCall>(
  expression: CallExpression
): expression is E {
  return isFunction(expression.func) || isShorthandFunction(expression.func)
}

export function isExecutableCallRegular<E extends ExecutableCallRegular>(
  expression: CallExpression
): expression is E {
  return isFunction(expression.func)
}

export function isExecutableCallShorthand<E extends ExecutableCallShorthand>(
  expression: CallExpression
): expression is E {
  return isShorthandFunction(expression.func)
}

const isNested = (
  a: VariableNames,
  b: VariableNames,
  e: VariableExpression | CallExpression
): boolean => {
  if (isCall(e)) {
    return (
      isVariable(e.func) &&
      e.func.name === a &&
      isCall(e.arg) &&
      isNested(a, b, e.arg)
    )
  } else {
    return e.name === b
  }
}

export function isNumber<E extends NumberExpression>(
  expression: Expression
): expression is E {
  if (isFunction(expression)) {
    const argA = expression.arg
    if (isFunction(expression.body)) {
      const argB = expression.body.arg
      const bodyBody = expression.body.body
      if (isVariable(bodyBody) || isCall(bodyBody)) {
        return isNested(argA.name, argB.name, bodyBody)
      }
    }
  }
  return false
}
