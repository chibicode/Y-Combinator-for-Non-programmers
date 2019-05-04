import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { P } from 'src/components/ContentTags'
import H from 'src/components/H'
import AER from 'src/components/Yc/AER'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <></>,
        content: (
          <>
            <P>
              <H args={{ name: 'episodeWelcomeText' }} />
              早速
              <H args={{ name: 'lookAtThisBentoBox' }} />:
            </P>
            {AER.bcso}
          </>
        )
      }
    ]}
  />
)
