import {
  ExecutableConditionalStatesDistributed,
  ExecutableConditional
} from 'src/types/ExpressionTypes'

const stepToConditionActive = (
  e: ExecutableConditionalStatesDistributed
): ExecutableConditional<'conditionActive'> => {
  return {
    ...e,
    state: 'conditionActive'
  }
}

export default stepToConditionActive
