import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  showAllShowSteps: true,
  initialExpressionContainer: initialExpressionContainers.lqti,
  initialState: 'showFuncUnbound',
  showPriorities: true
}

export default config
