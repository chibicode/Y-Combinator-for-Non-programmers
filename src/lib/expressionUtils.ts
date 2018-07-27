import produce from 'immer'
import difference from 'lodash/difference'
import intersection from 'lodash/intersection'
import union from 'lodash/union'
import uniq from 'lodash/uniq'
import zipObject from 'lodash/zipObject'
import { INITIAL_PRIORITY } from 'src/constants/expressions'
import {
  DecoratedCallExecutableExpression,
  DecoratedCallExpression,
  DecoratedCallPrioritizedExpression,
  DecoratedCallUnprioritizedExpression,
  DecoratedExpression,
  DecoratedFunctionExpression,
  DecoratedVariableExpression
} from 'src/types/DecoratedExpressionTypes'
import {
  UndecoratedCallExpression,
  UndecoratedExpression,
  UndecoratedFunctionExpression
} from 'src/types/UndecoratedExpressionTypes'

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

export function decorateExpression(
  expression: string
): DecoratedVariableExpression
export function decorateExpression(
  expression: UndecoratedCallExpression
): DecoratedCallUnprioritizedExpression
export function decorateExpression(
  expression: UndecoratedFunctionExpression
): DecoratedFunctionExpression
export function decorateExpression(expression): any {
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
          (current.value.arg.type === 'variable' ||
            current.value.arg.type === 'function') &&
          current.value.func.type === 'function'
        ) {
          return current as DecoratedCallExecutableExpression
        } else {
          return null
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
  { addPriority } = { addPriority: false }
) => {
  if (expression.type === 'variable') {
    return expression.value
  } else if (expression.type === 'call') {
    return `${decoratedExpressionToSimpleString(expression.value.func, {
      addPriority,
    })}(${
      addPriority && expression.priority ? expression.priority : ''
    }${decoratedExpressionToSimpleString(expression.value.arg, {
      addPriority,
    })})`
  } else {
    return `(${decoratedExpressionToSimpleString(expression.value.arg, {
      addPriority,
    })} => ${decoratedExpressionToSimpleString(expression.value.body, {
      addPriority,
    })})`
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

export const conflictingVariableNames = (
  expression: DecoratedCallExecutableExpression
) => {
  const argVariableNames = getAllVariableNames(expression.value.arg)
  const funcBodyVariableNamesExceptArg = difference(
    getAllVariableNames(expression.value.func.value.body),
    [expression.value.func.value.arg.value]
  )
  return intersection(argVariableNames, funcBodyVariableNamesExceptArg)
}

const POSSIBLE_VARIABLE_NAMES = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
]

const replaceVariableNamesRecurser = ({
  expression,
  mapping,
}: {
  expression: DecoratedExpression
  mapping: {
    key: string
  }
}): void => {
  if (expression.type === 'variable') {
    if (mapping[expression.value]) {
      expression.value = mapping[expression.value]
    }
  } else if (expression.type === 'call') {
    replaceVariableNamesRecurser({ expression: expression.value.arg, mapping })
    replaceVariableNamesRecurser({ expression: expression.value.arg, mapping })
  } else {
    replaceVariableNamesRecurser({ expression: expression.value.arg, mapping })
    replaceVariableNamesRecurser({ expression: expression.value.body, mapping })
  }
}

export const mutableAlphaConvert = (
  expression: DecoratedCallExecutableExpression
) => {
  const sortedConflicts = conflictingVariableNames(expression).sort()
  if (sortedConflicts.length === 0) {
    return
  }
  const argVariableNames = getAllVariableNames(expression.value.arg)
  const funcVariableNames = getAllVariableNames(expression.value.func)
  const allUsedVariableNames = uniq(union(argVariableNames, funcVariableNames))
  const usableVariableNames = difference(
    POSSIBLE_VARIABLE_NAMES,
    allUsedVariableNames
  )
  const usableVariableNamesSliced = usableVariableNames.slice(
    0,
    sortedConflicts.length
  )
  const mapping = zipObject(sortedConflicts, usableVariableNamesSliced) as {
    key: string
  }
  replaceVariableNamesRecurser({ expression: expression.value.func, mapping })
}
