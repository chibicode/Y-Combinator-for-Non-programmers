import uniq from 'lodash/uniq'
import {
  isCallExpression,
  isFunctionExpression,
  isVariableExpression
} from 'src/lib/yc/expressionTypeGuards'
import {
  CallExpression,
  Expression,
  FunctionExpression
} from 'src/types/yc/ExpressionTypes'
import { VariableNames } from 'src/types/yc/VariableNames'

function getAllUnboundedVariableNamesWithDuplicates(
  expression: FunctionExpression | CallExpression
): ReadonlyArray<VariableNames> {
  if (isCallExpression(expression)) {
    let result: ReadonlyArray<VariableNames> = []
    if (isCallExpression(expression.arg)) {
      result = result.concat(
        getAllUnboundedVariableNamesWithDuplicates(expression.arg)
      )
    } else if (isFunctionExpression(expression.arg)) {
      result = result.concat([
        expression.arg.arg.name,
        ...getAllUnboundedVariableNamesWithDuplicates(expression.arg)
      ])
    }
    if (isCallExpression(expression.func)) {
      result = result.concat(
        getAllUnboundedVariableNamesWithDuplicates(expression.func)
      )
    } else if (isFunctionExpression(expression.func)) {
      result = result.concat([
        expression.func.arg.name,
        ...getAllUnboundedVariableNamesWithDuplicates(expression.func)
      ])
    }
    return result
  } else if (isFunctionExpression) {
    let result: ReadonlyArray<VariableNames> = [expression.arg.name]
    if (!isVariableExpression(expression.body)) {
      result = result.concat(
        getAllUnboundedVariableNamesWithDuplicates(expression.body)
      )
    }
    return result
  } else {
    return []
  }
}

export default function getAllUnboundedVariableNames(
  expression: Expression
): ReadonlyArray<VariableNames> {
  if (isVariableExpression(expression)) {
    return []
  } else {
    return uniq(getAllUnboundedVariableNamesWithDuplicates(expression))
  }
}
