import { Expression } from 'src/types/ExpressionTypes'

export interface ExpressionContainer<E extends Expression> {
  expression: E
  prioritized: boolean
  needsReset: boolean
}

export type UnprioritizedExpressionContainer<
  E extends Expression
> = ExpressionContainer<E> & {
  prioritized: false
}

export type PrioritizedExpressionContainer<
  E extends Expression
> = ExpressionContainer<E> & {
  prioritized: true
}
