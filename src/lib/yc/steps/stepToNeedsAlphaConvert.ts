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

export function toNeedsAlphaConvert(
  x: VariableExpression,
  conflicts: VariableNames[],
  funcSide: boolean
): StepVariable<'needsAlphaConvert'>
export function toNeedsAlphaConvert(
  x: FunctionExpression,
  conflicts: VariableNames[],
  funcSide: boolean
): StepFunction<'needsAlphaConvert'>
export function toNeedsAlphaConvert(
  x: CallExpression,
  conflicts: VariableNames[],
  funcSide: boolean
): NonExecutableStepCall<'needsAlphaConvert'>
export function toNeedsAlphaConvert(
  x: VariableExpression | FunctionExpression,
  conflicts: VariableNames[],
  funcSide: boolean
): StepVariable<'needsAlphaConvert'> | StepFunction<'needsAlphaConvert'>
export function toNeedsAlphaConvert(
  x: Expression,
  conflicts: VariableNames[],
  funcSide: boolean
): StepChild<'needsAlphaConvert'>
export function toNeedsAlphaConvert(
  x: Expression,
  conflicts: VariableNames[],
  funcSide: boolean
): StepChild<'needsAlphaConvert'> {
  if (isVariable(x)) {
    if (funcSide && x.bound) {
      return { ...x, highlightType: 'active', badgeType: 'funcBound' }
    } else if (funcSide && !x.bound) {
      if (conflicts.includes(x.name)) {
        return {
          ...x,
          highlightType: 'conflict',
          badgeType: 'funcUnbound'
        }
      } else {
        return {
          ...x,
          highlightType: 'unboundHighlighted',
          badgeType: 'funcUnbound'
        }
      }
    } else {
      if (conflicts.includes(x.name)) {
        return { ...x, highlightType: 'conflict', badgeType: 'callArg' }
      } else {
        return { ...x, highlightType: 'active', badgeType: 'callArg' }
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
  e: ExecutableCall,
  conflicts: VariableNames[]
): ExecutableStepCall<'needsAlphaConvert'> => ({
  ...e,
  state: 'needsAlphaConvert',
  arg: toNeedsAlphaConvert(e.arg, conflicts, false),
  func: {
    ...e.func,
    arg: activeFuncArg(e.func.arg),
    body: toNeedsAlphaConvert(e.func.body, conflicts, true)
  }
})

export default stepToNeedsAlphaConvert
