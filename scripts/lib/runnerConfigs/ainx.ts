import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'playButtonOnly',
  lessonExpressionsKey: 'lqti',
  initialState: 'active',
  lastAllowedExpressionState: 'showFuncBound',
  showPriorities: true,
  showAllShowSteps: true,
  skipToTheEnd: false,
  explanationsVisibility: 'hiddenInitialAndLastPausedOnly'
}

export default config
