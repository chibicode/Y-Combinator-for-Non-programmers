import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'playButtonOnly',
  initialExpressionContainer: initialExpressionContainers.dpky,
  showPriorities: true,
  nextIteration: true,
  skipToTheEnd: false,
  lastAllowedExpressionState: 'default',
  variableSize: 'md'
}

export default config
