import glob from 'glob'
import fs from 'fs'
import prettierFormat from './lib/prettierFormat'

glob('./src/components/Twemoji/*.tsx', (_: any, files: readonly string[]) => {
  const uniqueNames = [
    ...new Set(
      files.map(x =>
        x.replace('./src/components/Twemoji/', '').replace(/\.tsx/, '')
      )
    )
  ]

  const toComponentName = (name: string) => `Emoji${name.replace(/-/g, 'ZZ')}`

  const importString = uniqueNames
    .map(
      name =>
        `import ${toComponentName(name)} from 'src/components/Twemoji/${name}'`
    )
    .join('\n')

  const bundleObjectString = uniqueNames
    .map(name => `'${name}': ${toComponentName(name)}`)
    .join(',\n')

  const fileContents = prettierFormat(
    `// WARNING: Do not modify this file - it's generated automatically.
      ${importString}

      export default {
        ${bundleObjectString}
      }`
  )

  fs.writeFile('./src/lib/emojisBundle.tsx', fileContents, err => {
    if (err) {
      throw err
    }
    console.log('Bundle regenerated')
  })
})
