import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'playButtonOnly',
  initialExpressionContainer: initialExpressionContainers.lqti,
  initialState: 'betaReducePreviewAfter',
  showPriorities: true,
  skipToTheEnd: false
}

export default config
