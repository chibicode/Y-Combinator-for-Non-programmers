import { ExpressionRunnerProps } from 'src/types/ExpressionRunnerTypes'

const functionDepthsToContainerSize = (
  maxNestedFunctionDepth: number
): ExpressionRunnerProps['containerSize'] => {
  if (maxNestedFunctionDepth >= 5) {
    return 'xs'
  } else if (maxNestedFunctionDepth >= 3) {
    return 'xsxs'
  } else {
    return 'xxs'
  }
}

export default functionDepthsToContainerSize
