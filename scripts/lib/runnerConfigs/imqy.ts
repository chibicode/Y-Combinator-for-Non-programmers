import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  initialExpressionContainer: initialExpressionContainers.wzkr,
  showPriorities: true,
  variableSize: 'md',
  caption: { name: 'secretCodeCaption', number: 5, letter: 'i' },
  bottomRightBadgeOverrides: { j: '🅱️', i: '🅰️' }
}

export default config
