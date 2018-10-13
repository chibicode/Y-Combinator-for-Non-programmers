import { css, cx } from 'emotion'
import React from 'react'
import { colors, fontSizes, spaces } from 'src/lib/theme'

export const H3: React.SFC<JSX.IntrinsicElements['h3']> = ({
  className,
  ...props
}) => (
  <h3
    {...props}
    className={cx(
      css`
        colors: ${colors('grey900')};
        margin: ${spaces(2)} 0 ${spaces(0.5)};
        font-size: ${fontSizes(1.25)};
      `,
      className
    )}
  />
)
