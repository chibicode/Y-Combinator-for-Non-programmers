const chokidar = require('chokidar')
const glob = require('glob')
const fs = require('fs')
const prettier = require('prettier')
const { exec } = require('child_process')

const regenerate = () => {
  glob('./src/components/Twemoji/*.js', (err, files) => {
    const uniqueNames = [
      ...new Set(
        files.map(x =>
          x.replace('./src/components/Twemoji/', '').replace(/\.js/, '')
        )
      )
    ]

    const toComponentName = name => `Emoji${name.replace(/-/g, 'ZZ')}`

    const importString = uniqueNames
      .map(
        name =>
          `import ${toComponentName(
            name
          )} from 'src/components/Twemoji/${name}'`
      )
      .join('\n')

    const bundleObjectString = uniqueNames
      .map(name => `'${name}': ${toComponentName(name)}`)
      .join(',\n')

    const bundleInterfaceString = uniqueNames
      .map(name => `'${name}': React.ComponentType<{}>`)
      .join('\n')

    const fileContents = prettier.format(
      `// WARNING: Do not modify this file - it's generated automatically.
      import React from 'react'
      ${importString}

      export interface BundleTypes {
        ${bundleInterfaceString}
      }

      const bundle: BundleTypes = {
        ${bundleObjectString}
      }

      export default bundle`,
      { semi: false, singleQuote: true, parser: 'typescript' }
    )

    fs.writeFile('./src/lib/emojisBundle.tsx', fileContents, err => {
      if (err) {
        throw err
      }
      console.log('Bundle regenerated')
    })
  })
}

if (process.argv[2] === 'watch') {
  chokidar
    .watch(
      ['./src/lib/yc/letterEmojiMapping.json', './scripts/copyUsedEmojis.js'],
      { ignoreInitial: true }
    )
    .on('change', path => {
      exec('yarn twemoji', err => {
        if (err) {
          throw new Error(err)
        }
        console.log(`${path} updated`)
      })
    })
} else {
  regenerate()
}
