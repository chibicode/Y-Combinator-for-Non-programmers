import React from 'react'
import EpisodePage from 'src/components/EpisodePage'
import t from 'src/lib/t'

const Episode1: React.SFC<{}> = () => (
  <EpisodePage
    lessonTitle={t('ycTitle')}
    episodeTitle={t('ycEpisode1')}
    emojis={['😋', '🍽', '👨‍🍳']}
    contentName="l1/1"
  />
)

export default Episode1
