import React from 'react'
import ExpressionBox from 'src/components/ExpressionBox'
import Flex from 'src/components/Flex'
import { PrioritizedCallExpression } from 'src/types/PrioritizedExpressionTypes'

interface CallExpressionBoxProps {
  expression: PrioritizedCallExpression
}

const CallExpressionBox: React.SFC<CallExpressionBoxProps> = ({
  expression
}) => (
  <Flex flexDirection="column" flex={1}>
    <Flex justifyContent="center" borderBottom={1} borderColor="lightGray">
      <ExpressionBox expression={expression.arg} />
    </Flex>
    <Flex justifyContent="center" borderTop={1} borderColor="lightGray">
      <ExpressionBox expression={expression.func} />
    </Flex>
  </Flex>
)

export default CallExpressionBox
