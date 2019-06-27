import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  initialExpressionContainer: initialExpressionContainers.jbvr,
  showPriorities: true,
  containerSize: 'xs',
  variableSize: 'md',
  highlightOverrides: { g: 'highlighted', h: 'highlighted' },
  caption: { name: 'secretCodeCaption', number: 1, letter: 'g' }
}

export default config
