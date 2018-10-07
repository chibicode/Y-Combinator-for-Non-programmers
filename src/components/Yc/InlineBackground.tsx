import { css } from 'emotion'
import React from 'react'
import { colors } from 'src/lib/theme'
import { allColors } from 'src/lib/theme/colors'

const InlineBackground: React.SFC<{ bg: keyof typeof allColors }> = ({
  bg
}) => (
  <span
    className={css`
      display: inline-block;
      padding: 0.5em;
      background: ${colors(bg)};
      border: 2px solid ${colors('indigo300')};
      vertical-align: text-bottom;
    `}
  />
)

export default InlineBackground
