import { Expression } from 'src/types/ExpressionTypes'

import {
  ContainerWithState,
  ExpressionContainer,
  ExpressionContainerStates
} from 'src/types/ExpressionContainerTypes'

export function isContainerWithState<
  S extends ExpressionContainerStates,
  E extends Expression = Expression
>(e: ExpressionContainer, state: S): e is ContainerWithState<S, E> {
  return e.containerState === state
}
