import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  initialExpressionContainer: initialExpressionContainers.pubv,
  showPriorities: true,
  isDone: true,
  caption: { name: 'secretCodeCaption', number: 4, letter: 'c' }
}

export default config
