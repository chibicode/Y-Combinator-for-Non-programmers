/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Page from 'src/components/Page'
import Head from 'next/head'
import H from 'src/components/H'
import { lessonTitle } from 'src/lib/titles'
import { spaces } from 'src/lib/theme'
import Container from 'src/components/Container'
import CardWrapper from 'src/components/CardWrapper'
import EpisodeHero from 'src/components/EpisodeHero'
import EpisodePageFooter from 'src/components/EpisodePageFooter'
import { P } from 'src/components/ContentTags'
import Toc from 'src/components/Toc'

export default () => (
  <Page>
    <Head>
      <title key="title">{lessonTitle}</title>
      <meta property="og:title" content={lessonTitle} />
    </Head>
    <div
      css={css`
        padding-top: ${spaces(1)};
      `}
    />
    <Container size="sm">
      <EpisodeHero
        mainTitle={<H args={{ name: 'titleSplit' }} />}
        episodeTitle={<H args={{ name: 'pageNotFound' }} />}
        emojis={['❓', '😭', '❓']}
      />
      <CardWrapper
        title={<H args={{ name: 'pageNotFound' }} />}
        isLast
        type="meta"
      >
        <P
          css={css`
            text-align: center;
          `}
        >
          <H args={{ name: 'lookAtToc' }} />
        </P>
        <Toc includeFirstPage />
      </CardWrapper>
    </Container>
    <div
      css={css`
        padding: ${spaces(3)} 0;
      `}
    ></div>
    <EpisodePageFooter />
  </Page>
)
