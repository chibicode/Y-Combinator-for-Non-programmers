import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  initialExpressionContainer: initialExpressionContainers.mzxw,
  showPriorities: true,
  caption: { name: 'secretCodeCaption', number: 0, letter: 'a' },
  bottomRightBadgeOverrides: { b: '🅱️', a: '🅰️' }
}

export default config
