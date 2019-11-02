/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Page from 'src/components/Page'
import Head from 'next/head'
// import H from 'src/components/H'
import { fontSizes, colors, spaces } from 'src/lib/theme'
import Container from 'src/components/Container'
// import CardWrapper from 'src/components/CardWrapper'
import EpisodeHero from 'src/components/EpisodeHero'
import EpisodePageFooter from 'src/components/EpisodePageFooter'
import { P, ExternalLink } from 'src/components/ContentTags'
import locale from 'src/lib/locale'
// import { EpisodeCardListType } from 'src/components/EpisodeCardList'
import { DateTime } from 'luxon'

const date = DateTime.fromISO('2019-11-06T12:00:00Z')
const dateString = date
  .setLocale('en')
  .setZone('America/Los_Angeles')
  .toFormat('LLL d, yyyy')
const dateSchemaString = date.setZone('America/Los_Angeles').toISO()

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
        <meta property="og:image" content={ogImageUrl} /> */}
        <meta property="article:published_time" content={dateSchemaString} />
      </Head>
      <div
        css={css`
          padding-top: ${spaces(1.5)};
        `}
      />
      <Container size="smsm" horizontalPadding={1}>
        <EpisodeHero mainTitle={titleSplit} threeLineTitle />
        <div
          css={css`
            text-align: center;
            color: ${colors('grey700')};
            font-size: ${fontSizes(0.85)};
          `}
        >
          {dateString} &middot; Shu Uesugi (
          <ExternalLink href="https://twitter.com/chibicode">
            @chibicode
          </ExternalLink>
          )
        </div>
        <img
          src="/static/images/animated@2x.gif"
          alt={title}
          css={css`
            width: 180px;
            margin: ${spaces(1.75)} auto ${spaces(2)};
            display: block;
          `}
        />
        <P>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
          neque quod eum maxime distinctio, commodi alias qui magni ullam
          dolores ipsa, odio esse quidem dicta. Voluptatem illo voluptate
          doloremque odit.
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
