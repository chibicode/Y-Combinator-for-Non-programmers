import { css } from 'emotion'
import React from 'react'
import ExpressionBox from 'src/components/Yc/ExpressionBox'
import Flex from 'src/components/Flex'
import FlexCenter from 'src/components/FlexCenter'
import colors from 'src/lib/theme/colors'
import { PrioritizedCallExpression } from 'src/types/yc/PrioritizedExpressionTypes'

interface CallExpressionBoxProps {
  expression: PrioritizedCallExpression
}

const CallExpressionBox: React.SFC<CallExpressionBoxProps> = ({
  expression
}) => (
  <Flex
    className={css`
      flex-direction: column;
      flex: 1;
    `}
  >
    <FlexCenter
      className={css`
        border-bottom: 1px solid ${colors('grey300')};
      `}
    >
      <ExpressionBox expression={expression.arg} />
    </FlexCenter>
    <FlexCenter
      className={css`
        border-top: 1px solid ${colors('grey300')};
      `}
    >
      <ExpressionBox expression={expression.func} />
    </FlexCenter>
  </Flex>
)

export default CallExpressionBox
