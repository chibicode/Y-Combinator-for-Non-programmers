import { CallStates, Expression } from 'src/types/yc/ExpressionTypes'

export type ExpressionContainerState =
  | 'prioritized'
  | 'stepped'
  | 'needsPrioritize'
  | 'needsReset'
  | 'done'

export interface ExpressionContainer<E extends Expression = Expression> {
  readonly expression: E
  readonly containerState: ExpressionContainerState
  readonly previouslyChangedExpressionState: CallStates
  readonly matchExists?: boolean
}

export type ContainerWithState<
  S extends ExpressionContainerState,
  E extends Expression = Expression
> = ExpressionContainer<E> & {
  readonly containerState: S
}

export type SteppedExpressionContainer<E extends Expression = Expression> =
  | ContainerWithState<'done', E>
  | ContainerWithState<'prioritized', E>
  | ContainerWithState<'stepped', E>
