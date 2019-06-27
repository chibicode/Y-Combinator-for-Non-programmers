import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'playButtonOnly',
  initialExpressionContainer: initialExpressionContainers.kcia,
  showPriorities: true,
  containerSize: 'xs',
  variableSize: 'md',
  skipToTheEnd: false,
  speed: 3,
  highlightOverrides: { d: 'highlighted', e: 'highlighted' }
}

export default config
