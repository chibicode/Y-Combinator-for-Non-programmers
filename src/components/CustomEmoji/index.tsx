import React from 'react'
import BlankNumberGreenSvg from 'src/components/CustomEmoji/BlankNumberGreenSvg'
import BlankNumberRedSvg from 'src/components/CustomEmoji/BlankNumberRedSvg'
import BlankNumberYellowSvg from 'src/components/CustomEmoji/BlankNumberYellowSvg'
import BlankNumberPinkSvg from 'src/components/CustomEmoji/BlankNumberPinkSvg'
import BlankNumberPurpleSvg from 'src/components/CustomEmoji/BlankNumberPurpleSvg'
import BlankNumberGreySvg from 'src/components/CustomEmoji/BlankNumberGreySvg'
import BlankNumberSvg from 'src/components/CustomEmoji/BlankNumberSvg'
import ConditionSvg from 'src/components/CustomEmoji/ConditionSvg'
import DoubleArrowSvg from 'src/components/CustomEmoji/DoubleArrowSvg'
import ZeroOneSvg from 'src/components/CustomEmoji/ZeroOneSvg'
import HorizontalDotDotDotRedSvg from 'src/components/CustomEmoji/HorizontalDotDotDotRedSvg'
import HorizontalDotDotDotSvg from 'src/components/CustomEmoji/HorizontalDotDotDotSvg'
import IndexSvg from 'src/components/CustomEmoji/IndexSvg'
import LambdaSvg from 'src/components/CustomEmoji/LambdaSvg'
import LetterCSvg from 'src/components/CustomEmoji/LetterCSvg'
import LetterDSvg from 'src/components/CustomEmoji/LetterDSvg'
import LetterESvg from 'src/components/CustomEmoji/LetterESvg'
import LetterFSvg from 'src/components/CustomEmoji/LetterFSvg'
import MathBoxSvg from 'src/components/CustomEmoji/MathBoxSvg'
import MinusOneSvg from 'src/components/CustomEmoji/MinusOneSvg'
import PlusOneSvg from 'src/components/CustomEmoji/PlusOneSvg'
import NodesSvg from 'src/components/CustomEmoji/NodesSvg'
import ComplexCalculationsSvg from 'src/components/CustomEmoji/ComplexCalculationsSvg'
import QuestionFoodGreySvg from 'src/components/CustomEmoji/QuestionFoodGreySvg'
import SingleArrowSvg from 'src/components/CustomEmoji/SingleArrowSvg'
import SingleArrowDownSvg from 'src/components/CustomEmoji/SingleArrowDownSvg'
import SingleArrowReverseSvg from 'src/components/CustomEmoji/SingleArrowReverseSvg'
import MultiplySvg from 'src/components/CustomEmoji/MultiplySvg'
import MultiplyWhiteSvg from 'src/components/CustomEmoji/MultiplyWhiteSvg'
import TwentyFourSvg from 'src/components/CustomEmoji/TwentyFourSvg'
import QuestionMinusOne from 'src/components/CustomEmoji/QuestionMinusOne'
import TwentySvg from 'src/components/CustomEmoji/TwentySvg'
import TwitterSvg from 'src/components/CustomEmoji/TwitterSvg'
import FourLunchboxesSvg from 'src/components/CustomEmoji/FourLunchboxesSvg'
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
  doubleArrow: DoubleArrowSvg,
  C: LetterCSvg,
  D: LetterDSvg,
  E: LetterESvg,
  F: LetterFSvg,
  blankNumberPink: BlankNumberPinkSvg,
  blankNumberGrey: BlankNumberGreySvg,
  blankNumberPurple: BlankNumberPurpleSvg,
  blankNumberGreen: BlankNumberGreenSvg,
  blankNumberRed: BlankNumberRedSvg,
  blankNumberYellow: BlankNumberYellowSvg,
  mathBox: MathBoxSvg,
  singleArrow: SingleArrowSvg,
  singleArrowDown: SingleArrowDownSvg,
  singleArrowReverse: SingleArrowReverseSvg,
  lambda: LambdaSvg,
  index: IndexSvg,
  condition: ConditionSvg,
  multiply: MultiplySvg,
  multiplyWhite: MultiplyWhiteSvg,
  questionMinusOne: QuestionMinusOne,
  zeroOne: ZeroOneSvg,
  fourLunchboxes: FourLunchboxesSvg,
  nodes: NodesSvg,
  complexCalculations: ComplexCalculationsSvg,
  twitter: TwitterSvg
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
