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

interface PrioritizedCallExpressionWrapper {
  expression: PrioritizedCallExpression
}

interface ImmediatelyExecutableCallExpressionWrapper {
  expression: ImmediatelyExecutableCallExpression
}

const NOT_FOUND = { notFound: true as true }

interface NotFound {
  notFound: true
}

interface NoParent {
  noParent: true
}

interface HasCallParent {
  parentCallExpression: PrioritizedCallExpression
  parentKey: 'func' | 'arg'
}

interface HasFunctionParent {
  parentFunctionExpression: PrioritizedFunctionExpression
}

type HelperResult =
  | ImmediatelyExecutableCallExpressionWrapper & HasCallParent
  | ImmediatelyExecutableCallExpressionWrapper & NoParent
  | NotFound

function foundExpressionAndNoParent(
  helperResult: HelperResult
): helperResult is ImmediatelyExecutableCallExpressionWrapper & NoParent {
  return (
    (helperResult as NoParent).noParent &&
    !!(helperResult as ImmediatelyExecutableCallExpressionWrapper).expression
  )
}

type HelperStackItem =
  | PrioritizedCallExpressionWrapper & NoParent
  | PrioritizedCallExpressionWrapper & HasCallParent

const helper = (expression: PrioritizedCallExpression): HelperResult => {
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
  | (ImmediatelyExecutableCallExpressionWrapper & HasFunctionParent)
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
