import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  initialExpressionContainer: initialExpressionContainers.toum,
  showPriorities: true,
  initialState: 'showFuncUnbound',
  containerSize: 'xs',
  variableSize: 'md',
  highlightOverrides: { b: 'highlighted' },
  highlightOverridesCallArgAndFuncUnboundOnly: true,
  highlightOverrideActiveAfterStart: true,
  caption: { name: 'isCallArgAndFuncUnboundTheSameCaption', same: true }
}

export default config
