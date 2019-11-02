/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Page from 'src/components/Page'
import Head from 'next/head'
import { ns, fontSizes, colors, spaces } from 'src/lib/theme'
import { lessonTitle } from 'src/lib/titles'
import Container from 'src/components/Container'
import Emoji from 'src/components/Emoji'
// import CardWrapper from 'src/components/CardWrapper'
import EpisodeHero from 'src/components/EpisodeHero'
import EpisodePageFooter from 'src/components/EpisodePageFooter'
import {
  P,
  Italic,
  Bold,
  InternalLink,
  ExternalLink
} from 'src/components/ContentTags'
import locale from 'src/lib/locale'
// import { EpisodeCardListType } from 'src/components/EpisodeCardList'
import { DateTime } from 'luxon'
import { enBaseUrl } from 'src/lib/meta'

const date = DateTime.fromISO('2019-11-06T12:00:00Z')
const dateString = date
  .setLocale('en')
  .setZone('America/Los_Angeles')
  .toFormat('LLL d, yyyy')
const dateSchemaString = date.setZone('America/Los_Angeles').toISO()

const title = 'Using Emojis to Teach Functional Programming to Non-programmers'
const titleSplit = (
  <>
    Using Emojis to Teach
    <br />
    Functional Programming to
    <br />
    Non-programmers
  </>
)
const description =
  'How to teach lambda calculus, Church encoding, and Y combinator without any code'
const url = `${enBaseUrl}/emojis-functional-programming`
const ogImageUrl = `${enBaseUrl}/static/images/blog-og.png`

// const cards: EpisodeCardListType = []

export default () =>
  locale === 'en' ? (
    <Page>
      <Head>
        <title key="title">{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content={lessonTitle} />
        <meta property="og:url" content={url} />
        <link rel="canonical" href={url} />
        <meta property="og:description" content={description} />
        <meta name="description" content={description} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="article:published_time" content={dateSchemaString} />
      </Head>
      <div
        css={css`
          padding-top: ${spaces(1.5)};
        `}
      />
      <Container size="smsm" horizontalPadding={0.5}>
        <EpisodeHero mainTitle={titleSplit} threeLineTitle />
      </Container>
      <Container size="smsm" horizontalPadding={0.75}>
        <div
          css={css`
            text-align: center;
            color: ${colors('grey700')};
            font-size: ${fontSizes(0.85)};
          `}
        >
          <time dateTime={dateSchemaString}>{dateString}</time> &middot; Shu
          Uesugi (
          <ExternalLink href="https://twitter.com/chibicode">
            @chibicode
          </ExternalLink>
          )
        </div>
        <img
          src="/static/images/animated@2x.gif"
          alt={title}
          css={css`
            width: 6rem;
            margin: ${spaces(1.75)} auto ${spaces(2)};
            display: block;
            ${ns} {
              width: 7rem;
            }
          `}
        />
        <P>
          Last month, I published a free online course called “
          <InternalLink href="/">
            <Bold>Y Combinator for Non-programmers</Bold>
          </InternalLink>
          ”. In this course, I teach computer science concepts such as
          functional programming, lambda calculus, Church encoding, and Y
          combinator in a way such that{' '}
          <Italic>
            people who have zero programming knowledge can understand
          </Italic>
          .
        </P>
        <P>
          There’s not a single line of code mentioned in the course—instead, I
          used <Emoji>🍱</Emoji> <Italic>emoji puzzles</Italic> to explain these
          concepts. In this article, I’ll explain how my emoji puzzles can be
          used to represent and execute functional code{' '}
          <Italic>visually</Italic>. If you enjoy teaching programming to
          beginners, or if you like functional programming in general, I think
          you’ll enjoy this post.
        </P>
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
