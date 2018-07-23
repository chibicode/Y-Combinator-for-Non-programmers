import Flex from 'components/Flex'
import React from 'react'
import Emoji from './Emoji'

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
