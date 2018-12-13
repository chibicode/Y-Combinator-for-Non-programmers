/** @jsx jsx */
import { css, jsx } from '@emotion/core'
export const jsxBabelFix = jsx
import React from 'react'
import { colors } from 'src/lib/theme'

const TextHighlight: React.FunctionComponent<{ children: React.ReactNode }> = ({
  children
}) => (
  <span
    css={css`
      background: ${colors(`yellow200`)};
      color: ${colors('indigo500')};
    `}
  >
    {children}
  </span>
)

export default TextHighlight
