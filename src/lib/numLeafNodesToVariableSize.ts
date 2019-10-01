import { VariableSizes } from 'src/types/VariableSizes'

const numLeafNodesToVariableSize = (numLeafNodes: number): VariableSizes => {
  if (numLeafNodes <= 5) {
    return 'lg'
  } else if (numLeafNodes <= 8) {
    return 'md'
  } else if (numLeafNodes <= 10) {
    return 'sm'
  } else if (numLeafNodes <= 12) {
    return 'xs'
  } else if (numLeafNodes <= 14) {
    return 'xxs'
  } else {
    return 'xxxs'
  }
}

export default numLeafNodesToVariableSize
