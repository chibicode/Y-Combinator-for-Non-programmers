export interface UndecoratedFunctionExpression {
  arg: string
  body: UndecoratedExpression
}

export interface UndecoratedCallExpression
  extends Array<UndecoratedExpression> {
  [index: number]:
    | UndecoratedFunctionExpression
    | string
    | UndecoratedCallExpression
}

export type UndecoratedExpression =
  | string
  | UndecoratedFunctionExpression
  | UndecoratedCallExpression
