import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  initialExpressionContainer: initialExpressionContainers.wzcw,
  showPriorities: true,
  isDone: true,
  caption: { name: 'secretCodeCaption', number: 3, letter: 'b' }
}

export default config
