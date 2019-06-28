import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  initialExpressionContainer: initialExpressionContainers.povy,
  showPriorities: true,
  caption: { name: 'secretCodeCaption', number: 1, letter: 'e' }
}

export default config
