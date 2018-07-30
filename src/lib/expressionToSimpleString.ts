import {
  Expression,
  isCallExpression,
  isFunctionExpression,
  isPrioritizedCallExpression,
  isVariableExpression
} from 'src/types/ExpressionTypes'

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
  } else if (isFunctionExpression(expression)) {
    const arg = expressionToSimpleString(expression.value.arg, {
      addPriority
    })
    const body = expressionToSimpleString(expression.value.body, {
      addPriority
    })
    return `(${arg} => ${body})`
  } else {
    throw new Error('Invalid argument')
  }
}
