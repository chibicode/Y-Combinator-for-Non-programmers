import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'playButtonOnly',
  initialExpressionContainer: initialExpressionContainers.ipyc,
  showPriorities: true,
  skipToTheEnd: false,
  containerSize: 'xs',
  variableSize: 'xxs',
  lastAllowedExpressionState: 'default',
  lastAllowedExpressionStateAfterIterations: 5,
  speed: 4
}

export default config
