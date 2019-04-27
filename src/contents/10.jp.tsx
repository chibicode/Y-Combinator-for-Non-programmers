import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import AER from 'src/components/Yc/AllExpressionRunners'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <></>,
        content: <>{AER.oluu}</>
      }
    ]}
  />
)
