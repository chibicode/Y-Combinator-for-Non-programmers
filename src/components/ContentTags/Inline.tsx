import Color from 'color'
import { css, cx } from 'emotion'
import React from 'react'
import { colors } from 'src/lib/theme'

export const Strong: React.SFC<JSX.IntrinsicElements['strong']> = ({
  className,
  ...props
}) => (
  <strong
    {...props}
    className={cx(
      css`
        colors: ${colors('grey900')};
      `,
      className
    )}
  />
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
        background: ${Color(colors('yellow200'))
          .alpha(0.75)
          .hsl()
          .string()};
      `,
      className
    )}
  />
)
