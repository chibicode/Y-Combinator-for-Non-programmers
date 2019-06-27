import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  initialExpressionContainer: initialExpressionContainers.edvm,
  showPriorities: true,
  highlightOverrides: { a: 'highlighted', b: 'highlighted' },
  variableSize: 'xs',
  containerSize: 'xs'
}

export default config
