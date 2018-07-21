declare namespace ExpressionTypes {
  interface VariableExpression {
    type: 'variable'
    name: string
  }

  interface FunctionExpression {
    type: 'function'
    arg: VariableExpression
    body: AnyExpression
  }

  interface CallExpression {
    type: 'call'
    arg: AnyExpression
    func: CanReturnFunctionExpression
  }

  type AnyExpression = VariableExpression | FunctionExpression | CallExpression
}
