import { CallExpressionStates, Expression } from 'src/types/yc/ExpressionTypes'
import { VariableNames } from 'src/types/yc/VariableNames'

export type ExpressionContainerState =
  | 'prioritized'
  | 'needsPrioritize'
  | 'needsReset'
  | 'done'

export interface ExpressionContainer<E extends Expression = Expression> {
  readonly expression: E
  readonly containerState: ExpressionContainerState
  readonly previouslyChangedExpressionState: CallExpressionStates
  readonly matchExists?: boolean
}

export type PrioritizedExpressionContainer<
  E extends Expression = Expression
> = ExpressionContainer<E> & {
  readonly containerState: 'prioritized'
}

export type NeedsPrioritizeExpressionContainer<
  E extends Expression = Expression
> = ExpressionContainer<E> & {
  readonly containerState: 'needsPrioritize'
}

export type NeedsResetExpressionContainer<
  E extends Expression = Expression
> = ExpressionContainer<E> & {
  readonly containerState: 'needsReset'
}

export type DoneExpressionContainer<
  E extends Expression = Expression
> = ExpressionContainer<E> & {
  readonly containerState: 'done'
}

export type SteppedExpressionContainer<E extends Expression = Expression> =
  | NeedsResetExpressionContainer<E>
  | DoneExpressionContainer<E>
  | PrioritizedExpressionContainer<E>
