import React from 'react'
import Flex from '../components/Flex'
import Emoji from './Emoji'

interface VariableExpressionProps {
  expression: ExpressionTypes.VariableExpression
}

const VariableExpression: React.SFC<VariableExpressionProps> = ({
  expression
}) => (
  <Flex p={3}>
    <Emoji>{expression.name}</Emoji>
  </Flex>
)

export default VariableExpression
