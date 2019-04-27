import { VariableNames } from 'src/types/yc/VariableNames'

export interface HighlightedVariableExpressionParams {
  readonly name: VariableNames
  readonly highlighted: true
}

export type VariableExpressionParams = VariableNames

export interface FunctionExpressionParams {
  readonly arg: VariableExpressionParams | HighlightedVariableExpressionParams
  readonly body: ExpressionParams
}
// https://github.com/Microsoft/TypeScript/issues/3496#issuecomment-128553540
export interface CallExpressionParams extends ReadonlyArray<ExpressionParams> {}

export type ExpressionParams =
  | VariableExpressionParams
  | FunctionExpressionParams
  | CallExpressionParams
  | HighlightedVariableExpressionParams
