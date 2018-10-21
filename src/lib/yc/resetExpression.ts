import {
  isCallExpression,
  isVariableExpression
} from 'src/lib/yc/expressionTypeGuards'
import {
  CallExpression,
  InactiveCallExpression,
  InactiveExpression,
  InactiveFunctionExpression,
  InactiveVariableExpression,
  Expression,
  FunctionExpression,
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
      uiState: {
        highlightType: 'inactive'
      },
      bound: expression.bound
    }
  } else if (isCallExpression(expression)) {
    return {
      type: 'call',
      state: 'inactive',
      arg: resetExpression(expression.arg),
      func: resetExpression(expression.func)
    }
  } else {
    return {
      type: 'function',
      arg: resetExpression(expression.arg),
      body: resetExpression(expression.body)
    }
  }
}
