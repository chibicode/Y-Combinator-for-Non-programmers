import { isFunction, isVariable, isCall } from 'src/lib/expressionTypeGuards'
import { activeFuncArg } from 'scripts/lib/steps/stepToShowFuncUnbound'
import {
  CallExpression,
  ExecutableCallRegular,
  ExecutableStepCallRegular,
  Expression,
  FunctionExpression,
  StepConditional,
  ConditionalExpression,
  NonExecutableStepCall,
  StepChild,
  StepFunction,
  StepVariable,
  VariableExpression
} from 'src/types/ExpressionTypes'
import { ConflictingNamesToUnusedNames } from 'scripts/lib/getConflictsToUnused'

export function toNeedsAlphaConvert(
  e: VariableExpression,
  conflicts: ConflictingNamesToUnusedNames,
  funcSide: boolean
): StepVariable<'needsAlphaConvert'>
export function toNeedsAlphaConvert(
  e: FunctionExpression,
  conflicts: ConflictingNamesToUnusedNames,
  funcSide: boolean
): StepFunction<'needsAlphaConvert'>
export function toNeedsAlphaConvert(
  e: ConditionalExpression,
  conflicts: ConflictingNamesToUnusedNames,
  funcSide: boolean
): StepConditional<'needsAlphaConvert'>
export function toNeedsAlphaConvert(
  e: CallExpression,
  conflicts: ConflictingNamesToUnusedNames,
  funcSide: boolean
): NonExecutableStepCall<'needsAlphaConvert'>
export function toNeedsAlphaConvert(
  e: VariableExpression | FunctionExpression,
  conflicts: ConflictingNamesToUnusedNames,
  funcSide: boolean
): StepVariable<'needsAlphaConvert'> | StepFunction<'needsAlphaConvert'>
export function toNeedsAlphaConvert(
  e: Expression,
  conflicts: ConflictingNamesToUnusedNames,
  funcSide: boolean
): StepChild<'needsAlphaConvert'>
export function toNeedsAlphaConvert(
  e: Expression,
  conflicts: ConflictingNamesToUnusedNames,
  funcSide: boolean
): StepChild<'needsAlphaConvert'> {
  if (isVariable(e)) {
    if (funcSide && e.bound) {
      return {
        ...e,
        highlightType: 'active',
        topLeftBadgeType: 'none',
        bottomRightBadgeType: 'funcBound'
      }
    } else if (funcSide && !e.bound) {
      if (conflicts[e.name]) {
        return {
          ...e,
          highlightType: 'highlighted',
          topLeftBadgeType: 'conflict',
          bottomRightBadgeType: 'funcUnbound'
        }
      } else {
        return {
          ...e,
          highlightType: 'active',
          topLeftBadgeType: 'none',
          bottomRightBadgeType: 'funcUnbound'
        }
      }
    } else {
      if (conflicts[e.name]) {
        return {
          ...e,
          highlightType: 'highlighted',
          topLeftBadgeType: 'conflict',
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
    }
  } else if (isFunction(e)) {
    return {
      ...e,
      arg: toNeedsAlphaConvert(e.arg, conflicts, funcSide),
      body: toNeedsAlphaConvert(e.body, conflicts, funcSide)
    }
  } else if (isCall(e)) {
    return {
      ...e,
      state: 'default',
      arg: toNeedsAlphaConvert(e.arg, conflicts, funcSide),
      func: toNeedsAlphaConvert(e.func, conflicts, funcSide)
    }
  } else {
    return {
      ...e,
      state: 'default',
      condition: toNeedsAlphaConvert(e.condition, conflicts, funcSide),
      trueCase: toNeedsAlphaConvert(e.trueCase, conflicts, funcSide),
      falseCase: toNeedsAlphaConvert(e.falseCase, conflicts, funcSide)
    }
  }
}

const stepToNeedsAlphaConvert = (
  x: ExecutableCallRegular,
  conflicts: ConflictingNamesToUnusedNames
): ExecutableStepCallRegular<'needsAlphaConvert'> => ({
  ...x,
  state: 'needsAlphaConvert',
  arg: toNeedsAlphaConvert(x.arg, conflicts, false),
  func: {
    ...x.func,
    arg: activeFuncArg(x.func.arg),
    body: toNeedsAlphaConvert(x.func.body, conflicts, true)
  }
})

export default stepToNeedsAlphaConvert
