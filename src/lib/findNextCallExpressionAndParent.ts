import {
  ImmediatelyExecutableCallExpression,
  isImmediatelyExecutableCallExpression,
  isTopPriorityCallExpression
} from 'src/types/ExecutableExpressionTypes'
import {
  isCallExpression,
  isFunctionExpression
} from 'src/types/ExpressionTypes'
import {
  isPrioritizedCallExpression,
  PrioritizedCallExpression,
  PrioritizedExpression,
  PrioritizedFunctionExpression,
  PrioritizedVariableExpression
} from 'src/types/PrioritizedExpressionTypes'

interface BaseResult<
  E extends PrioritizedCallExpression = PrioritizedCallExpression,
  F extends PrioritizedFunctionExpression = PrioritizedFunctionExpression
> {
  readonly expression?: E
  readonly notFound?: boolean
  readonly noParent?: boolean
  readonly parentCallExpression?: E
  readonly parentFunctionExpression?: F
  readonly parentKey?: any
}

interface HasPrioritizedCallExpression<E extends PrioritizedCallExpression> {
  readonly expression: E
}

interface HasImmediatelyExecutableCallExpression<
  E extends ImmediatelyExecutableCallExpression
> {
  readonly expression: E
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
}

interface HasFunctionParent<E extends PrioritizedFunctionExpression> {
  readonly parentFunctionExpression: E
}

type HelperResult<
  E extends PrioritizedCallExpression,
  I extends ImmediatelyExecutableCallExpression
> =
  | BaseResult<E> & HasImmediatelyExecutableCallExpression<I> & HasCallParent<E>
  | BaseResult<E> & HasImmediatelyExecutableCallExpression<I> & NoParent
  | BaseResult<E> & NotFound

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
  const stack: Array<HelperStackItem<E>> = [{ expression, noParent: true }]
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
        parentCallExpression: current.expression
      })
    }

    if (isPrioritizedCallExpression<E>(current.expression.arg)) {
      stack.push({
        expression: current.expression.arg,
        parentKey: 'arg',
        parentCallExpression: current.expression
      })
    }
  }
  return NOT_FOUND
}

export default function findNextCallExpressionAndParent(
  expression: PrioritizedVariableExpression
): BaseResult & NotFound
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
  | (BaseResult<I> &
      HasImmediatelyExecutableCallExpression<I> &
      HasFunctionParent<F>)
export default function findNextCallExpressionAndParent<
  E extends PrioritizedCallExpression = PrioritizedCallExpression,
  I extends ImmediatelyExecutableCallExpression = ImmediatelyExecutableCallExpression,
  F extends PrioritizedFunctionExpression = PrioritizedFunctionExpression
>(
  expression: PrioritizedExpression
):
  | HelperResult<E, I>
  | (BaseResult<E> & NotFound)
  | (BaseResult<I, F> &
      HasImmediatelyExecutableCallExpression<I> &
      HasFunctionParent<F>)
export default function findNextCallExpressionAndParent(
  expression: PrioritizedExpression
) {
  if (isCallExpression(expression)) {
    return helper(expression)
  } else if (isFunctionExpression(expression)) {
    let currentExpression: PrioritizedExpression = expression
    let previousExpression: PrioritizedFunctionExpression = expression
    while (isFunctionExpression(currentExpression)) {
      previousExpression = currentExpression
      currentExpression = currentExpression.body
    }
    if (isCallExpression(currentExpression)) {
      const helperResult = helper(currentExpression)
      if (foundExpressionAndNoParent(helperResult)) {
        return {
          parentFunctionExpression: previousExpression,
          expression: helperResult.expression
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
