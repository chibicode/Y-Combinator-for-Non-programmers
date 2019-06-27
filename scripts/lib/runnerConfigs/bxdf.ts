import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  initialExpressionContainer: initialExpressionContainers.cydn,
  showPriorities: true,
  caption: { name: 'secretCodeAddCaption' },
  containerSize: 'xs',
  variableSize: 'md'
}

export default config
