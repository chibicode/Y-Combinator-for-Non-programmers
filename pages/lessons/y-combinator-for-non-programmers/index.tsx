import { css } from 'emotion'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Container from 'src/components/Container'
import Content from 'src/components/Content'
import Emoji from 'src/components/Emoji'
import Page from 'src/components/Page'
import t from 'src/lib/t'
import {
  colors,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  ns,
  spaces
} from 'src/lib/theme'

const Index: React.SFC<{}> = () => (
  <Page>
    <Head>
      <title key="title">{t('lesson1Title')} | Hoshiai</title>
    </Head>
    <Container size="lg">
      <div
        className={css`
          padding-top: ${spaces(1.5)};
        `}
      >
        <div
          className={css`
            text-align: center;
          `}
        >
          <Link href="/">
            <a>
              <img
                src="/static/images/logo-svg-text-indigo.svg"
                alt="Hoshiai"
                className={css`
                  height: 2em;
                `}
              />
            </a>
          </Link>
        </div>
        <h1
          className={css`
            color: ${colors('grey900')};
            padding-top: ${spaces(2)};
            line-height: ${lineHeights(1.3)};
            font-size: ${fontSizes(2)};
            font-weight: ${fontWeights(800)};
            letter-spacing: ${letterSpacings('title')};
            margin: 0 auto ${spaces(2)};
            text-align: center;
            ${ns(css`
              font-size: ${fontSizes(2.5)};
            `)};
          `}
        >
          {t('lesson1Title')}
        </h1>
        <div
          className={css`
            text-align: center;
            margin-bottom: ${spaces(1.5)};
            font-size: ${fontSizes(4)};
          `}
        >
          <Emoji>🤔</Emoji> <Emoji>🤔</Emoji> <Emoji>🤔</Emoji>
        </div>
      </div>
    </Container>
    <Container size="sm">
      <div>
        <Content name="l1/Intro" />
      </div>
    </Container>
  </Page>
)

export default Index
