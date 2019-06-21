import util from 'util'
import config from 'scripts/lib/expressionRunnerShorthandConfig'
import fs from 'fs'
import prettierFormat from 'scripts/lib/prettierFormat'

Object.keys(config).forEach(key => {
  const contents = prettierFormat(`
  import { ExpressionRunnerShorthandConfig } from 'scripts/lib/expressionRunnerShorthandConfig'

  const config: ExpressionRunnerShorthandConfig = ${util.inspect(config[key], {
    depth: null,
    maxArrayLength: null
  })}

  export default config
  `)
  fs.writeFileSync(`./scripts/lib/runnerConfigs/${key}.ts`, contents)
})
