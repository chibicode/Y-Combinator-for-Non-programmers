import repeat from 'lodash/repeat'
import React from 'react'
import BorderWrapper from '../components/BorderWrapper'
import Expression from '../components/Expression'
import Flex from '../components/Flex'

interface FunctionCallProps {
  expression: ExpressionTypes.CallExpression
  callNestLevel?: number
}

const FunctionCallExpression: React.SFC<FunctionCallProps> = ({
  expression,
  callNestLevel
}) => (
  <BorderWrapper>
    <Flex flexDirection="column">
      <Flex justifyContent="center" borderBottom={2} borderColor="darkYellow">
        {repeat('↓', callNestLevel)}
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
            <Expression expression={e} callNestLevel={callNestLevel + 1} />
          </Flex>
        ))}
      <Flex justifyContent="center" borderColor="darkYellow">
        {repeat('↑', callNestLevel)}
      </Flex>
    </Flex>
  </BorderWrapper>
)

FunctionCallExpression.defaultProps = {
  callNestLevel: 1
}

export default FunctionCallExpression
