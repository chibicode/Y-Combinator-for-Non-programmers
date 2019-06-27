import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  initialExpressionContainer: initialExpressionContainers.awud,
  showPriorities: true,
  caption: { name: 'secretCodeCaption', number: 2, letter: 'd' }
}

export default config
