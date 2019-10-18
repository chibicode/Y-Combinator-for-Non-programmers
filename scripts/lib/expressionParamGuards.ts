import {
  CallExpressionParams,
  ExpressionParams,
  FunctionExpressionParams,
  VariableExpressionParams,
  VariableShorthandNumberParams,
  HighlightedVariableExpressionParams,
  ConditionalExpressionParams,
  VariableShorthandFuncParams,
  QuestionShorthandNumberAfterConvertParams,
  RepeatExpressionParams
} from 'src/types/ExpressionParamTypes'

export function isHighlightedVariableExpressionParams(
  expressionParams: ExpressionParams
): expressionParams is HighlightedVariableExpressionParams {
  return (
    !!(expressionParams as HighlightedVariableExpressionParams).name &&
    !!(expressionParams as HighlightedVariableExpressionParams).highlighted
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

export function isQuestionShorthandNumberAfterConvertParams(
  expressionParams: ExpressionParams
): expressionParams is QuestionShorthandNumberAfterConvertParams {
  return !!(expressionParams as QuestionShorthandNumberAfterConvertParams)
    .shorthandNumberAfterConvert
}

export function isRepeatExpressionParams(
  expressionParams: ExpressionParams
): expressionParams is RepeatExpressionParams {
  return !!(expressionParams as RepeatExpressionParams).child
}
