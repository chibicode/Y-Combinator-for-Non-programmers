import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  initialExpressionContainer: initialExpressionContainers.dvlj,
  showPriorities: true,
  nextIteration: true,
  explanationsVisibility: 'visible',
  initialState: 'trueCaseActive'
}

export default config
