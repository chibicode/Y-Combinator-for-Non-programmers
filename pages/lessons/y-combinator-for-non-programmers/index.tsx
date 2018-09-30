import React from 'react'
import EpisodePage from 'src/components/EpisodePage'
import t from 'src/lib/t'

const Index: React.SFC<{}> = () => (
  <EpisodePage
    lessonTitle={t('ycTitle')}
    emojis={['🤔', '🤔', '🤔']}
    contentName="l1/Intro"
  />
)

export default Index
