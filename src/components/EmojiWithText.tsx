import React from 'react'
import locale from 'src/lib/locale'
import { VariableNames } from 'src/types/yc/VariableNames'
import Emoji, { EmojiProps } from 'src/components/Emoji'
import emojiLabelMapping from 'src/lib/yc/emojiLabelMapping'
import letterEmojiMapping from 'src/lib/yc/letterEmojiMapping'
import { Em } from 'src/components/ContentTags'

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
    <Em>
      {label[locale]} <Emoji size={size}>{emoji}</Emoji>{' '}
    </Em>
  )
}

EmojiWithText.defaultProps = {
  size: 'mdlg'
}

export default EmojiWithText
