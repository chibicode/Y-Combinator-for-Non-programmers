import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  initialExpressionContainer: initialExpressionContainers.idkp,
  showPriorities: true,
  containerSize: 'xs',
  variableSize: 'md',
  highlightOverrides: {
    a: 'highlighted',
    b: 'highlighted',
    c: 'highlighted',
    d: 'highlighted',
    e: 'highlighted',
    f: 'highlighted'
  }
}

export default config
