import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  initialExpressionContainer: initialExpressionContainers.dpky,
  showPriorities: true,
  nextIteration: true,
  highlightOverrideActiveAfterStart: true,
  highlightOverrides: { magical: 'highlighted' },
  variableSize: 'md',
  caption: { name: 'witchAppearsAgainCaption' }
}

export default config
