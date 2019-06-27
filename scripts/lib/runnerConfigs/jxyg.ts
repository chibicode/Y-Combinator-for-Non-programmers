import { ExpressionRunnerShorthandConfig } from '../expressionRunnerShorthandConfig'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  lessonExpressionsKey: 'toum',
  showPriorities: true,
  initialState: 'showFuncUnbound',
  containerSize: 'xs',
  variableSize: 'md',
  highlightOverrides: { b: 'highlighted' },
  highlightOverridesCallArgAndFuncUnboundOnly: true,
  highlightOverrideActiveAfterStart: true,
  caption: { name: 'isCallArgAndFuncUnboundTheSameCaption', same: true }
}

export default config
