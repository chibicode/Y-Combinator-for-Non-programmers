import {
  ExecutableCallShorthandBinary,
  StepChild
} from 'src/types/yc/ExpressionTypes'
import { isVariableShorthandNumber } from 'src/lib/expressionTypeGuards'
import toDefault from 'src/lib/toDefault'

const stepToShorthandBinaryResult = (
  e: ExecutableCallShorthandBinary
): StepChild<'default'> => {
  if (isVariableShorthandNumber(e.func)) {
    if (e.func.shorthandNumber === 0) {
      return { ...toDefault(e.func), shorthandBinary: undefined }
    } else {
      return toDefault(e.arg)
    }
  }
  throw new Error()
}

export default stepToShorthandBinaryResult
