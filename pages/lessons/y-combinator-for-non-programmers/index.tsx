import { css } from 'emotion'
import Head from 'next/head'
import React from 'react'
import Container from 'src/components/Container'
import Page from 'src/components/Page'
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
      <title key="title">Y Combinator for Non-Programmers | Hoshiai</title>
    </Head>
    <Container>
      <div>
        <h1
          className={css`
            color: ${colors('grey900')};
            padding: ${spaces(32)} 0;
            line-height: ${lineHeights(1.25)};
            font-size: ${fontSizes(32)};
            font-weight: ${fontWeights(800)};
            letter-spacing: ${letterSpacings('title')};
            margin: 0 auto;
            text-align: center;
            ${ns(css`
              width: ${columnWidths(10)};
              font-size: ${fontSizes(48)};
              padding: ${spaces(64)} 0;
            `)};
          `}
        >
          Y Combinator for Non-Programmers
        </h1>
      </div>
    </Container>
  </Page>
)

export default Index
