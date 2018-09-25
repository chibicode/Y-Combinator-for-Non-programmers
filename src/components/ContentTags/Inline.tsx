import { css, cx } from 'emotion'
import React from 'react'
import { colors } from 'src/lib/theme'

export const Strong: React.SFC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
> = props => <strong {...props} />

export const Em: React.SFC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
> = ({ className, ...props }) => (
  <Em
    {...props}
    className={cx(
      className,
      css`
        background: ${colors('yellow200')};
      `
    )}
  />
)
