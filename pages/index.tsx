import { css } from 'emotion'
import React from 'react'
import Container from 'src/components/Container'
import Page from 'src/components/Page'
import {
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  ns,
  spaces
} from 'src/lib/theme'

const Index: React.SFC<{}> = () => (
  <Page>
    <Container>
      <div
        className={css`
          padding: ${spaces(20)} 0;
          line-height: ${lineHeights(1.25)};
          font-size: ${fontSizes(24)};
          font-weight: ${fontWeights(600)};
          letter-spacing: ${letterSpacings('title')};
          ${ns(css`
            font-size: ${fontSizes(40)};
            padding: ${spaces(128)} 0;
          `)};
        `}
      >
        <h1
          className={css`
            font-size: ${fontSizes(32)};
            font-weight: ${fontWeights(800)};
            ${ns(css`
              font-size: ${fontSizes(64)};
            `)};
          `}
        >
          Welcome to Hoshiai.
        </h1>
        <p>
          Our lessons teach non-programmers how to think like Computer
          Scientists. There's no coding involved. Just puzzles. And it's free.
        </p>
        <p>
          Try our first lesson:{' '}
          <span
            className={css`
              font-weight: ${fontWeights(800)};
            `}
          >
            Y Combinator for Non-Programmers
          </span>
          .
        </p>
        <p>
          More lessons coming soon. Leave your email below and we'll let you
          know!
        </p>
      </div>
    </Container>
  </Page>
)

export default Index
