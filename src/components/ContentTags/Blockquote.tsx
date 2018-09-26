import { css, cx } from 'emotion'
import React from 'react'
import { colors } from 'src/lib/theme'

export const Blockquote: React.SFC<JSX.IntrinsicElements['blockquote']> = ({
  className,
  ...props
}) => (
  <blockquote
    {...props}
    className={cx(
      className,
      css`
        border-left: 0.5rem solid ${colors('indigo50')};
        padding-left: 1rem;
        margin: 1em 0;
        color: ${colors('indigo500')};
      `
    )}
  />
)
