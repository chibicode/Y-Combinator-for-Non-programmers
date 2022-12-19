/** @jsx jsx */
import { css, jsx, SerializedStyles } from '@emotion/react'
import React from 'react'
import maxWidths, { allMaxWidths } from 'src/lib/theme/maxWidths'
import spaces, { allSpaces } from 'src/lib/theme/spaces'

export interface ContainerProps {
  children: React.ReactNode
  Component: React.ComponentType | string
  size: keyof typeof allMaxWidths
  horizontalPadding: keyof typeof allSpaces
  cssOverrides?: SerializedStyles
}

const Container = ({
  children,
  Component,
  size,
  horizontalPadding,
  cssOverrides
}: ContainerProps) => (
  <Component
    css={[
      css`
        max-width: ${maxWidths(size)};
        margin: 0 auto;
        padding: 0 ${spaces(horizontalPadding)};
      `,
      cssOverrides
    ]}
  >
    {children}
  </Component>
)

Container.defaultProps = {
  Component: 'div',
  size: 'sm',
  horizontalPadding: 0.5
}

export default Container
