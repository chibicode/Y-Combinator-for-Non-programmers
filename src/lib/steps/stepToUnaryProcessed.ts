import { isFunction, isVariable, isCall } from 'src/lib/expressionTypeGuards'
import {
  CallExpression,
  Expression,
  FunctionExpression,
  NonExecutableStepCall,
  StepChild,
  StepFunction,
  StepVariable,
  VariableExpression
} from 'src/types/ExpressionTypes'

function toUnaryProcessed(e: VariableExpression): StepVariable<'default'>
function toUnaryProcessed(e: FunctionExpression): StepFunction<'default'>
function toUnaryProcessed(e: CallExpression): NonExecutableStepCall<'default'>
function toUnaryProcessed(
  e: VariableExpression | FunctionExpression
): StepVariable<'default'> | StepFunction<'default'>
function toUnaryProcessed(e: Expression): StepChild<'default'>
function toUnaryProcessed(e: Expression): StepChild<'default'> {
  if (isVariable(e)) {
    if (e.shorthandUnary && e.shorthandNumber !== undefined) {
      return {
        ...e,
        shorthandNumber: e.shorthandNumber > 0 ? e.shorthandNumber - 1 : 0,
        highlightType: 'default',
        topLeftBadgeType: 'none',
        bottomRightBadgeType: 'none',
        shorthandUnary: undefined
      }
    } else {
      return {
        ...e,
        highlightType: 'default',
        topLeftBadgeType: 'none',
        bottomRightBadgeType: 'none'
      }
    }
  } else if (isFunction(e)) {
    return {
      ...e,
      arg: toUnaryProcessed(e.arg),
      body: toUnaryProcessed(e.body)
    }
  } else if (isCall(e)) {
    return {
      ...e,
      state: 'default',
      arg: toUnaryProcessed(e.arg),
      func: toUnaryProcessed(e.func)
    }
  } else {
    return {
      ...e,
      state: 'default',
      condition: toUnaryProcessed(e.condition),
      trueCase: toUnaryProcessed(e.trueCase),
      falseCase: toUnaryProcessed(e.falseCase)
    }
  }
}

export default function stepToUnaryProcessed(
  e: Expression
): StepChild<'default'> {
  return toUnaryProcessed(e)
}
