import React from 'react'
import BlankNumberSvg from 'src/components/BlankNumberSvg'
import StarNumberSvg from 'src/components/StarNumberSvg'
import Emoji, { EmojiProps } from 'src/components/Emoji'

const BlankNumber = ({
  star,
  ...emojiProps
}: { star?: boolean } & EmojiProps) => (
  <Emoji
    {...emojiProps}
    customSvg={star ? <StarNumberSvg /> : <BlankNumberSvg />}
  />
)

BlankNumber.defaultProps = Emoji.defaultProps

export default BlankNumber
