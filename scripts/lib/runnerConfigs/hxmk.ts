import { ExpressionRunnerShorthandConfig } from 'scripts/lib/expressionRunnerShorthandConfig'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  lessonExpressionsKey: 'e11E3',
  showPriorities: true,
  initialState: 'alphaConvertDone',
  containerSize: 'xs',
  variableSize: 'md',
  highlightOverrides: { b: 'highlighted' },
  highlightOverrideActiveAfterStart: true,
  caption: { name: 'isCallArgAndFuncUnboundTheSameCaption', same: false }
}

export default config
