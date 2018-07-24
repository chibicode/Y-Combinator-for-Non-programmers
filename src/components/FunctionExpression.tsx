import React from 'react'
import Expression from 'src/components/Expression'
import Flex from 'src/components/Flex'
import ExpressionTypes from 'src/types/UndecoratedExpressionTypes'

interface FunctionExpressionProps {
  expression: ExpressionTypes.UndecoratedFunctionExpression
}

const FunctionExpression: React.SFC<FunctionExpressionProps> = ({
  expression,
}) => (
  <Flex flexDirection="row" flex={1}>
    <Flex
      alignItems="center"
      justifyContent="center"
      borderRight={1}
      borderColor="darkYellow"
    >
      <Expression expression={expression.arg} />
    </Flex>
    <Flex
      alignItems="center"
      justifyContent="center"
      borderLeft={1}
      borderColor="darkYellow"
      flex={1}
    >
      <Expression expression={expression.body} />
    </Flex>
  </Flex>
)

export default FunctionExpression
