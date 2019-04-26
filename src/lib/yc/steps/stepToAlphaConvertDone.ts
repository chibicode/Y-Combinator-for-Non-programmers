import { getConflicts } from 'src/lib/yc/getConflicts'
import { isFunction, isVariable } from 'src/lib/yc/expressionTypeGuards'
import { activeFuncArg } from 'src/lib/yc/steps/stepToShowFuncUnbound'
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
import { Conflicts } from 'src/lib/yc/getConflicts'

export function toAlphaConvertDone(
  e: VariableExpression,
  conflicts: Conflicts,
  funcSide: boolean
): StepVariable<'alphaConvertDone'>
export function toAlphaConvertDone(
  e: FunctionExpression,
  conflicts: Conflicts,
  funcSide: boolean
): StepFunction<'alphaConvertDone'>
export function toAlphaConvertDone(
  e: CallExpression,
  conflicts: Conflicts,
  funcSide: boolean
): NonExecutableStepCall<'alphaConvertDone'>
export function toAlphaConvertDone(
  e: VariableExpression | FunctionExpression,
  conflicts: Conflicts,
  funcSide: boolean
): StepVariable<'alphaConvertDone'> | StepFunction<'alphaConvertDone'>
export function toAlphaConvertDone(
  e: Expression,
  conflicts: Conflicts,
  funcSide: boolean
): StepChild<'alphaConvertDone'>
export function toAlphaConvertDone(
  e: Expression,
  conflicts: Conflicts,
  funcSide: boolean
): StepChild<'alphaConvertDone'> {
  if (isVariable(e)) {
    if (funcSide) {
      if (conflicts[e.name] && conflicts[e.name]![e.alphaConverCount]) {
        if (e.bound) {
          return {
            ...e,
            alphaConverCount: e.alphaConverCount + 1,
            highlightType: 'conflictResolvedHighlighted',
            topLeftBadgeType: 'none',
            bottomRightBadgeType: 'funcBound'
          }
        } else {
          return {
            ...e,
            alphaConverCount: e.alphaConverCount + 1,
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
  } else {
    return {
      ...e,
      state: 'default',
      arg: toAlphaConvertDone(e.arg, conflicts, funcSide),
      func: toAlphaConvertDone(e.func, conflicts, funcSide)
    }
  }
}

const stepToAlphaConvertDone = (
  e: ExecutableCall
): ExecutableStepCall<'alphaConvertDone'> => {
  const conflicts = getConflicts(e)
  return {
    ...e,
    state: 'alphaConvertDone',
    arg: toAlphaConvertDone(e.arg, conflicts, false),
    func: {
      ...e.func,
      arg: activeFuncArg(e.func.arg),
      body: toAlphaConvertDone(e.func.body, conflicts, true)
    }
  }
}

export default stepToAlphaConvertDone
