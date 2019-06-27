import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'playButtonOnly',
  initialExpressionContainer: initialExpressionContainers.pisd,
  showPriorities: true,
  initialState: 'active',
  lastAllowedExpressionState: 'betaReducePreviewCrossed',
  skipToTheEnd: false
}

export default config
