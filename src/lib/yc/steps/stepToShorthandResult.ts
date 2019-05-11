import {
  ExecutableCallShorthand,
  StepChild
} from 'src/types/yc/ExpressionTypes'
import toDefault from 'src/lib/yc/toDefault'

const stepToShorthandFuncResult = (
  e: ExecutableCallShorthand
): StepChild<'default'> => {
  return toDefault(e.arg)
}

export default stepToShorthandFuncResult
