import { css } from 'emotion'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Container from 'src/components/Container'
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
          padding-top: ${spaces(24)};
          ${ns(css`
            padding-top: ${spaces(32)};
          `)};
        `}
      >
        <div
          className={css`
            text-align: center;
            font-size: ${fontSizes(16)};
            ${ns(css`
              font-size: ${fontSizes(20)};
            `)};
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
            padding-top: ${spaces(32)};
            line-height: ${lineHeights(1.3)};
            font-size: ${fontSizes(32)};
            font-weight: ${fontWeights(800)};
            letter-spacing: ${letterSpacings('title')};
            margin: 0 auto ${spaces(32)};
            text-align: center;
            ${ns(css`
              font-size: ${fontSizes(48)};
              margin: 0 auto ${spaces(40)};
            `)};
          `}
        >
          {t('lesson1Title')}
        </h1>
        <div
          className={css`
            text-align: center;
            margin-bottom: ${spaces(24)};
            font-size: ${fontSizes(64)};
            ${ns(css`
              margin-bottom: ${spaces(32)};
              font-size: ${fontSizes(80)};
            `)};
          `}
        >
          <Emoji>🤔</Emoji> <Emoji>🤔</Emoji> <Emoji>🤔</Emoji>
        </div>
      </div>
    </Container>
    <Container size="sm">
      <div>
        <div
          className={css`
            ${ns(css`
              font-size: ${fontSizes(20)};
              margin: 0 auto;
            `)};
          `}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
            pariatur fuga maxime, delectus culpa atque ea ratione deleniti,
            laudantium id sit mollitia illo enim ducimus illum quos vitae,
            consequatur neque.
          </p>
        </div>
      </div>
    </Container>
  </Page>
)

export default Index
