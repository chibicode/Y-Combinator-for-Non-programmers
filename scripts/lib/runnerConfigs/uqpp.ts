import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  lessonExpressionsKey: 'druk',
  showPriorities: true,
  initialState: 'alphaConvertDone',
  containerSize: 'xs',
  variableSize: 'md',
  highlightOverrides: { b: 'highlighted' },
  highlightOverrideActiveAfterStart: true,
  showOnlyFocused: true
}

export default config
