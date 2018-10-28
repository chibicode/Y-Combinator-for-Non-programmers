import { css, cx } from 'emotion'
import React from 'react'
import Flex from 'src/components/Flex'
import FlexCenter from 'src/components/FlexCenter'
import ExpressionBox from 'src/components/Yc/ExpressionBox'
import colors from 'src/lib/theme/colors'
import { CallExpression } from 'src/types/yc/ExpressionTypes'

interface CallExpressionBoxProps {
  expression: CallExpression
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
      className={cx({
        [css`
          border-bottom: 5px solid ${colors('indigo300')};
        `]: expression.state !== 'default'
      })}
    >
      <ExpressionBox expression={expression.arg} />
    </FlexCenter>
    <FlexCenter>
      <ExpressionBox expression={expression.func} />
    </FlexCenter>
  </Flex>
)

export default CallExpressionBox
