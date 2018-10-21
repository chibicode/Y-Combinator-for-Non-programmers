import {
  CallExpression,
  CallExpressionStates,
  Expression,
  FunctionExpression,
  ImmediatelyExecutableCallExpression,
  PrioritizedCallExpression,
  PrioritizedExpression,
  PrioritizedFunctionExpression,
  PrioritizedVariableExpression,
  TopPriorityCallExpression,
  VariableExpression
} from 'src/types/yc/ExpressionTypes'

export function isVariableExpression(
  expression: Expression
): expression is VariableExpression {
  return expression.type === 'variable'
}

export function isCallExpression(
  expression: Expression
): expression is CallExpression {
  return expression.type === 'call'
}

export function isFunctionExpression(
  expression: Expression
): expression is FunctionExpression {
  return expression.type === 'function'
}

export function isPrioritizedVariableExpression(
  expression: PrioritizedExpression | VariableExpression
): expression is PrioritizedVariableExpression {
  return (
    isVariableExpression(expression) &&
    Array.isArray(
      (expression as PrioritizedVariableExpression).argPriorityAgg
    ) &&
    Array.isArray((expression as PrioritizedVariableExpression).funcPriorityAgg)
  )
}

export function isPrioritizedCallExpression<
  E extends PrioritizedCallExpression = PrioritizedCallExpression
>(expression: PrioritizedExpression | CallExpression): expression is E {
  return (
    isCallExpression(expression) &&
    ((expression as E).priority !== undefined &&
      isPrioritizedExpression(expression.arg) &&
      isPrioritizedExpression(expression.func))
  )
}

export function isPrioritizedFunctionExpression<
  E extends PrioritizedFunctionExpression = PrioritizedFunctionExpression
>(expression: PrioritizedExpression | FunctionExpression): expression is E {
  if (isFunctionExpression(expression)) {
    return (
      isPrioritizedVariableExpression(expression.arg) &&
      isPrioritizedExpression(expression.body)
    )
  } else {
    return false
  }
}

export function isPrioritizedExpression(
  expression: Expression
): expression is PrioritizedExpression {
  if (isVariableExpression(expression)) {
    return isPrioritizedVariableExpression(expression)
  } else if (isCallExpression(expression)) {
    return isPrioritizedCallExpression(expression)
  } else {
    return isPrioritizedFunctionExpression(expression)
  }
}

export function isTopPriorityCallExpression(
  expression: PrioritizedCallExpression
): expression is TopPriorityCallExpression {
  return expression.priority === 1
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

export function isCallExpressionWithState<
  E extends CallExpression,
  S extends CallExpressionStates
>(expression: E, state: S): expression is E & { state: S } {
  return expression.state === state
}
