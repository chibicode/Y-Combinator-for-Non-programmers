import { Expression } from 'src/types/ExpressionTypes'
import { PrioritizedExpression } from 'src/types/PrioritizedExpressionTypes'

export interface ExpressionContainer<E extends Expression = Expression> {
  expression: E
  prioritized: boolean
  needsReset: boolean
}

export type UnprioritizedExpressionContainer<
  E extends Expression = Expression
> = ExpressionContainer<E> & {
  prioritized: false
}

export type PrioritizedExpressionContainer<
  E extends PrioritizedExpression = PrioritizedExpression
> = ExpressionContainer<E> & {
  prioritized: true
}
