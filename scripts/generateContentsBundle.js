const chokidar = require('chokidar')
const glob = require('glob')
const fs = require('fs')
const prettier = require('prettier')

const regenerate = path => {
  glob('./src/contents/**/*.+(en|jp).mdx', (err, files) => {
    const uniqueNames = [
      ...new Set(
        files.map(x =>
          x.replace('./src/contents/', '').replace(/\.(en|jp)\.mdx/, '')
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
            // @ts-ignore - mdx import isn't typed correctly
            en: dynamic(import('src/contents/${name}.en.mdx')),
            // @ts-ignore - mdx import isn't typed correctly
            jp: dynamic(import('src/contents/${name}.jp.mdx'))
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

chokidar
  .watch('./src/contents/*.mdx', { ignoreInitial: true })
  .on('add', path => regenerate(path))
chokidar.watch('./src/contents/*.mdx').on('unlink', path => regenerate(path))

regenerate()
