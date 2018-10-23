import {
  isCallExpression,
  isVariableExpression
} from 'src/lib/yc/expressionTypeGuards'
import {
  CallExpression,
  Expression,
  FunctionExpression,
  InactiveCallExpression,
  InactiveExpression,
  InactiveFunctionExpression,
  InactiveVariableExpression,
  VariableExpression
} from 'src/types/yc/ExpressionTypes'

export default function resetExpression(
  expression: VariableExpression
): InactiveVariableExpression
export default function resetExpression(
  expression: FunctionExpression
): InactiveFunctionExpression
export default function resetExpression(
  expression: CallExpression
): InactiveCallExpression
export default function resetExpression(
  expression: Expression
): InactiveExpression
export default function resetExpression(
  expression: Expression
): InactiveExpression {
  if (isVariableExpression(expression)) {
    return {
      type: 'variable',
      name: expression.name,
      highlightType: 'inactive',
      badgeType: 'none',
      bound: expression.bound,
      argPriorityAgg: [],
      funcPriorityAgg: []
    }
  } else if (isCallExpression(expression)) {
    return {
      type: 'call',
      state: 'inactive',
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
