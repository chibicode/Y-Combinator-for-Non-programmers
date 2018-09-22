import { css } from 'emotion'
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

const TextHighlight: React.SFC<{ children: React.ReactNode }> = ({
  children
}) => (
  <span
    className={css`
      background: ${colors(`yellow200`)};
    `}
  >
    {children}
  </span>
)

const Index: React.SFC<{}> = () => (
  <Page>
    <Container>
      <div
        className={css`
          color: ${colors('grey900')};
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
            font-weight: ${fontWeights(800)};
            ${ns(css`
              font-size: ${fontSizes(48)};
            `)};
          `}
        >
          Welcome to Hoshiai.
        </h1>
        <p>
          Our lessons teach <TextHighlight>non-programmers</TextHighlight> how
          to think like Computer Scientists.
        </p>
        <p>
          There's <TextHighlight>no coding</TextHighlight> involved. Just{' '}
          <TextHighlight>puzzles</TextHighlight>. And it's{' '}
          <TextHighlight>free</TextHighlight>.
        </p>
        <p>
          Try our first lesson:{' '}
          <span
            className={css`
              font-weight: ${fontWeights(800)};
              color: ${colors('red500')};
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
