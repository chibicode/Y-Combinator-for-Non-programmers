import React from 'react'
import Emoji from 'src/components/Emoji'
import Flex from 'src/components/Flex'

interface VariableExpressionProps {
  expression: string
}

const VariableExpression: React.SFC<VariableExpressionProps> = ({
  expression,
}) => (
  <Flex p={4}>
    <Emoji>{expression}</Emoji>
  </Flex>
)

export default VariableExpression
