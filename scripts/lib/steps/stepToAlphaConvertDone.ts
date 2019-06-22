import { isFunction, isCall, isVariable } from 'src/lib/expressionTypeGuards'
import { activeFuncArg } from 'scripts/lib/steps/stepToShowFuncUnbound'
import {
  CallExpression,
  ExecutableCallRegular,
  ExecutableStepCallRegular,
  Expression,
  FunctionExpression,
  NonExecutableStepCall,
  StepChild,
  StepFunction,
  StepConditional,
  StepVariable,
  VariableExpression,
  ConditionalExpression
} from 'src/types/ExpressionTypes'
import getConflictsToUnused, {
  ConflictingNamesToUnusedNames
} from 'scripts/lib/getConflictsToUnused'

export function toAlphaConvertDone(
  e: VariableExpression,
  conflicts: ConflictingNamesToUnusedNames,
  funcSide: boolean
): StepVariable<'alphaConvertDone'>
export function toAlphaConvertDone(
  e: FunctionExpression,
  conflicts: ConflictingNamesToUnusedNames,
  funcSide: boolean
): StepFunction<'alphaConvertDone'>
export function toAlphaConvertDone(
  e: ConditionalExpression,
  conflicts: ConflictingNamesToUnusedNames,
  funcSide: boolean
): StepConditional<'alphaConvertDone'>
export function toAlphaConvertDone(
  e: CallExpression,
  conflicts: ConflictingNamesToUnusedNames,
  funcSide: boolean
): NonExecutableStepCall<'alphaConvertDone'>
export function toAlphaConvertDone(
  e: VariableExpression | FunctionExpression,
  conflicts: ConflictingNamesToUnusedNames,
  funcSide: boolean
): StepVariable<'alphaConvertDone'> | StepFunction<'alphaConvertDone'>
export function toAlphaConvertDone(
  e: Expression,
  conflicts: ConflictingNamesToUnusedNames,
  funcSide: boolean
): StepChild<'alphaConvertDone'>
export function toAlphaConvertDone(
  e: Expression,
  conflicts: ConflictingNamesToUnusedNames,
  funcSide: boolean
): StepChild<'alphaConvertDone'> {
  if (isVariable(e)) {
    if (funcSide) {
      const conflictsResult = conflicts[e.name]
      if (conflictsResult !== undefined) {
        if (e.bound) {
          return {
            ...e,
            name: conflictsResult,
            highlightType: 'conflictResolvedHighlighted',
            topLeftBadgeType: 'none',
            bottomRightBadgeType: 'funcBound'
          }
        } else {
          return {
            ...e,
            name: conflictsResult,
            highlightType: 'conflictResolvedHighlighted',
            topLeftBadgeType: 'none',
            bottomRightBadgeType: 'funcUnbound'
          }
        }
      } else if (funcSide && !e.bound) {
        return {
          ...e,
          highlightType: 'active',
          topLeftBadgeType: 'none',
          bottomRightBadgeType: 'funcUnbound'
        }
      } else {
        return {
          ...e,
          highlightType: 'active',
          topLeftBadgeType: 'none',
          bottomRightBadgeType: 'funcBound'
        }
      }
    } else {
      return {
        ...e,
        highlightType: 'active',
        topLeftBadgeType: 'none',
        bottomRightBadgeType: 'callArg'
      }
    }
  } else if (isFunction(e)) {
    return {
      ...e,
      arg: toAlphaConvertDone(e.arg, conflicts, funcSide),
      body: toAlphaConvertDone(e.body, conflicts, funcSide)
    }
  } else if (isCall(e)) {
    return {
      ...e,
      state: 'default',
      arg: toAlphaConvertDone(e.arg, conflicts, funcSide),
      func: toAlphaConvertDone(e.func, conflicts, funcSide)
    }
  } else {
    return {
      ...e,
      state: 'default',
      condition: toAlphaConvertDone(e.condition, conflicts, funcSide),
      trueCase: toAlphaConvertDone(e.trueCase, conflicts, funcSide),
      falseCase: toAlphaConvertDone(e.falseCase, conflicts, funcSide)
    }
  }
}

const stepToAlphaConvertDone = (
  e: ExecutableCallRegular
): ExecutableStepCallRegular<'alphaConvertDone'> => {
  const conflictsToUnused = getConflictsToUnused(e)
  return {
    ...e,
    state: 'alphaConvertDone',
    arg: toAlphaConvertDone(e.arg, conflictsToUnused, false),
    func: {
      ...e.func,
      arg: activeFuncArg(e.func.arg),
      body: toAlphaConvertDone(e.func.body, conflictsToUnused, true)
    }
  }
}

export default stepToAlphaConvertDone
