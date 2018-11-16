import difference from 'lodash/difference'
import uniq from 'lodash/uniq'
import zipObject from 'lodash/zipObject'
import conflictingVariableNames from 'src/lib/yc/conflictingVariableNames'
import { isFunction, isVariable } from 'src/lib/yc/expressionTypeGuards'
import getAllVariableNames from 'src/lib/yc/getAllVariableNames'
import { activeFuncArg } from 'src/lib/yc/steps/stepToShowFuncUnbound'
import variableNamesArray from 'src/lib/yc/variableNamesArray'
import {
  CallExpression,
  ExecutableCall,
  ExecutableStepCall,
  Expression,
  FunctionExpression,
  NonExecutableStepCall,
  StepChild,
  StepFunction,
  StepVariable,
  VariableExpression
} from 'src/types/yc/ExpressionTypes'
import { VariableNames } from 'src/types/yc/VariableNames'

export function toAlphaConvertDone(
  e: VariableExpression,
  mapping: { [index: string]: VariableNames },
  funcSide: boolean
): StepVariable<'alphaConvertDone'>
export function toAlphaConvertDone(
  e: FunctionExpression,
  mapping: { [index: string]: VariableNames },
  funcSide: boolean
): StepFunction<'alphaConvertDone'>
export function toAlphaConvertDone(
  e: CallExpression,
  mapping: { [index: string]: VariableNames },
  funcSide: boolean
): NonExecutableStepCall<'alphaConvertDone'>
export function toAlphaConvertDone(
  e: VariableExpression | FunctionExpression,
  mapping: { [index: string]: VariableNames },
  funcSide: boolean
): StepVariable<'alphaConvertDone'> | StepFunction<'alphaConvertDone'>
export function toAlphaConvertDone(
  e: Expression,
  mapping: { [index: string]: VariableNames },
  funcSide: boolean
): StepChild<'alphaConvertDone'>
export function toAlphaConvertDone(
  e: Expression,
  mapping: { [index: string]: VariableNames },
  funcSide: boolean
): StepChild<'alphaConvertDone'> {
  if (isVariable(e)) {
    if (funcSide) {
      if (mapping[e.name]) {
        if (e.bound) {
          return {
            ...e,
            name: mapping[e.name],
            highlightType: 'conflictResolvedBound',
            badgeType: 'funcBound'
          }
        } else {
          return {
            ...e,
            name: mapping[e.name],
            highlightType: 'conflictResolvedFuncUnbound',
            badgeType: 'funcUnbound'
          }
        }
      } else if (funcSide && !e.bound) {
        return {
          ...e,
          highlightType: 'active',
          badgeType: 'funcUnbound'
        }
      } else {
        return {
          ...e,
          highlightType: 'active',
          badgeType: 'funcBound'
        }
      }
    } else {
      if (mapping[e.name]) {
        return {
          ...e,
          highlightType: 'conflictResolvedCallArg',
          badgeType: 'callArg'
        }
      } else {
        return {
          ...e,
          highlightType: 'active',
          badgeType: 'callArg'
        }
      }
    }
  } else if (isFunction(e)) {
    return {
      ...e,
      arg: toAlphaConvertDone(e.arg, mapping, funcSide),
      body: toAlphaConvertDone(e.body, mapping, funcSide)
    }
  } else {
    return {
      ...e,
      state: 'default',
      arg: toAlphaConvertDone(e.arg, mapping, funcSide),
      func: toAlphaConvertDone(e.func, mapping, funcSide)
    }
  }
}

const stepToAlphaConvertDone = (
  e: ExecutableCall
): ExecutableStepCall<'alphaConvertDone'> => {
  const sortedConflicts = conflictingVariableNames(e).sort()
  if (sortedConflicts.length === 0) {
    throw new Error('There must be a conflict if this function was called')
  }
  const allUsedVariableNames = uniq(getAllVariableNames(e))
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
    ...e,
    state: 'alphaConvertDone',
    arg: toAlphaConvertDone(e.arg, mapping, false),
    func: {
      ...e.func,
      arg: activeFuncArg(e.func.arg),
      body: toAlphaConvertDone(e.func.body, mapping, true)
    }
  }
}

export default stepToAlphaConvertDone
