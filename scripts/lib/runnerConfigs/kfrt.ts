import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  initialExpressionContainer: initialExpressionContainers.ipyc,
  showPriorities: true,
  containerSize: 'xs',
  variableSize: 'xxs',
  nextIterations: 11,
  highlightFunctions: true
}

export default config
