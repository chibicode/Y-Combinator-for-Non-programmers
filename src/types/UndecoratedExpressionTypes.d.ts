export type UndecoratedVariableExpression = string

export interface UndecoratedFunctionExpression {
  arg: UndecoratedVariableExpression
  body: UndecoratedExpression
}

// https://github.com/Microsoft/TypeScript/issues/3496#issuecomment-128553540
export interface UndecoratedCallExpression
  extends Array<UndecoratedExpression> {}

export type UndecoratedExpression =
  | UndecoratedVariableExpression
  | UndecoratedFunctionExpression
  | UndecoratedCallExpression
