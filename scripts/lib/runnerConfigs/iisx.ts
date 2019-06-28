import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  initialExpressionContainer: initialExpressionContainers.dpky,
  showPriorities: true,
  nextIterations: 4,
  initialState: 'default',
  variableSize: 'md',
  caption: { name: 'magicalChangedCaption', fromNumber: 3 },
  argPriorityAggHighlights: [1],
  funcPriorityAggHighlights: [1, 2]
}

export default config
