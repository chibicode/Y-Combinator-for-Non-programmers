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
      <Flex justifyContent="center" borderBottom={2} borderColor="darkYellow">
        ↓
      </Flex>
      {expression
        .slice(0)
        .reverse()
        .map(e => (
          <Flex
            justifyContent="center"
            borderBottom={2}
            borderColor="darkYellow"
          >
            <Expression expression={e} />
          </Flex>
        ))}
      <Flex justifyContent="center" borderColor="darkYellow">
        ↑
      </Flex>
    </Flex>
  </BorderWrapper>
)

export default FunctionCallExpression
