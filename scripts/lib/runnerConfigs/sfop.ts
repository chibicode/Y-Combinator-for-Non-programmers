import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  initialExpressionContainer: initialExpressionContainers.jpac,
  showPriorities: true,
  bottomRightBadgeOverrides: { h: '🅱️', g: '🅰️' },
  caption: { name: 'secretCodeCaption', number: 3, letter: 'g' }
}

export default config
