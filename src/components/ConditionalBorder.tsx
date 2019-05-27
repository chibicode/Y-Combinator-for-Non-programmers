/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Emoji from 'src/components/Emoji'
import { zIndices, colors } from 'src/lib/theme'

export interface ConditionalBorderProps {
  addBottom?: boolean
  smallEmoji?: boolean
  type: 'trueCase' | 'falseCase' | 'condition'
  shaded: boolean
}

const ConditionalBorder = ({
  addBottom,
  type,
  smallEmoji,
  shaded
}: ConditionalBorderProps) => {
  const color = {
    trueCase: colors('teal100'),
    falseCase: colors('pink100'),
    condition: colors('yellow200')
  }[type]
  return (
    <>
      <span
        css={css`
          display: block;
          position: absolute;
          z-index: ${zIndices('conditionalBorderOuter')};
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: ${shaded ? colors('indigo30050') : 'transparent'};
        `}
      />
      {type && (
        <span
          css={css`
            position: absolute;
            z-index: ${zIndices('conditionalBorderIcons')};
            top: 2px;
            left: 0px;
            display: inline-flex;
          `}
        >
          {type === 'trueCase' && (
            <Emoji size={smallEmoji ? 'sm' : 'md'}>0️⃣</Emoji>
          )}
          {type === 'falseCase' && (
            <Emoji size={smallEmoji ? 'sm' : 'md'}>🔢</Emoji>
          )}
          {type === 'condition' && (
            <Emoji size={smallEmoji ? 'sm' : 'md'}>↕️</Emoji>
          )}
        </span>
      )}
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
    </>
  )
}

export default ConditionalBorder
