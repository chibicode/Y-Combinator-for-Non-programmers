import { css } from 'emotion'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Container from 'src/components/Container'
import Page from 'src/components/Page'
import t from 'src/lib/t'
import {
  colors,
  columnWidths,
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
    <Container>
      <div
        className={css`
          padding: ${spaces(24)} 0;
          ${ns(css`
            padding: ${spaces(32)} 0;
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
            line-height: ${lineHeights(1.25)};
            font-size: ${fontSizes(32)};
            font-weight: ${fontWeights(800)};
            letter-spacing: ${letterSpacings('title')};
            margin: 0 auto;
            text-align: center;
            ${ns(css`
              width: ${columnWidths(10)};
              font-size: ${fontSizes(48)};
            `)};
          `}
        >
          {t('lesson1Title')}
        </h1>
      </div>
    </Container>
  </Page>
)

export default Index
