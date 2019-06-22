import {
  ExecutableConditionalStatesDistributed,
  StepChild
} from 'src/types/ExpressionTypes'
import toDefault from 'scripts/lib/toDefault'

const stepToCaseProcessed = (
  e: ExecutableConditionalStatesDistributed,
  isTrue: boolean
): StepChild<'default'> => {
  if (isTrue) {
    return toDefault(e.trueCase)
  } else {
    return toDefault(e.falseCase)
  }
}

export default stepToCaseProcessed
