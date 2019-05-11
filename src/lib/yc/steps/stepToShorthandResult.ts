import {
  ExecutableCallShorthandBinary,
  StepChild
} from 'src/types/yc/ExpressionTypes'
import toDefault from 'src/lib/yc/toDefault'

const stepToShorthandFuncResult = (
  e: ExecutableCallShorthandBinary
): StepChild<'default'> => {
  return toDefault(e.arg)
}

export default stepToShorthandFuncResult
