import { ImmediatelyExecutableCallExpression } from 'src/types/yc/ExecutableExpressionTypes'

import {
  Expression,
  isCallExpression,
  isFunctionExpression,
  isVariableExpression
} from 'src/types/yc/ExpressionTypes'

function helper<E extends Expression>(expression: E): E {
  if (isVariableExpression(expression)) {
    if (expression.justAlphaConverted) {
      // See: https://github.com/Microsoft/TypeScript/pull/13288#issuecomment-367396818
      return Object.assign({}, expression, {
        justAlphaConverted: false,
        willBeBetaReduced: false,
        wasJustBetaReduced: false
      })
    } else {
      return Object.assign({}, expression, {
        willBeBetaReduced: false,
        wasJustBetaReduced: false
      })
    }
  } else if (isCallExpression(expression)) {
    return Object.assign({}, expression, {
      arg: helper(expression.arg),
      func: helper(expression.func)
    })
  } else if (isFunctionExpression(expression)) {
    return Object.assign({}, expression, {
      arg: helper(expression.arg),
      body: helper(expression.body),
      wasJustBetaReduced: false
    })
  } else {
    throw new Error()
  }
}

export default function clearJustAlphaConvertedAndBetaReducePreview(
  expression: ImmediatelyExecutableCallExpression
): ImmediatelyExecutableCallExpression {
  return helper(expression)
}
