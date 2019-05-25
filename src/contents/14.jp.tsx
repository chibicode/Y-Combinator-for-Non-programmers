import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { P, Strong } from 'src/components/ContentTags'
import H from 'src/components/H'
import AER from 'src/components/Yc/AER'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>条件分岐の弁当箱</>,
        content: (
          <>
            <P>
              <H args={{ name: 'episodeWelcomeText' }} />
              今回は、以前紹介した「<Strong>条件分岐の弁当箱</Strong>
              」を省略表記していきます。まずは、復習から:
            </P>
            {AER.nlxe}
            <H args={{ name: 'isZeroReview' }} />
            <P>では、これを省略表記するとどうなるでしょう？</P>
            {AER.hvdn}
          </>
        )
      }
    ]}
  />
)
