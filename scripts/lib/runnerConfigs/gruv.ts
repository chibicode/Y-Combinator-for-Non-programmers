import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'predefined',
  initialExpressionContainers: [
    initialExpressionContainers.jnac,
    initialExpressionContainers.sbvu
  ]
}

export default config
