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
