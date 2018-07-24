import DecoratedExpressionState from 'src/constants/DecoratedExpressionState'
import { DecoratedExpression } from 'src/types/DecoratedExpressionTypes'
import { UndecoratedExpression } from 'src/types/UndecoratedExpressionTypes'

export const nestCallExpressions = (expression: UndecoratedExpression) => {
  if (Array.isArray(expression)) {
    if (expression.length === 2) {
      return expression.map(e => nestCallExpressions(e))
    } else {
      return [
        nestCallExpressions(expression.slice(0, expression.length - 1)),
        nestCallExpressions(expression[expression.length - 1]),
      ]
    }
  } else {
    return expression
  }
}

export const decorateExpression = (
  expression: UndecoratedExpression
): DecoratedExpression => {
  if (typeof expression === 'string') {
    return {
      value: expression,
      state: DecoratedExpressionState.DEFAULT,
      type: 'variable',
    }
  } else if (Array.isArray(expression)) {
    if (expression.length > 2) {
      expression = nestCallExpressions(expression)
    }
    return {
      value: {
        arg: decorateExpression(expression[0]),
        func: decorateExpression(expression[1]),
      },
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

export const findNextCallExpression = (expression: DecoratedExpression) => {
  if (expression.type === 'call') {
    return 2
  }
  return null
}
