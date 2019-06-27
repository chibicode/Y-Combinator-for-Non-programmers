import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  initialExpressionContainer: initialExpressionContainers.jzhy,
  showPriorities: true,
  isDone: true,
  caption: { name: 'secretCodeCaption', number: 1, letter: 'c' }
}

export default config
