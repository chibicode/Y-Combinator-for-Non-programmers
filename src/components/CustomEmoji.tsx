import React from 'react'
import PlusOneSvg from 'src/components/PlusOneSvg'
import MinusOneSvg from 'src/components/MinusOneSvg'
import BlankNumberSvg from 'src/components/BlankNumberSvg'
import PlusMinusSvg from 'src/components/PlusMinusSvg'
import VerticalDotDotDotSvg from 'src/components/VerticalDotDotDotSvg'
import QuestionFoodGreySvg from 'src/components/QuestionFoodGreySvg'
import QuestionFoodRedSvg from 'src/components/QuestionFoodRedSvg'
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
    | 'questionFoodGrey'
    | 'questionFoodRed'
}) => {
  const Component = {
    plusOne: PlusOneSvg,
    minusOne: MinusOneSvg,
    blankNumber: BlankNumberSvg,
    plusMinus: PlusMinusSvg,
    verticalDotDotDot: VerticalDotDotDotSvg,
    horizontalDotDotDot: HorizontalDotDotDotSvg,
    horizontalDotDotDotRed: HorizontalDotDotDotRedSvg,
    questionFoodGrey: QuestionFoodGreySvg,
    questionFoodRed: QuestionFoodRedSvg
  }[type]
  return <Emoji {...emojiProps} customSvg={<Component />} />
}

CustomEmoji.defaultProps = Emoji.defaultProps

export default CustomEmoji
