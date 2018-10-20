import uniq from 'lodash/uniq'
import {
  Expression,
  isCallExpression,
  isVariableExpression
} from 'src/types/yc/ExpressionTypes'
import { VariableNames } from 'src/types/yc/VariableNames'

function getAllVariableNamesWithDuplicates(
  expression: Expression
): ReadonlyArray<VariableNames> {
  if (isVariableExpression(expression)) {
    return [expression.name]
  } else if (isCallExpression(expression)) {
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
  expression: Expression
): ReadonlyArray<VariableNames> {
  return uniq(getAllVariableNamesWithDuplicates(expression))
}
