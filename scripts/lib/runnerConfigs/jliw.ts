import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'playButtonOnly',
  initialExpressionContainer: initialExpressionContainers.bjbm,
  showPriorities: true,
  containerSize: 'xs',
  variableSize: 'md',
  skipToTheEnd: false,
  speed: 3
}

export default config
