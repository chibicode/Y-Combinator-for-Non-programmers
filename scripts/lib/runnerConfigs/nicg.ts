import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  initialExpressionContainer: initialExpressionContainers.qbbl,
  showPriorities: true,
  caption: { name: 'secretCodeCaption', number: 0, letter: 'd' }
}

export default config
