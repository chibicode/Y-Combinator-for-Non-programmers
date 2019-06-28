import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'playButtonOnly',
  initialExpressionContainer: initialExpressionContainers.lles,
  showPriorities: true,
  skipToTheEnd: false,
  speed: 1.75,
  nextIterations: 16,
  variableSize: 'sm'
}

export default config
