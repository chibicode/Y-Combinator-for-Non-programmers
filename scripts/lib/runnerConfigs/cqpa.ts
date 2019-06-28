import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  initialExpressionContainer: initialExpressionContainers.mbco,
  showPriorities: true,
  caption: { name: 'secretCodeCaption', number: 2, letter: 'A' }
}

export default config
