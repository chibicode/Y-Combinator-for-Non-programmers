import {
  isFunction,
  isVariable,
  isShorthandFunction
} from 'src/lib/yc/expressionTypeGuards'
import {
  CallExpression,
  ExecutableCall,
  ExecutableStepCall,
  ShorthandFunctionExpression,
  StepShorthandFunction,
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
  e: VariableExpression,
  funcSide: boolean
): StepVariable<'showFuncArg'>
export function toShowFuncArg(
  e: FunctionExpression,
  funcSide: boolean
): StepFunction<'showFuncArg'>
export function toShowFuncArg(
  e: ShorthandFunctionExpression,
  funcSide: boolean
): StepShorthandFunction<'showFuncArg'>
export function toShowFuncArg(
  e: CallExpression,
  funcSide: boolean
): NonExecutableStepCall<'showFuncArg'>
export function toShowFuncArg(
  e: VariableExpression | FunctionExpression,
  funcSide: boolean
): StepVariable<'showFuncArg'> | StepFunction<'showFuncArg'>
export function toShowFuncArg(
  e: Expression,
  funcSide: boolean
): StepChild<'showFuncArg'>
export function toShowFuncArg(
  e: Expression,
  funcSide: boolean
): StepChild<'showFuncArg'> {
  if (isVariable(e)) {
    if (funcSide) {
      return {
        ...e,
        highlightType: 'active',
        topLeftBadgeType: 'none',
        bottomRightBadgeType: 'none'
      }
    } else {
      return {
        ...e,
        highlightType: 'active',
        topLeftBadgeType: 'none',
        bottomRightBadgeType: 'callArg'
      }
    }
  } else if (isFunction(e)) {
    return {
      ...e,
      arg: toShowFuncArg(e.arg, funcSide),
      body: toShowFuncArg(e.body, funcSide)
    }
  } else if (isShorthandFunction(e)) {
    return {
      ...e,
      highlightType: 'default',
      args: e.args.map(arg => toShowFuncArg(arg, funcSide))
    }
  } else {
    return {
      ...e,
      state: 'default',
      arg: toShowFuncArg(e.arg, funcSide),
      func: toShowFuncArg(e.func, funcSide)
    }
  }
}

const highlightFuncArg = (
  e: VariableExpression
): VariableWithState<'highlightFuncArg'> => ({
  ...e,
  highlightType: 'highlighted',
  topLeftBadgeType: 'none',
  bottomRightBadgeType: 'funcArg'
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
