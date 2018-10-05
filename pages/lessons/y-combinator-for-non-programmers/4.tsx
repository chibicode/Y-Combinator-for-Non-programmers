import React from 'react'
import EpisodePageWrapper from 'src/components/EpisodePageWrapper'

const Episode4: React.SFC<{}> = () => (
  <EpisodePageWrapper
    episodeNumber={4}
    emojis={['⏪', '✅', '⏩']}
    lessonName="yc"
  />
)

export default Episode4
