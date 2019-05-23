import difference from 'lodash/difference'
import intersection from 'lodash/intersection'
import { ExecutableCallRegular } from 'src/types/yc/ExpressionTypes'
import uniq from 'lodash/uniq'
import {
  isCall,
  isVariable,
  isFunction,
  isVariableShorthandBinary
} from 'src/lib/yc/expressionTypeGuards'
import { Expression } from 'src/types/yc/ExpressionTypes'
import { VariableNames } from 'src/types/yc/VariableNames'
import alphaConvertTargetVariableNames from 'src/lib/yc/alphaConvertTargetVariableNames'

interface GetAllVariableNamesOptions {
  filter?: 'unbound'
}

function getAllVariableNamesWithDuplicates(
  expression: Expression,
  { filter }: GetAllVariableNamesOptions
): readonly VariableNames[] {
  if (isVariable(expression)) {
    if ((filter === 'unbound' && !expression.bound) || !filter) {
      return [expression.name]
    } else {
      return []
    }
  } else if (isCall(expression)) {
    return getAllVariableNames(expression.arg, { filter }).concat(
      getAllVariableNames(expression.func, { filter })
    )
  } else if (isFunction(expression)) {
    return getAllVariableNames(expression.arg, { filter }).concat(
      getAllVariableNames(expression.body, { filter })
    )
  } else {
    return getAllVariableNames(expression.condition, { filter })
      .concat(getAllVariableNames(expression.trueCase, { filter }))
      .concat(getAllVariableNames(expression.falseCase, { filter }))
  }
}

function getAllVariableNames(
  expression: Expression,
  opts: GetAllVariableNamesOptions = {}
): readonly VariableNames[] {
  return uniq(getAllVariableNamesWithDuplicates(expression, opts))
}

function conflictingVariableNames(
  expression: ExecutableCallRegular
): readonly VariableNames[] {
  if (isVariableShorthandBinary(expression.func)) {
    return []
  } else {
    const argVariableNames = getAllVariableNames(expression.arg)
    const funcBodyUnboundedVariableNamesExceptArg = difference(
      getAllVariableNames(expression.func.body, { filter: 'unbound' }),
      [expression.func.arg.name]
    )
    return intersection(
      argVariableNames,
      funcBodyUnboundedVariableNamesExceptArg
    )
  }
}

export type ConflictingNamesToUnusedNames = {
  [key in VariableNames]?: VariableNames
}

export default function getConflictsToUnused(
  expression: ExecutableCallRegular
): ConflictingNamesToUnusedNames {
  const conflicts = conflictingVariableNames(expression)
  const allUsed = getAllVariableNames(expression)
  const available = difference<VariableNames>(
    alphaConvertTargetVariableNames,
    allUsed
  )
  return conflicts.reduce(
    (result, current, index) => ({
      ...result,
      [current]: available[index]
    }),
    {}
  )
}
