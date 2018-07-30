import produce from 'immer'
import cloneDeep from 'lodash/cloneDeep'
import difference from 'lodash/difference'
import union from 'lodash/union'
import uniq from 'lodash/uniq'
import zipObject from 'lodash/zipObject'

import {
  CallExpression,
  Expression,
  FunctionExpression,
  ImmediatelyExecutableCallExpression,
  VariableExpression
} from 'src/types/ExpressionTypes'

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

export const mutableAlphaConvert = (
  expression: ImmediatelyExecutableCallExpression
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
  expression: ImmediatelyExecutableCallExpression
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
