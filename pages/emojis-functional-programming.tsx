/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Page from 'src/components/Page'
import Head from 'next/head'
// import H from 'src/components/H'
import { spaces } from 'src/lib/theme'
import Container from 'src/components/Container'
// import CardWrapper from 'src/components/CardWrapper'
import EpisodeHero from 'src/components/EpisodeHero'
import EpisodePageFooter from 'src/components/EpisodePageFooter'
import { P } from 'src/components/ContentTags'
import locale from 'src/lib/locale'
// import { EpisodeCardListType } from 'src/components/EpisodeCardList'

const title = 'Using emojis to teach functional programming to non-programmers'
const titleSplit = (
  <>
    Using emojis to teach
    <br />
    functional programming to
    <br />
    non-programmers
  </>
)

// const cards: EpisodeCardListType = []

export default () =>
  locale === 'en' ? (
    <Page>
      <Head>
        <title key="title">{title}</title>
        <meta property="og:title" content={title} />
        {/* <meta property="og:site_name" content={lessonTitle} />
        <meta property="og:url" content={url} />
        <link rel="canonical" href={url} />
        <meta property="og:description" content={description} />
        <meta name="description" content={description} />
        <meta property="article:published_time" content={dateSchemaString} />
        <meta property="og:image" content={ogImageUrl} /> */}
      </Head>
      <div
        css={css`
          padding-top: ${spaces(1.5)};
        `}
      />
      <Container size="sm" horizontalPadding={1}>
        <EpisodeHero
          mainTitle={titleSplit}
          emojis={['🍣', '🍱', '🥪']}
          threeLineTitle
        />
        <P />
      </Container>
      <div
        css={css`
          padding: ${spaces(3)} 0;
        `}
      ></div>
      <EpisodePageFooter />
    </Page>
  ) : (
    <></>
  )
