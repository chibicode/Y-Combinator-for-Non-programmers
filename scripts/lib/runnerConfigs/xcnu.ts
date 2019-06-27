import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'
import * as initialExpressionContainers from '../initialExpressionContainers'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  initialExpressionContainer: initialExpressionContainers.onbh,
  showPriorities: true,
  variableSize: 'md',
  caption: { name: 'ycChangedCaption', fromNumber: 3 },
  argPriorityAggHighlights: [1],
  funcPriorityAggHighlights: [1, 2]
}

export default config
