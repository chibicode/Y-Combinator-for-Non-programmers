import React from 'react'
import { P } from 'src/components/ContentTags'
import EpisodeCardList from 'src/components/EpisodeCardList'

const DemoCardList = () => (
  <EpisodeCardList
    demo
    cards={[
      {
        title: <>これはデモページです</>,
        content: (
          <>
            <P>
              このページはデモ用に作ったページです。わたしが人前で解説しながらこのページを使うので、説明は一切書いていません。
            </P>
          </>
        )
      }
    ]}
  />
)

export default DemoCardList
