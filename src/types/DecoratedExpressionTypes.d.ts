export type State = Immutable.Map<string, string>
export interface DecoratedFunctionExpression {
  value: Immutable.Record<FunctionExpression>
  state: State
}

export interface DecoratedVariableExpression {
  value: string
  state: State
}

export interface DecoratedCallExpression {
  value: Immutable.List<DecoratedAnyExpression>
  state: State
}

export type DecoratedAnyExpression =
  | DecoratedFunctionExpression
  | DecoratedVariableExpression
  | DecoratedCallExpression
