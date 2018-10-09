import { ImmediatelyExecutableCallExpression } from 'src/types/yc/ExecutableExpressionTypes'

import {
  isPrioritizedCallExpression,
  isPrioritizedFunctionExpression,
  isPrioritizedVariableExpression,
  PrioritizedExpression
} from 'src/types/yc/PrioritizedExpressionTypes'

function helper<E extends PrioritizedExpression>(expression: E): E {
  if (isPrioritizedVariableExpression(expression)) {
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
  } else if (isPrioritizedCallExpression(expression)) {
    return Object.assign({}, expression, {
      arg: helper(expression.arg),
      func: helper(expression.func)
    })
  } else if (isPrioritizedFunctionExpression(expression)) {
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
