import {
  ExecutableBinaryStatesDistributed,
  ExecutableBinary
} from 'src/types/ExpressionTypes'

const stepToBinaryActive = (
  e: ExecutableBinaryStatesDistributed
): ExecutableBinary<'active'> => {
  return {
    ...e,
    state: 'active'
  }
}

export default stepToBinaryActive
