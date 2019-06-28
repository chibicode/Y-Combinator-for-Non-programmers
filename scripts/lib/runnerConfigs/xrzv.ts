import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  initialExpressionContainer: initialExpressionContainers.zjhi,
  showPriorities: true,
  containerSize: 'xs',
  variableSize: 'md',
  caption: { name: 'thisIsYCombinatorCaption', too: true }
}

export default config
