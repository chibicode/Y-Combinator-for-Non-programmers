import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  initialExpressionContainer: initialExpressionContainers.zgzf,
  showPriorities: true,
  skipAlphaConvert: true,
  initialState: 'showFuncUnbound',
  highlightOverrides: { b: 'highlighted' },
  caption: { name: 'isCallArgAndFuncUnboundTheSameCaption', same: true },
  highlightOverrideActiveAfterStart: true
}

export default config
