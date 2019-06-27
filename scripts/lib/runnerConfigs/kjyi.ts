import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'playButtonOnly',
  initialExpressionContainer: initialExpressionContainers.zgzf,
  skipAlphaConvert: true,
  showPriorities: true,
  nextIteration: true,
  initialState: 'showFuncBound',
  skipToTheEnd: false,
  speed: 1.75
}

export default config
