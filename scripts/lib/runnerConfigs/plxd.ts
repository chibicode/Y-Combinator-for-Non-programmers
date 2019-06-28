import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'singleStep',
  initialExpressionContainer: initialExpressionContainers.pxps,
  showPriorities: true,
  explanationsVisibility: 'visible',
  initialState: 'needsAlphaConvert',
  finalState: 'alphaConvertDone',
  containerSize: 'xs',
  variableSize: 'md'
}

export default config
