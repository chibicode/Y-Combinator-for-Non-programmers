import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'playButtonOnly',
  initialExpressionContainer: initialExpressionContainers.dova,
  showPriorities: true,
  containerSize: 'xs',
  variableSize: 'md',
  skipToTheEnd: false,
  speed: 1.75
}

export default config
