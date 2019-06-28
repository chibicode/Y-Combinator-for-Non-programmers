import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'playButtonOnly',
  initialExpressionContainer: initialExpressionContainers.pxps,
  showPriorities: true,
  skipToTheEnd: false,
  containerSize: 'xs',
  variableSize: 'sm',
  speed: 5
}

export default config
