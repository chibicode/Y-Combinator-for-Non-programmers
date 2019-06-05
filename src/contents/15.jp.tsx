import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import AER from 'src/components/AER'
import H from 'src/components/H'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>ある条件を満たすまで繰り返す</>,
        content: (
          <>
            <H
              args={{
                name: 'whyWeNeedFiniteBentoBox',
                example1: AER.rreb,
                example2: AER.kqzn
              }}
            />
          </>
        )
      }
    ]}
  />
)
