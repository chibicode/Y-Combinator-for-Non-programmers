import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  initialExpressionContainer: initialExpressionContainers.ipyc,
  showPriorities: true,
  highlightFunctions: true,
  containerSize: 'xs',
  variableSize: 'xxs',
  nextIterations: 6
}

export default config
