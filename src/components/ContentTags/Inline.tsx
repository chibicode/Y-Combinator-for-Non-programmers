import { css, cx } from 'emotion'
import React from 'react'
import SectionContext from 'src/components/SectionContext'
import { colors } from 'src/lib/theme'

export const Strong: React.SFC<JSX.IntrinsicElements['strong']> = props => (
  <strong {...props} />
)

export const Em: React.SFC<JSX.IntrinsicElements['em']> = ({
  className,
  ...props
}) => (
  <SectionContext.Consumer>
    {({ currentSection }) => (
      <em
        {...props}
        className={cx(
          css`
            font-style: normal;
            background: ${colors(
              currentSection === 'sideNote' ? 'white66' : 'yellow100'
            )};
          `,
          className
        )}
      />
    )}
  </SectionContext.Consumer>
)
