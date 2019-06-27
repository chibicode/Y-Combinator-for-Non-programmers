import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  initialExpressionContainer: initialExpressionContainers.gtnk,
  showPriorities: true,
  containerSize: 'xs',
  variableSize: 'xs',
  nextIterations: 16
}

export default config
