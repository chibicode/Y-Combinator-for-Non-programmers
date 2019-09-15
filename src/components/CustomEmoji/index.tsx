import React from 'react'
import BlankNumberBrownSvg from 'src/components/CustomEmoji/BlankNumberBrownSvg'
import BlankNumberGreenSvg from 'src/components/CustomEmoji/BlankNumberGreenSvg'
import BlankNumberGreySvg from 'src/components/CustomEmoji/BlankNumberGreySvg'
import BlankNumberPinkSvg from 'src/components/CustomEmoji/BlankNumberPinkSvg'
import BlankNumberPurpleSvg from 'src/components/CustomEmoji/BlankNumberPurpleSvg'
import BlankNumberSvg from 'src/components/CustomEmoji/BlankNumberSvg'
import DoubleArrowSvg from 'src/components/CustomEmoji/DoubleArrowSvg'
import HorizontalDotDotDotRedSvg from 'src/components/CustomEmoji/HorizontalDotDotDotRedSvg'
import HorizontalDotDotDotSvg from 'src/components/CustomEmoji/HorizontalDotDotDotSvg'
import IndexSvg from 'src/components/CustomEmoji/IndexSvg'
import LambdaSvg from 'src/components/CustomEmoji/LambdaSvg'
import LetterCSvg from 'src/components/CustomEmoji/LetterCSvg'
import LetterDSvg from 'src/components/CustomEmoji/LetterDSvg'
import LetterESvg from 'src/components/CustomEmoji/LetterESvg'
import LetterFSvg from 'src/components/CustomEmoji/LetterFSvg'
import MathBoxSvg from 'src/components/CustomEmoji/MathBoxSvg'
import MinusOnePinkSvg from 'src/components/CustomEmoji/MinusOnePinkSvg'
import MinusOneSvg from 'src/components/CustomEmoji/MinusOneSvg'
import PlusOneOrangeSvg from 'src/components/CustomEmoji/PlusOneOrangeSvg'
import PlusOneSvg from 'src/components/CustomEmoji/PlusOneSvg'
import QuestionFoodGreySvg from 'src/components/CustomEmoji/QuestionFoodGreySvg'
import SingleArrowSvg from 'src/components/CustomEmoji/SingleArrowSvg'
import TwentyFourSvg from 'src/components/CustomEmoji/TwentyFourSvg'
import TwentySvg from 'src/components/CustomEmoji/TwentySvg'
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
  lambda: LambdaSvg,
  index: IndexSvg
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
