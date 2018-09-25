import { css } from 'emotion'
import React from 'react'
import maxWidths from 'src/lib/theme/maxWidths'
import spaces from 'src/lib/theme/spaces'

interface ContainerProps {
  children: React.ReactNode
  Component?: React.ComponentType | string
  size: 'sm' | 'lg'
}

const Container: React.SFC<ContainerProps> = ({
  children,
  Component = 'div',
  size
}) => (
  <Component
    className={css`
      max-width: ${maxWidths(size)};
      margin: 0 auto;
      padding: 0 ${spaces(20)};
    `}
  >
    {children}
  </Component>
)

export default Container
