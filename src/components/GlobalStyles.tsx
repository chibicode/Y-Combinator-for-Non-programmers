import { css, injectGlobal } from 'emotion'
import 'modern-normalize'
import React from 'react'
import 'src/lib/nProgressStyles'
import { colors, lineHeights, spaces } from 'src/lib/theme'
import { NOT_SMALL } from 'src/lib/theme/ns'

// tslint:disable-next-line:no-unused-expression
injectGlobal`
  html {
    font-size: 18px;
  }

  @media screen and (min-width: ${NOT_SMALL}) {
    html {
      font-size: 21px;
    }
  }

  a {
    color: inherit;
  }

  svg {
    height: 100%;
  }
`

const GlobalStyles: React.SFC<{ children: React.ReactNode }> = ({
  children
}) => (
  <div
    className={css`
      color: ${colors('grey800')};
      line-height: ${lineHeights(1.5)};
      /* TODO: Temporary until page footer is ready */
      padding-bottom: ${spaces(3)};
    `}
  >
    {children}
  </div>
)

export default GlobalStyles
