import { isFunction, isVariable } from 'src/lib/yc/expressionTypeGuards'
import {
  CallExpression,
  Expression,
  FunctionExpression,
  NonExecutableStepCall,
  StepChild,
  StepFunction,
  StepVariable,
  VariableExpression
} from 'src/types/yc/ExpressionTypes'

export default function toDefault(
  e: VariableExpression
): StepVariable<'default'>
export default function toDefault(
  e: FunctionExpression
): StepFunction<'default'>
export default function toDefault(
  e: CallExpression
): NonExecutableStepCall<'default'>
// This is necessary - otherwise if you pass in VariableExpression | FunctionExpression
// it will think of it as Expression instead.
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
  } else {
    return {
      ...e,
      state: 'default',
      arg: toDefault(e.arg),
      func: toDefault(e.func)
    }
  }
}
