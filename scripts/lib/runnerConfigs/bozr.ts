import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'playButtonOnly',
  initialExpressionContainer: initialExpressionContainers.nxmy,
  showPriorities: true,
  containerSize: 'xs',
  variableSize: 'xxs',
  lastAllowedExpressionState: 'default',
  skipToTheEnd: false,
  speed: 5,
  lastAllowedExpressionStateAfterIterations: 25,
  superFastForward: true
}

export default config
