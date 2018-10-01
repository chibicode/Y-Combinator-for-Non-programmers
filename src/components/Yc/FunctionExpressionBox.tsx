import { css } from 'emotion'
import React from 'react'
import Flex from 'src/components/Flex'
import FlexCenter from 'src/components/FlexCenter'
import ExpressionBox from 'src/components/Yc/ExpressionBox'
import colors from 'src/lib/theme/colors'
import { PrioritizedFunctionExpression } from 'src/types/yc/PrioritizedExpressionTypes'

interface FunctionExpressionBoxProps {
  expression: PrioritizedFunctionExpression
}

const FunctionExpressionBox: React.SFC<FunctionExpressionBoxProps> = ({
  expression
}) => (
  <Flex
    className={css`
      flex: 1;
    `}
  >
    <FlexCenter
      className={css`
        border-right: 1px solid ${colors('grey300')};
      `}
    >
      <ExpressionBox expression={expression.arg} />
    </FlexCenter>
    <FlexCenter
      className={css`
        flex: 1;
        border-left: 1px solid ${colors('grey300')};
      `}
    >
      <ExpressionBox expression={expression.body} />
    </FlexCenter>
  </Flex>
)

export default FunctionExpressionBox
