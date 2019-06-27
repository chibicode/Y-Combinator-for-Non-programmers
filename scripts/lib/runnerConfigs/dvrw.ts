import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  lessonExpressionsKey: 'lhek',
  showPriorities: true,
  containerSize: 'xs',
  variableSize: 'md',
  caption: { name: 'ifCaption', ifZero: 'y', ifNonZero: ['w', 'x'] },
  highlightOverrides: { w: 'highlighted', x: 'highlighted' }
}

export default config
