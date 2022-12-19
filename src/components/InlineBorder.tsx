/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { colors } from 'src/lib/theme'
import EmojiNumber from 'src/components/EmojiNumber'
import CustomEmoji from 'src/components/CustomEmoji'
import Emoji from 'src/components/Emoji'
import {
  trueCaseColor,
  falseCaseColor,
  conditionColor
} from 'src/components/ConditionalBorder'
import { repeatColor } from 'src/components/RepeatBorder'

const InlineBorder = ({
  type,
  small,
  children
}: {
  type?: 'trueCase' | 'falseCase' | 'condition'
  small?: boolean
  children?: React.ReactNode
}) => {
  const color = type
    ? {
        trueCase: trueCaseColor,
        falseCase: falseCaseColor,
        condition: conditionColor
      }[type]
    : repeatColor
  return (
    <span
      css={[
        css`
          display: inline-block;
          background: ${color};
          padding: 0 0.25em;
          border: 2px solid ${colors('indigo300')};
        `,
        small &&
          css`
            font-size: 0.75em;
            transform: translateY(-0.125em);
          `
      ]}
    >
      {type === 'trueCase' && <EmojiNumber number={0} />}
      {type === 'falseCase' && <Emoji>🔢</Emoji>}
      {type === 'condition' && <CustomEmoji type="condition" />}
      {children}
    </span>
  )
}

export default InlineBorder
