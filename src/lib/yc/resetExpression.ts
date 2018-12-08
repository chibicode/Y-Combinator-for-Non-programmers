import { isCall, isVariable } from 'src/lib/yc/expressionTypeGuards'
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

export default function resetExpression(
  expression: VariableExpression
): StepVariable<'default'>
export default function resetExpression(
  expression: FunctionExpression
): StepFunction<'default'>
export default function resetExpression(
  expression: CallExpression
): NonExecutableStepCall<'default'>
export default function resetExpression(
  expression: VariableExpression | FunctionExpression
): StepVariable<'default'> | StepFunction<'default'>
export default function resetExpression(
  expression: Expression
): StepChild<'default'>
export default function resetExpression(
  expression: Expression
): StepChild<'default'> {
  if (isVariable(expression)) {
    return {
      type: 'variable',
      name: expression.name,
      highlightType: 'default',
      topLeftBadgeType: 'none',
      bottomRightBadgeType: 'none',
      bound: expression.bound,
      argPriorityAgg: [],
      funcPriorityAgg: []
    }
  } else if (isCall(expression)) {
    return {
      type: 'call',
      state: 'default',
      arg: resetExpression(expression.arg),
      func: resetExpression(expression.func),
      priority: 0
    }
  } else {
    return {
      type: 'function',
      arg: resetExpression(expression.arg),
      body: resetExpression(expression.body)
    }
  }
}
