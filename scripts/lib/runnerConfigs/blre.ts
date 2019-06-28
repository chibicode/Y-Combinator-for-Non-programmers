import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  initialExpressionContainer: initialExpressionContainers.mzxw,
  showPriorities: true,
  bottomRightBadgeOverrides: { b: '🅱️', a: '🅰️' }
}

export default config
