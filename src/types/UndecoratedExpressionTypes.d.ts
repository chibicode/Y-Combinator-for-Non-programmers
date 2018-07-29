export interface UndecoratedFunctionExpression {
  arg: string
  body: UndecoratedExpression
}

// https://github.com/Microsoft/TypeScript/issues/3496#issuecomment-128553540
export interface UndecoratedCallExpression
  extends Array<UndecoratedExpression> {}

export type UndecoratedExpression =
  | string
  | UndecoratedFunctionExpression
  | UndecoratedCallExpression
