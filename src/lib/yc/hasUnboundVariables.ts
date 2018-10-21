import {
  isCallExpression,
  isVariableExpression
} from 'src/lib/yc/expressionTypeGuards'
import { Expression } from 'src/types/yc/ExpressionTypes'

export default function hasUnboundVariables(expression: Expression): boolean {
  if (isVariableExpression(expression)) {
    return !expression.bound
  } else if (isCallExpression(expression)) {
    return (
      hasUnboundVariables(expression.arg) ||
      hasUnboundVariables(expression.func)
    )
  } else {
    return (
      hasUnboundVariables(expression.arg) ||
      hasUnboundVariables(expression.body)
    )
  }
}
