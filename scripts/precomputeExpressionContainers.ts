import glob from 'glob'
import fs from 'fs-extra'
import { ExpressionRunnerShorthandConfig } from './lib/expressionRunnerShorthandConfig'
import buildExpressionContainers from './lib/buildExpressionContainers'
import buildExpressionRunnerConfigFromShorthand from './lib/buildExpressionRunnerConfigFromShorthand'
import prettierFormat from './lib/prettierFormat'

const precomputeFile = (key: string) => {
  import(`scripts/lib/runnerConfigs/${key}`).then(
    ({ default: configBase }: { default: ExpressionRunnerShorthandConfig }) => {
      const config = buildExpressionRunnerConfigFromShorthand(configBase)
      const expressionContainers = buildExpressionContainers(config)
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
      } = config

      const expressionContainersContents = `${JSON.stringify(
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
        null,
        2
      )}\n`

      fs.writeFileSync(
        `src/lib/runners/${key}.json`,
        expressionContainersContents
      )
      const componentName = `${key[0].toUpperCase()}${key.slice(1)}`

      const fileContents = prettierFormat(`
        import React from 'react'
        import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
        import config from 'src/lib/runners/${key}.json'

        // @ts-ignore
        const ${componentName} = () => <ExpressionRunnerPrecomputed {...config} />

        export default ${componentName}
        `)

      fs.writeFileSync(
        `src/components/Runners/${componentName}.tsx`,
        fileContents
      )

      console.log(`Generated ${componentName}`)
    }
  )
}

const generateIndex = () => {
  glob(
    './scripts/lib/runnerConfigs/*.ts',
    (_: any, files: readonly string[]) => {
      const indexContents = prettierFormat(`
${files
  .map(file => {
    const key = file
      .replace('./scripts/lib/runnerConfigs/', '')
      .replace('.ts', '')
    const componentName = `${key[0].toUpperCase()}${key.slice(1)}`
    return `export { default as ${componentName} } from 'src/components/Runners/${componentName}'`
  })
  .join('\n')}
`)

      fs.writeFileSync('src/components/Runners/index.ts', indexContents)
    }
  )
}

const precomputeAll = () => {
  glob(
    './scripts/lib/runnerConfigs/*.ts',
    (_: any, files: readonly string[]) => {
      files.forEach(file => {
        const key = file
          .replace('./scripts/lib/runnerConfigs/', '')
          .replace('.ts', '')

        precomputeFile(key)
      })
    }
  )
}

if (process.argv[2]) {
  precomputeFile(process.argv[2])
} else {
  precomputeAll()
}

generateIndex()
