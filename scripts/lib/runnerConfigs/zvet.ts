import { ExpressionRunnerShorthandConfig } from 'scripts/lib/expressionRunnerShorthandConfig'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'playButtonOnly',
  lessonExpressionsKey: 'e14E1',
  showPriorities: true,
  nextIterations: 8,
  skipToTheEnd: false,
  lastAllowedExpressionState: 'conditionActive',
  lastAllowedExpressionStateAfterIterations: 8,
  initialState: 'magicalExpanded',
  speed: 1.75,
  variableSize: 'sm'
}

export default config
