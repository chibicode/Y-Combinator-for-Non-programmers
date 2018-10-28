import { Expression } from 'src/types/yc/ExpressionTypes'

import {
  ContainerWithState,
  ExpressionContainer
} from 'src/types/yc/ExpressionContainerTypes'

export function isNeedsResetExpressionContainer<
  E extends Expression = Expression
>(e: ExpressionContainer): e is ContainerWithState<'needsReset', E> {
  return e.containerState === 'needsReset'
}

export function isDoneExpressionContainer<E extends Expression = Expression>(
  e: ExpressionContainer
): e is ContainerWithState<'done', E> {
  return e.containerState === 'done'
}
