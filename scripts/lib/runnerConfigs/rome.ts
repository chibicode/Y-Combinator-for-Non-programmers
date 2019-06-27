import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'playButtonOnly',
  initialExpressionContainer: initialExpressionContainers.qhnf,
  showPriorities: true,
  containerSize: 'xs',
  variableSize: 'sm',
  skipToTheEnd: false,
  speed: 5
}

export default config
