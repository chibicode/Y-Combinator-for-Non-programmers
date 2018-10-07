import React from 'react'
import EpisodePageWrapper from 'src/components/EpisodePageWrapper'

const Episode5: React.SFC<{}> = () => (
  <EpisodePageWrapper
    episodeNumber={5}
    emojis={['🥇', '🤔', '🥈']}
    lessonName="yc"
  />
)

export default Episode5
