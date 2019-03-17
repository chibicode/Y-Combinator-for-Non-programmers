import React from 'react'
import { EpisodePageProps } from 'src/components/EpisodePage'

type EpisodeHeroContextProps = Pick<
  EpisodePageProps,
  'lessonName' | 'lessonTitle' | 'episodeTitle' | 'episodeNumber'
>

export const episodeHeroContextDefault: EpisodeHeroContextProps = {
  lessonName: 'yc',
  episodeNumber: 0,
  lessonTitle: ''
}

export default React.createContext<EpisodeHeroContextProps>(
  episodeHeroContextDefault
)
