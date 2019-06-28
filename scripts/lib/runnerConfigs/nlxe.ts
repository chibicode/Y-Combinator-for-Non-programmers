import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  initialExpressionContainer: initialExpressionContainers.jxut,
  showPriorities: true,
  containerSize: 'xs',
  variableSize: 'md',
  caption: { name: 'ifCaption', ifZero: 'y', ifNonZero: 'z' }
}

export default config
