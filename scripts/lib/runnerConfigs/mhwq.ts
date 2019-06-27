import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  initialExpressionContainer: initialExpressionContainers.tfqn,
  showPriorities: true,
  caption: { name: 'secretCodeCaption', number: 1, letter: 'g' }
}

export default config
