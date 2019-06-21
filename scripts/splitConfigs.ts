import config from 'scripts/lib/expressionRunnerShorthandConfig'
import fs from 'fs'

Object.keys(config).forEach(key => {
  fs.writeFileSync(
    `./scripts/lib/runnerConfigs/${key}.json`,
    `${JSON.stringify(config[key], null, 2)}\n`
  )
})
