/** @jsx jsx */
import { css, jsx } from '@emotion/core'
export const jsxBabelFix = jsx
import React from 'react'
import Container from 'src/components/Container'
import Content from 'src/components/Content'
import Page from 'src/components/Page'
import SectionContext from 'src/components/SectionContext'
import {
  colors,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  ns,
  spaces
} from 'src/lib/theme'
// https://github.com/airbnb/babel-plugin-inline-react-svg/pull/17
import Logo from '../src/images/CSmoji-Logo.svg'

const Index: React.FunctionComponent<{}> = () => (
  <Page>
    <Container size="md">
      <div
        css={css`
          color: ${colors('indigo300')};
          padding: ${spaces(2)} 0;
          line-height: ${lineHeights(1.3)};
          font-size: ${fontSizes(1.5)};
          font-weight: ${fontWeights(600)};
          letter-spacing: ${letterSpacings('title')};
          margin: 0 auto;
          ${ns} {
            padding: ${spaces(4)} 0;
          }
        `}
      >
        <div
          css={css`
            margin-bottom: 3em;
          `}
        >
          <h1
            css={css`
              margin: 0 0 ${spaces(1)};
              font-size: ${fontSizes(1.75)};
            `}
          >
            <span
              css={css`
                display: inline-block;
                height: 2.5em;
              `}
            >
              <Logo />
            </span>
          </h1>
          <SectionContext.Provider
            value={{
              emBackgroundColor: colors('yellow200'),
              emForegroundColor: colors('indigo500')
            }}
          >
            <Content name="others/Welcome" />
          </SectionContext.Provider>
        </div>
        <div
          css={css`
            color: ${colors('indigo200')};
          `}
        >
          <Content name="others/ComingSoon" />
        </div>
      </div>
    </Container>
  </Page>
)

export default Index
