import { VariableNames } from 'src/types/yc/VariableNames'
import {
  FunctionExpressionMeta,
  VariableShorthandBinary,
  VariableShorthandUnary,
  VariableShorthandNumber
} from 'src/types/yc/ExpressionTypes'

export interface HighlightedVariableExpressionParams {
  readonly name: VariableNames
  readonly highlighted: true
}

export interface VariableShorthandBinaryParams {
  readonly name: VariableNames
  readonly shorthandBinary: VariableShorthandBinary['shorthandBinary']
}

export interface VariableShorthandNumberParams {
  readonly shorthandNumber: VariableShorthandNumber['shorthandNumber']
  readonly initialHighlight?: boolean
}

export interface VariableShorthandUnaryParams {
  readonly name: VariableNames
  readonly shorthandUnary: VariableShorthandUnary['shorthandUnary']
}

export type VariableExpressionParams = VariableNames

export interface FunctionExpressionParams {
  readonly arg: VariableExpressionParams | HighlightedVariableExpressionParams
  readonly body: ExpressionParams
  readonly meta?: FunctionExpressionMeta
}
// https://github.com/Microsoft/TypeScript/issues/3496#issuecomment-128553540
export interface CallExpressionParams extends ReadonlyArray<ExpressionParams> {}

export type ExpressionParams =
  | VariableExpressionParams
  | FunctionExpressionParams
  | CallExpressionParams
  | HighlightedVariableExpressionParams
  | VariableShorthandBinaryParams
  | VariableShorthandNumberParams
  | VariableShorthandUnaryParams
