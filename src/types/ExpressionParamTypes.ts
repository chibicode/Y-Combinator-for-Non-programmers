import { VariableNames, variableNamesArray } from 'src/types/VariableNames'

export type VariableExpressionParams = VariableNames

export function isVariableExpressionParams(
  expressionParams: ExpressionParams
): expressionParams is VariableExpressionParams {
  return (
    typeof expressionParams === 'string' &&
    variableNamesArray.indexOf(expressionParams) >= 0
  )
}

export interface FunctionExpressionParams {
  readonly arg: VariableExpressionParams
  readonly body: ExpressionParams
}

export function isFunctionExpressionParams(
  expressionParams: ExpressionParams
): expressionParams is FunctionExpressionParams {
  return (
    !!(expressionParams as FunctionExpressionParams).arg &&
    !!(expressionParams as FunctionExpressionParams).body
  )
}

// https://github.com/Microsoft/TypeScript/issues/3496#issuecomment-128553540
export interface CallExpressionParams extends ReadonlyArray<ExpressionParams> {}

export function isCallExpressionParams(
  expressionParams: ExpressionParams
): expressionParams is CallExpressionParams {
  return Array.isArray(expressionParams)
}

export type ExpressionParams =
  | VariableExpressionParams
  | FunctionExpressionParams
  | CallExpressionParams
