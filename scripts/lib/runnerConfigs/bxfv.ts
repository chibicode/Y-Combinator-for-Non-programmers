import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  initialExpressionContainer: initialExpressionContainers.jxut,
  showPriorities: true,
  containerSize: 'xs',
  variableSize: 'md',
  highlightOverrides: { z: 'highlighted', y: 'highlighted' }
}

export default config
