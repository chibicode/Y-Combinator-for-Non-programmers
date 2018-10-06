import { css, cx } from 'emotion'
import React from 'react'
import maxWidths, { allMaxWidths } from 'src/lib/theme/maxWidths'
import spaces, { allSpaces } from 'src/lib/theme/spaces'

export interface ContainerProps {
  children: React.ReactNode
  Component?: React.ComponentType | string
  size: keyof typeof allMaxWidths
  verticalMargin?: keyof typeof allSpaces
  horizontalPadding?: keyof typeof allSpaces
}

const Container: React.SFC<ContainerProps> = ({
  children,
  Component = 'div',
  size,
  verticalMargin = 0,
  horizontalPadding = 1.25
}) => (
  <Component
    className={cx(
      css`
        max-width: ${maxWidths(size)};
        margin: ${spaces(verticalMargin)} auto;
        padding: 0 ${spaces(horizontalPadding)};
      `
    )}
  >
    {children}
  </Component>
)

export default Container
