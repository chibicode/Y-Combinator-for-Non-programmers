import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  initialExpressionContainer: initialExpressionContainers.tgxv,
  showPriorities: true,
  bottomRightBadgeOverrides: { h: '🅱️', g: '🅰️' }
}

export default config
