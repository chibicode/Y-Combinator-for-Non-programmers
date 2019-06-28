import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'playButtonOnly',
  initialExpressionContainer: initialExpressionContainers.dpky,
  showPriorities: true,
  nextIterations: 4,
  skipToTheEnd: false,
  initialState: 'magicalExpanded',
  lastAllowedExpressionState: 'default',
  lastAllowedExpressionStateAfterIterations: 3,
  speed: 1.75,
  variableSize: 'sm'
}

export default config
