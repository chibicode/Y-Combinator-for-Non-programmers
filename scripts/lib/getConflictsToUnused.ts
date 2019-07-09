import { ExecutableCallRegular } from 'src/types/ExpressionTypes'
import {
  isCall,
  isVariable,
  isFunction,
  isConditional
} from 'src/lib/expressionTypeGuards'
import { Expression } from 'src/types/ExpressionTypes'
import { VariableNames } from 'src/types/VariableNames'
import alphaConvertTargetVariableNames from 'scripts/lib/alphaConvertTargetVariableNames'

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
  } else if (isConditional(expression)) {
    return getAllVariableNames(expression.condition, { filter })
      .concat(getAllVariableNames(expression.trueCase, { filter }))
      .concat(getAllVariableNames(expression.falseCase, { filter }))
  } else {
    throw new Error()
  }
}

function getAllVariableNames(
  expression: Expression,
  opts: GetAllVariableNamesOptions = {}
): readonly VariableNames[] {
  return [...new Set(getAllVariableNamesWithDuplicates(expression, opts))]
}

function conflictingVariableNames(
  expression: ExecutableCallRegular
): readonly VariableNames[] {
  const argVariableNames = getAllVariableNames(expression.arg)
  const funcBodyUnboundedVariableNamesExceptArg = getAllVariableNames(
    expression.func.body,
    { filter: 'unbound' }
  ).filter(x => x !== expression.func.arg.name)
  return argVariableNames.filter(x =>
    funcBodyUnboundedVariableNamesExceptArg.includes(x)
  )
}

export type ConflictingNamesToUnusedNames = {
  [key in VariableNames]?: VariableNames
}

export default function getConflictsToUnused(
  expression: ExecutableCallRegular
): ConflictingNamesToUnusedNames {
  const conflicts = conflictingVariableNames(expression)
  const allUsed = getAllVariableNames(expression)
  const available = alphaConvertTargetVariableNames.filter(
    x => !allUsed.includes(x)
  )
  return conflicts.reduce(
    (result, current, index) => ({
      ...result,
      [current]: available[index]
    }),
    {}
  )
}
