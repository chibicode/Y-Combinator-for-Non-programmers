/** @jsx jsx */
import { css, jsx } from '@emotion/core'
export const jsxBabelFix = jsx
import React from 'react'
import { colors, spaces } from 'src/lib/theme'

export const Blockquote: React.FunctionComponent<
  JSX.IntrinsicElements['blockquote']
> = ({ ...props }) => (
  <blockquote
    {...props}
    css={css`
      border-left: 0.5rem solid ${colors('indigo50')};
      padding-left: 1rem;
      margin: 0 0 ${spaces(1)};
      color: ${colors('indigo500')};
    `}
  />
)
