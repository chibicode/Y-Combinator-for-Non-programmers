import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'playButtonOnly',
  initialExpressionContainer: initialExpressionContainers.pqnt,
  showPriorities: true,
  containerSize: 'xs',
  variableSize: 'md',
  skipToTheEnd: false,
  speed: 4,
  skipAlphaConvert: true
}

export default config
