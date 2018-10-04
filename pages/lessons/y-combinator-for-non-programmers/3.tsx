import React from 'react'
import EpisodePageWrapper from 'src/components/EpisodePageWrapper'

const Episode3: React.SFC<{}> = () => (
  <EpisodePageWrapper
    episodeNumber={3}
    emojis={['⏪', '🤔', '⏩']}
    lessonName="yc"
  />
)

export default Episode3
