import difference from 'lodash/difference'
import intersection from 'lodash/intersection'
import getAllVariableNames from 'src/lib/getAllVariableNames'
import { ImmediatelyExecutableCallExpression } from 'src/types/ExecutableExpressionTypes'

export default function conflictingVariableNames(
  expression: ImmediatelyExecutableCallExpression
) {
  const argVariableNames = getAllVariableNames(expression.arg)
  const funcBodyVariableNamesExceptArg = difference(
    getAllVariableNames(expression.func.body),
    [expression.func.arg.name]
  )
  return intersection(argVariableNames, funcBodyVariableNamesExceptArg)
}
