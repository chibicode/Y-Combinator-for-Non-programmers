import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  initialExpressionContainer: initialExpressionContainers.jsdg,
  showPriorities: true,
  isDone: true,
  variableSize: 'md',
  caption: { name: 'secretCodeCaption', number: 6, letter: 'c' }
}

export default config
