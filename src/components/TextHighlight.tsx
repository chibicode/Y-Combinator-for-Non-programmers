import { css } from 'emotion'
import React from 'react'
import { colors } from 'src/lib/theme'

const TextHighlight: React.SFC<{ children: React.ReactNode }> = ({
  children
}) => (
  <span
    className={css`
      background: ${colors(`yellow200`)};
      color: ${colors('grey900')};
    `}
  >
    {children}
  </span>
)

export default TextHighlight
