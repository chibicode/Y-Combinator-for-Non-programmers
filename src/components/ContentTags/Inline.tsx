import { css, cx } from 'emotion'
import React from 'react'
import { colors } from 'src/lib/theme'

export const Strong: React.SFC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
> = props => <strong {...props} />

export const Em: React.SFC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
> = ({ className, ...props }) => (
  <em
    {...props}
    className={cx(
      className,
      css`
        font-style: normal;
        background: ${colors('pink50')};
      `
    )}
  />
)
