import {
  ExecutableConditionalStatesDistributed,
  ExecutableConditional
} from 'src/types/ExpressionTypes'

const stepToCaseOnly = (
  e: ExecutableConditionalStatesDistributed,
  isTrue: boolean
):
  | ExecutableConditional<'trueCaseOnly'>
  | ExecutableConditional<'falseCaseOnly'> => {
  if (isTrue) {
    return {
      ...e,
      state: 'trueCaseOnly'
    }
  } else {
    return {
      ...e,
      state: 'falseCaseOnly'
    }
  }
}

export default stepToCaseOnly
