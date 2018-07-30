import uniq from 'lodash/uniq'
import {
  Expression,
  isCallExpression,
  isVariableExpression
} from 'src/types/ExpressionTypes'

export default function getAllVariableNames(expression: Expression): string[] {
  if (isVariableExpression(expression)) {
    return [expression.value]
  } else if (isCallExpression(expression)) {
    return uniq(
      getAllVariableNames(expression.arg).concat(
        getAllVariableNames(expression.func)
      )
    )
  } else {
    return uniq(
      getAllVariableNames(expression.arg).concat(
        getAllVariableNames(expression.body)
      )
    )
  }
}
