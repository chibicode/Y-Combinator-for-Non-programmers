import React from 'react'
import PlusOneSvg from 'src/components/PlusOneSvg'
import MinusOneSvg from 'src/components/MinusOneSvg'
import PlusOneOrangeSvg from 'src/components/PlusOneOrangeSvg'
import MinusOneOrangeSvg from 'src/components/MinusOneOrangeSvg'
import BlankNumberSvg from 'src/components/BlankNumberSvg'
import VerticalDotDotDotSvg from 'src/components/VerticalDotDotDotSvg'
import QuestionFoodGreySvg from 'src/components/QuestionFoodGreySvg'
import QuestionFoodRedSvg from 'src/components/QuestionFoodRedSvg'
import HorizontalDotDotDotSvg from 'src/components/HorizontalDotDotDotSvg'
import HorizontalDotDotDotRedSvg from 'src/components/HorizontalDotDotDotRedSvg'
import TwentySvg from 'src/components/TwentySvg'
import Emoji, { EmojiProps } from 'src/components/Emoji'

const CustomEmoji = ({
  type,
  ...emojiProps
}: EmojiProps & {
  type:
    | 'plusOne'
    | 'minusOne'
    | 'blankNumber'
    | 'verticalDotDotDot'
    | 'horizontalDotDotDot'
    | 'horizontalDotDotDotRed'
    | 'questionFoodGrey'
    | 'questionFoodRed'
    | 'twenty'
    | 'plusOneOrange'
    | 'minusOneOrange'
}) => {
  const Component = {
    plusOne: PlusOneSvg,
    minusOne: MinusOneSvg,
    blankNumber: BlankNumberSvg,
    verticalDotDotDot: VerticalDotDotDotSvg,
    horizontalDotDotDot: HorizontalDotDotDotSvg,
    horizontalDotDotDotRed: HorizontalDotDotDotRedSvg,
    questionFoodGrey: QuestionFoodGreySvg,
    questionFoodRed: QuestionFoodRedSvg,
    twenty: TwentySvg,
    plusOneOrange: PlusOneOrangeSvg,
    minusOneOrange: MinusOneOrangeSvg
  }[type]
  return <Emoji {...emojiProps} customSvg={<Component />} />
}

CustomEmoji.defaultProps = Emoji.defaultProps

export default CustomEmoji
