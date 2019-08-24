import {
  isFunction,
  isCall,
  isVariable,
  isConditional
} from 'src/lib/expressionTypeGuards'
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

export function toAlphaConvertCallArg(
  e: VariableExpression,
  conflicts: ConflictingNamesToUnusedNames,
  argSide: boolean
): StepVariable<'alphaConvertDone'>
export function toAlphaConvertCallArg(
  e: FunctionExpression,
  conflicts: ConflictingNamesToUnusedNames,
  argSide: boolean
): StepFunction<'alphaConvertDone'>
export function toAlphaConvertCallArg(
  e: ConditionalExpression,
  conflicts: ConflictingNamesToUnusedNames,
  argSide: boolean
): StepConditional<'alphaConvertDone'>
export function toAlphaConvertCallArg(
  e: CallExpression,
  conflicts: ConflictingNamesToUnusedNames,
  argSide: boolean
): NonExecutableStepCall<'alphaConvertDone'>
export function toAlphaConvertCallArg(
  e: VariableExpression | FunctionExpression,
  conflicts: ConflictingNamesToUnusedNames,
  argSide: boolean
): StepVariable<'alphaConvertDone'> | StepFunction<'alphaConvertDone'>
export function toAlphaConvertCallArg(
  e: Expression,
  conflicts: ConflictingNamesToUnusedNames,
  argSide: boolean
): StepChild<'alphaConvertDone'>
export function toAlphaConvertCallArg(
  e: Expression,
  conflicts: ConflictingNamesToUnusedNames,
  argSide: boolean
): StepChild<'alphaConvertDone'> {
  if (isVariable(e)) {
    if (argSide) {
      const conflictsResult = conflicts[e.name]
      if (conflictsResult !== undefined) {
        return {
          ...e,
          name: conflictsResult,
          highlightType: 'conflictResolvedHighlighted',
          topLeftBadgeType: 'conflictResolved',
          bottomRightBadgeType: 'callArg'
        }
      } else {
        return {
          ...e,
          highlightType: 'active',
          topLeftBadgeType: 'none',
          bottomRightBadgeType: 'callArg'
        }
      }
    } else if (e.bound) {
      return {
        ...e,
        highlightType: 'active',
        topLeftBadgeType: 'none',
        bottomRightBadgeType: 'funcBound'
      }
    } else {
      return {
        ...e,
        highlightType: 'active',
        topLeftBadgeType: 'none',
        bottomRightBadgeType: 'funcUnbound'
      }
    }
  } else if (isFunction(e)) {
    return {
      ...e,
      arg: toAlphaConvertCallArg(e.arg, conflicts, argSide),
      body: toAlphaConvertCallArg(e.body, conflicts, argSide)
    }
  } else if (isCall(e)) {
    return {
      ...e,
      state: 'default',
      arg: toAlphaConvertCallArg(e.arg, conflicts, argSide),
      func: toAlphaConvertCallArg(e.func, conflicts, argSide)
    }
  } else if (isConditional(e)) {
    return {
      ...e,
      state: 'default',
      condition: toAlphaConvertCallArg(e.condition, conflicts, argSide),
      trueCase: toAlphaConvertCallArg(e.trueCase, conflicts, argSide),
      falseCase: toAlphaConvertCallArg(e.falseCase, conflicts, argSide)
    }
  } else {
    throw new Error()
  }
}

const stepToAlphaConvertCallArg = (
  e: ExecutableCallRegular
): ExecutableStepCallRegular<'alphaConvertDone'> => {
  const conflictsToUnused = getConflictsToUnused(e)
  return {
    ...e,
    state: 'alphaConvertDone',
    arg: toAlphaConvertCallArg(e.arg, conflictsToUnused, true),
    func: {
      ...e.func,
      arg: activeFuncArg(e.func.arg),
      body: toAlphaConvertCallArg(e.func.body, conflictsToUnused, false)
    }
  }
}

export default stepToAlphaConvertCallArg
