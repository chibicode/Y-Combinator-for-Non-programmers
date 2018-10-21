import {
  isImmediatelyExecutableCallExpression,
  isPrioritizedCallExpression,
  isPrioritizedFunctionExpression,
  isTopPriorityCallExpression
} from 'src/lib/yc/expressionTypeGuards'
import {
  ImmediatelyExecutableCallExpression,
  PrioritizedCallExpression,
  PrioritizedExpression,
  PrioritizedFunctionExpression,
  PrioritizedVariableExpression
} from 'src/types/yc/ExpressionTypes'

interface HasPrioritizedCallExpression<E extends PrioritizedCallExpression> {
  readonly expression: E
  readonly notFound: false
}

interface HasImmediatelyExecutableCallExpression<
  E extends ImmediatelyExecutableCallExpression
> {
  readonly expression: E
  readonly notFound: false
}

interface NotFound {
  readonly notFound: true
}

interface NoParent {
  readonly noParent: true
}

interface HasCallParent<E extends PrioritizedCallExpression> {
  readonly parentCallExpression: E
  readonly parentKey: 'func' | 'arg'
  readonly noParent: false
}

interface HasFunctionParent<E extends PrioritizedFunctionExpression> {
  readonly parentFunctionExpression: E
  readonly noParent: false
}

type HelperResult<
  E extends PrioritizedCallExpression,
  I extends ImmediatelyExecutableCallExpression
> =
  | HasImmediatelyExecutableCallExpression<I> & HasCallParent<E>
  | HasImmediatelyExecutableCallExpression<I> & NoParent
  | NotFound

type HelperStackItem<E extends PrioritizedCallExpression> =
  | HasPrioritizedCallExpression<E> & NoParent
  | HasPrioritizedCallExpression<E> & HasCallParent<E>

const NOT_FOUND = { notFound: true as true }

function foundExpressionAndNoParent<
  E extends PrioritizedCallExpression,
  I extends ImmediatelyExecutableCallExpression
>(
  helperResult: HelperResult<E, I>
): helperResult is HasImmediatelyExecutableCallExpression<I> & NoParent {
  return (
    (helperResult as NoParent).noParent &&
    !!(helperResult as HasImmediatelyExecutableCallExpression<I>).expression
  )
}

function helper<
  E extends PrioritizedCallExpression,
  I extends ImmediatelyExecutableCallExpression
>(expression: E): HelperResult<E, I> {
  const stack: Array<HelperStackItem<E>> = [
    { expression, noParent: true, notFound: false }
  ]
  while (stack.length > 0) {
    const current = stack.pop() as HelperStackItem<E>
    if (isTopPriorityCallExpression(current.expression)) {
      if (isImmediatelyExecutableCallExpression<I>(current.expression)) {
        return {
          ...current,
          expression: current.expression
        }
      } else {
        return NOT_FOUND
      }
    }

    if (isPrioritizedCallExpression<E>(current.expression.func)) {
      stack.push({
        expression: current.expression.func,
        parentKey: 'func',
        parentCallExpression: current.expression,
        notFound: false,
        noParent: false
      })
    }

    if (isPrioritizedCallExpression<E>(current.expression.arg)) {
      stack.push({
        expression: current.expression.arg,
        parentKey: 'arg',
        parentCallExpression: current.expression,
        notFound: false,
        noParent: false
      })
    }
  }
  return NOT_FOUND
}

type FindNextCallExpressionAndParentResult<
  E extends PrioritizedCallExpression = PrioritizedCallExpression,
  I extends ImmediatelyExecutableCallExpression = ImmediatelyExecutableCallExpression,
  F extends PrioritizedFunctionExpression = PrioritizedFunctionExpression
> =
  | HelperResult<E, I>
  | NotFound
  | (HasImmediatelyExecutableCallExpression<I> & HasFunctionParent<F>)

export function isNotFound(
  result: FindNextCallExpressionAndParentResult
): result is NotFound {
  return 'notFound' in result && result.notFound
}

export default function findNextCallExpressionAndParent(
  expression: PrioritizedVariableExpression
): NotFound
export default function findNextCallExpressionAndParent<
  E extends PrioritizedCallExpression = PrioritizedCallExpression,
  I extends ImmediatelyExecutableCallExpression = ImmediatelyExecutableCallExpression
>(expression: E): HelperResult<E, I>
export default function findNextCallExpressionAndParent<
  E extends PrioritizedCallExpression = PrioritizedCallExpression,
  I extends ImmediatelyExecutableCallExpression = ImmediatelyExecutableCallExpression,
  F extends PrioritizedFunctionExpression = PrioritizedFunctionExpression
>(
  expression: F
):
  | HelperResult<E, I>
  | (HasImmediatelyExecutableCallExpression<I> & HasFunctionParent<F>)
export default function findNextCallExpressionAndParent<
  E extends PrioritizedCallExpression = PrioritizedCallExpression,
  I extends ImmediatelyExecutableCallExpression = ImmediatelyExecutableCallExpression,
  F extends PrioritizedFunctionExpression = PrioritizedFunctionExpression
>(
  expression: PrioritizedExpression
): FindNextCallExpressionAndParentResult<E, I, F>
export default function findNextCallExpressionAndParent<
  E extends PrioritizedCallExpression = PrioritizedCallExpression,
  I extends ImmediatelyExecutableCallExpression = ImmediatelyExecutableCallExpression,
  F extends PrioritizedFunctionExpression = PrioritizedFunctionExpression
>(
  expression: PrioritizedExpression
): FindNextCallExpressionAndParentResult<E, I, F> {
  if (isPrioritizedCallExpression<E>(expression)) {
    return helper<E, I>(expression)
  } else if (isPrioritizedFunctionExpression<F>(expression)) {
    let currentExpression: PrioritizedExpression = expression
    let previousExpression: F = expression
    while (isPrioritizedFunctionExpression<F>(currentExpression)) {
      previousExpression = currentExpression
      currentExpression = currentExpression.body
    }
    if (isPrioritizedCallExpression<E>(currentExpression)) {
      const helperResult = helper<E, I>(currentExpression)
      if (foundExpressionAndNoParent<E, I>(helperResult)) {
        return {
          parentFunctionExpression: previousExpression,
          expression: helperResult.expression,
          notFound: false,
          noParent: false
        }
      } else {
        return helperResult
      }
    } else {
      return NOT_FOUND
    }
  } else {
    return NOT_FOUND
  }
}
