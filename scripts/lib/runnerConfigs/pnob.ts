import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  initialExpressionContainer: initialExpressionContainers.qqiz,
  showPriorities: true,
  containerSize: 'xs',
  variableSize: 'md',
  caption: { name: 'secretCodeMinusOneCaption' }
}

export default config
