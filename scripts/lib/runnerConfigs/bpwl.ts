import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  initialExpressionContainer: initialExpressionContainers.tgxv,
  showPriorities: true,
  caption: { name: 'secretCodeCaptionSimple', number: 3 }
}

export default config
