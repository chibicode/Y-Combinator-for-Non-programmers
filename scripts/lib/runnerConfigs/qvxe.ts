import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  initialExpressionContainer: initialExpressionContainers.xesp,
  showPriorities: true,
  bottomRightBadgeOverrides: { f: '🅱️', e: '🅰️' },
  caption: { name: 'secretCodeCaption', number: 2, letter: 'e' }
}

export default config
