import produce from 'immer'
import uniq from 'lodash/uniq'
import { INITIAL_PRIORITY } from 'src/constants/expressions'
import {
  DecoratedCallExecutableExpression,
  DecoratedCallExpression,
  DecoratedCallPrioritizedExpression,
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

export const findNextCallExpression = (
  expression: DecoratedExpression
): DecoratedCallExecutableExpression | null => {
  if (expression.type === 'call') {
    const stack: DecoratedCallExpression[] = [expression]
    let current: DecoratedCallExpression
    while (stack.length > 0) {
      current = stack.pop()
      if (current.priority === INITIAL_PRIORITY) {
        if (
          current.value.arg.type === 'call' ||
          current.value.func.type !== 'function'
        ) {
          return null
        } else {
          return current as DecoratedCallExecutableExpression
        }
      }
      if (current.value.func.type === 'call') {
        stack.push(current.value.func)
      }
      if (current.value.arg.type === 'call') {
        stack.push(current.value.arg)
      }
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

const mutablePrioritizeExpressionRecurserForOtherExpression = (
  expression: DecoratedExpression
): void => {
  switch (expression.type) {
    case 'variable': {
      return
    }
    case 'call': {
      mutablePrioritizeExpressionRecurserForCallExpression({
        expression,
        priority: INITIAL_PRIORITY,
      })
      return
    }
    case 'function': {
      mutablePrioritizeExpressionRecurserForOtherExpression(
        expression.value.arg
      )
      mutablePrioritizeExpressionRecurserForOtherExpression(
        expression.value.body
      )
      return
    }
  }
}

const mutablePrioritizeExpressionRecurserForCallExpression = ({
  expression,
  priority,
}: {
  expression: DecoratedCallExpression
  priority: number
}): number => {
  if (expression.value.arg.type === 'call') {
    priority =
      mutablePrioritizeExpressionRecurserForCallExpression({
        expression: expression.value.arg,
        priority,
      }) + 1
  } else {
    mutablePrioritizeExpressionRecurserForOtherExpression(expression.value.arg)
  }
  if (expression.value.func.type === 'call') {
    priority =
      mutablePrioritizeExpressionRecurserForCallExpression({
        expression: expression.value.func,
        priority,
      }) + 1
  } else {
    mutablePrioritizeExpressionRecurserForOtherExpression(expression.value.func)
  }

  expression.priority = priority
  return priority
}

const mutablePrioritizeExpression = (
  expression: DecoratedCallExpression
): void => {
  mutablePrioritizeExpressionRecurserForCallExpression({
    expression,
    priority: INITIAL_PRIORITY,
  })
}

export const prioritizeExpression = (
  expression: DecoratedCallExpression
): DecoratedCallPrioritizedExpression => {
  return produce<DecoratedCallExpression>(expression, draftExpression => {
    mutablePrioritizeExpression(draftExpression)
  }) as DecoratedCallPrioritizedExpression
}
