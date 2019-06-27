import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  initialExpressionContainer: initialExpressionContainers.kcia,
  showPriorities: true,
  isDone: true,
  caption: { name: 'secretCodeCaption', number: 2, letter: 'b' }
}

export default config
