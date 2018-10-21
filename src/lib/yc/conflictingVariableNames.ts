import difference from 'lodash/difference'
import intersection from 'lodash/intersection'
import getAllUnboundedVariableNames from 'src/lib/yc/getAllUnboundedVariableNames'
import getAllVariableNames from 'src/lib/yc/getAllVariableNames'
import { ImmediatelyExecutableCallExpression } from 'src/types/yc/ExpressionTypes'

export default function conflictingVariableNames(
  expression: ImmediatelyExecutableCallExpression
) {
  const argVariableNames = getAllVariableNames(expression.arg)
  const funcBodyUnboundedVariableNamesExceptArg = difference(
    getAllUnboundedVariableNames(expression.func.body),
    [expression.func.arg.name]
  )
  return intersection(argVariableNames, funcBodyUnboundedVariableNamesExceptArg)
}
