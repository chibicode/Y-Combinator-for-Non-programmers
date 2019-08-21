import { InlineHighlightType } from 'src/types/ContentTagTypes'
import { VariableNames } from 'src/types/VariableNames'
import { episodePrefixes } from 'src/lib/titles'

export interface HProps {
  highlightType: InlineHighlightType
  episodeNumberOverrides?: number
  args:
    | { name: 'dateAndSource'; includeAboutMe?: boolean }
    | { name: 'pressNext' }
    | { name: 'isFaster' }
    | { name: 'yesNoQuiz' }
    | { name: 'yesNoQuizCorrect' }
    | { name: 'yesNoQuizIncorrect' }
    | { name: 'yesNoQuizYes'; hideText?: boolean }
    | { name: 'yesNoQuizNo'; hideText?: boolean }
    | { name: 'yesNoQuizCorrectPostfix' }
    | { name: 'yesNoQuizIncorrectPostfix'; isYes: boolean }
    | { name: 'pauseIfLost' }
    | { name: 'byTheWay' }
    | { name: 'computerScience' }
    | { name: 'yCombinator' }
    | { name: 'isZeroReview' }
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
    | { name: 'sideNotePrefix' }
    | { name: 'continueReading' }
    | { name: 'titlePrefix' }
    | { name: 'titlePrefixColored'; addColon?: boolean }
    | { name: 'titleWithPrefixColored' }
    | { name: 'episodeWelcomeText' }
    | { name: 'newUser' }
    | { name: 'titleSplit' }
    | { name: 'toc' }
    | { name: 'tocClose' }
    | { name: 'playButton' }
    | { name: 'afterPlay' }
    | { name: 'yesNoQuizDontWorry'; tooHard: boolean }
    | { name: 'unknownRule' }
    | { name: 'pageUnderConstruction' }
    | { name: 'question' }
    | { name: 'prevAndNextLinks' }
    | { name: 'whatHappensAtTheEndQuestion' }
    | { name: 'whatHappensInTheMiddleQuestion' }
    | { name: 'whatsTheNumberQuestion'; number: number }
    | { name: 'lookAtThisBentoBox' }
    | {
        name: 'pressFastForward'
        skipColon?: boolean
        pleaseWait?: boolean
        skippingSteps?: boolean
        isFaster?: boolean
        mentionRightArrow?: boolean
        girl?: boolean
      }
    | { name: 'copy' }
    | { name: 'summary' }
    | { name: 'mustChangeBothFuncUnboundAndBound' }
    | { name: 'secretCode' }
    | { name: 'secretCodeCaptionSimple'; number: number }
    | { name: 'isCallArgAndFuncUnboundTheSameCaption'; same: boolean }
    | { name: 'secretCodeAddOneCaption' }
    | { name: 'secretCodeAddCaption' }
    | { name: 'secretCodeMultiplyCaption'; arg1?: number; arg2?: number }
    | { name: 'secretCodeCaption'; number: number; letter: VariableNames }
    | { name: 'notSecretCodeCaption'; number: number; letter: VariableNames }
    | { name: 'theAnswerIs'; isYes: boolean; sentence?: boolean }
    | {
        name: 'ifCaption'
        ifZero: VariableNames | VariableNames[]
        ifNonZero: VariableNames | VariableNames[]
      }
    | { name: 'epiloguePrefix' }
    | { name: 'yesOrNo' }
    | { name: 'shareContent' }
    | { name: 'shareTitle' }
    | { name: 'privacyPolicy' }
    | { name: 'witch' }
    | { name: 'AmultTop' }
    | { name: 'AmultBottom' }
    | { name: 'witchAppearsAgainCaption' }
    | { name: 'witchReplacedCaption' }
    | { name: 'aboutThisSite' }
    | {
        name: 'categoryNameColored'
        category: keyof typeof episodePrefixes
      }
    | { name: 'stoppedForExplanation' }
    | { name: 'infinitelyAddingQuestionCaption' }
    | { name: 'secretCodeAddOneCaptionWithoutQuestion' }
    | { name: 'secretCodeMinusOneCaption' }
    | { name: 'secretCodeTwoMinusOneCaption' }
    | { name: 'pageNotFound' }
    | { name: 'lookAtToc' }
    | { name: 'magicalChangedCaption'; fromNumber: number }
    | { name: 'ycChangedCaption'; fromNumber: number }
    | { name: 'timer'; numSecondsRemaining: number }
    | { name: 'whatCanComputeFactorial'; start: 3 | 4 | 5 }
    | { name: 'abbreviated' }
    | { name: 'itWillTakeTime' }
    | { name: 'skippingSteps' }
    | { name: 'inlineFactorial'; start: 3 | 4 | 5 }
    | { name: 'factorialDefinition' }
    | { name: 'factorialComputation'; start: 3 | 4 | 5 }
    | { name: 'changedToPowerCaption' }
    | { name: 'powerComputation'; power: 3 | 4 }
    | { name: 'thisIsYCombinatorCaption'; too?: boolean }
    | { name: 'csDescriptionPreface' }
    | { name: 'csDescription' }
    | { name: 'numberOfAIsSecretCodeCaption' }
    | { name: 'mentionRightArrow' }
    | { name: 'addMathBoxCaption' }
    | { name: 'remainder' }
    | { name: 'conditionalMathBoxCaption' }
    | { name: 'lookAtThisMathBox' }
    | { name: 'whatHappensAtTheEndMathBoxQuestion' }
    | { name: 'isLeapYearCaption' }
    | { name: 'yellowHighlighted' }
    | { name: 'leapYearConditionalCaption' }
    | {
        name: 'conditionSectionName'
        type: 'condition' | 'trueCase' | 'falseCase'
      }
    | { name: 'repeatingMathBoxCaption' }
    | { name: 'lookAtThisBentoBoxPuzzle' }
    | { name: 'convert'; type: 'toBentoBox' | 'toMathBox' }
    | { name: 'runAndConertToMathbox'; addNewline?: boolean }
    | { name: 'doneRunAndConertToMathbox' }
    | { name: 'undoConvert'; type: 'toBentoBox' | 'toMathBox' }
    | {
        name: 'doneConvert'
        type: 'toBentoBox' | 'toMathBox'
      }
    | { name: 'canBeConverted' }
    | { name: 'sameAddRole' }
    | { name: 'plusOneEffect' }
    | { name: 'minusOneEffect' }
    | { name: 'startWithTwoCaption' }
    | { name: 'startWithLeftMostOneCaption' }
    | { name: 'convertiblePatternCaption' }
    | { name: 'canBeConvertedCaption'; letter: VariableNames; number: number }
    | { name: 'skipToTheEnd' }
}
