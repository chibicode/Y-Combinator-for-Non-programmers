import { css } from 'emotion'
import React from 'react'
import Emoji from 'src/components/Emoji'
import Flex from 'src/components/Flex'
import letterEmojiMapping from 'src/lib/letterEmojiMapping'
import { PrioritizedVariableExpression } from 'src/types/PrioritizedExpressionTypes'

interface VariableExpressionBoxProps {
  expression: PrioritizedVariableExpression
}

const VariableExpressionBox: React.SFC<VariableExpressionBoxProps> = ({
  expression
}) => (
  <Flex
    px={3}
    py={2}
    justifyContent="center"
    flex={1}
    className={css`
      position: relative;
    `}
  >
    <Emoji>{letterEmojiMapping[expression.name]}</Emoji>
  </Flex>
)

export default VariableExpressionBox
