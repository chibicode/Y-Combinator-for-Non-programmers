declare namespace ExpressionTypes {
  interface FunctionExpression {
    arg: string
    body: AnyExpression
  }

  interface CallExpression {
    arg: AnyExpression
    func: AnyExpression
  }

  type AnyExpression = string | FunctionExpression | CallExpression
}
