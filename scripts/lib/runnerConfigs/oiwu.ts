import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  lessonExpressionsKey: 'druk',
  showPriorities: true,
  initialState: 'showFuncUnbound',
  containerSize: 'xs',
  variableSize: 'md',
  highlightOverrides: { b: 'highlighted' },
  highlightOverrideActiveAfterStart: true,
  showOnlyFocused: true,
  caption: { name: 'mustChangeBothFuncUnboundAndBound' }
}

export default config
