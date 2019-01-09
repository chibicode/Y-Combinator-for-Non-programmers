/** @jsx jsx */
import { css, jsx } from '@emotion/core'
export const jsxBabelFix = jsx
import React from 'react'
import { colors, fontSizes, lineHeights, spaces } from 'src/lib/theme'

const InlinePrioritiesLabel: React.FC<{
  children: React.ReactNode
  revert?: boolean
}> = ({ children, revert }) => (
  <span
    css={css`
      display: inline-block;
      vertical-align: text-bottom;
      padding: 0 ${spaces(0.25)};
      color: ${colors(revert ? 'white' : 'indigo300')};
      font-size: ${fontSizes(0.75)};
      font-weight: bold;
      line-height: ${lineHeights(1.3, { ignoreLocale: true })};
      border: 2px solid ${colors('indigo300')};
      background: ${colors(revert ? 'pink400' : 'white')};
    `}
  >
    {children}
  </span>
)

export default InlinePrioritiesLabel
