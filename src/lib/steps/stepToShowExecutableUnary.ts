import { ExecutableCallRegular } from 'src/types/ExpressionTypes'
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

function toShowExecutableUnary(
  e: VariableExpression
): StepVariable<'showExecutableUnary'>
function toShowExecutableUnary(
  e: FunctionExpression
): StepFunction<'showExecutableUnary'>
function toShowExecutableUnary(
  e: CallExpression
): NonExecutableStepCall<'showExecutableUnary'>
function toShowExecutableUnary(
  e: VariableExpression | FunctionExpression
): StepVariable<'showExecutableUnary'> | StepFunction<'showExecutableUnary'>
function toShowExecutableUnary(e: Expression): StepChild<'showExecutableUnary'>
function toShowExecutableUnary(
  e: Expression
): StepChild<'showExecutableUnary'> {
  if (isVariable(e)) {
    if (e.shorthandUnary && e.shorthandNumber !== undefined) {
      return {
        ...e,
        highlightType: 'highlighted',
        topLeftBadgeType: 'none',
        bottomRightBadgeType: 'none'
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
      arg: toShowExecutableUnary(e.arg),
      body: toShowExecutableUnary(e.body)
    }
  } else if (isCall(e)) {
    return {
      ...e,
      state: 'default',
      arg: toShowExecutableUnary(e.arg),
      func: toShowExecutableUnary(e.func)
    }
  } else {
    return {
      ...e,
      state: 'default',
      condition: toShowExecutableUnary(e.condition),
      trueCase: toShowExecutableUnary(e.trueCase),
      falseCase: toShowExecutableUnary(e.falseCase)
    }
  }
}

export default function stepToShowExecutableUnary(
  e: ExecutableCallRegular
): StepChild<'showExecutableUnary'> {
  return toShowExecutableUnary(e.func.body)
}
