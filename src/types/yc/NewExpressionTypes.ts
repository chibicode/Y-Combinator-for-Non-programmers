interface BaseVariableExpression {
  readonly type: 'variable'
}

interface BaseCallExpression {
  readonly type: 'call'
  readonly arg: Expression
  readonly func: Expression
}

interface BaseFunctionExpression {
  readonly type: 'function'
  readonly arg: BaseVariableExpression
  readonly body: Expression
}

export type Expression =
  | BaseVariableExpression
  | BaseCallExpression
  | BaseFunctionExpression

export type VariableExpression = BaseVariableExpression

export interface CallExpression<
  A extends Expression = Expression,
  F extends Expression = Expression
> extends BaseCallExpression {
  readonly arg: A
  readonly func: F
}

export interface FunctionExpression<
  V extends VariableExpression = VariableExpression,
  B extends Expression = Expression
> extends BaseFunctionExpression {
  readonly arg: V
  readonly body: B
}

export interface PriorityAggregates {
  readonly argPriorityAgg: number[]
  readonly funcPriorityAgg: number[]
}

export interface PrioritizedVariableExpression
  extends VariableExpression,
    PriorityAggregates {}

export interface PrioritizedCallExpression<
  A extends PrioritizedExpression = PrioritizedExpression,
  F extends PrioritizedExpression = PrioritizedExpression
> extends CallExpression<A, F> {
  readonly priority: number
}

export interface PrioritizedFunctionExpression<
  V extends PrioritizedVariableExpression = PrioritizedVariableExpression,
  B extends PrioritizedExpression = PrioritizedExpression
> extends FunctionExpression<V, B> {}

export type PrioritizedExpression =
  | PrioritizedVariableExpression
  | PrioritizedCallExpression
  | PrioritizedFunctionExpression

export type WithDefaultState<E extends Expression> = E & {
  readonly state: 'default'
}

export type DefaultStateExpression =
  | WithDefaultState<VariableExpression>
  | WithDefaultState<
      CallExpression<WithDefaultState<Expression>, WithDefaultState<Expression>>
    >
  | WithDefaultState<
      FunctionExpression<
        WithDefaultState<VariableExpression>,
        WithDefaultState<Expression>
      >
    >

type Prioritized<E extends Expression> = E extends VariableExpression
  ? E & PriorityAggregates
  : E extends CallExpression
    ? E &
        CallExpression<Prioritized<E['arg']>, Prioritized<E['func']>> & {
          priority: number
        }
    : E
