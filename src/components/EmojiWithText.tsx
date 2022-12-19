import { useContext } from 'react'
import locale from 'src/lib/locale'
import { VariableNames } from 'src/types/VariableNames'
import Emoji, { EmojiProps } from 'src/components/Emoji'
import emojiLabelMapping from 'src/lib/emojiLabelMapping'
import letterEmojiMapping from 'src/lib/letterEmojiMapping'
import { Highlight } from 'src/components/ContentTags'
import BubbleQuoteContext from 'src/components/BubbleQuoteContext'

interface EmojiWithTextProps {
  letter: VariableNames
  size: EmojiProps['size']
  capitalize?: true
  postfix?: string
}

const EmojiWithText = ({
  letter,
  size,
  capitalize,
  postfix
}: EmojiWithTextProps) => {
  const { inQuote } = useContext(BubbleQuoteContext)
  const emoji = letterEmojiMapping[letter]
  const label = emojiLabelMapping[emoji]
  if (!label) {
    throw new Error()
  }
  const labelText = capitalize
    ? label[locale][0].toUpperCase() + label[locale].slice(1)
    : label[locale]
  return (
    <Highlight highlightType={inQuote ? 'blue' : 'white'}>
      {labelText}
      {postfix || ''} <Emoji size={size}>{emoji}</Emoji>{' '}
    </Highlight>
  )
}

EmojiWithText.defaultProps = {
  size: 'mdlg'
}

export default EmojiWithText
