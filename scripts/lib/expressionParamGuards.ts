import {
  CallExpressionParams,
  ExpressionParams,
  FunctionExpressionParams,
  VariableShorthandUnaryParams,
  VariableExpressionParams,
  VariableShorthandBinaryParams,
  VariableShorthandNumberParams,
  HighlightedVariableExpressionParams,
  ConditionalExpressionParams,
  MagicalVariableParams,
  VariableShorthandFuncParams,
  QuestionPlusOrMinusOneParams,
  QuestionShorthandNumberAfterConvertParams
} from 'src/types/ExpressionParamTypes'

export function isHighlightedVariableExpressionParams(
  expressionParams: ExpressionParams
): expressionParams is HighlightedVariableExpressionParams {
  return (
    !!(expressionParams as HighlightedVariableExpressionParams).name &&
    !!(expressionParams as HighlightedVariableExpressionParams).highlighted
  )
}

export function isVariableShorthandBinaryParams(
  expressionParams: ExpressionParams
): expressionParams is VariableShorthandBinaryParams {
  return !!(expressionParams as VariableShorthandBinaryParams).shorthandBinary
}

export function isVariableShorthandUnaryParams(
  expressionParams: ExpressionParams
): expressionParams is VariableShorthandUnaryParams {
  return (
    !!(expressionParams as VariableShorthandUnaryParams).name &&
    !!(expressionParams as VariableShorthandUnaryParams).shorthandUnary
  )
}

export function isVariableShorthandNumberParams(
  expressionParams: ExpressionParams
): expressionParams is VariableShorthandNumberParams {
  return (
    (expressionParams as VariableShorthandNumberParams).shorthandNumber !==
    undefined
  )
}

export function isVariableShorthandFuncParams(
  expressionParams: ExpressionParams
): expressionParams is VariableShorthandFuncParams {
  return (
    (expressionParams as VariableShorthandFuncParams).shorthandFunc !==
    undefined
  )
}

export function isMagicalVariableParams(
  expressionParams: ExpressionParams
): expressionParams is MagicalVariableParams {
  return (expressionParams as MagicalVariableParams).magical !== undefined
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

export function isConditionalParams(
  expressionParams: ExpressionParams
): expressionParams is ConditionalExpressionParams {
  return (
    !!(expressionParams as ConditionalExpressionParams).condition &&
    !!(expressionParams as ConditionalExpressionParams).trueCase &&
    !!(expressionParams as ConditionalExpressionParams).falseCase &&
    !!(expressionParams as ConditionalExpressionParams).checkType
  )
}

export function isQuestionPlusOrMinusOneParams(
  expressionParams: ExpressionParams
): expressionParams is QuestionPlusOrMinusOneParams {
  return (
    (expressionParams as QuestionPlusOrMinusOneParams)
      .shorthandNumberPlusOrMinusOne !== undefined
  )
}

export function isQuestionShorthandNumberAfterConvertParams(
  expressionParams: ExpressionParams
): expressionParams is QuestionShorthandNumberAfterConvertParams {
  return !!(expressionParams as QuestionShorthandNumberAfterConvertParams)
    .shorthandNumberAfterConvert
}
