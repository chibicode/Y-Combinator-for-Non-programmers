import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'predefined',
  initialExpressionContainers: [
    initialExpressionContainers.mrab,
    initialExpressionContainers.vzpd
  ]
}

export default config
