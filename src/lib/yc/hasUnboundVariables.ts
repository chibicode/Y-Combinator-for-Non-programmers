import {
  isCall,
  isVariable,
  isShorthandFunction
} from 'src/lib/yc/expressionTypeGuards'
import { Expression } from 'src/types/yc/ExpressionTypes'

export default function hasUnboundVariables(expression: Expression): boolean {
  if (isVariable(expression)) {
    return !expression.bound
  } else if (isCall(expression)) {
    return (
      hasUnboundVariables(expression.arg) ||
      hasUnboundVariables(expression.func)
    )
  } else if (isShorthandFunction(expression)) {
    return false
  } else {
    return (
      hasUnboundVariables(expression.arg) ||
      hasUnboundVariables(expression.body)
    )
  }
}
