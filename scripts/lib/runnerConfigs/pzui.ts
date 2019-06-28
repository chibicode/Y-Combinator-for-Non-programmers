import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'playButtonOnly',
  initialExpressionContainer: initialExpressionContainers.ipyc,
  showPriorities: true,
  containerSize: 'xs',
  variableSize: 'xxs',
  nextIterations: 6,
  skipToTheEnd: false,
  lastAllowedExpressionState: 'default',
  lastAllowedExpressionStateAfterIterations: 4,
  speed: 4
}

export default config
