// NOTE: If you use -r tsconfig-paths/register then for some reason chokidar fails
import chokidar from 'chokidar'
import glob from 'glob'
import fs from 'fs'
import prettierFormat from './lib/prettierFormat'

const regenerate = (path?: string) => {
  glob(
    './src/contents/**/*.+(en|jp).tsx',
    (_: any, files: readonly string[]) => {
      const uniqueNames = [
        ...new Set(
          files.map(x =>
            x.replace('./src/contents/', '').replace(/\.(en|jp)\.tsx/, '')
          )
        )
      ]

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

      const fileContents = prettierFormat(
        `// WARNING: Do not modify this file - it's generated automatically.
      ${importString}

      export default {
        ${bundleObjectString}
      }`
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
    }
  )
}

if (process.argv[2] === 'watch') {
  chokidar
    .watch('./src/contents/**/*.tsx', { ignoreInitial: true })
    .on('add', path => regenerate(path))
  chokidar
    .watch('./src/contents/**/*.tsx')
    .on('unlink', path => regenerate(path))
} else {
  regenerate()
}
