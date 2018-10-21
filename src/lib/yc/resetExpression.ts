import {
  isCallExpression,
  isVariableExpression
} from 'src/lib/yc/expressionTypeGuards'
import {
  CallExpression,
  DefaultStateCallExpression,
  DefaultStateExpression,
  DefaultStateFunctionExpression,
  DefaultStateVariableExpression,
  Expression,
  FunctionExpression,
  VariableExpression
} from 'src/types/yc/ExpressionTypes'

export default function resetExpression(
  expression: VariableExpression
): DefaultStateVariableExpression
export default function resetExpression(
  expression: FunctionExpression
): DefaultStateFunctionExpression
export default function resetExpression(
  expression: CallExpression
): DefaultStateCallExpression
export default function resetExpression(
  expression: Expression
): DefaultStateExpression
export default function resetExpression(
  expression: Expression
): DefaultStateExpression {
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
