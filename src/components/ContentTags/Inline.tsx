import { css, cx } from 'emotion'
import React from 'react'
import { colors } from 'src/lib/theme'

export const Strong: React.SFC<JSX.IntrinsicElements['strong']> = props => (
  <strong {...props} />
)

export const Em: React.SFC<JSX.IntrinsicElements['em']> = ({
  className,
  ...props
}) => (
  <em
    {...props}
    className={cx(
      css`
        font-style: normal;
        background: ${colors('yellow100')};
      `,
      className
    )}
  />
)
