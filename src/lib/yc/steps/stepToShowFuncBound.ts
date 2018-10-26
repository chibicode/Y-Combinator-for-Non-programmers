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
  x: VariableExpression,
  funcSide: boolean
): StepVariable<'showFuncBound'>
export function toShowFuncBound(
  x: FunctionExpression,
  funcSide: boolean
): StepFunction<'showFuncBound'>
export function toShowFuncBound(
  x: CallExpression,
  funcSide: boolean
): NonExecutableStepCall<'showFuncBound'>
export function toShowFuncBound(
  x: VariableExpression | FunctionExpression,
  funcSide: boolean
): StepVariable<'showFuncBound'> | StepFunction<'showFuncBound'>
export function toShowFuncBound(
  x: Expression,
  funcSide: boolean
): StepChild<'showFuncBound'>
export function toShowFuncBound(
  x: Expression,
  funcSide: boolean
): StepChild<'showFuncBound'> {
  if (isVariable(x)) {
    if (funcSide && x.bound) {
      return { ...x, highlightType: 'highlighted', badgeType: 'funcBound' }
    } else {
      return { ...x, highlightType: 'active', badgeType: 'none' }
    }
  } else if (isFunction(x)) {
    return {
      ...x,
      arg: toShowFuncBound(x.arg, funcSide),
      body: toShowFuncBound(x.body, funcSide)
    }
  } else {
    return {
      ...x,
      state: 'default',
      arg: toShowFuncBound(x.arg, funcSide),
      func: toShowFuncBound(x.func, funcSide)
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
