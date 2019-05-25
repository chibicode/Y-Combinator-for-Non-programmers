/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Emoji from 'src/components/Emoji'
import { zIndices, colors } from 'src/lib/theme'

interface ConditionalBorderProps {
  addBottom?: boolean
  color: string
  iconType: 'trueCase' | 'falseCase' | 'condition'
}

const ConditionalBorder = ({
  addBottom,
  color,
  iconType
}: ConditionalBorderProps) => (
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
        border: 2px solid ${colors('indigo300')};
        z-index: zIndices('conditionalBorderInner');
      `}
    />
  </span>
)

export default ConditionalBorder
