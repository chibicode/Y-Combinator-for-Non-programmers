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
  funcSide: boolean,
  highlight: boolean
): StepVariable<'showFuncUnbound'>
export function toShowFuncUnbound(
  e: FunctionExpression,
  funcSide: boolean,
  highlight: boolean
): StepFunction<'showFuncUnbound'>
export function toShowFuncUnbound(
  e: CallExpression,
  funcSide: boolean,
  highlight: boolean
): NonExecutableStepCall<'showFuncUnbound'>
export function toShowFuncUnbound(
  e: VariableExpression | FunctionExpression,
  funcSide: boolean,
  highlight: boolean
): StepVariable<'showFuncUnbound'> | StepFunction<'showFuncUnbound'>
export function toShowFuncUnbound(
  e: Expression,
  funcSide: boolean,
  highlight: boolean
): StepChild<'showFuncUnbound'>
export function toShowFuncUnbound(
  e: Expression,
  funcSide: boolean,
  highlight: boolean
): StepChild<'showFuncUnbound'> {
  if (isVariable(e)) {
    if (funcSide && e.bound) {
      return {
        ...e,
        highlightType: 'active',
        topBadgeType: 'none',
        bottomRightBadgeType: 'funcBound'
      }
    } else if (funcSide && !e.bound) {
      if (highlight) {
        return {
          ...e,
          highlightType: 'highlighted',
          topBadgeType: 'none',
          bottomRightBadgeType: 'funcUnbound'
        }
      } else {
        return {
          ...e,
          highlightType: 'active',
          topBadgeType: 'none',
          bottomRightBadgeType: 'funcUnbound'
        }
      }
    } else {
      return {
        ...e,
        highlightType: 'active',
        topBadgeType: 'none',
        bottomRightBadgeType: 'callArg'
      }
    }
  } else if (isFunction(e)) {
    return {
      ...e,
      arg: toShowFuncUnbound(e.arg, funcSide, highlight),
      body: toShowFuncUnbound(e.body, funcSide, highlight)
    }
  } else {
    return {
      ...e,
      state: 'default',
      arg: toShowFuncUnbound(e.arg, funcSide, highlight),
      func: toShowFuncUnbound(e.func, funcSide, highlight)
    }
  }
}

export const activeFuncArg = (
  e: VariableExpression
): VariableWithState<'activeFuncArg'> => ({
  ...e,
  highlightType: 'active',
  topBadgeType: 'none',
  bottomRightBadgeType: 'funcArg'
})

const stepToShowFuncUnbound = (
  e: ExecutableCall,
  highlight: boolean
): ExecutableStepCall<'showFuncUnbound'> => ({
  ...e,
  state: 'showFuncUnbound',
  arg: toShowFuncUnbound(e.arg, false, highlight),
  func: {
    ...e.func,
    arg: activeFuncArg(e.func.arg),
    body: toShowFuncUnbound(e.func.body, true, highlight)
  }
})

export default stepToShowFuncUnbound
