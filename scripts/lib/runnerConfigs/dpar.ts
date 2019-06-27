import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'playButtonOnly',
  initialExpressionContainer: initialExpressionContainers.dvlj,
  showPriorities: true,
  speed: 1.75,
  skipToTheEnd: false,
  nextIteration: true,
  explanationsVisibility: 'visible',
  initialState: 'trueCaseOnly'
}

export default config
