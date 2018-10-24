import { isCall, isVariable } from 'src/lib/yc/expressionTypeGuards'
import {
  CallExpression,
  DefaultCall,
  DefaultExpression,
  DefaultFunction,
  DefaultVariable,
  Expression,
  FunctionExpression,
  VariableExpression
} from 'src/types/yc/ExpressionTypes'

export default function resetExpression(
  expression: VariableExpression
): DefaultVariable
export default function resetExpression(
  expression: FunctionExpression
): DefaultFunction
export default function resetExpression(expression: CallExpression): DefaultCall
export default function resetExpression(
  expression: Expression
): DefaultExpression
export default function resetExpression(
  expression: Expression
): DefaultExpression {
  if (isVariable(expression)) {
    return {
      type: 'variable',
      name: expression.name,
      highlightType: 'default',
      badgeType: 'none',
      bound: expression.bound,
      argPriorityAgg: [],
      funcPriorityAgg: []
    }
  } else if (isCall(expression)) {
    return {
      type: 'call',
      state: 'default',
      arg: resetExpression(expression.arg),
      func: resetExpression(expression.func),
      priority: 0
    }
  } else {
    return {
      type: 'function',
      arg: resetExpression(expression.arg),
      body: resetExpression(expression.body)
    }
  }
}
