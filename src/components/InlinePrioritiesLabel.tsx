import { css } from '@emotion/react'
import React from 'react'
import { colors, lineHeights, radii } from 'src/lib/theme'

const InlinePrioritiesLabel = ({
  children,
  revert
}: {
  children: React.ReactNode
  revert?: boolean
}) => (
  <span
    css={css`
      display: inline-block;
      vertical-align: text-bottom;
      width: 1.45em;
      height: 1.45em;
      border-radius: ${radii(9999)};
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
