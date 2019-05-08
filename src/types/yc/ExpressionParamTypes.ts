import { VariableNames } from 'src/types/yc/VariableNames'
import {
  FunctionExpressionMeta,
  ShorthandFunctionExpression
} from 'src/types/yc/ExpressionTypes'

export interface HighlightedVariableExpressionParams {
  readonly name: VariableNames
  readonly highlighted: true
}

export type VariableExpressionParams = VariableNames

export interface FunctionExpressionParams {
  readonly arg: VariableExpressionParams | HighlightedVariableExpressionParams
  readonly body: ExpressionParams
  readonly meta?: FunctionExpressionMeta
}
// https://github.com/Microsoft/TypeScript/issues/3496#issuecomment-128553540
export interface CallExpressionParams extends ReadonlyArray<ExpressionParams> {}

export interface ShorthandFunctionExpressionParams {
  readonly shorthand: ShorthandFunctionExpression['name']
  readonly args?: ExpressionParams[]
}

export type ExpressionParams =
  | VariableExpressionParams
  | FunctionExpressionParams
  | CallExpressionParams
  | HighlightedVariableExpressionParams
  | ShorthandFunctionExpressionParams
