import {
  isCallExpression,
  isFunctionExpression,
  isVariableExpression
} from 'src/lib/yc/expressionTypeGuards'
import { Expression } from 'src/types/yc/ExpressionTypes'

export default function clearJustAlphaConvertedAndBetaReducePreview<
  E extends Expression
>(expression: E): E {
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
      arg: clearJustAlphaConvertedAndBetaReducePreview(expression.arg),
      func: clearJustAlphaConvertedAndBetaReducePreview(expression.func)
    })
  } else if (isFunctionExpression(expression)) {
    return Object.assign({}, expression, {
      arg: clearJustAlphaConvertedAndBetaReducePreview(expression.arg),
      body: clearJustAlphaConvertedAndBetaReducePreview(expression.body)
    })
  } else {
    throw new Error()
  }
}
