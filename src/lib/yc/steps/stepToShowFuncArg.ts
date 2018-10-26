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

export function toShowFuncArg(
  x: VariableExpression,
  funcSide: boolean
): StepVariable<'showFuncArg'>
export function toShowFuncArg(
  x: FunctionExpression,
  funcSide: boolean
): StepFunction<'showFuncArg'>
export function toShowFuncArg(
  x: CallExpression,
  funcSide: boolean
): NonExecutableStepCall<'showFuncArg'>
export function toShowFuncArg(
  x: VariableExpression | FunctionExpression,
  funcSide: boolean
): StepVariable<'showFuncArg'> | StepFunction<'showFuncArg'>
export function toShowFuncArg(
  x: Expression,
  funcSide: boolean
): StepChild<'showFuncArg'>
export function toShowFuncArg(
  x: Expression,
  funcSide: boolean
): StepChild<'showFuncArg'> {
  if (isVariable(x)) {
    if (funcSide && x.bound) {
      return { ...x, highlightType: 'active', badgeType: 'funcBound' }
    } else {
      return { ...x, highlightType: 'active', badgeType: 'none' }
    }
  } else if (isFunction(x)) {
    return {
      ...x,
      arg: toShowFuncArg(x.arg, funcSide),
      body: toShowFuncArg(x.body, funcSide)
    }
  } else {
    return {
      ...x,
      state: 'default',
      arg: toShowFuncArg(x.arg, funcSide),
      func: toShowFuncArg(x.func, funcSide)
    }
  }
}

const highlightFuncArg = (
  x: VariableExpression
): VariableWithState<'highlightFuncArg'> => ({
  ...x,
  highlightType: 'highlighted',
  badgeType: 'funcArg'
})

const stepToShowFuncArg = (
  e: ExecutableCall
): ExecutableStepCall<'showFuncArg'> => ({
  ...e,
  state: 'showFuncArg',
  arg: toShowFuncArg(e.arg, false),
  func: {
    ...e.func,
    arg: highlightFuncArg(e.func.arg),
    body: toShowFuncArg(e.func.body, true)
  }
})

export default stepToShowFuncArg
