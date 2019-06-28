import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  initialExpressionContainer: initialExpressionContainers.dova,
  showPriorities: true,
  isDone: true,
  caption: { name: 'secretCodeCaption', number: 1, letter: 'b' }
}

export default config
