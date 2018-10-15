import React from 'react'
import EpisodePageWrapper from 'src/components/EpisodePageWrapper'

const Episode6: React.SFC<{}> = () => (
  <EpisodePageWrapper
    episodeNumber={6}
    emojis={['⬅️', '🤔', '️⬅️']}
    lessonName="yc"
  />
)

export default Episode6
