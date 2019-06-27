import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  initialExpressionContainer: initialExpressionContainers.dupe,
  highlightOverrides: { Amult: 'highlighted' },
  caption: { name: 'numberOfAIsSecretCodeCaption' }
}

export default config
