import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'playButtonOnly',
  initialExpressionContainer: initialExpressionContainers.lqti,
  initialState: 'active',
  lastAllowedExpressionState: 'showFuncBound',
  showPriorities: true,
  showAllShowSteps: true,
  skipToTheEnd: false,
  explanationsVisibility: 'hiddenInitialAndLastPausedOnly'
}

export default config
