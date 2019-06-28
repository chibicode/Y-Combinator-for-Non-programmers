import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'playButtonOnly',
  initialExpressionContainer: initialExpressionContainers.toum,
  showPriorities: true,
  skipToTheEnd: false,
  skipAlphaConvert: true,
  speed: 3,
  containerSize: 'xs',
  variableSize: 'md'
}

export default config
