import React from 'react'
import PlusOneSvg from 'src/components/PlusOneSvg'
import MinusOneSvg from 'src/components/MinusOneSvg'
import BlankNumberSvg from 'src/components/BlankNumberSvg'
import PlusMinusSvg from 'src/components/PlusMinusSvg'
import Emoji, { EmojiProps } from 'src/components/Emoji'

const CustomEmoji = ({
  type,
  ...emojiProps
}: EmojiProps & {
  type: 'plusOne' | 'minusOne' | 'blankNumber' | 'plusMinus'
}) => {
  const Component = {
    plusOne: PlusOneSvg,
    minusOne: MinusOneSvg,
    blankNumber: BlankNumberSvg,
    plusMinus: PlusMinusSvg
  }[type]
  return <Emoji {...emojiProps} customSvg={<Component />} />
}

CustomEmoji.defaultProps = Emoji.defaultProps

export default CustomEmoji
