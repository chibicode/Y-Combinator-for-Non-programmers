import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'playButtonOnly',
  initialExpressionContainer: initialExpressionContainers.ooeu,
  showPriorities: true,
  skipToTheEnd: false,
  speed: 1.75,
  highlightOverrides: { c: 'highlighted' }
}

export default config
