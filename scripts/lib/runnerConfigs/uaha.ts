import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'predefined',
  initialExpressionContainers: [
    initialExpressionContainers.ocwu,
    initialExpressionContainers.fmlj
  ]
}

export default config
