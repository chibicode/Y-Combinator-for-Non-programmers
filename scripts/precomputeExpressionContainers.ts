import fs from 'fs'
import expressionRunnerShorthandConfig from 'scripts/lib/expressionRunnerShorthandConfig'
import buildExpressionContainers from 'scripts/lib/buildExpressionContainers'
import buildExpressionRunnerConfigFromShorthand, {
  ExpressionRunnerConfig
} from 'scripts/lib/buildExpressionRunnerConfigFromShorthand'

const regenerate = () => {
  const config: Record<
    string,
    ExpressionRunnerConfig
  > = buildExpressionRunnerConfigFromShorthand(expressionRunnerShorthandConfig)
  fs.writeFileSync(
    'src/lib/expressionRunnerConfig.json',
    JSON.stringify(
      Object.entries(config)
        .map(([key, { expressionContainer, ...config }]) => ({
          [key]: {
            expressionContainers: buildExpressionContainers({
              expressionContainer,
              ...config
            }),
            config
          }
        }))
        .reduce((acc, current) => ({ ...acc, ...current }), {}),
      null,
      2
    )
  )
}

regenerate()
