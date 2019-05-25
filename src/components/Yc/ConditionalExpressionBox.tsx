/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Flex from 'src/components/Flex'
import FlexCenter from 'src/components/FlexCenter'
import ExpressionBox from 'src/components/Yc/ExpressionBox'
import { ConditionalExpression } from 'src/types/yc/ExpressionTypes'
import { colors } from 'src/lib/theme'
import ConditionalBorder from 'src/components/Yc/ConditionalBorder'

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
        <ConditionalBorder
          color={colors('pink100')}
          addBottom
          iconType="trueCase"
        />
        <ExpressionBox expression={expression.falseCase} />
      </FlexCenter>
      <FlexCenter
        css={css`
          position: relative;
        `}
      >
        <ConditionalBorder
          color={colors('blue100')}
          addBottom
          iconType="falseCase"
        />
        <ExpressionBox expression={expression.trueCase} />
      </FlexCenter>
      <FlexCenter
        css={css`
          position: relative;
        `}
      >
        <ConditionalBorder color={colors('yellow400')} iconType="condition" />
        <ExpressionBox expression={expression.condition} />
      </FlexCenter>
    </Flex>
  )
}

export default ConditionalExpressionBox
