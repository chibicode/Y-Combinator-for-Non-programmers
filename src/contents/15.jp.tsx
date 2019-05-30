import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { P } from 'src/components/ContentTags'
import H from 'src/components/H'
import AER from 'src/components/AER'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>?</>,
        content: (
          <>
            <P>
              <H args={{ name: 'episodeWelcomeText' }} />
            </P>
            {AER.zxux}
          </>
        )
      }
    ]}
  />
)
