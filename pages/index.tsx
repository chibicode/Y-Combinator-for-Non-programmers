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
          color: ${colors('indigo300')};
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
        <div
          className={css`
            margin-bottom: 3em;
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
              src="/static/images/logo-svg-text-indigo.svg"
              alt="Hoshiai"
              className={css`
                height: 2em;
              `}
            />
          </h1>
          <Content name="home/Welcome" />
        </div>
        <p
          className={css`
            color: ${colors('indigo200')};
          `}
        >
          <Content name="home/ComingSoon" />
        </p>
      </div>
    </Container>
  </Page>
)

export default Index
