import React from 'react'
import EpisodePageWrapper from 'src/components/EpisodePageWrapper'

const Episode1: React.SFC<{}> = () => (
  <EpisodePageWrapper
    episodeNumber={1}
    emojis={['😋', '🍽', '👨‍🍳']}
    lessonName="yc"
  />
)

export default Episode1
