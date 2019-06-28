import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'playButtonOnly',
  initialExpressionContainer: initialExpressionContainers.jsdg,
  showPriorities: true,
  containerSize: 'xs',
  variableSize: 'sm',
  skipToTheEnd: false,
  speed: 5,
  highlightOverrides: {
    e: 'highlighted',
    f: 'highlighted',
    g: 'highlighted',
    h: 'highlighted'
  }
}

export default config
