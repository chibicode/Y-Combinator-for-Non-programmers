import {
  Expression,
  isCallExpression,
  isVariableExpression
} from 'src/types/yc/ExpressionTypes'
import {
  isPrioritizedCallExpression,
  isPrioritizedVariableExpression,
  PrioritizedVariableExpression
} from 'src/types/yc/PrioritizedExpressionTypes'

export default function expressionToSimpleString(
  expression: Expression,
  {
    addPriority,
    addPriorityAgg
  }: {
    addPriority?: boolean
    addPriorityAgg?: boolean
  } = { addPriority: false, addPriorityAgg: false }
): string {
  if (isVariableExpression(expression)) {
    if (addPriorityAgg && isPrioritizedVariableExpression(expression)) {
      const str: string[] = []
      str.push('[')
      str.push(
        (expression as PrioritizedVariableExpression).funcPriorityAgg.join(',')
      )
      str.push(expression.name)
      str.push(
        (expression as PrioritizedVariableExpression).argPriorityAgg.join(',')
      )
      str.push(']')
      return str.join('')
    } else {
      return expression.name
    }
  } else if (isCallExpression(expression)) {
    const func = expressionToSimpleString(expression.func, {
      addPriority,
      addPriorityAgg
    })
    const priority =
      addPriority && isPrioritizedCallExpression(expression)
        ? `${expression.priority}`
        : ''
    const arg = expressionToSimpleString(expression.arg, {
      addPriority,
      addPriorityAgg
    })
    return `${func}(${priority}${arg})`
  } else {
    const arg = expressionToSimpleString(expression.arg, {
      addPriority,
      addPriorityAgg
    })
    const body = expressionToSimpleString(expression.body, {
      addPriority,
      addPriorityAgg
    })
    return `(${arg} => ${body})`
  }
}
