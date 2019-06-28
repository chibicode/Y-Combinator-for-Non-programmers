import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  initialExpressionContainer: initialExpressionContainers.druk,
  isDone: true,
  showPriorities: true,
  containerSize: 'xs',
  variableSize: 'md',
  caption: { name: 'secretCodeCaption', number: 2, letter: 'e' }
}

export default config
