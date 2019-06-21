import { ExpressionRunnerShorthandConfig } from 'scripts/lib/expressionRunnerShorthandConfig'

const config: ExpressionRunnerShorthandConfig = {
  runner: 'simple',
  lessonExpressionsKey: 'e11E2',
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
