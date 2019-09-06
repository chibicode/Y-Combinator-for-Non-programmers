import { InlineHighlightType } from 'src/types/ContentTagTypes'
import { VariableNames } from 'src/types/VariableNames'
import { episodePrefixes } from 'src/lib/titles'

export interface HProps {
  highlightType: InlineHighlightType
  episodeNumberOverrides?: number
  args:
    | { name: 'dateAndSource'; includeAboutMe?: boolean }
    | { name: 'pressNext' }
    | { name: 'yesNoQuiz' }
    | { name: 'yesNoQuizCorrect' }
    | { name: 'yesNoQuizIncorrect' }
    | { name: 'yesNoQuizYes'; hideText?: boolean }
    | { name: 'yesNoQuizNo'; hideText?: boolean }
    | { name: 'yesNoQuizCorrectPostfix' }
    | { name: 'yesNoQuizIncorrectPostfix'; isYes: boolean }
    | {
        name: 'bentoBoxPuzzle'
        plural?: boolean
      }
    | { name: 'next' }
    | { name: 'play' }
    | { name: 'fastForwarding' }
    | { name: 'pause' }
    | { name: 'fastForward' }
    | { name: 'reset' }
    | { name: 'previous' }
    | { name: 'done' }
    | { name: 'match' }
    | { name: 'unmatch' }
    | { name: 'nextButtonNextPagePrimaryText' }
    | { name: 'nextButtonSecondaryText'; nextEpisodeNumber: number }
    | { name: 'pressPlay'; capitalize?: boolean }
    | { name: 'indexPageLink' }
    | { name: 'titlePrefix' }
    | { name: 'titlePrefixColored'; addColon?: boolean }
    | { name: 'titleWithPrefixColored' }
    | { name: 'newUser' }
    | { name: 'titleSplit' }
    | { name: 'toc' }
    | { name: 'tocClose' }
    | { name: 'yesNoQuizDontWorry' }
    | { name: 'pageUnderConstruction' }
    | { name: 'question' }
    | { name: 'prevAndNextLinks' }
    | { name: 'whatHappensAtTheEndQuestion' }
    | { name: 'lookAtThisBentoBox' }
    | {
        name: 'pressFastForward'
        skipColon?: boolean
        mentionRightArrow?: boolean
        girl?: boolean
        skippable?: boolean
      }
    | { name: 'copy' }
    | { name: 'summary' }
    | { name: 'theAnswerIs'; isYes: boolean; sentence?: boolean }
    | { name: 'shareContent' }
    | { name: 'shareTitle' }
    | { name: 'privacyPolicy' }
    | { name: 'AmultTop' }
    | { name: 'AmultBottom' }
    | { name: 'BsingleTop' }
    | { name: 'BsingleBottom' }
    | { name: 'aboutThisSite' }
    | {
        name: 'categoryNameColored'
        category: keyof typeof episodePrefixes
      }
    | { name: 'stoppedForExplanation' }
    | { name: 'pageNotFound' }
    | { name: 'lookAtToc' }
    | { name: 'mentionRightArrow' }
    | { name: 'lookAtThisMathBox' }
    | {
        name: 'conditionSectionName'
        type: 'condition' | 'trueCase' | 'falseCase'
      }
    | { name: 'lookAtThisBentoBoxPuzzle' }
    | { name: 'convertToMathbox' }
    | { name: 'runAndConvertToMathbox'; addNewline?: boolean }
    | { name: 'doneRunAndConvertToMathbox' }
    | { name: 'undoConvertToMathbox' }
    | { name: 'doneConvertToMathbox' }
    | { name: 'canBeConverted' }
    | { name: 'plusOneEffect' }
    | { name: 'minusOneEffect' }
    | { name: 'startWithTwoCaption' }
    | { name: 'startWithLeftMostOneCaption' }
    | { name: 'convertiblePatternCaption' }
    | { name: 'canBeConvertedCaption'; letter: VariableNames; number: number }
    | { name: 'skipToTheEnd' }
    | { name: 'skipToTheStoppingPoint' }
    | { name: 'fastForwardSkippableToTheEnd' }
    | { name: 'slide' }
}
