import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { P } from 'src/components/ContentTags'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <></>,
        content: (
          <>
            <P>?</P>
          </>
        )
      }
    ]}
  />
)
