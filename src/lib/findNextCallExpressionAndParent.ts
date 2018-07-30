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
  PrioritizedFunctionExpression
} from 'src/types/PrioritizedExpressionTypes'

interface Result {
  readonly expression?: PrioritizedCallExpression
  readonly notFound?: true
  readonly noParent?: true
  readonly parentCallExpression?: PrioritizedCallExpression
  readonly parentFunctionExpression?: PrioritizedFunctionExpression
  readonly parentKey?: 'func' | 'arg'
}

interface HasPrioritizedCallExpression {
  readonly expression: PrioritizedCallExpression
}

interface HasImmediatelyExecutableCallExpression {
  readonly expression: ImmediatelyExecutableCallExpression
}

interface NotFound {
  readonly notFound: true
}

interface NoParent {
  readonly noParent: true
}

interface HasCallParent {
  readonly parentCallExpression: PrioritizedCallExpression
  readonly parentKey: 'func' | 'arg'
}

interface HasFunctionParent {
  readonly parentFunctionExpression: PrioritizedFunctionExpression
}

type HelperResult =
  | Result & HasImmediatelyExecutableCallExpression & HasCallParent
  | Result & HasImmediatelyExecutableCallExpression & NoParent
  | Result & NotFound

type HelperStackItem =
  | HasPrioritizedCallExpression & NoParent
  | HasPrioritizedCallExpression & HasCallParent

const NOT_FOUND = { notFound: true as true }

function foundExpressionAndNoParent(
  helperResult: HelperResult
): helperResult is HasImmediatelyExecutableCallExpression & NoParent {
  return (
    (helperResult as NoParent).noParent &&
    !!(helperResult as HasImmediatelyExecutableCallExpression).expression
  )
}

function helper(expression: PrioritizedCallExpression): HelperResult {
  const stack: HelperStackItem[] = [{ expression, noParent: true }]
  while (stack.length > 0) {
    const current = stack.pop() as HelperStackItem
    if (isTopPriorityCallExpression(current.expression)) {
      if (isImmediatelyExecutableCallExpression(current.expression)) {
        return {
          ...current,
          expression: current.expression
        }
      } else {
        return NOT_FOUND
      }
    }

    if (isPrioritizedCallExpression(current.expression.func)) {
      stack.push({
        expression: current.expression.func,
        parentKey: 'func',
        parentCallExpression: current.expression
      })
    }

    if (isPrioritizedCallExpression(current.expression.arg)) {
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
  expression: PrioritizedCallExpression
): HelperResult
export default function findNextCallExpressionAndParent(
  expression: PrioritizedFunctionExpression
):
  | HelperResult
  | (Result & HasImmediatelyExecutableCallExpression & HasFunctionParent)
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
