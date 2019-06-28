import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'predefined',
  initialExpressionContainers: [
    initialExpressionContainers.kysf,
    initialExpressionContainers.zrwn
  ]
}

export default config
