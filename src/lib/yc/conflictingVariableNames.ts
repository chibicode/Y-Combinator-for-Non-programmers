import difference from 'lodash/difference'
import intersection from 'lodash/intersection'
import getAllVariableNames from 'src/lib/yc/getAllVariableNames'
import { ImmediatelyExecutableCallExpression } from 'src/types/yc/ExpressionTypes'

export default function conflictingVariableNames(
  expression: ImmediatelyExecutableCallExpression
) {
  const argVariableNames = getAllVariableNames(expression.arg)
  const funcBodyUnboundedVariableNamesExceptArg = difference(
    getAllVariableNames(expression.func.body, { filter: 'unbound' }),
    [expression.func.arg.name]
  )
  return intersection(argVariableNames, funcBodyUnboundedVariableNamesExceptArg)
}
