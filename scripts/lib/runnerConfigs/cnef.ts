import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  initialExpressionContainer: initialExpressionContainers.oesh,
  showPriorities: true,
  containerSize: 'xs',
  variableSize: 'sm',
  highlightOverrides: { a: 'highlighted', b: 'highlighted' }
}

export default config
