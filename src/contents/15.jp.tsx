import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import AER from 'src/components/AER'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>ある条件を満たすまで繰り返す</>,
        content: <>{AER.hzlj}</>
      }
    ]}
  />
)
