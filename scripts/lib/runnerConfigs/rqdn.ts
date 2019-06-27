import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'playButtonOnly',
  initialExpressionContainer: initialExpressionContainers.pxps,
  showPriorities: true,
  explanationsVisibility: 'hiddenInitialPausedOnly',
  lastAllowedExpressionState: 'needsAlphaConvert',
  containerSize: 'xs',
  variableSize: 'md',
  speed: 5,
  skipToTheEnd: false
}

export default config
