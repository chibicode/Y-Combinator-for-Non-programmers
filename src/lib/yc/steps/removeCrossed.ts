import { toDefault } from 'src/lib/yc/steps/stepToDefault'
import { ExecutableCall, StepChild } from 'src/types/yc/ExpressionTypes'

const removeCrossed = (e: ExecutableCall): StepChild<'default'> =>
  toDefault(e.func.body)

export default removeCrossed
