import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  initialExpressionContainer: initialExpressionContainers.gebx,
  showPriorities: true,
  containerSize: 'xs',
  variableSize: 'sm',
  highlightOverrides: { g: 'highlighted', h: 'highlighted' }
}

export default config
