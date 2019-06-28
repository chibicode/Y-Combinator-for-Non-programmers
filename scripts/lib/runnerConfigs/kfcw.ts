import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  initialExpressionContainer: initialExpressionContainers.toum,
  showPriorities: true,
  isDone: true,
  skipAlphaConvert: true,
  containerSize: 'xs',
  variableSize: 'md',
  caption: { name: 'notSecretCodeCaption', number: 2, letter: 'b' }
}

export default config
