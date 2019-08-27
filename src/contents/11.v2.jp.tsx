import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { P } from 'src/components/ContentTags'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>上級編へようこそ！</>,
        content: (
          <>
            <P></P>
          </>
        )
      }
    ]}
  />
)
