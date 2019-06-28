import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'singleStep',
  initialExpressionContainer: initialExpressionContainers.dpky,
  showPriorities: true,
  nextIterations: 4,
  variableSize: 'sm',
  initialState: 'active',
  finalState: 'magicalExpanded'
}

export default config
