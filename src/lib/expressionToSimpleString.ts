import {
  Expression,
  isCallExpression,
  isVariableExpression
} from 'src/types/ExpressionTypes'
import { isPrioritizedCallExpression } from 'src/types/PrioritizedExpressionTypes'

export default function expressionToSimpleString(
  expression: Expression,
  { addPriority } = { addPriority: false }
): string {
  if (isVariableExpression(expression)) {
    return expression.value
  } else if (isCallExpression(expression)) {
    const func = expressionToSimpleString(expression.func, {
      addPriority
    })
    const priority =
      addPriority && isPrioritizedCallExpression(expression)
        ? `${expression.priority}`
        : ''
    const arg = expressionToSimpleString(expression.arg, {
      addPriority
    })
    return `${func}(${priority}${arg})`
  } else {
    const arg = expressionToSimpleString(expression.arg, {
      addPriority
    })
    const body = expressionToSimpleString(expression.body, {
      addPriority
    })
    return `(${arg} => ${body})`
  }
}
