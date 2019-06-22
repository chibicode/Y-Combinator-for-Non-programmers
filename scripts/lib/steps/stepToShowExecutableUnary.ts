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

export default function stepToShowExecutableUnary(
  e: VariableExpression
): StepVariable<'showExecutableUnary'>
export default function stepToShowExecutableUnary(
  e: FunctionExpression
): StepFunction<'showExecutableUnary'>
export default function stepToShowExecutableUnary(
  e: CallExpression
): NonExecutableStepCall<'showExecutableUnary'>
export default function stepToShowExecutableUnary(
  e: VariableExpression | FunctionExpression
): StepVariable<'showExecutableUnary'> | StepFunction<'showExecutableUnary'>
export default function stepToShowExecutableUnary(
  e: Expression
): StepChild<'showExecutableUnary'>
export default function stepToShowExecutableUnary(
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
      arg: stepToShowExecutableUnary(e.arg),
      body: stepToShowExecutableUnary(e.body)
    }
  } else if (isCall(e)) {
    return {
      ...e,
      state: 'default',
      arg: stepToShowExecutableUnary(e.arg),
      func: stepToShowExecutableUnary(e.func)
    }
  } else {
    return {
      ...e,
      state: 'default',
      condition: stepToShowExecutableUnary(e.condition),
      trueCase: stepToShowExecutableUnary(e.trueCase),
      falseCase: stepToShowExecutableUnary(e.falseCase)
    }
  }
}
