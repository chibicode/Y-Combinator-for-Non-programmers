import { DecoratedExpression } from 'types/DecoratedExpressionTypes'
import { AnyExpression, FunctionExpression } from 'types/ExpressionTypes'

const decorateExpression = (expression: AnyExpression): DecoratedExpression => {
  if (typeof expression === 'string') {
    return { value: expression, state: {} }
  } else if (Array.isArray(expression)) {
    return {
      value: expression.map(e => decorateExpression(e)),
      state: {},
    }
  } else {
    return {
      value: {
        arg: decorateExpression(expression.arg),
        body: decorateExpression(expression.body),
      },
      state: {},
    }
  }
}

export default decorateExpression
