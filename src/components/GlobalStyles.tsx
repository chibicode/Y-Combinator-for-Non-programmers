import { css } from 'emotion'
import 'modern-normalize'
import React from 'react'
import colors from 'src/lib/theme/colors'

const GlobalStyles: React.SFC<{ children: React.ReactNode }> = ({
  children
}) => (
  <div
    className={css`
      color: ${colors('gray800')};
    `}
  >
    {children}
  </div>
)

export default GlobalStyles
