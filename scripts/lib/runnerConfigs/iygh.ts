import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  initialExpressionContainer: initialExpressionContainers.fzwa,
  showPriorities: true,
  variableSize: 'md',
  highlightOverrides: { abbreviated: 'highlighted' },
  highlightOverrideActiveAfterStart: true
}

export default config
