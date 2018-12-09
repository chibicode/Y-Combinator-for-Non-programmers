import { css, cx } from 'emotion'
import React from 'react'
import SectionContext from 'src/components/SectionContext'
import { colors } from 'src/lib/theme'

export const Strong: React.SFC<JSX.IntrinsicElements['strong']> = ({
  className,
  ...props
}) => (
  <strong
    className={cx(
      css`
        font-weight: bold;
      `,
      className
    )}
    {...props}
  />
)

export const Em: React.SFC<JSX.IntrinsicElements['em']> = ({
  className,
  ...props
}) => (
  <SectionContext.Consumer>
    {({ emBackgroundColor }) => (
      <em
        {...props}
        className={cx(
          css`
            font-style: normal;
            background: ${emBackgroundColor || colors('yellow100')};
          `,
          className
        )}
      />
    )}
  </SectionContext.Consumer>
)
