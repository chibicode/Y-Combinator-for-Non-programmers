import difference from 'lodash/difference'
import intersection from 'lodash/intersection'
import { ExecutableCall } from 'src/types/yc/ExpressionTypes'
import uniq from 'lodash/uniq'
import { isCall, isVariable } from 'src/lib/yc/expressionTypeGuards'
import { Expression } from 'src/types/yc/ExpressionTypes'
import { VariableNames } from 'src/types/yc/VariableNames'

interface GetAllVariableNamesOptions {
  filter?: 'unbound'
}

function encodeVariableNameAndAlphaConvertCount(
  name: VariableNames,
  alphaConvertCount: number
) {
  return `${name},${alphaConvertCount}`
}

function decodeVariableNameAndAlphaConvertCount(
  encoded: string
): [VariableNames, number] {
  return [
    encoded.split(',')[0] as VariableNames,
    parseInt(encoded.split(',')[1])
  ]
}

function getAllVariableNamesEncodedWithDuplicates(
  expression: Expression,
  { filter }: GetAllVariableNamesOptions
): ReadonlyArray<string> {
  if (isVariable(expression)) {
    if ((filter === 'unbound' && !expression.bound) || !filter) {
      return [
        encodeVariableNameAndAlphaConvertCount(
          expression.name,
          expression.alphaConvertCount
        )
      ]
    } else {
      return []
    }
  } else if (isCall(expression)) {
    return getAllVariableNamesEncoded(expression.arg, { filter }).concat(
      getAllVariableNamesEncoded(expression.func, { filter })
    )
  } else {
    return getAllVariableNamesEncoded(expression.arg, { filter }).concat(
      getAllVariableNamesEncoded(expression.body, { filter })
    )
  }
}

function getAllVariableNamesEncoded(
  expression: Expression,
  opts: GetAllVariableNamesOptions = {}
): ReadonlyArray<string> {
  return uniq(getAllVariableNamesEncodedWithDuplicates(expression, opts))
}

function conflictingVariableNamesEncoded(
  expression: ExecutableCall
): ReadonlyArray<string> {
  if (isShorthandFunction(expression.func)) {
    return []
  } else {
    const argVariableNames = getAllVariableNamesEncoded(expression.arg)
    const funcBodyUnboundedVariableNamesExceptArg = difference(
      getAllVariableNamesEncoded(expression.func.body, { filter: 'unbound' }),
      [expression.func.arg.name]
    )
    return intersection(
      argVariableNames,
      funcBodyUnboundedVariableNamesExceptArg
    )
  }
}

export type VariableNamesToNumbersObj = Partial<
  Record<VariableNames, Record<number, true>>
>

function reduceHelper(arr: ReadonlyArray<string>) {
  return arr.reduce(
    (
      accumulator: Partial<Record<VariableNames, Record<number, true>>>,
      currentValue
    ) => {
      const [
        variableName,
        alphaConvertCount
      ] = decodeVariableNameAndAlphaConvertCount(currentValue)
      const newValue: Record<number, true> = {
        ...(accumulator[variableName] || {}),
        [alphaConvertCount]: true
      }
      return {
        ...accumulator,
        [variableName]: newValue
      }
    },
    {}
  )
}

export function getConflicts(
  expression: ExecutableCall
): VariableNamesToNumbersObj {
  return reduceHelper(conflictingVariableNamesEncoded(expression))
}

export function getAllVariables(
  expression: Expression
): VariableNamesToNumbersObj {
  return reduceHelper(getAllVariableNamesEncoded(expression))
}
