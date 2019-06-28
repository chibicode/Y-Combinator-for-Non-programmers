import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  initialExpressionContainer: initialExpressionContainers.yahz,
  showPriorities: true,
  caption: { name: 'secretCodeCaption', number: 1, letter: 'd' }
}

export default config
