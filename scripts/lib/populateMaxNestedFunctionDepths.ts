import {
  isCall,
  isVariable,
  isFunction,
  isConditional,
  isBinary
} from 'src/lib/expressionTypeGuards'
import { Expression } from 'src/types/ExpressionTypes'
import maxNestedFunctionDepth from 'scripts/lib/maxNestedFunctionDepth'

export default function populateMaxNestedFunctionDepths<E extends Expression>(
  expression: E
): E {
  if (isVariable(expression)) {
    return expression
  } else if (isCall(expression)) {
    return {
      ...expression,
      arg: populateMaxNestedFunctionDepths(expression.arg),
      func: populateMaxNestedFunctionDepths(expression.func)
    }
  } else if (isFunction(expression)) {
    return {
      ...expression,
      arg: populateMaxNestedFunctionDepths(expression.arg),
      body: populateMaxNestedFunctionDepths(expression.body),
      maxNestedFunctionDepth: maxNestedFunctionDepth(expression)
    }
  } else if (isConditional(expression)) {
    return {
      ...expression,
      condition: populateMaxNestedFunctionDepths(expression.condition),
      trueCase: populateMaxNestedFunctionDepths(expression.trueCase),
      falseCase: populateMaxNestedFunctionDepths(expression.falseCase)
    }
  } else if (isBinary(expression)) {
    return {
      ...expression,
      first: populateMaxNestedFunctionDepths(expression.first),
      second: populateMaxNestedFunctionDepths(expression.second)
    }
  } else {
    throw new Error()
  }
}
