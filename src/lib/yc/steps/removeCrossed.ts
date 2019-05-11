import { ExecutableCall, StepChild } from 'src/types/yc/ExpressionTypes'
import toDefault from 'src/lib/yc/toDefault'

const removeCrossed = (e: ExecutableCall): StepChild<'default'> =>
  toDefault(e.func.body)

export default removeCrossed
