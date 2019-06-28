import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'playButtonOnly',
  initialExpressionContainer: initialExpressionContainers.dpky,
  showPriorities: true,
  nextIterations: 12,
  variableSize: 'sm',
  skipToTheEnd: false,
  speed: 1.75
}

export default config
