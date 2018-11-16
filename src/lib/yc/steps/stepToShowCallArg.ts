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
  e: VariableExpression,
  funcSide: boolean,
  highlightCallArg: boolean
): StepVariable<'showCallArg'>
export function toShowCallArg(
  e: FunctionExpression,
  funcSide: boolean,
  highlightCallArg: boolean
): StepFunction<'showCallArg'>
export function toShowCallArg(
  e: CallExpression,
  funcSide: boolean,
  highlightCallArg: boolean
): NonExecutableStepCall<'showCallArg'>
export function toShowCallArg(
  e: VariableExpression | FunctionExpression,
  funcSide: boolean,
  highlightCallArg: boolean
): StepVariable<'showCallArg'> | StepFunction<'showCallArg'>
export function toShowCallArg(
  e: Expression,
  funcSide: boolean,
  highlightCallArg: boolean
): StepChild<'showCallArg'>
export function toShowCallArg(
  e: Expression,
  funcSide: boolean,
  highlightCallArg: boolean
): StepChild<'showCallArg'> {
  if (isVariable(e)) {
    if (funcSide && e.bound) {
      return { ...e, highlightType: 'active', badgeType: 'funcBound' }
    } else if (funcSide && !e.bound) {
      return {
        ...e,
        highlightType: 'active',
        badgeType: 'funcUnbound'
      }
    } else if (highlightCallArg) {
      return {
        ...e,
        highlightType: 'highlighted',
        badgeType: 'callArg'
      }
    } else {
      return {
        ...e,
        highlightType: 'active',
        badgeType: 'callArg'
      }
    }
  } else if (isFunction(e)) {
    return {
      ...e,
      arg: toShowCallArg(e.arg, funcSide, highlightCallArg),
      body: toShowCallArg(e.body, funcSide, highlightCallArg)
    }
  } else {
    return {
      ...e,
      state: 'default',
      arg: toShowCallArg(e.arg, funcSide, highlightCallArg),
      func: toShowCallArg(e.func, funcSide, highlightCallArg)
    }
  }
}

const stepToShowCallArg = (
  e: ExecutableCall,
  highlightCallArg: boolean
): ExecutableStepCall<'showCallArg'> => ({
  ...e,
  state: 'showCallArg',
  arg: toShowCallArg(e.arg, false, highlightCallArg),
  func: {
    ...e.func,
    arg: activeFuncArg(e.func.arg),
    body: toShowCallArg(e.func.body, true, highlightCallArg)
  }
})

export default stepToShowCallArg
