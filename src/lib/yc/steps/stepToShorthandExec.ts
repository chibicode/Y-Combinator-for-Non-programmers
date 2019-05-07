import {
  ExecutableCallShorthand,
  StepChild
} from 'src/types/yc/ExpressionTypes'
import toDefault from 'src/lib/yc/toDefault'

const stepToShorthandExec = (
  e: ExecutableCallShorthand
): StepChild<'default'> => toDefault(e.arg)

export default stepToShorthandExec
