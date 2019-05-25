import { ExecutableCallRegular, StepChild } from 'src/types/yc/ExpressionTypes'
import toDefault from 'src/lib/toDefault'

const removeCrossed = (e: ExecutableCallRegular): StepChild<'default'> =>
  toDefault(e.func.body)

export default removeCrossed
