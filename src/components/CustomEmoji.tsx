import React from 'react'
import PlusOneSvg from 'src/components/PlusOneSvg'
import MinusOneSvg from 'src/components/MinusOneSvg'
import PlusOneOrangeSvg from 'src/components/PlusOneOrangeSvg'
import MinusOnePinkSvg from 'src/components/MinusOnePinkSvg'
import DoubleArrowSvg from 'src/components/DoubleArrowSvg'
import BlankNumberSvg from 'src/components/BlankNumberSvg'
import QuestionFoodGreySvg from 'src/components/QuestionFoodGreySvg'
import HorizontalDotDotDotSvg from 'src/components/HorizontalDotDotDotSvg'
import HorizontalDotDotDotRedSvg from 'src/components/HorizontalDotDotDotRedSvg'
import SingleArrowSvg from 'src/components/SingleArrowSvg'
import LetterCSvg from 'src/components/LetterCSvg'
import LetterDSvg from 'src/components/LetterDSvg'
import LetterESvg from 'src/components/LetterESvg'
import LetterFSvg from 'src/components/LetterFSvg'
import BlankNumberPinkSvg from 'src/components/BlankNumberPinkSvg'
import BlankNumberGreySvg from 'src/components/BlankNumberGreySvg'
import LambdaSvg from 'src/components/LambdaSvg'
import BlankNumberPurpleSvg from 'src/components/BlankNumberPurpleSvg'
import BlankNumberBrownSvg from 'src/components/BlankNumberBrownSvg'
import BlankNumberGreenSvg from 'src/components/BlankNumberGreenSvg'
import MathBoxSvg from 'src/components/MathBoxSvg'
import TwentySvg from 'src/components/TwentySvg'
import TwentyFourSvg from 'src/components/TwentyFourSvg'
import Emoji, { EmojiProps } from 'src/components/Emoji'

export const customEmojiToComponent = {
  plusOne: PlusOneSvg,
  minusOne: MinusOneSvg,
  blankNumber: BlankNumberSvg,
  horizontalDotDotDot: HorizontalDotDotDotSvg,
  horizontalDotDotDotRed: HorizontalDotDotDotRedSvg,
  questionFoodGrey: QuestionFoodGreySvg,
  twenty: TwentySvg,
  twentyFour: TwentyFourSvg,
  plusOneOrange: PlusOneOrangeSvg,
  minusOnePink: MinusOnePinkSvg,
  doubleArrow: DoubleArrowSvg,
  C: LetterCSvg,
  D: LetterDSvg,
  E: LetterESvg,
  F: LetterFSvg,
  blankNumberPink: BlankNumberPinkSvg,
  blankNumberGrey: BlankNumberGreySvg,
  blankNumberPurple: BlankNumberPurpleSvg,
  blankNumberBrown: BlankNumberBrownSvg,
  blankNumberGreen: BlankNumberGreenSvg,
  mathBox: MathBoxSvg,
  singleArrow: SingleArrowSvg,
  lambda: LambdaSvg
}

const CustomEmoji = ({
  type,
  ...emojiProps
}: EmojiProps & {
  type: keyof typeof customEmojiToComponent
}) => {
  const Component = customEmojiToComponent[type]
  return <Emoji {...emojiProps} customSvg={<Component />} />
}

CustomEmoji.defaultProps = Emoji.defaultProps

export default CustomEmoji
