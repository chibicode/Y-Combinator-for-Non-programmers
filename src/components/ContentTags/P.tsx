/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import { spaces } from 'src/lib/theme'

export const P: React.FunctionComponent<JSX.IntrinsicElements['p']> = ({
  ...props
}) => (
  <p
    {...props}
    css={css`
      margin: 0 0 ${spaces(1)};
    `}
  />
)
