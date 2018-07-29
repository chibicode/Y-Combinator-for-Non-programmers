export type VariableExpressionParams = string

export interface FunctionExpressionParams {
  arg: VariableExpressionParams
  body: ExpressionParams
}

// https://github.com/Microsoft/TypeScript/issues/3496#issuecomment-128553540
export interface CallExpressionParams extends Array<ExpressionParams> {}

export type ExpressionParams =
  | VariableExpressionParams
  | FunctionExpressionParams
  | CallExpressionParams
