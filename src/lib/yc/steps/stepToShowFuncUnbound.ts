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
  VariableExpression,
  VariableWithState
} from 'src/types/yc/ExpressionTypes'

export function toShowFuncUnbound(
  x: VariableExpression,
  funcSide: boolean
): StepVariable<'showFuncUnbound'>
export function toShowFuncUnbound(
  x: FunctionExpression,
  funcSide: boolean
): StepFunction<'showFuncUnbound'>
export function toShowFuncUnbound(
  x: CallExpression,
  funcSide: boolean
): NonExecutableStepCall<'showFuncUnbound'>
export function toShowFuncUnbound(
  x: VariableExpression | FunctionExpression,
  funcSide: boolean
): StepVariable<'showFuncUnbound'> | StepFunction<'showFuncUnbound'>
export function toShowFuncUnbound(
  x: Expression,
  funcSide: boolean
): StepChild<'showFuncUnbound'>
export function toShowFuncUnbound(
  x: Expression,
  funcSide: boolean
): StepChild<'showFuncUnbound'> {
  if (isVariable(x)) {
    if (funcSide && x.bound) {
      return { ...x, highlightType: 'active', badgeType: 'funcBound' }
    } else if (funcSide && !x.bound) {
      return {
        ...x,
        highlightType: 'unboundHighlighted',
        badgeType: 'funcUnbound'
      }
    } else {
      return { ...x, highlightType: 'active', badgeType: 'none' }
    }
  } else if (isFunction(x)) {
    return {
      ...x,
      arg: toShowFuncUnbound(x.arg, funcSide),
      body: toShowFuncUnbound(x.body, funcSide)
    }
  } else {
    return {
      ...x,
      state: 'default',
      arg: toShowFuncUnbound(x.arg, funcSide),
      func: toShowFuncUnbound(x.func, funcSide)
    }
  }
}

export const activeFuncArg = (
  x: VariableExpression
): VariableWithState<'activeFuncArg'> => ({
  ...x,
  highlightType: 'active',
  badgeType: 'funcArg'
})

const stepToShowFuncUnbound = (
  e: ExecutableCall
): ExecutableStepCall<'showFuncUnbound'> => ({
  ...e,
  state: 'showFuncUnbound',
  arg: toShowFuncUnbound(e.arg, false),
  func: {
    ...e.func,
    arg: activeFuncArg(e.func.arg),
    body: toShowFuncUnbound(e.func.body, true)
  }
})

export default stepToShowFuncUnbound
