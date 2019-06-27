import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  initialExpressionContainer: initialExpressionContainers.nskn,
  showPriorities: true,
  bottomRightBadgeOverrides: { f: '🅱️', e: '🅰️' }
}

export default config
