import { css } from 'emotion'
import React from 'react'
import Emoji from 'src/components/Emoji'
import FlexCenter from 'src/components/FlexCenter'
import { fontSizes, spaces } from 'src/lib/theme'
import letterEmojiMapping from 'src/lib/yc/letterEmojiMapping'
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
      font-size: ${fontSizes(1.25)};
      padding: ${spaces(0.5)} 0;
    `}
  >
    <Emoji>{letterEmojiMapping[expression.name]}</Emoji>
  </FlexCenter>
)

export default VariableExpressionBox
