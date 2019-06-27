import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'playButtonOnly',
  initialExpressionContainer: initialExpressionContainers.lles,
  showPriorities: true,
  skipToTheEnd: false,
  speed: 5,
  variableSize: 'xs',
  lastAllowedExpressionState: 'default',
  lastAllowedExpressionStateAfterIterations: 15
}

export default config
