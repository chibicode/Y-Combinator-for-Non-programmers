import React from 'react'
import { EpisodePageProps } from 'src/components/EpisodePage'

type EpisodeContextProps = Pick<
  EpisodePageProps,
  'lessonName' | 'lessonTitle' | 'episodeTitle' | 'episodeNumber'
>

export const episodeHeroContextDefault: EpisodeContextProps = {
  lessonName: 'yc',
  episodeNumber: 0,
  lessonTitle: ''
}

export default React.createContext<EpisodeContextProps>(
  episodeHeroContextDefault
)
