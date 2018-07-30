import { Expression } from 'src/types/ExpressionTypes'
import { PrioritizedExpression } from 'src/types/PrioritizedExpressionTypes'

export interface ExpressionContainer<E extends Expression = Expression> {
  readonly expression: E
  readonly prioritized: boolean
  readonly needsReset: boolean
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
