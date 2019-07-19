/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { colors } from 'src/lib/theme'
import EmojiNumber from 'src/components/EmojiNumber'
import Emoji from 'src/components/Emoji'

const InlineBorder = ({
  type,
  children
}: {
  type?: 'trueCase' | 'falseCase' | 'condition'
  children?: React.ReactNode
}) => {
  const color = type
    ? {
        trueCase: colors('teal200'),
        falseCase: colors('pink200'),
        condition: colors('yellow400')
      }[type]
    : colors('purple100')
  return (
    <span
      css={css`
        display: inline-block;
        background: ${color};
        padding: 0 0.25em;
        border: 2px solid ${colors('indigo300')};
      `}
    >
      {type === 'trueCase' && <EmojiNumber number={0} />}
      {type === 'falseCase' && <Emoji>🔢</Emoji>}
      {type === 'condition' && <Emoji>↕️</Emoji>}
      {children}
    </span>
  )
}

export default InlineBorder
