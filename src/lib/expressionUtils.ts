import {
  DecoratedCallExpression,
  DecoratedExpression
} from 'src/types/DecoratedExpressionTypes'
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
      state: 'default',
      type: 'variable',
    }
  } else if (Array.isArray(expression)) {
    if (expression.length > 2) {
      expression = nestCallExpressions(expression)
    }
    return {
      value: {
        arg: decorateExpression(expression[1]),
        func: decorateExpression(expression[0]),
      },
      state: 'default',
      type: 'call',
    }
  } else {
    return {
      value: {
        arg: decorateExpression(expression.arg),
        body: decorateExpression(expression.body),
      },
      state: 'default',
      type: 'function',
    }
  }
}

/**
 * Finds the deepest call expression whose func is a function expression.
 * Implementation uses iterative inorder traversal of the tree,
 * prioritizing arguments first (because we use applicative order lambda
 * calculus).
 *
 * @param {DecoratedExpression} expression
 */
export const findNextCallExpression = (expression: DecoratedExpression) => {
  if (expression.type === 'call') {
    const stack: DecoratedCallExpression[] = []
    let current: DecoratedExpression = expression
    while (current.type === 'call' || stack.length > 0) {
      while (current.type === 'call') {
        stack.push(current)
        current = current.value.arg
      }
      current = stack.pop()
      if (current.value.func.type === 'function') {
        return current
      }
      current = current.value.func
    }
  }
  return null
}
