import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  lessonExpressionsKey: 'fzwa',
  showPriorities: true,
  variableSize: 'md',
  caption: { name: 'ycChangedCaption', fromNumber: 2 },
  argPriorityAggHighlights: [1],
  funcPriorityAggHighlights: [3, 4]
}

export default config
