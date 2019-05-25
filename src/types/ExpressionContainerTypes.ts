import { CallStates, Expression } from 'src/types/ExpressionTypes'

export type ExpressionContainerStates =
  | 'ready'
  | 'stepped'
  | 'needsPrioritize'
  | 'needsReset'
  | 'done'

export interface ExpressionContainer<E extends Expression = Expression> {
  readonly expression: E
  readonly containerState: ExpressionContainerStates
  readonly previouslyChangedExpressionState: CallStates
  readonly matchExists?: boolean
  readonly executableUnaryExists?: boolean
  readonly activePriority?: number
}

export type ContainerWithState<
  S extends ExpressionContainerStates,
  E extends Expression = Expression
> = ExpressionContainer<E> & {
  readonly containerState: S
}

export type SteppedExpressionContainer<E extends Expression = Expression> =
  | ContainerWithState<'done', E>
  | ContainerWithState<'ready', E>
  | ContainerWithState<'stepped', E>
