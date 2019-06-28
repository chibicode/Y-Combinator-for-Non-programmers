import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  initialExpressionContainer: initialExpressionContainers.dova,
  showPriorities: true,
  containerSize: 'xs',
  variableSize: 'md',
  highlightOverrides: { d: 'highlighted', e: 'highlighted' }
}

export default config
