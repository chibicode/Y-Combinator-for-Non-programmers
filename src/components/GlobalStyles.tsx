import { css } from 'emotion'
import 'modern-normalize'
import React from 'react'
import 'src/lib/nProgressStyles'
import colors from 'src/lib/theme/colors'

const GlobalStyles: React.SFC<{ children: React.ReactNode }> = ({
  children
}) => (
  <div
    className={css`
      color: ${colors('grey800')};
    `}
  >
    {children}
  </div>
)

export default GlobalStyles
