import { conflictingVariableNamesObject } from 'src/lib/yc/conflictingVariableNames'
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
import { VariableNames } from 'src/types/yc/VariableNames'

export function toAlphaConvertDone(
  e: VariableExpression,
  conflictObj: Partial<Record<VariableNames, true>>,
  funcSide: boolean
): StepVariable<'alphaConvertDone'>
export function toAlphaConvertDone(
  e: FunctionExpression,
  conflictObj: Partial<Record<VariableNames, true>>,
  funcSide: boolean
): StepFunction<'alphaConvertDone'>
export function toAlphaConvertDone(
  e: CallExpression,
  conflictObj: Partial<Record<VariableNames, true>>,
  funcSide: boolean
): NonExecutableStepCall<'alphaConvertDone'>
export function toAlphaConvertDone(
  e: VariableExpression | FunctionExpression,
  conflictObj: Partial<Record<VariableNames, true>>,
  funcSide: boolean
): StepVariable<'alphaConvertDone'> | StepFunction<'alphaConvertDone'>
export function toAlphaConvertDone(
  e: Expression,
  conflictObj: Partial<Record<VariableNames, true>>,
  funcSide: boolean
): StepChild<'alphaConvertDone'>
export function toAlphaConvertDone(
  e: Expression,
  conflictObj: Partial<Record<VariableNames, true>>,
  funcSide: boolean
): StepChild<'alphaConvertDone'> {
  if (isVariable(e)) {
    if (funcSide) {
      if (conflictObj[e.name]) {
        if (e.bound) {
          return {
            ...e,
            alphaConverCount: e.alphaConverCount + 1,
            highlightType: 'highlighted',
            topLeftBadgeType: 'conflictResolved',
            bottomRightBadgeType: 'funcBound'
          }
        } else {
          return {
            ...e,
            alphaConverCount: e.alphaConverCount + 1,
            highlightType: 'highlighted',
            topLeftBadgeType: 'conflictResolved',
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
      if (conflictObj[e.name]) {
        return {
          ...e,
          highlightType: 'highlighted',
          topLeftBadgeType: 'none',
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
      arg: toAlphaConvertDone(e.arg, conflictObj, funcSide),
      body: toAlphaConvertDone(e.body, conflictObj, funcSide)
    }
  } else {
    return {
      ...e,
      state: 'default',
      arg: toAlphaConvertDone(e.arg, conflictObj, funcSide),
      func: toAlphaConvertDone(e.func, conflictObj, funcSide)
    }
  }
}

const stepToAlphaConvertDone = (
  e: ExecutableCall
): ExecutableStepCall<'alphaConvertDone'> => {
  const conflictObj = conflictingVariableNamesObject(e)
  return {
    ...e,
    state: 'alphaConvertDone',
    arg: toAlphaConvertDone(e.arg, conflictObj, false),
    func: {
      ...e.func,
      arg: activeFuncArg(e.func.arg),
      body: toAlphaConvertDone(e.func.body, conflictObj, true)
    }
  }
}

export default stepToAlphaConvertDone
