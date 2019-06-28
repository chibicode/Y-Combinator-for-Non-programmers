import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'singleStep',
  hideFuncUnboundBadgeOnExplanation: true,
  initialExpressionContainer: initialExpressionContainers.txbv,
  initialState: 'betaReducePreviewBefore',
  finalState: 'betaReducePreviewCrossed'
}

export default config
