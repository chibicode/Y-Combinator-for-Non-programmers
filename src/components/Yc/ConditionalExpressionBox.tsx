/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Flex from 'src/components/Flex'
import FlexCenter from 'src/components/FlexCenter'
import ExpressionBox from 'src/components/Yc/ExpressionBox'
import { ConditionalExpression } from 'src/types/yc/ExpressionTypes'
import Emoji from 'src/components/Emoji'
import { zIndices, colors } from 'src/lib/theme'

interface ConditionalExpressionBoxProps {
  expression: ConditionalExpression
}

const Border = ({
  addBottom,
  color,
  iconType
}: {
  addBottom?: boolean
  color: string
  iconType: 'trueCase' | 'falseCase' | 'condition'
}) => (
  <span
    css={css`
      display: block;
      position: absolute;
      z-index: ${zIndices('conditionalBorder')};
      top: 0;
      left: 0;
      right: 0;
      bottom: ${addBottom ? 2 : 0}px;
      border: 8px solid ${color};
    `}
  >
    {iconType && (
      <span
        css={css`
          position: absolute;
          z-index: ${zIndices('conditionalBorder')};
          top: -8px;
          left: -8px;
        `}
      >
        {iconType === 'trueCase' && <Emoji>0️⃣</Emoji>}
        {iconType === 'falseCase' && <Emoji>🔢</Emoji>}
        {iconType === 'condition' && <Emoji>⬆️</Emoji>}
      </span>
    )}
    <span
      css={css`
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        border: 2px solid ${colors('indigo400')};
        z-index: zIndices('conditionalBorderInner');
      `}
    />
  </span>
)

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
        <Border color={colors('pink100')} addBottom iconType="trueCase" />
        <ExpressionBox expression={expression.falseCase} />
      </FlexCenter>
      <FlexCenter
        css={css`
          position: relative;
        `}
      >
        <Border color={colors('blue100')} addBottom iconType="falseCase" />
        <ExpressionBox expression={expression.trueCase} />
      </FlexCenter>
      <FlexCenter
        css={css`
          position: relative;
        `}
      >
        <Border color={colors('yellow400')} iconType="condition" />
        <ExpressionBox expression={expression.condition} />
      </FlexCenter>
    </Flex>
  )
}

export default ConditionalExpressionBox
