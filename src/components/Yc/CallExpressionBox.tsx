/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Flex from 'src/components/Flex'
import FlexCenter from 'src/components/FlexCenter'
import ExpressionBox from 'src/components/Yc/ExpressionBox'
import { CallExpression } from 'src/types/yc/ExpressionTypes'

interface CallExpressionBoxProps {
  expression: CallExpression
}

const CallExpressionBox = ({ expression }: CallExpressionBoxProps) => (
  <Flex
    css={css`
      flex-direction: column;
      flex: 1;
    `}
  >
    <FlexCenter css={expression.state !== 'default'}>
      <ExpressionBox expression={expression.arg} />
    </FlexCenter>
    <FlexCenter>
      <ExpressionBox expression={expression.func} />
    </FlexCenter>
  </Flex>
)

export default CallExpressionBox
