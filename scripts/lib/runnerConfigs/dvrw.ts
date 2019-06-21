import { ExpressionRunnerShorthandConfig } from 'scripts/lib/expressionRunnerShorthandConfig'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  lessonExpressionsKey: 'e9E8',
  showPriorities: true,
  containerSize: 'xs',
  variableSize: 'md',
  caption: { name: 'ifCaption', ifZero: 'y', ifNonZero: ['w', 'x'] },
  highlightOverrides: { w: 'highlighted', x: 'highlighted' }
}

export default config
