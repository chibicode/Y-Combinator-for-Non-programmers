import uniq from 'lodash/uniq'
import {
  DecoratedCallExecutableExpression,
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

const INITIAL_PRIORITY = 1

const prioritizeExpressionRecurserForOtherExpression = (
  expression: DecoratedExpression
): void => {
  switch (expression.type) {
    case 'variable': {
      return
    }
    case 'call': {
      prioritizeExpressionRecurserForCallExpression({
        expression,
        priority: INITIAL_PRIORITY,
      })
      return
    }
    case 'function': {
      prioritizeExpressionRecurserForOtherExpression(expression.value.arg)
      prioritizeExpressionRecurserForOtherExpression(expression.value.body)
      return
    }
  }
}

const prioritizeExpressionRecurserForCallExpression = ({
  expression,
  priority,
}: {
  expression: DecoratedCallExpression
  priority: number
}): number => {
  if (expression.value.arg.type === 'call') {
    priority =
      prioritizeExpressionRecurserForCallExpression({
        expression: expression.value.arg,
        priority,
      }) + 1
  } else {
    prioritizeExpressionRecurserForOtherExpression(expression.value.arg)
  }
  if (expression.value.func.type === 'call') {
    priority =
      prioritizeExpressionRecurserForCallExpression({
        expression: expression.value.func,
        priority,
      }) + 1
  } else {
    prioritizeExpressionRecurserForOtherExpression(expression.value.func)
  }

  expression.priority = priority
  return priority
}

export const prioritizeExpression = (
  expression: DecoratedCallExpression
): void => {
  prioritizeExpressionRecurserForCallExpression({
    expression,
    priority: INITIAL_PRIORITY,
  })
}

/**
 * Finds the deepest call expression whose func is a function expression.
 * Implementation uses iterative inorder traversal of the tree,
 * prioritizing arguments first (because we use applicative order lambda
 * calculus).
 *
 * @param {DecoratedExpression} expression
 * @returns {DecoratedCallExecutableExpression|null}
 */
export const findNextCallExpression = (
  expression: DecoratedExpression
): DecoratedCallExecutableExpression | null => {
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
        return current as DecoratedCallExecutableExpression
      }
      current = current.value.func
    }
  }
  return null
}

export const decoratedExpressionToSimpleString = (
  expression: DecoratedExpression,
  addPriority: boolean = false
) => {
  if (expression.type === 'variable') {
    return expression.value
  } else if (expression.type === 'call') {
    return `${decoratedExpressionToSimpleString(
      expression.value.func,
      addPriority
    )}(${
      addPriority && expression.priority ? expression.priority : ''
    }${decoratedExpressionToSimpleString(expression.value.arg, addPriority)})`
  } else {
    return `(${decoratedExpressionToSimpleString(
      expression.value.arg,
      addPriority
    )} => ${decoratedExpressionToSimpleString(
      expression.value.body,
      addPriority
    )})`
  }
}

export const getAllVariableNames = (
  expression: DecoratedExpression
): string[] => {
  if (expression.type === 'variable') {
    return [expression.value]
  } else if (expression.type === 'call') {
    return uniq(
      getAllVariableNames(expression.value.arg).concat(
        getAllVariableNames(expression.value.func)
      )
    )
  } else {
    return uniq(
      getAllVariableNames(expression.value.arg).concat(
        getAllVariableNames(expression.value.body)
      )
    )
  }
}
