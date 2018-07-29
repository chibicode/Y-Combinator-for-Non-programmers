import produce from 'immer'
import cloneDeep from 'lodash/cloneDeep'
import difference from 'lodash/difference'
import intersection from 'lodash/intersection'
import union from 'lodash/union'
import uniq from 'lodash/uniq'
import zipObject from 'lodash/zipObject'
import { INITIAL_PRIORITY } from 'src/constants/expressions'
import {
  ExecutableCallExpression,
  CallExpression,
  PrioritizedCallExpression,
  UnprioritizedCallExpression,
  Expression,
  FunctionExpression,
  VariableExpression
} from 'src/types/Expressions'
import {
  CallExpressionParams,
  ExpressionParams,
  FunctionExpressionParams,
  VariableExpressionParams
} from 'src/types/ExpressionParams'

const nestCallExpressions = (expression: ExpressionParams) => {
  if (Array.isArray(expression)) {
    if (expression.length === 2) {
      return expression.map(e => nestCallExpressions(e))
    } else {
      return [
        nestCallExpressions(expression.slice(0, expression.length - 1)),
        nestCallExpressions(expression[expression.length - 1])
      ]
    }
  } else {
    return expression
  }
}

export function decorateExpression(
  expression: VariableExpressionParams
): VariableExpression
export function decorateExpression(
  expression: CallExpressionParams
): UnprioritizedCallExpression
export function decorateExpression(
  expression: FunctionExpressionParams
): FunctionExpression
export function decorateExpression(expression: ExpressionParams): Expression
export function decorateExpression(expression): any {
  if (typeof expression === 'string') {
    return {
      value: expression,
      state: 'default',
      type: 'variable'
    }
  } else if (Array.isArray(expression)) {
    if (expression.length > 2) {
      expression = nestCallExpressions(expression)
    }
    return {
      value: {
        arg: decorateExpression(expression[1]),
        func: decorateExpression(expression[0])
      },
      state: 'default',
      type: 'call'
    }
  } else {
    return {
      value: {
        arg: decorateExpression(expression.arg),
        body: decorateExpression(expression.body)
      },
      state: 'default',
      type: 'function'
    }
  }
}

export const findNextCallExpressionAndParent = (
  expression: Expression
): {
  expression: ExecutableCallExpression
  parentKey?: string
  parent?: Expression
} | null => {
  if (expression.type === 'call') {
    const stack: Array<{
      expression: CallExpression
      parent?: Expression
      parentKey?: string
    }> = [{ expression }]
    let current: CallExpression
    let parent: Expression
    let parentKey: string
    while (stack.length > 0) {
      const topOfStack = stack.pop()
      current = topOfStack.expression
      parent = topOfStack.parent
      parentKey = topOfStack.parentKey
      if (current.priority === INITIAL_PRIORITY) {
        if (
          (current.value.arg.type === 'variable' ||
            current.value.arg.type === 'function') &&
          current.value.func.type === 'function'
        ) {
          return {
            expression: current as ExecutableCallExpression,
            parentKey,
            parent
          }
        } else {
          return null
        }
      }
      if (current.value.func.type === 'call') {
        stack.push({
          expression: current.value.func,
          parentKey: 'func',
          parent: current
        })
      }
      if (current.value.arg.type === 'call') {
        stack.push({
          expression: current.value.arg,
          parentKey: 'arg',
          parent: current
        })
      }
    }
  }

  return null
}

export const decoratedExpressionToSimpleString = (
  expression: Expression,
  { addPriority } = { addPriority: false }
) => {
  if (expression.type === 'variable') {
    return expression.value
  } else if (expression.type === 'call') {
    return `${decoratedExpressionToSimpleString(expression.value.func, {
      addPriority
    })}(${
      addPriority && expression.priority ? expression.priority : ''
    }${decoratedExpressionToSimpleString(expression.value.arg, {
      addPriority
    })})`
  } else {
    return `(${decoratedExpressionToSimpleString(expression.value.arg, {
      addPriority
    })} => ${decoratedExpressionToSimpleString(expression.value.body, {
      addPriority
    })})`
  }
}

export const getAllVariableNames = (expression: Expression): string[] => {
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
  expression: Expression
): void => {
  switch (expression.type) {
    case 'variable': {
      return
    }
    case 'call': {
      mutablePrioritizeExpressionRecurserForCallExpression({
        expression,
        priority: INITIAL_PRIORITY
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
  priority
}: {
  expression: CallExpression
  priority: number
}): number => {
  if (expression.value.arg.type === 'call') {
    priority =
      mutablePrioritizeExpressionRecurserForCallExpression({
        expression: expression.value.arg,
        priority
      }) + 1
  } else {
    mutablePrioritizeExpressionRecurserForOtherExpression(expression.value.arg)
  }
  if (expression.value.func.type === 'call') {
    priority =
      mutablePrioritizeExpressionRecurserForCallExpression({
        expression: expression.value.func,
        priority
      }) + 1
  } else {
    mutablePrioritizeExpressionRecurserForOtherExpression(expression.value.func)
  }

  expression.priority = priority
  return priority
}

const mutablePrioritizeExpression = (expression: CallExpression): void => {
  mutablePrioritizeExpressionRecurserForCallExpression({
    expression,
    priority: INITIAL_PRIORITY
  })
}

export const prioritizeExpression = (
  expression: CallExpression
): PrioritizedCallExpression => {
  return produce<CallExpression>(expression, draftExpression => {
    mutablePrioritizeExpression(draftExpression)
  }) as PrioritizedCallExpression
}

export const conflictingVariableNames = (
  expression: ExecutableCallExpression
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
  'z'
]

const replaceVariableNamesRecurser = ({
  expression,
  mapping
}: {
  expression: Expression
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
    replaceVariableNamesRecurser({ expression: expression.value.func, mapping })
  } else {
    // Do not recurse on function arguments - those are not what you're replacing
    replaceVariableNamesRecurser({ expression: expression.value.body, mapping })
  }
}

export const mutableAlphaConvert = (expression: ExecutableCallExpression) => {
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

const betaReduceRecurser = ({
  expression,
  from,
  to
}: {
  expression: Expression
  from: string
  to: VariableExpression | FunctionExpression
}): Expression => {
  if (expression.type === 'variable') {
    if (expression.value === from) {
      return to
    } else {
      return expression
    }
  } else if (expression.type === 'call') {
    expression.value.arg = betaReduceRecurser({
      expression: expression.value.arg,
      from,
      to
    })
    expression.value.func = betaReduceRecurser({
      expression: expression.value.func,
      from,
      to
    })
    return expression
  } else {
    expression.value.body = betaReduceRecurser({
      expression: expression.value.body,
      from,
      to
    })
    return expression
  }
}

export const betaReduce = (
  expression: ExecutableCallExpression
): Expression => {
  const clonedExpression = cloneDeep(expression)
  return betaReduceRecurser({
    expression: clonedExpression.value.func.value.body,
    from: clonedExpression.value.func.value.arg.value,
    to: clonedExpression.value.arg
  })
}

export const resetExpression = (expression: Expression) => {
  return produce<Expression>(expression, draftExpression => {
    draftExpression.state = 'default'
    if (draftExpression.type === 'function') {
      if (draftExpression.value.arg) {
        resetExpression(draftExpression.value.arg)
      }
      if (draftExpression.value.body) {
        resetExpression(draftExpression.value.body)
      }
    } else if (draftExpression.type === 'call') {
      delete draftExpression.priority
      if (draftExpression.value.arg) {
        resetExpression(draftExpression.value.arg)
      }
      if (draftExpression.value.func) {
        resetExpression(draftExpression.value.func)
      }
    }
  })
}
