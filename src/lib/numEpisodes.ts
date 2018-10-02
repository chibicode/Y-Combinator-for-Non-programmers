import pathHelpers from 'src/lib/pathHelpers'
import { allTranslations } from 'src/lib/t'

const numEpisodes = (lessonName: keyof typeof pathHelpers) =>
  Object.keys(allTranslations).filter(x =>
    x.match(new RegExp(`${lessonName}Episode\\d+`))
  ).length

export default numEpisodes
