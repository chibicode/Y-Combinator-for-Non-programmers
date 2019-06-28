import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  initialExpressionContainer: initialExpressionContainers.qhnf,
  showPriorities: true,
  isDone: true,
  caption: { name: 'secretCodeCaption', number: 3, letter: 'c' }
}

export default config
