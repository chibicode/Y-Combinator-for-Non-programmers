import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  initialExpressionContainer: initialExpressionContainers.qexv,
  showPriorities: true,
  highlightOverrides: { s: 'highlighted' },
  variableSize: 'md',
  containerSize: 'xs'
}

export default config
