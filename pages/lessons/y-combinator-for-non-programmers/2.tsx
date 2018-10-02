import React from 'react'
import EpisodePageWrapper from 'src/components/EpisodePageWrapper'

const Episode2: React.SFC<{}> = () => (
  <EpisodePageWrapper
    episodeNumber={2}
    emojis={['🍱', '🍱', '🍱']}
    lessonName="yc"
  />
)

export default Episode2
