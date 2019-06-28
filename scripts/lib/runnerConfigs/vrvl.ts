import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  initialExpressionContainer: initialExpressionContainers.gqsr,
  showPriorities: true,
  caption: { name: 'secretCodeCaption', number: 2, letter: 'g' }
}

export default config
