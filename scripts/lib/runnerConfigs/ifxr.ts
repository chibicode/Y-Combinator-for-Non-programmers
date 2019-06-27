import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  lessonExpressionsKey: 'dpky',
  showPriorities: true,
  nextIterations: 4,
  initialState: 'default',
  variableSize: 'md',
  caption: { name: 'magicalChangedCaption', fromNumber: 3 },
  argPriorityAggHighlights: [1],
  funcPriorityAggHighlights: [1, 2]
}

export default config
