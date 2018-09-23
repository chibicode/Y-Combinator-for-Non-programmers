import { css } from 'emotion'
import React from 'react'
import Container from 'src/components/Container'
import Content from 'src/components/Content'
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
    <Container>
      <div
        className={css`
          color: ${colors('grey800')};
          padding: ${spaces(32)} 0;
          line-height: ${lineHeights(1.25)};
          font-size: ${fontSizes(24)};
          font-weight: ${fontWeights(600)};
          letter-spacing: ${letterSpacings('title')};
          margin: 0 auto;
          ${ns(css`
            width: ${columnWidths(10)};
            font-size: ${fontSizes(32)};
            padding: ${spaces(96)} 0;
          `)};
        `}
      >
        <h1
          className={css`
            margin: 0;
            font-size: ${fontSizes(32)};
            ${ns(css`
              font-size: ${fontSizes(48)};
            `)};
          `}
        >
          <img
            src="/static/images/logo-svg-text.svg"
            alt="Hoshiai"
            className={css`
              height: 2em;
            `}
          />
        </h1>
        <Content name="others/welcome" />
        <p
          className={css`
            margin-bottom: 3em;
          `}
        >
          Try our first lesson:{' '}
          <span
            className={css`
              font-weight: ${fontWeights(800)};
              color: ${colors('pink400')};
              text-decoration: underline;
            `}
          >
            Y Combinator for Non-Programmers
          </span>
          .
        </p>
        <p
          className={css`
            color: ${colors('grey500')};
          `}
        >
          More lessons coming soon. Leave your email below and we'll let you
          know!
        </p>
      </div>
    </Container>
  </Page>
)

export default Index
