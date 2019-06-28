import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'playButtonOnly',
  initialExpressionContainer: initialExpressionContainers.ipyc,
  showPriorities: true,
  containerSize: 'xs',
  variableSize: 'xxs',
  nextIterations: 14,
  skipToTheEnd: false,
  initialState: 'conditionActive',
  lastAllowedExpressionState: 'default'
}

export default config
