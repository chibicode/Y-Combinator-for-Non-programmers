import { VariableNames } from 'src/types/VariableNames'
import Emoji, { EmojiProps } from 'src/components/Emoji'
import letterEmojiMapping from 'src/lib/letterEmojiMapping'

interface EmojiForLetterProps {
  letter: VariableNames
  size: EmojiProps['size']
}

const EmojiForLetter = ({ letter, size }: EmojiForLetterProps) => {
  const emoji = letterEmojiMapping[letter]
  return <Emoji size={size}>{emoji}</Emoji>
}

EmojiForLetter.defaultProps = {
  size: 'md'
}

export default EmojiForLetter
