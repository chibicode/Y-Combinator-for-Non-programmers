import { css, cx } from 'emotion'
import React from 'react'
import { spaces } from 'src/lib/theme'

export const P: React.FunctionComponent<JSX.IntrinsicElements['p']> = ({
  className,
  ...props
}) => (
  <p
    {...props}
    className={cx(
      css`
        margin: 0 0 ${spaces(1)};
      `,
      className
    )}
  />
)
