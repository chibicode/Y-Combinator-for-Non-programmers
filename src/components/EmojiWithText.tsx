/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import locale from 'src/lib/locale'
import { VariableNames } from 'src/types/yc/VariableNames'
import Emoji, { EmojiProps } from 'src/components/Emoji'
import emojiLabelMapping from 'src/lib/yc/emojiLabelMapping'
import letterEmojiMapping from 'src/lib/yc/letterEmojiMapping'
import { colors } from 'src/lib/theme'

interface EmojiWithTextProps {
  letter: VariableNames
  size: EmojiProps['size']
}

const EmojiWithText = ({ letter, size }: EmojiWithTextProps) => {
  const emoji = letterEmojiMapping[letter]
  const label = emojiLabelMapping[emoji]
  if (!label) {
    throw new Error()
  }
  return (
    <span
      css={css`
        background-color: ${colors('white')};
      `}
    >
      {label[locale]} <Emoji size={size}>{emoji}</Emoji>{' '}
    </span>
  )
}

EmojiWithText.defaultProps = {
  size: 'mdlg'
}

export default EmojiWithText
