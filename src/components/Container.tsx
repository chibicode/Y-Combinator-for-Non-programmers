import { css } from 'emotion'
import React from 'react'
import maxWidths from 'src/lib/theme/maxWidths'
import spaces from 'src/lib/theme/spaces'

const Container: React.SFC<{ children: React.ReactNode }> = ({ children }) => (
  <div
    className={css`
      max-width: ${maxWidths(1024)};
      margin: 0 auto;
      padding: 0 ${spaces(16)};
    `}
  >
    {children}
  </div>
)

export default Container
