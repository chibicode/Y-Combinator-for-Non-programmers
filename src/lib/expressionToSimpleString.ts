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
    const func = expressionToSimpleString(expression.value.func, {
      addPriority
    })
    const priority = isPrioritizedCallExpression(expression)
      ? `${expression.priority}`
      : ''
    const arg = expressionToSimpleString(expression.value.arg, {
      addPriority
    })
    return `${func}(${priority}${arg})`
  } else {
    const arg = expressionToSimpleString(expression.value.arg, {
      addPriority
    })
    const body = expressionToSimpleString(expression.value.body, {
      addPriority
    })
    return `(${arg} => ${body})`
  }
}
