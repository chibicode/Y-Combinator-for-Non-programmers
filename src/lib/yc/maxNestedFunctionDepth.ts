import {
  isCallExpression,
  isVariableExpression
} from 'src/lib/yc/expressionTypeGuards'
import { Expression } from 'src/types/yc/ExpressionTypes'

export default function maxNestedFunctionDepth(expression: Expression): number {
  if (isVariableExpression(expression)) {
    return 0
  } else if (isCallExpression(expression)) {
    return Math.max(
      maxNestedFunctionDepth(expression.arg),
      maxNestedFunctionDepth(expression.func)
    )
  } else {
    return 1 + maxNestedFunctionDepth(expression.body)
  }
}
