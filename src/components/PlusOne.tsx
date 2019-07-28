import React from 'react'
import PlusOneSvg from 'src/components/PlusOneSvg'
import Emoji, { EmojiProps } from 'src/components/Emoji'

const PlusOne = (emojiProps: EmojiProps) => (
  <Emoji {...emojiProps} customSvg={<PlusOneSvg />} />
)

PlusOne.defaultProps = Emoji.defaultProps

export default PlusOne
