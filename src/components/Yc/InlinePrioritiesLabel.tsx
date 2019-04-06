/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import { colors, lineHeights, radii } from 'src/lib/theme'

const InlinePrioritiesLabel = ({
  children,
  revert,
  square
}: {
  children: React.ReactNode
  revert?: boolean
  square?: boolean
}) => (
  <span
    css={css`
      display: inline-block;
      vertical-align: text-bottom;
      width: 1.3em;
      border-radius: ${square ? 0 : radii(9999)};
      text-align: center;
      color: ${colors(revert ? 'white' : 'indigo300')};
      font-size: 0.85em;
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
