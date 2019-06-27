import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'playButtonOnly',
  lessonExpressionsKey: 'ipyc',
  showPriorities: true,
  containerSize: 'xs',
  variableSize: 'xxs',
  nextIterations: 11,
  skipToTheEnd: false,
  lastAllowedExpressionState: 'conditionActive',
  lastAllowedExpressionStateAfterIterations: 2,
  speed: 4
}

export default config
