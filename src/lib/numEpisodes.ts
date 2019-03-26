import { allTitles } from 'src/lib/titles'

const numEpisodes = Object.keys(allTitles).filter(x =>
  x.match(new RegExp(`episode\\d+`))
).length

export default numEpisodes
