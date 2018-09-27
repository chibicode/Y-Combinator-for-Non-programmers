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
            jp: React.ComponentType<any>
            en: React.ComponentType<any>
          }`
      )
      .join('\n')

    const bundleObjectString = uniqueNames
      .map(
        name => `
          '${name}': {
            // @ts-ignore - import isn't typed correctly
            en: dynamic(() => import(/* webpackChunkName: '${name}.en' */ 'src/contents/${name}.en')),
            // @ts-ignore - import isn't typed correctly
            jp: dynamic(() => import(/* webpackChunkName: '${name}.jp' */ 'src/contents/${name}.jp'))
          }
        `
      )
      .join(',\n')

    const fileContents = prettier.format(
      `// WARNING: Do not modify this file - it's generated automatically.
      import dynamic from 'next/dynamic'

      export interface BundleTypes {
        ${bundleInterfaceString}
      }

      const bundles: BundleTypes = {
        ${bundleObjectString}
      }

      export default bundles`,
      { semi: false, singleQuote: true, parser: 'typescript' }
    )

    fs.writeFile('./src/lib/contentBundles.ts', fileContents, err => {
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
