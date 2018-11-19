import uniq from 'lodash/uniq'
import { isCall, isVariable } from 'src/lib/yc/expressionTypeGuards'
import { Expression } from 'src/types/yc/ExpressionTypes'
import { VariableNames } from 'src/types/yc/VariableNames'

interface GetAllVariableNamesOptions {
  filter?: 'bound' | 'unbound'
}

function getAllVariableNamesWithDuplicates(
  expression: Expression,
  { filter }: GetAllVariableNamesOptions
): ReadonlyArray<VariableNames> {
  if (isVariable(expression)) {
    if (
      (filter === 'bound' && expression.bound) ||
      (filter === 'unbound' && !expression.bound) ||
      !filter
    ) {
      return [expression.name]
    } else {
      return []
    }
  } else if (isCall(expression)) {
    return getAllVariableNames(expression.arg, { filter }).concat(
      getAllVariableNames(expression.func, { filter })
    )
  } else {
    return getAllVariableNames(expression.arg, { filter }).concat(
      getAllVariableNames(expression.body, { filter })
    )
  }
}

export default function getAllVariableNames(
  expression: Expression,
  opts: GetAllVariableNamesOptions = {}
): ReadonlyArray<VariableNames> {
  return uniq(getAllVariableNamesWithDuplicates(expression, opts))
}
