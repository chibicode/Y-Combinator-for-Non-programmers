import { css, cx } from 'emotion'
import React from 'react'
import maxWidths, { allMaxWidths } from 'src/lib/theme/maxWidths'
import spaces, { allSpaces } from 'src/lib/theme/spaces'

export interface ContainerProps {
  children: React.ReactNode
  Component: React.ComponentType<{ className?: string }> | string
  size: keyof typeof allMaxWidths
  verticalMargin: keyof typeof allSpaces
  horizontalPadding: keyof typeof allSpaces
}

const Container: React.FunctionComponent<ContainerProps> & {
  defaultProps: Partial<ContainerProps>
} = ({ children, Component, size, verticalMargin, horizontalPadding }) => (
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

Container.defaultProps = {
  Component: 'div',
  verticalMargin: 0,
  horizontalPadding: 1.25
}

export default Container
