import { css, injectGlobal } from 'emotion'
import 'modern-normalize'
import React from 'react'
import 'src/lib/nProgressStyles'
import { colors, lineHeights, spaces } from 'src/lib/theme'
import { NOT_SMALL } from 'src/lib/theme/ns'

// tslint:disable-next-line:no-unused-expression
injectGlobal`
  /* NOTE:
     double-tap optimization was removed: https://github.com/twbs/bootstrap/commit/2e15b9488874d8c129e6bd4da0425ecbac359c03 */
  html {
    font-size: 18px;
  }

  @media screen and (min-width: ${NOT_SMALL}) {
    html {
      /* NOTE: BorderWrapper background image size can be 1.5rem, so if this is not even
         they won't be able to repeat correctly. */
      font-size: 22px;
    }
  }

  a {
    color: inherit;
  }

  svg {
    height: 100%;
    width: auto;
  }

  button {
    -webkit-user-select: none;
    -webkit-tap-highlight-color: transparent;
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
