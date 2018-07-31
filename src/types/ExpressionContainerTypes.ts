import { Expression } from 'src/types/ExpressionTypes'
import { PrioritizedExpression } from 'src/types/PrioritizedExpressionTypes'

export interface ExpressionContainer<E extends Expression = Expression> {
  readonly expression: E
  readonly prioritized: boolean
  readonly needsReset: boolean
  readonly done: boolean
}

export type UnprioritizedExpressionContainer<
  E extends Expression = Expression
> = ExpressionContainer<E> & {
  readonly prioritized: false
}

export type PrioritizedExpressionContainer<
  E extends PrioritizedExpression = PrioritizedExpression
> = ExpressionContainer<E> & {
  readonly prioritized: true
}

export function isPrioritizedExpressionContainer(
  e: ExpressionContainer
): e is PrioritizedExpressionContainer {
  return e.prioritized
}

export type NeedsResetExpressionContainer<
  E extends Expression = Expression
> = ExpressionContainer<E> & {
  readonly needsReset: true
}

export function isNeedsResetExpressionContainer(
  e: ExpressionContainer
): e is NeedsResetExpressionContainer {
  return e.needsReset
}

export type DoneExpressionContainer<
  E extends Expression = Expression
> = ExpressionContainer<E> & {
  readonly done: true
}
