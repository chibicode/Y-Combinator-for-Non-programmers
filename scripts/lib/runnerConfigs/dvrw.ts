import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  initialExpressionContainer: initialExpressionContainers.lhek,
  showPriorities: true,
  containerSize: 'xs',
  variableSize: 'md',
  caption: { name: 'ifCaption', ifZero: 'y', ifNonZero: ['w', 'x'] },
  highlightOverrides: { w: 'highlighted', x: 'highlighted' }
}

export default config
