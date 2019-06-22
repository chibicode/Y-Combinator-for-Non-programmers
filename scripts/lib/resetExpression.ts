import { isCall, isVariable, isFunction } from 'src/lib/expressionTypeGuards'
import {
  CallExpression,
  Expression,
  FunctionExpression,
  NonExecutableStepCall,
  StepChild,
  StepFunction,
  StepVariable,
  ConditionalExpression,
  VariableExpression,
  StepConditional
} from 'src/types/ExpressionTypes'

export default function resetExpression(
  expression: VariableExpression
): StepVariable<'default'>
export default function resetExpression(
  expression: FunctionExpression
): StepFunction<'default'>
export default function resetExpression(
  expression: ConditionalExpression
): StepConditional<'default'>
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
      ...expression,
      highlightType: 'default',
      topLeftBadgeType: 'none',
      bottomRightBadgeType: 'none',
      argPriorityAgg: [],
      funcPriorityAgg: [],
      emphasizePriority: false
    }
  } else if (isCall(expression)) {
    return {
      ...expression,
      state: 'default',
      arg: resetExpression(expression.arg),
      func: resetExpression(expression.func),
      priority: 0
    }
  } else if (isFunction(expression)) {
    return {
      ...expression,
      arg: resetExpression(expression.arg),
      body: resetExpression(expression.body)
    }
  } else {
    return {
      ...expression,
      state: 'default',
      priority: 0,
      condition: resetExpression(expression.condition),
      trueCase: resetExpression(expression.trueCase),
      falseCase: resetExpression(expression.falseCase)
    }
  }
}
