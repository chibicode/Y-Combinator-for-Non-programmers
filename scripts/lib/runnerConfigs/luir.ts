import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'playButtonOnly',
  initialExpressionContainer: initialExpressionContainers.dpky,
  showPriorities: true,
  nextIterations: 3,
  skipToTheEnd: false,
  lastAllowedExpressionState: 'default',
  variableSize: 'md'
}

export default config
