import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  initialExpressionContainer: initialExpressionContainers.toum,
  showPriorities: true,
  initialState: 'alphaConvertDone',
  containerSize: 'xs',
  variableSize: 'md',
  explanationsVisibility: 'visible'
}

export default config
