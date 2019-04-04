const chokidar = require('chokidar')
const glob = require('glob')
const fs = require('fs')
const prettier = require('prettier')

const regenerate = path => {
  glob('./src/contents/**/*.+(en|jp).tsx', (err, files) => {
    const uniqueNames = [
      ...new Set(
        files.map(x =>
          x.replace('./src/contents/', '').replace(/\.(en|jp)\.tsx/, '')
        )
      )
    ]

    const bundleInterfaceString = uniqueNames
      .map(
        name => `
          '${name}': {
            jp: React.ComponentType<{}>
            en: React.ComponentType<{}>
          }`
      )
      .join('\n')

    const importString = uniqueNames
      .map(
        name =>
          `import Jp${name} from 'src/contents/${name}.jp'
           import En${name} from 'src/contents/${name}.en'`
      )
      .join('\n')

    const bundleObjectString = uniqueNames
      .map(
        name => `
          '${name}': {
            en: En${name},
            jp: Jp${name}
          }
        `
      )
      .join(',\n')

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

    fs.writeFile('./src/lib/contentsBundle.tsx', fileContents, err => {
      if (err) {
        throw err
      }
      if (path) {
        console.log(`${path} updated; Bundle regenerated`)
      } else {
        console.log('Bundle regenerated')
      }
    })
  })
}

if (process.argv[2] === 'watch') {
  chokidar
    .watch('./src/contents/**/*.tsx', { ignoreInitial: true })
    .on('add', path => regenerate(path))
  chokidar
    .watch('./src/contents/**/*.tsx')
    .on('unlink', path => regenerate(path))
}

regenerate()
