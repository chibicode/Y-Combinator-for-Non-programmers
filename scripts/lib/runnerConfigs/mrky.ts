import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  initialExpressionContainer: initialExpressionContainers.rcfq,
  showPriorities: true,
  containerSize: 'xs',
  variableSize: 'md',
  highlightOverrides: { f: 'highlighted', g: 'highlighted' }
}

export default config
