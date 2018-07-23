import Immutable from 'immutable'

declare namespace ExpressionTypes {
  interface FunctionExpression {
    arg: string
    body: AnyExpression
  }

  interface CallExpression extends Array<AnyExpression> {
    [index: number]: FunctionExpression | string | CallExpression
  }

  type AnyExpression = string | FunctionExpression | CallExpression
}

declare namespace DecoratedExpressionTypes {
  type State = Immutable.Map<string, string>
  interface DecoratedFunctionExpression {
    value: Immutable.Record<FunctionExpression>
    state: State
  }

  interface DecoratedVariableExpression {
    value: string
    state: State
  }

  interface DecoratedCallExpression {
    value: Immutable.List<DecoratedAnyExpression>
    state: State
  }

  type DecoratedAnyExpression =
    | DecoratedFunctionExpression
    | DecoratedVariableExpression
    | DecoratedCallExpression
}
