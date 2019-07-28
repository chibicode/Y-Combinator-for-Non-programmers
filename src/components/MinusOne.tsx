import React from 'react'
import MinusOneSvg from 'src/components/MinusOneSvg'
import Emoji, { EmojiProps } from 'src/components/Emoji'

const MinusOne = (emojiProps: EmojiProps) => (
  <Emoji {...emojiProps} customSvg={<MinusOneSvg />} />
)

MinusOne.defaultProps = Emoji.defaultProps

export default MinusOne
