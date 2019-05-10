import {
  isCall,
  isVariable,
  isShorthandFunction
} from 'src/lib/yc/expressionTypeGuards'
import { Expression } from 'src/types/yc/ExpressionTypes'

export default function maxNestedFunctionDepth(expression: Expression): number {
  if (isVariable(expression)) {
    return 0
  } else if (isCall(expression)) {
    return Math.max(
      maxNestedFunctionDepth(expression.arg),
      maxNestedFunctionDepth(expression.func)
    )
  } else if (isShorthandFunction(expression)) {
    return Math.max(...expression.args.map(arg => maxNestedFunctionDepth(arg)))
  } else {
    return 1 + maxNestedFunctionDepth(expression.body)
  }
}
