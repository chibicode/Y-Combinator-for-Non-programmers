import {
  isPrioritizedFunctionExpression,
  isPrioritizedVariableExpression,
  PrioritizedCallExpression,
  PrioritizedFunctionExpression,
  PrioritizedVariableExpression
} from 'src/types/PrioritizedExpressionTypes'

export interface TopPriorityCallExpression extends PrioritizedCallExpression {
  readonly priority: 1
}

export function isTopPriorityCallExpression(
  expression: PrioritizedCallExpression
): expression is TopPriorityCallExpression {
  return expression.priority === 1
}

export interface ImmediatelyExecutableCallExpression
  extends TopPriorityCallExpression {
  readonly arg: PrioritizedVariableExpression | PrioritizedFunctionExpression
  readonly func: PrioritizedFunctionExpression
}

export function isImmediatelyExecutableCallExpression<
  E extends ImmediatelyExecutableCallExpression = ImmediatelyExecutableCallExpression
>(expression: TopPriorityCallExpression): expression is E {
  return (
    expression.priority === 1 &&
    (isPrioritizedVariableExpression(expression.arg) ||
      isPrioritizedFunctionExpression(expression.arg)) &&
    isPrioritizedFunctionExpression(expression.func)
  )
}

export interface UnexecutableCallExpression extends PrioritizedCallExpression {
  readonly state: 'done'
}
