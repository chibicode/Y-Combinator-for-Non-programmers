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

export function toShowCallArg(
  x: VariableExpression,
  funcSide: boolean
): StepVariable<'showCallArg'>
export function toShowCallArg(
  x: FunctionExpression,
  funcSide: boolean
): StepFunction<'showCallArg'>
export function toShowCallArg(
  x: CallExpression,
  funcSide: boolean
): NonExecutableStepCall<'showCallArg'>
export function toShowCallArg(
  x: VariableExpression | FunctionExpression,
  funcSide: boolean
): StepVariable<'showCallArg'> | StepFunction<'showCallArg'>
export function toShowCallArg(
  x: Expression,
  funcSide: boolean
): StepChild<'showCallArg'>
export function toShowCallArg(
  x: Expression,
  funcSide: boolean
): StepChild<'showCallArg'> {
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
      return { ...x, highlightType: 'highlighted', badgeType: 'callArg' }
    }
  } else if (isFunction(x)) {
    return {
      ...x,
      arg: toShowCallArg(x.arg, funcSide),
      body: toShowCallArg(x.body, funcSide)
    }
  } else {
    return {
      ...x,
      state: 'default',
      arg: toShowCallArg(x.arg, funcSide),
      func: toShowCallArg(x.func, funcSide)
    }
  }
}

const stepToShowCallArg = (
  e: ExecutableCall
): ExecutableStepCall<'showCallArg'> => ({
  ...e,
  state: 'showCallArg',
  arg: toShowCallArg(e.arg, false),
  func: {
    ...e.func,
    arg: activeFuncArg(e.func.arg),
    body: toShowCallArg(e.func.body, true)
  }
})

export default stepToShowCallArg
