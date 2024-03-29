import {
  isCall,
  isVariable,
  isFunction,
  isConditional,
  isBinary
} from 'src/lib/expressionTypeGuards'
import { Expression } from 'src/types/ExpressionTypes'

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
  } else if (isConditional(expression)) {
    return (
      hasUnboundVariables(expression.condition) ||
      hasUnboundVariables(expression.trueCase) ||
      hasUnboundVariables(expression.falseCase)
    )
  } else if (isBinary(expression)) {
    return (
      hasUnboundVariables(expression.first) ||
      hasUnboundVariables(expression.second)
    )
  } else {
    throw new Error()
  }
}
