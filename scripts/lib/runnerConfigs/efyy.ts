import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'singleStep',
  initialExpressionContainer: initialExpressionContainers.lqti,
  initialState: 'betaReducePreviewBefore',
  finalState: 'betaReducePreviewAfter',
  showPriorities: true
}

export default config
