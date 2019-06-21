import util from 'util'
import fs from 'fs'
import expressionRunnerShorthandConfig from 'scripts/lib/expressionRunnerShorthandConfig'
import buildExpressionContainers from 'scripts/lib/buildExpressionContainers'
import buildExpressionRunnerConfigFromShorthand, {
  ExpressionRunnerConfig
} from 'scripts/lib/buildExpressionRunnerConfigFromShorthand'
import prettier from 'prettier'

const regenerate = () => {
  const config: Record<
    string,
    ExpressionRunnerConfig
  > = buildExpressionRunnerConfigFromShorthand(expressionRunnerShorthandConfig)
  fs.writeFileSync(
    'src/components/R.tsx',
    prettier.format(
      `
import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'

${Object.keys(config)
  .map(key => {
    const expressionContainers = buildExpressionContainers(config[key])
    const {
      speed,
      showOnlyFocused,
      caption,
      hideControls,
      explanationsVisibility,
      hidePriorities,
      variableSize,
      containerSize,
      hidePlayButton,
      showAllShowSteps,
      hideBottomRightBadges,
      skipToTheEnd,
      hideFuncUnboundBadgeOnExplanation,
      highlightOverridesCallArgAndFuncUnboundOnly,
      bottomRightBadgeOverrides,
      highlightOverrides,
      highlightOverrideActiveAfterStart,
      argPriorityAggHighlights,
      funcPriorityAggHighlights,
      highlightFunctions,
      superFastForward,
      highlightNumber
    } = config[key]

    return `export const ${key[0].toUpperCase()}${key.slice(
      1
    )} = () => <ExpressionRunnerPrecomputed params={${util.inspect(
      {
        expressionContainers,
        speed,
        showOnlyFocused,
        caption,
        hideControls,
        explanationsVisibility,
        hidePriorities,
        variableSize,
        containerSize,
        hidePlayButton,
        hideBottomRightBadges,
        skipToTheEnd,
        hideFuncUnboundBadgeOnExplanation,
        highlightOverridesCallArgAndFuncUnboundOnly,
        bottomRightBadgeOverrides,
        highlightOverrides,
        highlightOverrideActiveAfterStart,
        argPriorityAggHighlights,
        funcPriorityAggHighlights,
        highlightFunctions,
        superFastForward,
        highlightNumber,
        showAllShowSteps
      },
      false,
      null
    )}} />`
  })
  .join('\n\n')}
      `,
      { semi: false, singleQuote: true, parser: 'typescript' }
    )
  )
}

regenerate()
