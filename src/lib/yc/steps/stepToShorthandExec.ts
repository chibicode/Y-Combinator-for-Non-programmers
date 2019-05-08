import {
  ExecutableCallShorthand,
  StepChild
} from 'src/types/yc/ExpressionTypes'
import { isNumber } from 'src/lib/yc/expressionTypeGuards'
import toDefault from 'src/lib/yc/toDefault'

const stepToShorthandExec = (
  e: ExecutableCallShorthand
): StepChild<'default'> => {
  if (isNumber(e)) {
  }
  return toDefault(e)
}

export default stepToShorthandExec
