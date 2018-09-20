import { css } from 'emotion'
import React from 'react'
import colors from 'src/lib/theme/colors'
import fonts from 'src/lib/theme/fonts'

const GlobalStyles: React.SFC<{ children: React.ReactNode }> = ({
  children
}) => (
  <div
    className={css`
      font-family: ${fonts('sans')};
      color: ${colors('gray800')};
    `}
  >
    {children}
  </div>
)

export default GlobalStyles
