import React from 'react'
import ExpressionBox from 'src/components/ExpressionBox'
import Flex from 'src/components/Flex'
import { PrioritizedFunctionExpression } from 'src/types/PrioritizedExpressionTypes'

interface FunctionExpressionBoxProps {
  expression: PrioritizedFunctionExpression
}

const FunctionExpressionBox: React.SFC<FunctionExpressionBoxProps> = ({
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
      <ExpressionBox expression={expression.arg} />
    </Flex>
    <Flex
      alignItems="center"
      justifyContent="center"
      borderLeft={1}
      borderColor="lightGray"
      height={1}
      flex={1}
    >
      <ExpressionBox expression={expression.body} />
    </Flex>
  </Flex>
)

export default FunctionExpressionBox
