import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'playButtonOnly',
  initialExpressionContainer: initialExpressionContainers.xryf,
  showPriorities: true,
  skipToTheEnd: false,
  speed: 1.75,
  highlightOverrides: { d: 'highlighted' }
}

export default config
