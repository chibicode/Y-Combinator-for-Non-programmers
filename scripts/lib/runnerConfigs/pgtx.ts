import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'playButtonOnly',
  initialExpressionContainer: initialExpressionContainers.ipyc,
  showPriorities: true,
  containerSize: 'xs',
  variableSize: 'xxs',
  nextIterations: 11,
  skipToTheEnd: false,
  lastAllowedExpressionState: 'conditionActive',
  lastAllowedExpressionStateAfterIterations: 2,
  speed: 4
}

export default config
