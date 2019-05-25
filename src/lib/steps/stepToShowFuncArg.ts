import { isFunction, isVariable, isCall } from 'src/lib/expressionTypeGuards'
import {
  CallExpression,
  ExecutableCallRegular,
  ExecutableStepCallRegular,
  Expression,
  FunctionExpression,
  StepConditional,
  ConditionalExpression,
  NonExecutableStepCall,
  StepChild,
  StepFunction,
  StepVariable,
  VariableExpression,
  VariableWithState
} from 'src/types/ExpressionTypes'

export function toShowFuncArg(
  e: VariableExpression,
  funcSide: boolean
): StepVariable<'showFuncArg'>
export function toShowFuncArg(
  e: FunctionExpression,
  funcSide: boolean
): StepFunction<'showFuncArg'>
export function toShowFuncArg(
  e: ConditionalExpression,
  funcSide: boolean
): StepConditional<'showFuncArg'>
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
  } else if (isCall(e)) {
    return {
      ...e,
      state: 'default',
      arg: toShowFuncArg(e.arg, funcSide),
      func: toShowFuncArg(e.func, funcSide)
    }
  } else {
    return {
      ...e,
      condition: toShowFuncArg(e.condition, funcSide),
      trueCase: toShowFuncArg(e.trueCase, funcSide),
      falseCase: toShowFuncArg(e.falseCase, funcSide)
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
  e: ExecutableCallRegular
): ExecutableStepCallRegular<'showFuncArg'> => ({
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
