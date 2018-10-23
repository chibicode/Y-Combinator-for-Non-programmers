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
    return getAllVariableNames(expression.arg).concat(
      getAllVariableNames(expression.func)
    )
  } else {
    return getAllVariableNames(expression.arg).concat(
      getAllVariableNames(expression.body)
    )
  }
}

export default function getAllVariableNames(
  expression: Expression,
  opts: GetAllVariableNamesOptions = {}
): ReadonlyArray<VariableNames> {
  return uniq(getAllVariableNamesWithDuplicates(expression, opts))
}
