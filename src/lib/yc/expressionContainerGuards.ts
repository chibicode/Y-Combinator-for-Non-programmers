import { PrioritizedExpression } from 'src/types/yc/ExpressionTypes'

import {
  DoneExpressionContainer,
  ExpressionContainer,
  NeedsResetExpressionContainer
} from 'src/types/yc/ExpressionContainerTypes'

export function isNeedsResetExpressionContainer<
  E extends PrioritizedExpression = PrioritizedExpression
>(e: ExpressionContainer): e is NeedsResetExpressionContainer<E> {
  return e.containerState === 'needsReset'
}

export function isDoneExpressionContainer<
  E extends PrioritizedExpression = PrioritizedExpression
>(e: ExpressionContainer): e is DoneExpressionContainer<E> {
  return e.containerState === 'done'
}
