import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'playButtonOnly',
  initialExpressionContainer: initialExpressionContainers.dpky,
  showPriorities: true,
  nextIterations: 8,
  skipToTheEnd: false,
  lastAllowedExpressionState: 'conditionActive',
  initialState: 'magicalExpanded',
  speed: 1.75,
  variableSize: 'sm'
}

export default config
