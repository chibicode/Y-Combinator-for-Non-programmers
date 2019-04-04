const glob = require('glob')
const fs = require('fs')
const prettier = require('prettier')

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
        `import ${toComponentName(name)} from 'src/components/Twemoji/${name}'`
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
    } else {
      console.log('Bundle regenerated')
    }
  })
})
