import {
  isPrioritizedFunctionExpression,
  isPrioritizedVariableExpression,
  PrioritizedCallExpression,
  PrioritizedFunctionExpression,
  PrioritizedVariableExpression
} from 'src/types/PrioritizedExpressionTypes'

export interface TopPriorityCallExpression extends PrioritizedCallExpression {
  priority: 1
}

export function isTopPriorityCallExpression(
  expression: PrioritizedCallExpression
): expression is TopPriorityCallExpression {
  return expression.priority === 1
}

export interface ImmediatelyExecutableCallExpression
  extends TopPriorityCallExpression {
  arg: PrioritizedVariableExpression | PrioritizedFunctionExpression
  func: PrioritizedFunctionExpression
}

export function isImmediatelyExecutableCallExpression(
  expression: TopPriorityCallExpression
): expression is ImmediatelyExecutableCallExpression {
  return (
    expression.priority === 1 &&
    (isPrioritizedVariableExpression(expression.arg) ||
      isPrioritizedFunctionExpression(expression.arg)) &&
    isPrioritizedFunctionExpression(expression.func)
  )
}

export interface UnexecutableCallExpression extends PrioritizedCallExpression {
  state: 'done'
}
