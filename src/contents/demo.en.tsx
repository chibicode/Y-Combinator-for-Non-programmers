import React from 'react'
import { P, Strong } from 'src/components/ContentTags'
import EpisodeCardList from 'src/components/EpisodeCardList'

const DemoCardList = () => (
  <EpisodeCardList
    demo
    cards={[
      {
        t8d: true,
        title: <>This is a demo page</>,
        content: (
          <>
            <P t8d>
              I use this page when demonstrating materials from this course to
              someone <Strong>in person</Strong>. So there won’t be any
              explanations written on this page.
            </P>
          </>
        )
      }
    ]}
  />
)

export default DemoCardList
