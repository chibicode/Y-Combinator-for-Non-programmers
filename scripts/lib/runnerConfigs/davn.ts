import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  initialExpressionContainer: initialExpressionContainers.dpky,
  showPriorities: true,
  initialState: 'default',
  nextIterations: 8,
  caption: { name: 'magicalChangedCaption', fromNumber: 2 },
  variableSize: 'sm',
  argPriorityAggHighlights: [1],
  funcPriorityAggHighlights: [3, 4]
}

export default config
