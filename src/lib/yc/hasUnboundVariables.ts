import { isCall, isVariable, isFunction } from 'src/lib/yc/expressionTypeGuards'
import { Expression } from 'src/types/yc/ExpressionTypes'

export default function hasUnboundVariables(expression: Expression): boolean {
  if (isVariable(expression)) {
    return !expression.bound
  } else if (isCall(expression)) {
    return (
      hasUnboundVariables(expression.arg) ||
      hasUnboundVariables(expression.func)
    )
  } else if (isFunction(expression)) {
    return (
      hasUnboundVariables(expression.arg) ||
      hasUnboundVariables(expression.body)
    )
  } else {
    return false
  }
}
