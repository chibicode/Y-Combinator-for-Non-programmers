import util from 'util'
import fs from 'fs-extra'
import expressionRunnerShorthandConfig from 'scripts/lib/expressionRunnerShorthandConfig'
import buildExpressionContainers from 'scripts/lib/buildExpressionContainers'
import buildExpressionRunnerConfigFromShorthand, {
  ExpressionRunnerConfig
} from 'scripts/lib/buildExpressionRunnerConfigFromShorthand'
// import prettier from 'prettier'
import fsExtra from 'fs-extra'
import prettierFormat from 'scripts/lib/prettierFormat'

const regenerate = () => {
  const config: Record<
    string,
    ExpressionRunnerConfig
  > = buildExpressionRunnerConfigFromShorthand(expressionRunnerShorthandConfig)

  fsExtra.emptyDirSync('src/components/Runners')

  Object.keys(config).forEach((key, index) => {
    const componentName = `${key[0].toUpperCase()}${key.slice(1)}`
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

    const fileContents = prettierFormat(`
    import React from 'react'
    import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'

    const ${componentName} = () => <ExpressionRunnerPrecomputed {...${util.inspect(
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
    )}} />

    export default ${componentName}
    `)

    fs.writeFileSync(
      `src/components/Runners/${componentName}.tsx`,
      fileContents
    )

    console.log(
      `Generated ${componentName} / ${index + 1} out of ${
        Object.keys(config).length
      }`
    )
  })

  const indexContents = prettierFormat(`
${Object.keys(config)
  .map(key => {
    const componentName = `${key[0].toUpperCase()}${key.slice(1)}`
    return `export { default as ${componentName} } from 'src/components/Runners/${componentName}'`
  })
  .join('\n')}
`)

  fs.writeFileSync('src/components/Runners/index.ts', indexContents)
}

regenerate()
