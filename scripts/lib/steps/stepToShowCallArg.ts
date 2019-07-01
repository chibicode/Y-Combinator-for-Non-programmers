import {
  isFunction,
  isVariable,
  isCall,
  isConditional
} from 'src/lib/expressionTypeGuards'
import {
  CallExpression,
  ExecutableCallRegular,
  ExecutableStepCallRegular,
  Expression,
  FunctionExpression,
  NonExecutableStepCall,
  StepChild,
  StepConditional,
  ConditionalExpression,
  StepFunction,
  StepVariable,
  VariableExpression
} from 'src/types/ExpressionTypes'

export function toShowCallArg(
  e: VariableExpression,
  funcSide: boolean
): StepVariable<'showCallArg'>
export function toShowCallArg(
  e: FunctionExpression,
  funcSide: boolean
): StepFunction<'showCallArg'>
export function toShowCallArg(
  e: ConditionalExpression,
  funcSide: boolean
): StepConditional<'showCallArg'>
export function toShowCallArg(
  e: CallExpression,
  funcSide: boolean
): NonExecutableStepCall<'showCallArg'>
export function toShowCallArg(
  e: VariableExpression | FunctionExpression,
  funcSide: boolean
): StepVariable<'showCallArg'> | StepFunction<'showCallArg'>
export function toShowCallArg(
  e: Expression,
  funcSide: boolean
): StepChild<'showCallArg'>
export function toShowCallArg(
  e: Expression,
  funcSide: boolean
): StepChild<'showCallArg'> {
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
        highlightType: 'highlighted',
        topLeftBadgeType: 'none',
        bottomRightBadgeType: 'callArg'
      }
    }
  } else if (isFunction(e)) {
    return {
      ...e,
      arg: toShowCallArg(e.arg, funcSide),
      body: toShowCallArg(e.body, funcSide)
    }
  } else if (isCall(e)) {
    return {
      ...e,
      state: 'default',
      arg: toShowCallArg(e.arg, funcSide),
      func: toShowCallArg(e.func, funcSide)
    }
  } else if (isConditional(e)) {
    return {
      ...e,
      state: 'default',
      condition: toShowCallArg(e.condition, funcSide),
      trueCase: toShowCallArg(e.trueCase, funcSide),
      falseCase: toShowCallArg(e.falseCase, funcSide)
    }
  } else {
    throw new Error()
  }
}

const stepToShowCallArg = (
  e: ExecutableCallRegular
): ExecutableStepCallRegular<'showCallArg'> => ({
  ...e,
  state: 'showCallArg',
  arg: toShowCallArg(e.arg, false),
  func: {
    ...e.func,
    arg: toShowCallArg(e.func.arg, true),
    body: toShowCallArg(e.func.body, true)
  }
})

export default stepToShowCallArg
