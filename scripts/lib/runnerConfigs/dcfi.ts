import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'playButtonOnly',
  initialExpressionContainer: initialExpressionContainers.krta,
  showPriorities: true,
  skipToTheEnd: false,
  containerSize: 'xs',
  variableSize: 'md',
  speed: 5
}

export default config
