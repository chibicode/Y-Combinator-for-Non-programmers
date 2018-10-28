import { isFunction, isVariable } from 'src/lib/yc/expressionTypeGuards'
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

export function toShowFuncBound(
  e: VariableExpression,
  funcSide: boolean
): StepVariable<'showFuncBound'>
export function toShowFuncBound(
  e: FunctionExpression,
  funcSide: boolean
): StepFunction<'showFuncBound'>
export function toShowFuncBound(
  e: CallExpression,
  funcSide: boolean
): NonExecutableStepCall<'showFuncBound'>
export function toShowFuncBound(
  e: VariableExpression | FunctionExpression,
  funcSide: boolean
): StepVariable<'showFuncBound'> | StepFunction<'showFuncBound'>
export function toShowFuncBound(
  e: Expression,
  funcSide: boolean
): StepChild<'showFuncBound'>
export function toShowFuncBound(
  e: Expression,
  funcSide: boolean
): StepChild<'showFuncBound'> {
  if (isVariable(e)) {
    if (funcSide && e.bound) {
      return { ...e, highlightType: 'highlighted', badgeType: 'funcBound' }
    } else {
      return { ...e, highlightType: 'active', badgeType: 'none' }
    }
  } else if (isFunction(e)) {
    return {
      ...e,
      arg: toShowFuncBound(e.arg, funcSide),
      body: toShowFuncBound(e.body, funcSide)
    }
  } else {
    return {
      ...e,
      state: 'default',
      arg: toShowFuncBound(e.arg, funcSide),
      func: toShowFuncBound(e.func, funcSide)
    }
  }
}

const stepToShowFuncBound = (
  e: ExecutableCall
): ExecutableStepCall<'showFuncBound'> => ({
  ...e,
  state: 'showFuncBound',
  arg: toShowFuncBound(e.arg, false),
  func: toShowFuncBound(e.func, true)
})

export default stepToShowFuncBound
