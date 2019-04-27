import {
  CallExpressionParams,
  ExpressionParams,
  FunctionExpressionParams,
  VariableExpressionParams,
  HighlightedVariableExpressionParams
} from 'src/types/yc/ExpressionParamTypes'

export function isHighlightedVariableExpressionParams(
  expressionParams: ExpressionParams
): expressionParams is HighlightedVariableExpressionParams {
  return (
    !!(expressionParams as HighlightedVariableExpressionParams).name &&
    !!(expressionParams as HighlightedVariableExpressionParams).highlighted
  )
}

export function isVariableExpressionParams(
  expressionParams: ExpressionParams
): expressionParams is VariableExpressionParams {
  return typeof expressionParams === 'string'
}

export function isFunctionExpressionParams(
  expressionParams: ExpressionParams
): expressionParams is FunctionExpressionParams {
  return (
    !!(expressionParams as FunctionExpressionParams).arg &&
    !!(expressionParams as FunctionExpressionParams).body
  )
}

export function isCallExpressionParams(
  expressionParams: ExpressionParams
): expressionParams is CallExpressionParams {
  return Array.isArray(expressionParams)
}
