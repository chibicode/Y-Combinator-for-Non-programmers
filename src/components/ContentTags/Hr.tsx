/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import { colors } from 'src/lib/theme'

export const Hr: React.FunctionComponent<JSX.IntrinsicElements['hr']> = ({
  ...props
}) => (
  <hr
    {...props}
    css={css`
      border-top: none;
      border-bottom: 1px solid ${colors('grey300')};
      margin-top: 2em;
      margin-bottom: 2em;
      width: 25%;
    `}
  />
)
