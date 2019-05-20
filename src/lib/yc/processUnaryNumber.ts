import {
  StepVariableShorthandNonUnaryNumber,
  VariableShorthandUnaryNumber
} from 'src/types/yc/ExpressionTypes'

export default function processUnaryNumber(
  e: VariableShorthandUnaryNumber
): StepVariableShorthandNonUnaryNumber<'betaReducePreviewUnaryExecuted'> {
  return {
    ...e,
    topLeftBadgeType: 'none',
    bottomRightBadgeType: 'none',
    highlightType: 'active',
    shorthandNumber: e.shorthandNumber > 1 ? e.shorthandNumber - 1 : 0,
    shorthandUnary: undefined
  }
}
