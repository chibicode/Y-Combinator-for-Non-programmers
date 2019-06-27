import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  initialExpressionContainer: initialExpressionContainers.gtnk,
  showPriorities: true,
  containerSize: 'xs',
  variableSize: 'xs',
  caption: { name: 'changedToPowerCaption' }
}

export default config
