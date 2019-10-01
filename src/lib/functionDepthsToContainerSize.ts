import { allMaxWidths } from 'src/lib/theme/maxWidths'

const functionDepthsToContainerSize = (
  maxNestedFunctionDepth: number
): keyof typeof allMaxWidths => {
  if (maxNestedFunctionDepth >= 5) {
    return 'xs'
  } else if (maxNestedFunctionDepth >= 3) {
    return 'xsxs'
  } else {
    return 'xxs'
  }
}

export default functionDepthsToContainerSize
