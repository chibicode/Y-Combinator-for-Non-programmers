import { StepChild, ExecutableConditional } from 'src/types/ExpressionTypes'
import toDefault from 'src/lib/toDefault'

const stepToConditionalExecuted = (
  e: ExecutableConditional
): StepChild<'default'> => {
  if (e.condition.shorthandNumber === 0) {
    return toDefault(e.trueCase)
  } else {
    return toDefault(e.falseCase)
  }
}

export default stepToConditionalExecuted
