import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'singleStep',
  hideFuncUnboundBadgeOnExplanation: true,
  initialExpressionContainer: initialExpressionContainers.nyhe,
  initialState: 'active',
  finalState: 'showFuncBound'
}

export default config
