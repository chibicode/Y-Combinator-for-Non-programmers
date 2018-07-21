import React from 'react'
import Expression from '../components/Expression'
import Flex from '../components/Flex'

interface FunctionExpressionProps {
  expression: ExpressionTypes.FunctionExpression
  isOuterMost?: boolean
  borderType?: 'functionArgs'
}

const FunctionExpression: React.SFC<FunctionExpressionProps> = ({
  expression
}) => (
  <div>
    <Flex flexDirection="row">
      <Flex justifyContent="center" borderRight={1} borderColor="darkYellow">
        <Expression expression={expression.arg} />
      </Flex>
      <Flex justifyContent="center" borderLeft={1} borderColor="darkYellow">
        <Expression expression={expression.body} />
      </Flex>
    </Flex>
  </div>
)

export default FunctionExpression
