import React from 'react'
import Emoji, { EmojiProps } from 'src/components/Emoji'
import numberEmojiMapping from 'src/lib/numberEmojiMapping'

interface EmojiNumberProps {
  number: number
  size: EmojiProps['size']
}

const EmojiNumber = ({ number: letter, size }: EmojiNumberProps) => {
  const emoji = numberEmojiMapping[letter]
  return <Emoji size={size}>{emoji}</Emoji>
}

EmojiNumber.defaultProps = {
  size: 'md'
}

export default EmojiNumber
