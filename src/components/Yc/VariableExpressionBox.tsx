import { css } from 'emotion'
import React from 'react'
import Emoji from 'src/components/Emoji'
import FlexCenter from 'src/components/FlexCenter'
import letterEmojiMapping from 'src/lib/yc/letterEmojiMapping'
import spaces from 'src/lib/theme/spaces'
import { PrioritizedVariableExpression } from 'src/types/yc/PrioritizedExpressionTypes'

interface VariableExpressionBoxProps {
  expression: PrioritizedVariableExpression
}

const VariableExpressionBox: React.SFC<VariableExpressionBoxProps> = ({
  expression
}) => (
  <FlexCenter
    className={css`
      flex: 1;
      padding: ${spaces(0.5)} ${spaces(0.75)};
    `}
  >
    <Emoji>{letterEmojiMapping[expression.name]}</Emoji>
  </FlexCenter>
)

export default VariableExpressionBox
