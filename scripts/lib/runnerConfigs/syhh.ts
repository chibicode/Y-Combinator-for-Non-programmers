import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'playButtonOnly',
  initialExpressionContainer: initialExpressionContainers.wzcw,
  showPriorities: true,
  containerSize: 'xs',
  variableSize: 'md',
  skipToTheEnd: false,
  highlightOverrides: { d: 'highlighted', e: 'highlighted' },
  speed: 3
}

export default config
