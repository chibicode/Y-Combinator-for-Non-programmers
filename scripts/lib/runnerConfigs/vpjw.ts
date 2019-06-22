import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'playButtonOnly',
  lessonExpressionsKey: 'e10E4',
  explanationsVisibility: 'hiddenInitialAndLastPausedOnly',
  skipAlphaConvert: true,
  showPriorities: true,
  initialState: 'showFuncUnbound',
  lastAllowedExpressionState: 'showFuncBound',
  highlightOverrides: { b: 'highlighted' },
  skipToTheEnd: false,
  speed: 1.75
}

export default config
