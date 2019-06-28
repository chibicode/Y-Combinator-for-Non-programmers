import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  initialExpressionContainer: initialExpressionContainers.govs,
  showPriorities: true,
  containerSize: 'xs',
  variableSize: 'md',
  caption: { name: 'secretCodeAddOneCaption' }
}

export default config
