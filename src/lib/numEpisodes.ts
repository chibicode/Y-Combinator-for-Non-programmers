import pathHelpers from 'src/lib/pathHelpers'
import { allTitles } from 'src/lib/titles'

const numEpisodes = (lessonName: keyof typeof pathHelpers) =>
  Object.keys(allTitles).filter(x =>
    x.match(new RegExp(`${lessonName}Episode\\d+`))
  ).length

export default numEpisodes
