import { css, cx } from 'emotion'
import React from 'react'
import { colors } from 'src/lib/theme'

export const Hr: React.SFC<JSX.IntrinsicElements['hr']> = ({
  className,
  ...props
}) => (
  <hr
    {...props}
    className={cx(
      className,
      css`
        border-top: none;
        border-bottom: 1px solid ${colors('grey300')};
        margin-top: 2em;
        margin-bottom: 2em;
        width: 25%;
      `
    )}
  />
)
