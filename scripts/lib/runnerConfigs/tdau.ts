import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  initialExpressionContainer: initialExpressionContainers.bpua,
  showPriorities: true,
  highlightOverrides: { s: 'highlighted' },
  variableSize: 'md',
  caption: { name: 'witchReplacedCaption' }
}

export default config
