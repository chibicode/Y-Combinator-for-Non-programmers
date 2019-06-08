/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { P } from 'src/components/ContentTags'
import EpisodeCardList from 'src/components/EpisodeCardList'
import Toc from 'src/components/Toc'
import H from 'src/components/H'

const NotFoundCardList = () => (
  <EpisodeCardList
    notFound
    cards={[
      {
        type: 'meta',
        title: (
          <>
            <H args={{ name: 'pageNotFound' }} />
          </>
        ),
        content: (
          <>
            <P
              css={css`
                text-align: center;
              `}
            >
              <H args={{ name: 'lookAtToc' }} />
            </P>
            <Toc />
          </>
        )
      }
    ]}
  />
)

export default NotFoundCardList
