import DecoratedExpressionState from 'src/constants/DecoratedExpressionState'
import { DecoratedExpression } from 'src/types/DecoratedExpressionTypes'
import { AnyExpression } from 'src/types/ExpressionTypes'

const decorateExpression = (expression: AnyExpression): DecoratedExpression => {
  if (typeof expression === 'string') {
    return {
      value: expression,
      state: DecoratedExpressionState.DEFAULT,
      type: 'variable',
    }
  } else if (Array.isArray(expression)) {
    return {
      value: expression.map(e => decorateExpression(e)),
      state: DecoratedExpressionState.DEFAULT,
      type: 'call',
    }
  } else {
    return {
      value: {
        arg: decorateExpression(expression.arg),
        body: decorateExpression(expression.body),
      },
      state: DecoratedExpressionState.DEFAULT,
      type: 'function',
    }
  }
}

export default decorateExpression
