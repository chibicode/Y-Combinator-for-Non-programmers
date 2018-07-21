import React from 'react'
import Flex from '../components/Flex'
import Emoji from './Emoji'

interface VariableExpressionProps {
  expression: string
}

const VariableExpression: React.SFC<VariableExpressionProps> = ({
  expression
}) => (
  <Flex p={3}>
    <Emoji>{expression}</Emoji>
  </Flex>
)

export default VariableExpression
