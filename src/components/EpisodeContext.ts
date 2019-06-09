import React from 'react'
import { EpisodePageProps } from 'src/components/EpisodePage'

type EpisodeContextProps = Pick<
  EpisodePageProps,
  'lessonTitle' | 'episodeTitle' | 'episodeNumber'
> & {
  showModal: () => void
}

export const episodeHeroContextDefault: EpisodeContextProps = {
  episodeNumber: 0,
  lessonTitle: '',
  showModal: () => {}
}

export default React.createContext<EpisodeContextProps>(
  episodeHeroContextDefault
)
