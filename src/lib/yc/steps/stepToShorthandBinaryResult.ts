import {
  ExecutableCallShorthandBinary,
  StepChild
} from 'src/types/yc/ExpressionTypes'
import { isVariableShorthandNumber } from 'src/lib/yc/expressionTypeGuards'
import toDefault from 'src/lib/yc/toDefault'

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
