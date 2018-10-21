import {
  CallExpressionStates,
  Expression,
  PrioritizedExpression
} from 'src/types/yc/ExpressionTypes'
import { VariableNames } from 'src/types/yc/VariableNames'

export type ExpressionContainerState =
  | 'prioritized'
  | 'needsPrioritize'
  | 'needsReset'
  | 'done'

export type PreviouslyChangedExpressionState =
  | 'callArgJustHighlighted'
  | 'funcArgJustHighlighted'
  | 'funcBodyJustHighlighted'
  | 'funcBodyBoundedJustHighlighted'
  | 'funcBodyUnboundedJustHighlighted'
  | CallExpressionStates

export interface ExpressionContainer<E extends Expression = Expression> {
  readonly expression: E
  readonly containerState: ExpressionContainerState
  readonly previouslyChangedExpressionState: PreviouslyChangedExpressionState
  readonly conflictingVariableNames?: ReadonlyArray<VariableNames>
  readonly backupExpression?: E
  readonly matchExists?: boolean
}

export type PrioritizedExpressionContainer<
  E extends PrioritizedExpression = PrioritizedExpression
> = ExpressionContainer<E> & {
  readonly containerState: 'prioritized'
}

export function isPrioritizedExpressionContainer<
  E extends PrioritizedExpression = PrioritizedExpression
>(e: ExpressionContainer): e is PrioritizedExpressionContainer<E> {
  return e.containerState === 'prioritized'
}

export type NeedsPrioritizeExpressionContainer<
  E extends Expression = Expression
> = ExpressionContainer<E> & {
  readonly containerState: 'needsPrioritize'
}

export function isNeedsPrioritizeExpressionContainer<
  E extends Expression = Expression
>(e: ExpressionContainer): e is NeedsPrioritizeExpressionContainer<E> {
  return e.containerState === 'needsPrioritize'
}

export type NeedsResetExpressionContainer<
  E extends PrioritizedExpression = PrioritizedExpression
> = ExpressionContainer<E> & {
  readonly containerState: 'needsReset'
}

export function isNeedsResetExpressionContainer<
  E extends PrioritizedExpression = PrioritizedExpression
>(e: ExpressionContainer): e is NeedsResetExpressionContainer<E> {
  return e.containerState === 'needsReset'
}

export type DoneExpressionContainer<
  E extends PrioritizedExpression = PrioritizedExpression
> = ExpressionContainer<E> & {
  readonly containerState: 'done'
}

export function isDoneExpressionContainer<
  E extends PrioritizedExpression = PrioritizedExpression
>(e: ExpressionContainer): e is DoneExpressionContainer<E> {
  return e.containerState === 'done'
}

export type SteppedExpressionContainer<
  E extends PrioritizedExpression = PrioritizedExpression
> =
  | NeedsResetExpressionContainer<E>
  | DoneExpressionContainer<E>
  | PrioritizedExpressionContainer<E>
