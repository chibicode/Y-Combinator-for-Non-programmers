import React from 'react'
import Emoji from 'src/components/Emoji'
import Flex from 'src/components/Flex'
import letterEmojiMapping from 'src/lib/letterEmojiMapping'
import { DecoratedVariableExpression } from 'src/types/DecoratedExpressionTypes'

interface VariableExpressionProps {
  expression: DecoratedVariableExpression
}

const VariableExpression: React.SFC<VariableExpressionProps> = ({
  expression,
}) => (
  <Flex p={4}>
    <Emoji>{letterEmojiMapping[expression.value]}</Emoji>
  </Flex>
)

export default VariableExpression
