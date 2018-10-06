import React from 'react'
import Container, { ContainerProps } from 'src/components/Container'

const ExpressionRunnerWrapper: React.SFC<{
  children: React.ReactNode
  size?: ContainerProps['size']
}> = ({ children, size = 'xxs' }) => (
  <Container size={size} horizontalPadding={0} verticalMargin={1.75}>
    {children}
  </Container>
)

export default ExpressionRunnerWrapper
