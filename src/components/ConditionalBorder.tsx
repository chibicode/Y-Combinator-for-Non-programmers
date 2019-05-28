/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Emoji from 'src/components/Emoji'
import { zIndices, colors } from 'src/lib/theme'

export interface ConditionalBorderProps {
  smallEmoji?: boolean
  type: 'trueCase' | 'falseCase' | 'condition'
  shaded: boolean
}

const ConditionalBorder = ({
  type,
  smallEmoji,
  shaded
}: ConditionalBorderProps) => {
  const color = {
    trueCase: colors('teal200'),
    falseCase: colors('pink200'),
    condition: colors('yellow400')
  }[type]
  return (
    <>
      <span
        css={css`
          display: block;
          position: absolute;
          z-index: ${zIndices('conditionalBorderShade')};
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: ${shaded ? colors('grey50050') : 'transparent'};
        `}
      />
      {type && (
        <span
          css={css`
            position: absolute;
            z-index: ${zIndices('badge')};
            top: 5px;
            left: 2px;
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
          bottom: 0;
          width: 0.625em;
          background: ${color};
          border-right: 2px solid ${colors('indigo300')};
        `}
      />
    </>
  )
}

ConditionalBorder.defaultProps = {
  shaded: false
}

export default ConditionalBorder
