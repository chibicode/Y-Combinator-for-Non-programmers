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
  e: VariableExpression,
  funcSide: boolean
): StepVariable<'showFuncUnbound'>
export function toShowFuncUnbound(
  e: FunctionExpression,
  funcSide: boolean
): StepFunction<'showFuncUnbound'>
export function toShowFuncUnbound(
  e: CallExpression,
  funcSide: boolean
): NonExecutableStepCall<'showFuncUnbound'>
export function toShowFuncUnbound(
  e: VariableExpression | FunctionExpression,
  funcSide: boolean
): StepVariable<'showFuncUnbound'> | StepFunction<'showFuncUnbound'>
export function toShowFuncUnbound(
  e: Expression,
  funcSide: boolean
): StepChild<'showFuncUnbound'>
export function toShowFuncUnbound(
  e: Expression,
  funcSide: boolean
): StepChild<'showFuncUnbound'> {
  if (isVariable(e)) {
    if (funcSide && e.bound) {
      return {
        ...e,
        highlightType: 'active',
        topLeftBadgeType: 'none',
        bottomRightBadgeType: 'funcBound'
      }
    } else if (funcSide && !e.bound) {
      return {
        ...e,
        highlightType: 'highlighted',
        topLeftBadgeType: 'none',
        bottomRightBadgeType: 'funcUnbound'
      }
    } else {
      return {
        ...e,
        highlightType: 'active',
        topLeftBadgeType: 'none',
        bottomRightBadgeType: 'none'
      }
    }
  } else if (isFunction(e)) {
    return {
      ...e,
      arg: toShowFuncUnbound(e.arg, funcSide),
      body: toShowFuncUnbound(e.body, funcSide)
    }
  } else {
    return {
      ...e,
      state: 'default',
      arg: toShowFuncUnbound(e.arg, funcSide),
      func: toShowFuncUnbound(e.func, funcSide)
    }
  }
}

export const activeFuncArg = (
  e: VariableExpression
): VariableWithState<'activeFuncArg'> => ({
  ...e,
  highlightType: 'active',
  topLeftBadgeType: 'none',
  bottomRightBadgeType: 'funcArg'
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
