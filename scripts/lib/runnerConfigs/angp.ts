import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  initialExpressionContainer: initialExpressionContainers.nxmy,
  showPriorities: true,
  containerSize: 'xs',
  variableSize: 'xs',
  nextIterations: 26
}

export default config
