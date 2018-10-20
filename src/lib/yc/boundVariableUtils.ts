import { DraftObject } from 'immer'
import {
  Expression,
  isCallExpression,
  isFunctionExpression,
  isVariableExpression
} from 'src/types/yc/ExpressionTypes'
import {
  PrioritizedCallExpression,
  PrioritizedFunctionExpression,
  PrioritizedVariableExpression
} from 'src/types/yc/PrioritizedExpressionTypes'

export const isFunctionExpressionOrContainsFunctionExpression = (
  x: Expression
): boolean => {
  if (isVariableExpression(x)) {
    return false
  } else if (isFunctionExpression(x)) {
    return true
  } else {
    return (
      isFunctionExpressionOrContainsFunctionExpression(x.arg) ||
      isFunctionExpressionOrContainsFunctionExpression(x.func)
    )
  }
}

export const highlightBoundExpressions = (
  x:
    | DraftObject<PrioritizedCallExpression>
    | DraftObject<PrioritizedFunctionExpression>
    | DraftObject<PrioritizedVariableExpression>,
  to: 'boundJustHighlighted' | 'boundHighlighted' | 'default'
) => {
  if (isVariableExpression(x)) {
    x.state = to
  } else if (isCallExpression(x)) {
    highlightBoundExpressions(x.arg, to)
    highlightBoundExpressions(x.func, to)
  } else {
    highlightBoundExpressions(x.body, to)
  }
}

export const highlightUnboundExpressions = (
  x:
    | DraftObject<PrioritizedCallExpression>
    | DraftObject<PrioritizedFunctionExpression>
    | DraftObject<PrioritizedVariableExpression>,
  to: 'unboundJustHighlighted' | 'unboundHighlighted' | 'default'
) => {
  if (isFunctionExpression(x)) {
    x.arg.state = to
    highlightUnboundExpressions(x.body, to)
  } else if (isCallExpression(x)) {
    highlightUnboundExpressions(x.arg, to)
    highlightUnboundExpressions(x.func, to)
  }
}
