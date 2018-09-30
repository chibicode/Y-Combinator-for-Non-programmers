import { css, cx } from 'emotion'
import React from 'react'
import { colors, spaces } from 'src/lib/theme'

export const Blockquote: React.SFC<JSX.IntrinsicElements['blockquote']> = ({
  className,
  ...props
}) => (
  <blockquote
    {...props}
    className={cx(
      css`
        border-left: 0.5rem solid ${colors('indigo50')};
        padding-left: 1rem;
        margin: 0 0 ${spaces(1)};
        color: ${colors('indigo500')};
      `,
      className
    )}
  />
)
