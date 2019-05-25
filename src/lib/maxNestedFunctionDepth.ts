import { isCall, isVariable, isFunction } from 'src/lib/expressionTypeGuards'
import { Expression } from 'src/types/ExpressionTypes'

export default function maxNestedFunctionDepth(expression: Expression): number {
  if (isVariable(expression)) {
    return 0
  } else if (isCall(expression)) {
    return Math.max(
      maxNestedFunctionDepth(expression.arg),
      maxNestedFunctionDepth(expression.func)
    )
  } else if (isFunction(expression)) {
    return 1 + maxNestedFunctionDepth(expression.body)
  } else {
    return Math.max(
      maxNestedFunctionDepth(expression.condition),
      maxNestedFunctionDepth(expression.trueCase),
      maxNestedFunctionDepth(expression.falseCase)
    )
  }
}
