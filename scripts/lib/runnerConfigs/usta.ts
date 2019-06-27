import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'playButtonOnly',
  initialExpressionContainer: initialExpressionContainers.bndu,
  initialState: 'showCallArg',
  skipToTheEnd: false,
  showAllShowSteps: true,
  showPriorities: true
}

export default config
