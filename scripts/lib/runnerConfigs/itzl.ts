import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'singleStep',
  initialExpressionContainer: initialExpressionContainers.dpky,
  showPriorities: true,
  initialState: 'active',
  finalState: 'magicalExpanded',
  variableSize: 'md'
}

export default config
