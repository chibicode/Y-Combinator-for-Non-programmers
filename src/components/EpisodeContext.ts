import React from 'react'
import { EpisodePageProps } from 'src/components/EpisodePage'

type EpisodeContextProps = Pick<
  EpisodePageProps,
  'lessonTitle' | 'episodeTitle' | 'episodeNumber'
>

export const episodeHeroContextDefault: EpisodeContextProps = {
  episodeNumber: 0,
  lessonTitle: ''
}

export default React.createContext<EpisodeContextProps>(
  episodeHeroContextDefault
)
