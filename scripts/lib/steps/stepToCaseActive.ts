import {
  ExecutableConditional,
  ExecutableConditionalStatesDistributed
} from 'src/types/ExpressionTypes'

const stepToCaseActive = (
  e: ExecutableConditionalStatesDistributed
):
  | ExecutableConditional<'trueCaseActive'>
  | ExecutableConditional<'falseCaseActive'> => {
  if (e.condition.shorthandNumber === 0) {
    return {
      ...e,
      state: 'trueCaseActive'
    }
  } else {
    return {
      ...e,
      state: 'falseCaseActive'
    }
  }
}

export default stepToCaseActive
