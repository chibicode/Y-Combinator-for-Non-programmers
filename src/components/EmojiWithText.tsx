import React, { useContext } from 'react'
import locale from 'src/lib/locale'
import { VariableNames } from 'src/types/VariableNames'
import Emoji, { EmojiProps } from 'src/components/Emoji'
import emojiLabelMapping from 'src/lib/emojiLabelMapping'
import letterEmojiMapping from 'src/lib/letterEmojiMapping'
import { Em } from 'src/components/ContentTags'
import BubbleQuoteContext from 'src/components/BubbleQuoteContext'

interface EmojiWithTextProps {
  letter: VariableNames
  size: EmojiProps['size']
}

const EmojiWithText = ({ letter, size }: EmojiWithTextProps) => {
  const { inQuote } = useContext(BubbleQuoteContext)
  const emoji = letterEmojiMapping[letter]
  const label = emojiLabelMapping[emoji]
  if (!label) {
    throw new Error()
  }
  return (
    <Em highlightType={inQuote ? 'blue' : 'white'}>
      {label[locale]} <Emoji size={size}>{emoji}</Emoji>{' '}
    </Em>
  )
}

EmojiWithText.defaultProps = {
  size: 'mdlg'
}

export default EmojiWithText
