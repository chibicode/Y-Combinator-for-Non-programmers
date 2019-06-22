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

export default function toDefault(
  e: VariableExpression
): StepVariable<'default'>
export default function toDefault(
  e: FunctionExpression
): StepFunction<'default'>
export default function toDefault(
  e: CallExpression
): NonExecutableStepCall<'default'>
export default function toDefault(
  e: VariableExpression | FunctionExpression
): StepVariable<'default'> | StepFunction<'default'>
export default function toDefault(e: Expression): StepChild<'default'>
export default function toDefault(e: Expression): StepChild<'default'> {
  if (isVariable(e)) {
    return {
      ...e,
      highlightType: 'default',
      topLeftBadgeType: 'none',
      bottomRightBadgeType: 'none'
    }
  } else if (isFunction(e)) {
    return {
      ...e,
      arg: toDefault(e.arg),
      body: toDefault(e.body)
    }
  } else if (isCall(e)) {
    return {
      ...e,
      state: 'default',
      arg: toDefault(e.arg),
      func: toDefault(e.func)
    }
  } else {
    return {
      ...e,
      state: 'default',
      condition: toDefault(e.condition),
      trueCase: toDefault(e.trueCase),
      falseCase: toDefault(e.falseCase)
    }
  }
}
