import repeat from 'lodash/repeat'
import React from 'react'
import Expression from 'src/components/Expression'
import Flex from 'src/components/Flex'
import { DecoratedCallExpression } from 'src/types/DecoratedExpressionTypes'

interface CallProps {
  expression: DecoratedCallExpression
}

const CallExpression: React.SFC<CallProps> = ({ expression }) => (
  <Flex flexDirection="column" flex={1}>
    <Flex justifyContent="center" borderBottom={2} borderColor="darkYellow">
      {expression.priority && repeat('↓', expression.priority)}
    </Flex>
    <Flex justifyContent="center" borderBottom={2} borderColor="darkYellow">
      <Expression expression={expression.value.arg} />
    </Flex>
    <Flex justifyContent="center" borderBottom={2} borderColor="darkYellow">
      <Expression expression={expression.value.func} />
    </Flex>
    <Flex justifyContent="center" borderColor="darkYellow" width={1}>
      {expression.priority && repeat('↑', expression.priority)}
    </Flex>
  </Flex>
)

export default CallExpression
