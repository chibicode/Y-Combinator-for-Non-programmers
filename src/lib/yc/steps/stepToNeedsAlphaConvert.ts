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
import { VariableNamesToNumbersObj } from 'src/lib/yc/variablesHelper'

export function toNeedsAlphaConvert(
  x: VariableExpression,
  conflicts: VariableNamesToNumbersObj,
  funcSide: boolean
): StepVariable<'needsAlphaConvert'>
export function toNeedsAlphaConvert(
  x: FunctionExpression,
  conflicts: VariableNamesToNumbersObj,
  funcSide: boolean
): StepFunction<'needsAlphaConvert'>
export function toNeedsAlphaConvert(
  x: CallExpression,
  conflicts: VariableNamesToNumbersObj,
  funcSide: boolean
): NonExecutableStepCall<'needsAlphaConvert'>
export function toNeedsAlphaConvert(
  x: VariableExpression | FunctionExpression,
  conflicts: VariableNamesToNumbersObj,
  funcSide: boolean
): StepVariable<'needsAlphaConvert'> | StepFunction<'needsAlphaConvert'>
export function toNeedsAlphaConvert(
  x: Expression,
  conflicts: VariableNamesToNumbersObj,
  funcSide: boolean
): StepChild<'needsAlphaConvert'>
export function toNeedsAlphaConvert(
  x: Expression,
  conflicts: VariableNamesToNumbersObj,
  funcSide: boolean
): StepChild<'needsAlphaConvert'> {
  if (isVariable(x)) {
    if (funcSide && x.bound) {
      return {
        ...x,
        highlightType: 'active',
        topLeftBadgeType: 'none',
        bottomRightBadgeType: 'funcBound'
      }
    } else if (funcSide && !x.bound) {
      if (conflicts[x.name] && conflicts[x.name]![x.alphaConvertCount]) {
        return {
          ...x,
          highlightType: 'highlighted',
          topLeftBadgeType: 'conflict',
          bottomRightBadgeType: 'funcUnbound'
        }
      } else {
        return {
          ...x,
          highlightType: 'active',
          topLeftBadgeType: 'none',
          bottomRightBadgeType: 'funcUnbound'
        }
      }
    } else {
      if (conflicts[x.name] && conflicts[x.name]![x.alphaConvertCount]) {
        return {
          ...x,
          highlightType: 'highlighted',
          topLeftBadgeType: 'conflict',
          bottomRightBadgeType: 'callArg'
        }
      } else {
        return {
          ...x,
          highlightType: 'active',
          topLeftBadgeType: 'none',
          bottomRightBadgeType: 'callArg'
        }
      }
    }
  } else if (isFunction(x)) {
    return {
      ...x,
      arg: toNeedsAlphaConvert(x.arg, conflicts, funcSide),
      body: toNeedsAlphaConvert(x.body, conflicts, funcSide)
    }
  } else {
    return {
      ...x,
      state: 'default',
      arg: toNeedsAlphaConvert(x.arg, conflicts, funcSide),
      func: toNeedsAlphaConvert(x.func, conflicts, funcSide)
    }
  }
}

const stepToNeedsAlphaConvert = (
  x: ExecutableCall,
  conflicts: VariableNamesToNumbersObj
): ExecutableStepCall<'needsAlphaConvert'> => ({
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
