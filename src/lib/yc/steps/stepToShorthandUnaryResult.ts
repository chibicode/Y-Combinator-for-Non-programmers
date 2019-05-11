import {
  VariableShorthandUnaryNumber,
  StepChild
} from 'src/types/yc/ExpressionTypes'
import toDefault from 'src/lib/yc/toDefault'

const stepToShorthandUnaryResult = (
  e: VariableShorthandUnaryNumber
): StepChild<'default'> => {
  return toDefault({
    ...e,
    shorthandNumber: e.shorthandNumber - 1
  })
}

export default stepToShorthandUnaryResult
