import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'singleStep',
  hideFuncUnboundBadgeOnExplanation: true,
  initialExpressionContainer: initialExpressionContainers.nyhe,
  initialState: 'betaReducePreviewBefore',
  finalState: 'betaReducePreviewAfter'
}

export default config
