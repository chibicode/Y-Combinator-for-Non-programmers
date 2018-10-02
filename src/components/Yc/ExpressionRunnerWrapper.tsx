import React from 'react'
import Container from 'src/components/Container'

const ExpressionRunnerWrapper: React.SFC<{ children: React.ReactNode }> = ({
  children
}) => (
  <Container size="xxs" horizontalPadding={0} verticalMargin={1.75}>
    {children}
  </Container>
)

export default ExpressionRunnerWrapper
