// NOTE: If you use -r tsconfig-paths/register then for some reason chokidar fails
import chokidar from 'chokidar'
import glob from 'glob'
import fs from 'fs'
import prettierFormat from './lib/prettierFormat'
import { exec } from 'child_process'

const regenerate = () => {
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
          `import ${toComponentName(
            name
          )} from 'src/components/Twemoji/${name}'`
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
}

if (process.argv[2] === 'watch') {
  chokidar
    .watch(
      ['./src/lib/letterEmojiMappingJson.json', './scripts/copyUsedEmojis.ts'],
      { ignoreInitial: true }
    )
    .on('change', path => {
      exec('yarn twemoji', err => {
        if (err) {
          throw new Error()
        }
        console.log(`${path} updated`)
      })
    })
} else {
  regenerate()
}
