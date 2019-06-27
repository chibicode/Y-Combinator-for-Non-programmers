import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  initialExpressionContainer: initialExpressionContainers.ntes,
  showPriorities: true,
  bottomRightBadgeOverrides: { d: '🅱️', c: '🅰️' }
}

export default config
