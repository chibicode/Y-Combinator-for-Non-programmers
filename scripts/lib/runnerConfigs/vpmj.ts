import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  initialExpressionContainer: initialExpressionContainers.pvph,
  showPriorities: true,
  containerSize: 'xs',
  variableSize: 'xs',
  nextIterations: 21
}

export default config
