import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'singleStep',
  initialExpressionContainer: initialExpressionContainers.atls,
  initialState: 'active',
  finalState: 'showFuncBound',
  hideFuncUnboundBadgeOnExplanation: true
}

export default config
