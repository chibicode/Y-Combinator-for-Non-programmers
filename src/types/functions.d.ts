declare namespace ExpressionTypes {
  interface NumberExpression {
    type: 'number'
    value: number
  }

  interface VariableExpression {
    type: 'variable'
    name: string
  }

  interface FunctionExpression {
    type: 'function'
    args?: string[]
    body: AnyExpression
  }

  interface SumExpression {
    type: 'sum'
    left: CanReturnNumberExpression
    right: CanReturnNumberExpression
  }

  interface CallExpression {
    type: 'call'
    args?: AnyExpression[]
    func: CanReturnFunctionExpression
  }

  type CanReturnNumberExpression =
    | NumberExpression
    | VariableExpression
    | SumExpression
    | CallExpression

  type CanReturnFunctionExpression =
    | VariableExpression
    | FunctionExpression
    | CallExpression

  type AnyExpression = CanReturnNumberExpression | CanReturnFunctionExpression
}
