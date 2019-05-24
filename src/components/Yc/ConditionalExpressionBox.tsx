/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Flex from 'src/components/Flex'
import FlexCenter from 'src/components/FlexCenter'
import ExpressionBox from 'src/components/Yc/ExpressionBox'
import { ConditionalExpression } from 'src/types/yc/ExpressionTypes'

interface ConditionalExpressionBoxProps {
  expression: ConditionalExpression
}

const ConditionalExpressionBox = ({
  expression
}: ConditionalExpressionBoxProps) => {
  return (
    <Flex
      css={css`
        flex-direction: column;
        flex: 1;
      `}
    >
      <FlexCenter>
        <ExpressionBox expression={expression.falseCase} />
      </FlexCenter>
      <FlexCenter>
        <ExpressionBox expression={expression.trueCase} />
      </FlexCenter>
      <FlexCenter>
        <ExpressionBox expression={expression.condition} />
      </FlexCenter>
    </Flex>
  )
}

export default ConditionalExpressionBox
