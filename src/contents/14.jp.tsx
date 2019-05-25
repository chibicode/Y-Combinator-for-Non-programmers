import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { P, Strong, Ul, UlLi } from 'src/components/ContentTags'
import H from 'src/components/H'
import AER from 'src/components/Yc/AER'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: (
          <>
            条件分岐の
            <H args={{ name: 'bentoBox' }} />
          </>
        ),
        content: (
          <>
            <P>
              <H args={{ name: 'episodeWelcomeText' }} />
              今回は、以前紹介した「
              <Strong>
                条件分岐の
                <H args={{ name: 'bentoBox' }} />
              </Strong>
              」を省略表記していきます。まずは、復習から:
            </P>
            {AER.nlxe}
            <H args={{ name: 'isZeroReview' }} />
          </>
        )
      },
      {
        title: <>条件分岐の省略表記</>,
        content: (
          <>
            <P>
              先ほどの
              <H args={{ name: 'bentoBox' }} />
              を、次のように省略表記してみましょう:
            </P>
            {AER.hvdn}
            <Ul>
              <UlLi />
            </Ul>
          </>
        )
      }
    ]}
  />
)
