import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'singleStep',
  initialExpressionContainer: initialExpressionContainers.atls,
  initialState: 'betaReducePreviewBefore',
  finalState: 'betaReducePreviewAfter'
}

export default config
