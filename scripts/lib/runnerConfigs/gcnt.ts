import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  initialExpressionContainer: initialExpressionContainers.dpky,
  showPriorities: true,
  nextIterations: 8,
  initialState: 'default',
  variableSize: 'md',
  caption: { name: 'magicalChangedCaption', fromNumber: 2 },
  argPriorityAggHighlights: [1],
  funcPriorityAggHighlights: [3, 4]
}

export default config
