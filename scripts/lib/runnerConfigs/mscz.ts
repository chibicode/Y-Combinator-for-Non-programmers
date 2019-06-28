import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  initialExpressionContainer: initialExpressionContainers.ipyc,
  showPriorities: true,
  variableSize: 'xs',
  containerSize: 'xs',
  isDone: true
}

export default config
