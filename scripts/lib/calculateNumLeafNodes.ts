import {
  isCall,
  isVariable,
  isFunction,
  isConditional,
  isBinary
} from 'src/lib/expressionTypeGuards'
import { Expression } from 'src/types/ExpressionTypes'

export default function calculateNumLeafNodes(expression: Expression): number {
  if (isVariable(expression)) {
    return 1
  } else if (isCall(expression)) {
    return (
      calculateNumLeafNodes(expression.arg) +
      calculateNumLeafNodes(expression.func)
    )
  } else if (isFunction(expression)) {
    return calculateNumLeafNodes(expression.body)
  } else if (isConditional(expression)) {
    return (
      calculateNumLeafNodes(expression.condition) +
      calculateNumLeafNodes(expression.trueCase) +
      calculateNumLeafNodes(expression.falseCase)
    )
  } else if (isBinary(expression)) {
    return (
      calculateNumLeafNodes(expression.first) +
      calculateNumLeafNodes(expression.second)
    )
  } else {
    return calculateNumLeafNodes(expression.child)
  }
}
