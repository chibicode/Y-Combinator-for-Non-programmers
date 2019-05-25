/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Flex from 'src/components/Flex'
import FlexCenter from 'src/components/FlexCenter'
import ExpressionBox from 'src/components/ExpressionBox'
import { ConditionalExpression } from 'src/types/ExpressionTypes'
import ConditionalBorder from 'src/components/ConditionalBorder'

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
        position: relative;
      `}
    >
      <FlexCenter
        css={css`
          position: relative;
        `}
      >
        <ConditionalBorder addBottom type="falseCase" />
        <ExpressionBox expression={expression.falseCase} />
      </FlexCenter>
      <FlexCenter
        css={css`
          position: relative;
        `}
      >
        <ConditionalBorder addBottom type="trueCase" />
        <ExpressionBox expression={expression.trueCase} />
      </FlexCenter>
      <FlexCenter
        css={css`
          position: relative;
        `}
      >
        <ConditionalBorder type="condition" />
        <ExpressionBox expression={expression.condition} />
      </FlexCenter>
    </Flex>
  )
}

export default ConditionalExpressionBox
