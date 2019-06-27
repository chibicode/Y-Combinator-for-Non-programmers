import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'playButtonOnly',
  initialExpressionContainer: initialExpressionContainers.ooeu,
  skipAlphaConvert: true,
  showPriorities: true,
  initialState: 'showFuncUnbound',
  lastAllowedExpressionState: 'showFuncBound',
  skipToTheEnd: false,
  speed: 1.75
}

export default config
