import { css } from 'emotion'
import 'modern-normalize'
import React from 'react'
import 'src/lib/nProgressStyles'
import { colors, lineHeights } from 'src/lib/theme'

const GlobalStyles: React.SFC<{ children: React.ReactNode }> = ({
  children
}) => (
  <div
    className={css`
      color: ${colors('grey800')};
      line-height: ${lineHeights(1.5)};
    `}
  >
    {children}
  </div>
)

export default GlobalStyles
