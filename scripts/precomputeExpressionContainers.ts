import fs from 'fs-extra'
import buildExpressionContainers from './lib/buildExpressionContainers'
import buildExpressionRunnerConfigFromShorthand from './lib/buildExpressionRunnerConfigFromShorthand'
import prettierFormat from './lib/prettierFormat'
import * as runnerConfigs from './lib/runnerConfigs'

const precomputeFile = (key: string) => {
  const configBase = runnerConfigs[key as keyof typeof runnerConfigs]
  const config = buildExpressionRunnerConfigFromShorthand(configBase)
  const expressionContainers = buildExpressionContainers(config)
  const showBottomProgressBar =
    expressionContainers.filter(x => x.numLeafNodes >= 10).length > 0
  const {
    speed,
    hideControls,
    explanationsVisibility,
    hidePriorities,
    hideRunButton,
    showAllShowSteps,
    hideBottomRightBadges,
    skipToTheEnd,
    hideFuncUnboundBadgeOnExplanation,
    highlightOverridesCallArgAndFuncUnboundOnly,
    bottomRightBadgeOverrides,
    highlightOverrides,
    highlightOverrideActiveAfterStart,
    highlightFunctions,
    convert,
    crossed,
    skipActive,
    showDefaultAndActiveOnly
  } = config

  const expressionContainersContents = `${JSON.stringify(
    {
      expressionContainers,
      speed,
      hideControls,
      explanationsVisibility,
      hidePriorities,
      hideRunButton,
      hideBottomRightBadges,
      skipToTheEnd,
      hideFuncUnboundBadgeOnExplanation,
      highlightOverridesCallArgAndFuncUnboundOnly,
      bottomRightBadgeOverrides,
      highlightOverrides,
      highlightOverrideActiveAfterStart,
      highlightFunctions,
      showAllShowSteps,
      convert,
      crossed,
      skipActive,
      showDefaultAndActiveOnly,
      showBottomProgressBar
    },
    null,
    2
  )}\n`

  fs.writeFileSync(`src/lib/runners/${key}.json`, expressionContainersContents)
  const componentName = `${key[0].toUpperCase()}${key.slice(1)}`

  const fileContents = prettierFormat(`
        import React from 'react'
        import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
        import config from 'src/lib/runners/${key}.json'

        const ${componentName} = ({ children }: { children?: React.ReactNode }) =>
          // @ts-ignore
          <ExpressionRunnerPrecomputed {...config}>{children}</ExpressionRunnerPrecomputed>

        export default ${componentName}
        `)

  fs.writeFileSync(`src/components/Runners/${componentName}.tsx`, fileContents)

  console.log(`Generated ${componentName}`)
}

const generateIndex = () => {
  const indexContents = prettierFormat(`
${Object.keys(runnerConfigs)
  .map(key => {
    const componentName = `${key[0].toUpperCase()}${key.slice(1)}`
    return `export { default as ${componentName} } from 'src/components/Runners/${componentName}'`
  })
  .join('\n')}
`)

  const fakeIndexContents = prettierFormat(`
${Object.keys(runnerConfigs)
  .map(key => {
    const componentName = `${key[0].toUpperCase()}${key.slice(1)}`
    return `export { default as ${componentName} } from 'src/components/FakeRunner'`
  })
  .join('\n')}
`)

  fs.writeFileSync('src/components/Runners/index.ts', indexContents)
  fs.writeFileSync('src/components/Runners/fakeIndex.ts', fakeIndexContents)
}

const precomputeAll = () => {
  Object.keys(runnerConfigs).forEach(key => precomputeFile(key))
}

if (process.argv[2]) {
  precomputeFile(process.argv[2])
} else {
  precomputeAll()
}

generateIndex()
