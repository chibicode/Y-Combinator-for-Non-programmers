import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  initialExpressionContainer: initialExpressionContainers.pubv,
  showPriorities: true,
  containerSize: 'xs',
  variableSize: 'sm',
  highlightOverrides: { e: 'highlighted', f: 'highlighted' }
}

export default config
