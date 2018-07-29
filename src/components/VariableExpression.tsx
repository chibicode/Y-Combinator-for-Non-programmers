import React from 'react'
import Emoji from 'src/components/Emoji'
import Flex from 'src/components/Flex'
import letterEmojiMapping from 'src/lib/letterEmojiMapping'
import ExpressionTypes from 'src/types/ExpressionTypes'

interface VariableExpressionProps {
  expression: ExpressionTypes.VariableExpression
}

const VariableExpression: React.SFC<VariableExpressionProps> = ({
  expression
}) => (
  <Flex p={4} justifyContent="center" flex={1}>
    <Emoji>{letterEmojiMapping[expression.value]}</Emoji>
  </Flex>
)

export default VariableExpression
