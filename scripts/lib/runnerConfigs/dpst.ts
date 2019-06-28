import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  initialExpressionContainer: initialExpressionContainers.ooeu,
  showPriorities: true,
  skipAlphaConvert: true,
  initialState: 'showFuncUnbound',
  caption: { name: 'isCallArgAndFuncUnboundTheSameCaption', same: false }
}

export default config
