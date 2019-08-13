import React from 'react'
import PlusOneSvg from 'src/components/PlusOneSvg'
import MinusOneSvg from 'src/components/MinusOneSvg'
import BlankNumberSvg from 'src/components/BlankNumberSvg'
import PlusMinusSvg from 'src/components/PlusMinusSvg'
import VerticalDotDotDotSvg from 'src/components/VerticalDotDotDotSvg'
import QuestionFoodSvg from 'src/components/QuestionFoodSvg'
import HorizontalDotDotDotSvg from 'src/components/HorizontalDotDotDotSvg'
import HorizontalDotDotDotRedSvg from 'src/components/HorizontalDotDotDotRedSvg'
import Emoji, { EmojiProps } from 'src/components/Emoji'

const CustomEmoji = ({
  type,
  ...emojiProps
}: EmojiProps & {
  type:
    | 'plusOne'
    | 'minusOne'
    | 'blankNumber'
    | 'plusMinus'
    | 'verticalDotDotDot'
    | 'horizontalDotDotDot'
    | 'horizontalDotDotDotRed'
    | 'questionFood'
}) => {
  const Component = {
    plusOne: PlusOneSvg,
    minusOne: MinusOneSvg,
    blankNumber: BlankNumberSvg,
    plusMinus: PlusMinusSvg,
    verticalDotDotDot: VerticalDotDotDotSvg,
    horizontalDotDotDot: HorizontalDotDotDotSvg,
    horizontalDotDotDotRed: HorizontalDotDotDotRedSvg,
    questionFood: QuestionFoodSvg
  }[type]
  return <Emoji {...emojiProps} customSvg={<Component />} />
}

CustomEmoji.defaultProps = Emoji.defaultProps

export default CustomEmoji
