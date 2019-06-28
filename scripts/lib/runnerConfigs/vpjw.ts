import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'playButtonOnly',
  initialExpressionContainer: initialExpressionContainers.zgzf,
  explanationsVisibility: 'hiddenInitialAndLastPausedOnly',
  skipAlphaConvert: true,
  showPriorities: true,
  initialState: 'showFuncUnbound',
  lastAllowedExpressionState: 'showFuncBound',
  highlightOverrides: { b: 'highlighted' },
  skipToTheEnd: false,
  speed: 1.75
}

export default config
