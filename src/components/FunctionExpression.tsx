import React from 'react'
import Expression from 'src/components/Expression'
import Flex from 'src/components/Flex'
import { PrioritizedFunctionExpression } from 'src/types/PrioritizedExpressionTypes'

interface FunctionExpressionProps {
  expression: PrioritizedFunctionExpression
}

const FunctionExpression: React.SFC<FunctionExpressionProps> = ({
  expression
}) => (
  <Flex flexDirection="row" flex={1}>
    <Flex
      alignItems="center"
      justifyContent="center"
      borderRight={1}
      borderColor="lightGray"
      height={1}
    >
      <Expression expression={expression.arg} />
    </Flex>
    <Flex
      alignItems="center"
      justifyContent="center"
      borderLeft={1}
      borderColor="lightGray"
      height={1}
      flex={1}
    >
      <Expression expression={expression.body} />
    </Flex>
  </Flex>
)

export default FunctionExpression
