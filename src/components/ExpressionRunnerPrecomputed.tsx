import React from 'react'
import { ExpressionRunnerConfig } from 'scripts/lib/buildExpressionRunnerConfigFromShorthand'
import { ExpressionContainer } from 'src/types/ExpressionContainerTypes'

interface ExpressionRunnerPrecomputedParams {
  expressionContainers: readonly ExpressionContainer[]
  speed: ExpressionRunnerConfig['speed']
  showOnlyFocused: ExpressionRunnerConfig['showOnlyFocused']
  caption: ExpressionRunnerConfig['caption']
  hideControls: ExpressionRunnerConfig['hideControls']
  explanationsVisibility: ExpressionRunnerConfig['explanationsVisibility']
  hidePriorities: ExpressionRunnerConfig['hidePriorities']
  variableSize: ExpressionRunnerConfig['variableSize']
  containerSize: ExpressionRunnerConfig['containerSize']
  hidePlayButton: ExpressionRunnerConfig['hidePlayButton']
  hideBottomRightBadges: ExpressionRunnerConfig['hideBottomRightBadges']
  skipToTheEnd: ExpressionRunnerConfig['skipToTheEnd']
  hideFuncUnboundBadgeOnExplanation: ExpressionRunnerConfig['hideFuncUnboundBadgeOnExplanation']
  highlightOverridesCallArgAndFuncUnboundOnly: ExpressionRunnerConfig['highlightOverridesCallArgAndFuncUnboundOnly']
  bottomRightBadgeOverrides: ExpressionRunnerConfig['bottomRightBadgeOverrides']
  highlightOverrides: ExpressionRunnerConfig['highlightOverrides']
  highlightOverrideActiveAfterStart: ExpressionRunnerConfig['highlightOverrideActiveAfterStart']
  argPriorityAggHighlights: ExpressionRunnerConfig['argPriorityAggHighlights']
  funcPriorityAggHighlights: ExpressionRunnerConfig['funcPriorityAggHighlights']
  highlightFunctions: ExpressionRunnerConfig['highlightFunctions']
  superFastForward: ExpressionRunnerConfig['superFastForward']
  highlightNumber: ExpressionRunnerConfig['highlightNumber']
}

const ExpressionRunnerPrecomputed = ({
  params
}: {
  params: ExpressionRunnerPrecomputedParams
}) => <>{JSON.stringify(params)}</>

export default ExpressionRunnerPrecomputed
