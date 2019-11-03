/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Page from 'src/components/Page'
import Head from 'next/head'
import { ns, fontSizes, colors, spaces } from 'src/lib/theme'
import { lessonTitle } from 'src/lib/titles'
import Container from 'src/components/Container'
import Emoji from 'src/components/Emoji'
import EpisodeHero from 'src/components/EpisodeHero'
import EpisodePageFooter from 'src/components/EpisodePageFooter'
import {
  P,
  Italic,
  Bold,
  InternalLink,
  ExternalLink,
  H3
} from 'src/components/ContentTags'
import locale from 'src/lib/locale'
import { DateTime } from 'luxon'
import { enBaseUrl } from 'src/lib/meta'
import Warning from 'src/components/Warning'

const date = DateTime.fromISO('2019-11-06T12:00:00Z')
const dateString = date
  .setLocale('en')
  .setZone('America/Los_Angeles')
  .toFormat('LLL d, yyyy')
const dateSchemaString = date.setZone('America/Los_Angeles').toISO()

const title = 'Using Emojis to Teach Functional Programming to Non-programmers'
const titleWithEmoji = `🍱 ${title}`
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

const Subheading = (props: JSX.IntrinsicElements['h3']) => (
  <H3
    {...props}
    css={css`
      margin: ${spaces(1.75)} 0 ${spaces(0.75)};
    `}
  />
)

export default () =>
  locale === 'en' ? (
    <Page>
      <Head>
        <title key="title">{titleWithEmoji}</title>
        <meta property="og:title" content={titleWithEmoji} />
        <meta property="og:site_name" content={lessonTitle} />
        <meta property="og:url" content={url} />
        <link rel="canonical" href={url} />
        <meta property="og:description" content={description} />
        <meta name="description" content={description} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="article:published_time" content={dateSchemaString} />
      </Head>
      <Container
        size="smsm"
        horizontalPadding={0.5}
        cssOverrides={css`
          padding-top: ${spaces(1.5)};
        `}
      >
        <EpisodeHero mainTitle={titleSplit} threeLineTitle />
      </Container>
      <Container
        size="smsm"
        horizontalPadding={0.75}
        cssOverrides={css`
          padding-bottom: ${spaces(6)};
        `}
      >
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
          To explain these concepts, I created{' '}
          <Bold>an educational puzzle using emojis</Bold> <Emoji>🍱</Emoji>. In
          this article, I’ll explain how my emoji puzzles can represent and
          execute functional code <Italic>visually</Italic>. If you enjoy
          teaching programming to beginners, or if you like functional
          programming in general, I think you’ll enjoy this post.
        </P>
        <Warning>
          <P>
            <Emoji>⚠️</Emoji> <Bold>Note:</Bold> This article is for programmers
            who are familiar with functional programming. If you’re a
            non-programmer, check out “
            <InternalLink href="/">
              <Bold>Y Combinator for Non-programmers</Bold>
            </InternalLink>
            ” instead.
          </P>
          <P
            css={css`
              margin-bottom: 0;
            `}
          >
            I’ll use <Bold>JavaScript</Bold> in this article. Even if you’re not
            familiar with JS, you should still be able to understand it.
          </P>
        </Warning>
        <Subheading>Identity function in JS</Subheading>
        <P>
          First, take a look at the following code. It’s an identity function in
          JavaScript that returns the argument.
        </P>
      </Container>
      <EpisodePageFooter />
    </Page>
  ) : (
    <></>
  )
