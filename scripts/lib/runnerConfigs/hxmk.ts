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
  caption: { name: 'isCallArgAndFuncUnboundTheSameCaption', same: false }
}

export default config
