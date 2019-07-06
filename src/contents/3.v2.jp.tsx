import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import * as R from 'src/components/Runners'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>計算箱の使い道は？</>,
        content: (
          <>
            <R.Oklg />
          </>
        )
      }
    ]}
  />
)
