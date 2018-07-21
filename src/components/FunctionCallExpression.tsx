import React from 'react'
import BorderWrapper from '../components/BorderWrapper'
import Expression from '../components/Expression'
import Flex from '../components/Flex'

interface FunctionCallProps {
  expression: ExpressionTypes.CallExpression
}

const FunctionCallExpression: React.SFC<FunctionCallProps> = ({
  expression
}) => (
  <BorderWrapper>
    <Flex flexDirection="column">
      <Flex justifyContent="center" borderBottom={1} borderColor="darkYellow">
        <Expression expression={expression.arg} />
      </Flex>
      <Flex borderTop={1} borderColor="darkYellow" justifyContent="center">
        <Expression expression={expression.func} />
      </Flex>
    </Flex>
  </BorderWrapper>
)

export default FunctionCallExpression
