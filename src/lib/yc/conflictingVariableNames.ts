import difference from 'lodash/difference'
import intersection from 'lodash/intersection'
import getAllVariableNames from 'src/lib/yc/getAllVariableNames'
import { ExecutableCall } from 'src/types/yc/ExpressionTypes'
import { VariableNames } from 'src/types/yc/VariableNames'

export default function conflictingVariableNames(
  expression: ExecutableCall
): VariableNames[] {
  const argVariableNames = getAllVariableNames(expression.arg)
  const funcBodyUnboundedVariableNamesExceptArg = difference(
    getAllVariableNames(expression.func.body, { filter: 'unbound' }),
    [expression.func.arg.name]
  )
  return intersection(argVariableNames, funcBodyUnboundedVariableNamesExceptArg)
}

export function conflictingVariableNamesObject(
  expression: ExecutableCall
): Partial<Record<VariableNames, true>> {
  return conflictingVariableNames(expression).reduce(
    (accumulator, currentValue) => ({
      ...accumulator,
      [currentValue]: true
    }),
    {}
  )
}
