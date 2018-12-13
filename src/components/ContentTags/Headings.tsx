/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import { colors, fontSizes, spaces } from 'src/lib/theme'

export const H3: React.FunctionComponent<JSX.IntrinsicElements['h3']> = ({
  ...props
}) => (
  <h3
    {...props}
    css={css`
      color: ${colors('grey900')};
      margin: ${spaces(2)} 0 ${spaces(0.5)};
      font-size: ${fontSizes(1.25)};
    `}
  />
)
