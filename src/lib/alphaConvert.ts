import difference from 'lodash/difference'
import union from 'lodash/union'
import uniq from 'lodash/uniq'
import zipObject from 'lodash/zipObject'
import conflictingVariableNames from 'src/lib/conflictingVariableNames'
import getAllVariableNames from 'src/lib/getAllVariableNames'
import { ImmediatelyExecutableCallExpression } from 'src/types/ExecutableExpressionTypes'
import {
  Expression,
  isCallExpression,
  isFunctionExpression,
  isVariableExpression
} from 'src/types/ExpressionTypes'
import { VariableNames, variableNamesArray } from 'src/types/VariableNames'

type ReplaceMapping = Partial<Record<VariableNames, VariableNames>>

function helper<E extends Expression>({
  expression,
  mapping
}: {
  expression: E
  mapping: ReplaceMapping
}): E {
  if (isVariableExpression(expression)) {
    if (mapping[expression.name]) {
      // See: https://github.com/Microsoft/TypeScript/pull/13288#issuecomment-367396818
      return Object.assign({}, expression, {
        name: mapping[expression.name]
      })
    } else {
      return expression
    }
  } else if (isCallExpression(expression)) {
    return Object.assign({}, expression, {
      arg: helper({ expression: expression.arg, mapping }),
      func: helper({ expression: expression.func, mapping })
    })
  } else if (isFunctionExpression(expression)) {
    return Object.assign({}, expression, {
      arg: helper({ expression: expression.arg, mapping }),
      body: helper({ expression: expression.body, mapping })
    })
  }
  // See: https://github.com/Microsoft/TypeScript/issues/20235
  throw new Error()
}

export default function alphaConvert(
  expression: ImmediatelyExecutableCallExpression
): ImmediatelyExecutableCallExpression {
  const sortedConflicts = conflictingVariableNames(expression).sort()
  if (sortedConflicts.length === 0) {
    return expression
  }
  const argVariableNames = getAllVariableNames(expression.arg)
  const funcVariableNames = getAllVariableNames(expression.func)
  const allUsedVariableNames = uniq(union(argVariableNames, funcVariableNames))
  const usableVariableNames = difference(
    variableNamesArray,
    allUsedVariableNames
  )
  const usableVariableNamesSliced = usableVariableNames.slice(
    0,
    sortedConflicts.length
  )
  const mapping = zipObject(sortedConflicts, usableVariableNamesSliced)
  return {
    ...expression,
    func: helper({ expression: expression.func, mapping })
  }
}
