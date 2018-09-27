import { css, cx } from 'emotion'
import React from 'react'
import { colors } from 'src/lib/theme'

export const ExternalLink: React.SFC<JSX.IntrinsicElements['a']> = ({
  className,
  ...props
}) => (
  <a
    {...props}
    className={cx(
      className,
      css`
        &:hover,
        &:active {
          background-color: ${colors('pink50')};
        }
      `
    )}
  />
)
