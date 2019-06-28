import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'playButtonOnly',
  initialExpressionContainer: initialExpressionContainers.ipyc,
  showPriorities: true,
  containerSize: 'xs',
  variableSize: 'xxs',
  nextIterations: 16,
  skipToTheEnd: false,
  speed: 1.75
}

export default config
