import repeat from 'lodash/repeat'
import React from 'react'
import BorderWrapper from 'src/components/BorderWrapper'
import Expression from 'src/components/Expression'
import Flex from 'src/components/Flex'
import { DecoratedCallExpression } from 'src/types/DecoratedExpressionTypes'

interface FunctionCallProps {
  expression: DecoratedCallExpression
}

const FunctionCallExpression: React.SFC<FunctionCallProps> = ({
  expression,
}) => (
  <BorderWrapper>
    <Flex flexDirection="column">
      <Flex justifyContent="center" borderBottom={2} borderColor="darkYellow">
        {expression.priority && repeat('↓', expression.priority)}
      </Flex>
      <Flex justifyContent="center" borderBottom={2} borderColor="darkYellow">
        <Expression expression={expression.value.arg} />
      </Flex>
      <Flex justifyContent="center" borderBottom={2} borderColor="darkYellow">
        <Expression expression={expression.value.func} />
      </Flex>
      <Flex justifyContent="center" borderColor="darkYellow">
        {expression.priority && repeat('↑', expression.priority)}
      </Flex>
    </Flex>
  </BorderWrapper>
)

export default FunctionCallExpression
