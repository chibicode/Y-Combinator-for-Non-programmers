/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Fragment } from 'react'
import { InlineEmojiBoxesForQuestion } from 'src/components/InlineEmojiBoxes'
import { useContext } from 'react'
import {
  Em,
  InternalLink,
  P,
  Ul,
  UlLi,
  Strong,
  InlineHeader,
  ExternalLink,
  LinkButton
} from 'src/components/ContentTags'
import { InlineHighlightType } from 'src/components/ContentTags/Inline'
import Emoji from 'src/components/Emoji'
import locale from 'src/lib/locale'
import {
  lessonTitle,
  episodePrefix,
  episodePrefixes,
  episodeTitles
} from 'src/lib/titles'
import EpisodeContext from 'src/components/EpisodeContext'
import { colors, fontSizes } from 'src/lib/theme'
import {
  episodeCategory,
  numEpisodesExceptFirstAndLast
} from 'src/lib/episodeCategories'
import EmojiForLetter from 'src/components/EmojiForLetter'
import EmojiWithText from 'src/components/EmojiWithText'
import EmojiNumber from 'src/components/EmojiNumber'
import { VariableNames } from 'src/types/VariableNames'
import EmojiSeparator from 'src/components/EmojiSeparator'
import BottomRightBadge from 'src/components/BottomRightBadge'
import TwitterEmbed from 'src/components/TwitterEmbed'
import { shareId } from 'src/lib/twitter'

export interface HProps {
  highlightType: InlineHighlightType
  episodeNumberOverrides?: number
  args:
    | { name: 'pressNext' }
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
    | { name: 'pressFastForward'; skipColon?: boolean }
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
    | { name: 'ifCaption'; ifZero: React.ReactNode; ifNonZero: React.ReactNode }
    | { name: 'epiloguePrefix' }
    | { name: 'yesOrNo' }
    | { name: 'shareContent' }
    | { name: 'shareTitle' }
    | { name: 'privacyPolicy' }
    | { name: 'witch' }
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
    | { name: 'secretCodeReview'; example: React.ReactNode }
    | { name: 'secretCodeMinusOneCaption' }
    | { name: 'secretCodeTwoMinusOneCaption' }
    | { name: 'secretCodeLetterMinusOneCaption'; letter: VariableNames }
    | { name: 'pageNotFound' }
    | { name: 'lookAtToc' }
    | { name: 'magicalChangedCaption'; fromNumber: number }
    | { name: 'timer'; numSecondsRemaining: number }
    | { name: 'whatCanComputeFactorial'; start: 3 | 4 | 5 }
    | { name: 'abbreviated' }
}

const slightlyLargeCaptionCss = css`
  font-size: ${fontSizes(1.2)};
  vertical-align: -0.08em;
`

const prefixColors = {
  intro: colors('grey600'),
  beginner: colors('green600'),
  intermediate: colors('blue600'),
  advanced: colors('pink400'),
  epilogue: colors('deepOrange400')
}

const H = ({ args, highlightType, episodeNumberOverrides }: HProps) => {
  const episodeContext = useContext(EpisodeContext)

  // episodeNumberOverrides can be zero, so can't use || operator
  const episodeNumber =
    episodeNumberOverrides !== undefined
      ? episodeNumberOverrides
      : episodeContext.episodeNumber

  if (args.name === 'titlePrefix') {
    return <>{episodePrefix(episodeNumber)}</>
  }
  if (args.name === 'titlePrefixColored') {
    return (
      <span
        css={css`
          color: ${prefixColors[
            episodeCategory(episodeNumber) as keyof typeof prefixColors
          ]};
        `}
      >
        <H
          args={{ name: 'titlePrefix' }}
          episodeNumberOverrides={episodeNumberOverrides}
        />
        {args.addColon ? ':' : ''}
      </span>
    )
  }
  if (args.name === 'categoryNameColored') {
    return (
      <span
        css={css`
          color: ${prefixColors[args.category]};
        `}
      >
        {episodePrefixes[args.category]}
      </span>
    )
  }
  if (args.name === 'titleWithPrefixColored') {
    return (
      <>
        <H
          args={{ name: 'titlePrefixColored', addColon: true }}
          episodeNumberOverrides={episodeNumberOverrides}
        />{' '}
        {episodeTitles[episodeNumber as keyof typeof episodeTitles]}
      </>
    )
  }
  if (args.name === 'titleSplit') {
    if (locale === 'en') {
      return <>{lessonTitle}</>
    } else {
      return (
        <>
          コンピュータサイエンスと
          <br />
          魔法のYコンビネータ
        </>
      )
    }
  }
  if (args.name === 'newUser') {
    if (locale === 'en') {
      return (
        <P>
          <InlineHeader>Hello!</InlineHeader> This is{' '}
          <Em>page {episodeNumber + 1}</Em> of the series called “
          <InternalLink href={'/'}>{lessonTitle}</InternalLink>
          ”. If you just got here,
          <InternalLink href={'/'}>
            <Strong>click here to read from the beginning</Strong>
          </InternalLink>
          .
        </P>
      )
    } else {
      return (
        <P>
          <InlineHeader>こんにちは！</InlineHeader>このページは「
          <InternalLink href={'/'}>{lessonTitle}</InternalLink>
          」という記事の
          <Em>{episodeNumber + 1}ページ目</Em>
          です。1ページ目から読むには
          <InternalLink href={'/'}>
            <Strong>こちらからどうぞ</Strong>
          </InternalLink>
          。
        </P>
      )
    }
  }
  if (args.name === 'episodeWelcomeText') {
    if (locale === 'en') {
      return (
        <InlineHeader>
          Welcome to <H args={{ name: 'titlePrefix' }} />!
        </InlineHeader>
      )
    } else {
      return (
        <InlineHeader>
          <H args={{ name: 'titlePrefix' }} />
          へようこそ！
        </InlineHeader>
      )
    }
  }
  if (args.name === 'yesNoQuiz') {
    if (locale === 'en') {
      return (
        <>
          <Emoji>👍</Emoji> Yes / <Emoji>👎</Emoji> No Quiz
        </>
      )
    } else {
      return (
        <>
          <Emoji>⭕️</Emoji>
          <Emoji>❌</Emoji>クイズ
        </>
      )
    }
  }
  if (args.name === 'yesNoQuizCorrect') {
    if (locale === 'en') {
      return (
        <>
          <Emoji size="mdlg">😄</Emoji> Correct!
        </>
      )
    } else {
      return (
        <>
          <Emoji size="mdlg">😄</Emoji> 正解！
        </>
      )
    }
  }
  if (args.name === 'yesNoQuizIncorrect') {
    if (locale === 'en') {
      return (
        <>
          <Emoji size="mdlg">😭</Emoji> Oops!
        </>
      )
    } else {
      return (
        <>
          <Emoji size="mdlg">😭</Emoji> 残念！
        </>
      )
    }
  }
  if (args.name === 'yesNoQuizYes') {
    if (locale === 'en') {
      return (
        <>
          <Emoji>👍</Emoji> Yes
        </>
      )
    } else {
      return (
        <>
          <Emoji>⭕️</Emoji>
          {!args.hideText && ' はい'}
        </>
      )
    }
  }
  if (args.name === 'yesNoQuizNo') {
    if (locale === 'en') {
      return (
        <>
          <Emoji>👎</Emoji> No
        </>
      )
    } else {
      return (
        <>
          <Emoji>❌</Emoji>
          {!args.hideText && ' いいえ'}
        </>
      )
    }
  }
  if (args.name === 'yesNoQuizCorrectPostfix') {
    if (locale === 'en') {
      return <>Good job!</>
    } else {
      return <>さすがです！</>
    }
  }
  if (args.name === 'yesNoQuizIncorrectPostfix') {
    if (locale === 'en') {
      return (
        <>
          The corret answer was{' '}
          {args.isYes ? (
            <H args={{ name: 'yesNoQuizYes' }} />
          ) : (
            <H args={{ name: 'yesNoQuizNo' }} />
          )}
          . But don’t worry!
        </>
      )
    } else {
      return (
        <>
          正解は
          {args.isYes ? (
            <H args={{ name: 'yesNoQuizYes', hideText: true }} />
          ) : (
            <H args={{ name: 'yesNoQuizNo', hideText: true }} />
          )}
          でした。どんまい！
        </>
      )
    }
  }
  if (args.name === 'bentoBoxPuzzle') {
    if (locale === 'en') {
      return (
        <Strong highlightType={highlightType}>
          {`“bento box${args.plural ? 'es' : ''}”`} <Emoji>🍱</Emoji>
        </Strong>
      )
    } else {
      return (
        <Strong highlightType={highlightType}>
          「弁当箱のパズル <Emoji>🍱</Emoji>」
        </Strong>
      )
    }
  }
  if (args.name === 'next') {
    if (locale === 'en') {
      return (
        <>
          <Strong highlightType={highlightType}>
            Next <Emoji>➡️</Emoji>
          </Strong>
        </>
      )
    } else {
      return (
        <>
          <Strong highlightType={highlightType}>
            次へ <Emoji>➡️</Emoji>
          </Strong>
        </>
      )
    }
  }
  if (args.name === 'play') {
    if (locale === 'en') {
      return (
        <>
          <Strong highlightType={highlightType}>
            Play <Emoji>▶️</Emoji>
          </Strong>
        </>
      )
    } else {
      return (
        <>
          <Strong highlightType={highlightType}>
            実行 <Emoji>▶️</Emoji>
          </Strong>
        </>
      )
    }
  }
  if (args.name === 'fastForward') {
    if (locale === 'en') {
      return (
        <>
          <Strong highlightType={highlightType}>
            Fast Forward <Emoji>⏩</Emoji>
          </Strong>
        </>
      )
    } else {
      return (
        <>
          <Strong highlightType={highlightType}>
            早送り <Emoji>⏩</Emoji>
          </Strong>
        </>
      )
    }
  }
  if (args.name === 'fastForwarding') {
    if (locale === 'en') {
      return (
        <>
          <Strong highlightType={highlightType}>
            Fast Forwarding… <Emoji>⏩</Emoji>
          </Strong>
        </>
      )
    } else {
      return (
        <>
          <Strong highlightType={highlightType}>
            早送り中… <Emoji>⏩</Emoji>
          </Strong>
        </>
      )
    }
  }
  if (args.name === 'pause') {
    if (locale === 'en') {
      return (
        <>
          <Strong highlightType={highlightType}>
            Pause <Emoji>⏸</Emoji>
          </Strong>
        </>
      )
    } else {
      return (
        <>
          <Strong highlightType={highlightType}>
            一時停止 <Emoji>⏸</Emoji>
          </Strong>
        </>
      )
    }
  }
  if (args.name === 'reset') {
    if (locale === 'en') {
      return (
        <>
          <Strong highlightType={highlightType}>
            Reset <Emoji>↩️</Emoji>
          </Strong>
        </>
      )
    } else {
      return (
        <>
          <Strong highlightType={highlightType}>
            やり直す <Emoji>↩️</Emoji>
          </Strong>
        </>
      )
    }
  }
  if (args.name === 'previous') {
    if (locale === 'en') {
      return (
        <>
          <Strong highlightType={highlightType}>
            <Emoji>⬅️</Emoji> Previous
          </Strong>
        </>
      )
    } else {
      return (
        <>
          <Strong highlightType={highlightType}>
            <Emoji>⬅️</Emoji> 前へ
          </Strong>
        </>
      )
    }
  }
  if (args.name === 'done') {
    if (locale === 'en') {
      return (
        <>
          <Strong highlightType={highlightType}>
            Done <Emoji>🏁</Emoji>
          </Strong>
        </>
      )
    } else {
      return (
        <>
          <Strong highlightType={highlightType}>
            実行完了! <Emoji>🏁</Emoji>
          </Strong>
        </>
      )
    }
  }
  if (args.name === 'nextButtonNextPagePrimaryText') {
    if (locale === 'en') {
      return <>Go to Next Page</>
    } else {
      return <>次のページへ進む</>
    }
  }
  if (args.name === 'nextButtonSecondaryText') {
    if (locale === 'en') {
      return <>Continue to {episodePrefix(args.nextEpisodeNumber)}</>
    } else {
      return <>{episodePrefix(args.nextEpisodeNumber)}へ</>
    }
  }
  if (args.name === 'pressPlay') {
    const capitalize =
      typeof args.capitalize === 'undefined' ? true : args.capitalize
    if (locale === 'en') {
      return (
        <Em>
          {capitalize ? 'T' : 't'}
          ry pressing <H args={{ name: 'play' }} />
        </Em>
      )
    } else {
      return (
        <Em>
          <H args={{ name: 'play' }} /> を押してみてください:
        </Em>
      )
    }
  }
  if (args.name === 'indexPageLink') {
    if (locale === 'en') {
      return <>View All</>
    } else {
      return <>目次</>
    }
  }
  if (args.name === 'sideNotePrefix') {
    if (locale === 'en') {
      return <>Side Note</>
    } else {
      return <>余談</>
    }
  }
  if (args.name === 'continueReading') {
    if (locale === 'en') {
      return <>Continue reading…</>
    } else {
      return <>続きを読む</>
    }
  }
  if (args.name === 'toc') {
    if (locale === 'en') {
      return <>Table of Contents</>
    } else {
      return <>目次</>
    }
  }
  if (args.name === 'tocClose') {
    if (locale === 'en') {
      return <>Close</>
    } else {
      return <>閉じる</>
    }
  }
  if (args.name === 'playButton') {
    if (locale === 'en') {
      return (
        <>
          <Strong highlightType={highlightType}>
            <H args={{ name: 'play' }} highlightType={highlightType} /> button
          </Strong>
        </>
      )
    } else {
      return (
        <>
          <Strong highlightType={highlightType}>
            <H args={{ name: 'play' }} highlightType={highlightType} />
            ボタン
          </Strong>
        </>
      )
    }
  }
  if (args.name === 'afterPlay') {
    if (locale === 'en') {
      return <Strong highlightType={highlightType}>Result</Strong>
    } else {
      return <Strong highlightType={highlightType}>実行結果</Strong>
    }
  }
  if (args.name === 'yesNoQuizDontWorry') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <>
          {args.tooHard ? (
            <>
              <Emoji size="mdlg">🤯</Emoji>{' '}
              <Strong>頭の中で解くのは大変</Strong>なので、
              <br />
              適当に勘で答えてみてください。
            </>
          ) : (
            <>
              <Emoji size="mdlg">😉</Emoji> 分からなくても大丈夫です！
              <br />
              適当に勘で答えてみてください。
            </>
          )}
        </>
      )
    }
  }
  if (args.name === 'unknownRule') {
    if (locale === 'en') {
      return (
        <>
          <Strong highlightType={highlightType}>some rule</Strong>{' '}
          <Emoji>🤫</Emoji>
        </>
      )
    } else {
      return (
        <>
          <Strong highlightType={highlightType}>ある法則</Strong>{' '}
          <Emoji>🤫</Emoji>
        </>
      )
    }
  }
  if (args.name === 'pageUnderConstruction') {
    if (locale === 'en') {
      return <>This page is under construction.</>
    } else {
      return <>このページは現在工事中です。</>
    }
  }
  if (args.name === 'match') {
    if (locale === 'en') {
      return (
        <>
          match <Emoji>✅</Emoji>
        </>
      )
    } else {
      return (
        <>
          一致 <Emoji>✅</Emoji>
        </>
      )
    }
  }
  if (args.name === 'unmatch') {
    if (locale === 'en') {
      return (
        <>
          unmatch <Emoji>❌</Emoji>
        </>
      )
    } else {
      return (
        <>
          不一致 <Emoji>❌</Emoji>
        </>
      )
    }
  }
  if (args.name === 'pressNext') {
    if (locale === 'en') {
      return (
        <>
          <Em>
            Press <H args={{ name: 'next' }} />:
          </Em>
        </>
      )
    } else {
      return (
        <>
          <Em>
            <H args={{ name: 'next' }} />
            を押してみてください:
          </Em>
        </>
      )
    }
  }
  if (args.name === 'pressFastForward') {
    if (locale === 'en') {
      return (
        <>
          <Em>
            Press <H args={{ name: 'fastForward' }} />:
          </Em>
        </>
      )
    } else {
      return (
        <>
          <Em>
            <H args={{ name: 'fastForward' }} />
            を押してみてください{args.skipColon ? '' : ':'}
          </Em>
        </>
      )
    }
  }
  if (args.name === 'question') {
    if (locale === 'en') {
      return (
        <>
          <InlineHeader>Question:</InlineHeader>
        </>
      )
    } else {
      return (
        <>
          <InlineHeader>質問:</InlineHeader>
        </>
      )
    }
  }
  if (args.name === 'whatHappensAtTheEndQuestion') {
    if (locale === 'en') {
      return <>…</>
    } else {
      return (
        <>
          <H args={{ name: 'question' }} /> 上の弁当箱を
          <H args={{ name: 'play' }} />
          すると、<Strong>最終的に下のようになるでしょうか？</Strong>
        </>
      )
    }
  }
  if (args.name === 'whatHappensInTheMiddleQuestion') {
    if (locale === 'en') {
      return <>…</>
    } else {
      return (
        <>
          <H args={{ name: 'question' }} /> 上の弁当箱を
          <H args={{ name: 'fastForward' }} />
          すると、<Strong>途中で下のようになるでしょうか？</Strong>
        </>
      )
    }
  }
  if (args.name === 'whatsTheNumberQuestion') {
    if (locale === 'en') {
      return <>…</>
    } else {
      return (
        <>
          <H args={{ name: 'question' }} /> 上の弁当箱を
          <H args={{ name: 'play' }} />
          すると、
          <Em>
            最終的に暗号が
            <Strong css={slightlyLargeCaptionCss}>「{args.number}」</Strong>
            になる
          </Em>
          。<H args={{ name: 'yesOrNo' }} />
        </>
      )
    }
  }
  if (args.name === 'lookAtThisBentoBox') {
    if (locale === 'en') {
      return <>…</>
    } else {
      return <>こちらの弁当箱をご覧ください</>
    }
  }
  if (args.name === 'pauseIfLost') {
    if (locale === 'en') {
      return <>…</>
    } else {
      return (
        <>
          途中でわからなくなったら、
          <Strong highlightType={highlightType}>
            <H args={{ name: 'pause' }} />
            を押してみてください
          </Strong>
          。説明が上に表示されます。
        </>
      )
    }
  }
  if (args.name === 'copy') {
    if (locale === 'en') {
      return (
        <>
          copy <Emoji>↘️</Emoji>
        </>
      )
    } else {
      return (
        <>
          コピー <Emoji>↘️</Emoji>
        </>
      )
    }
  }
  if (args.name === 'summary') {
    if (locale === 'en') {
      return <>Summary</>
    } else {
      return <>まとめ</>
    }
  }
  if (args.name === 'secretCodeCaptionSimple') {
    if (locale === 'en') {
      return <>...</>
    } else {
      return (
        <>
          暗号は <Strong css={slightlyLargeCaptionCss}>{args.number}</Strong>{' '}
          です
        </>
      )
    }
  }
  if (args.name === 'secretCodeCaption') {
    if (locale === 'en') {
      return (
        <>
          Secret Code ={' '}
          <Strong css={slightlyLargeCaptionCss}>{args.number}</Strong> (右下に
          <EmojiForLetter letter={args.letter} />が
          <Strong>{args.number}</Strong>個)
        </>
      )
    } else {
      return (
        <>
          暗号 = <Strong css={slightlyLargeCaptionCss}>{args.number}</Strong>{' '}
          (右下に
          <EmojiForLetter letter={args.letter} />が
          <Strong>{args.number}</Strong>個)
        </>
      )
    }
  }
  if (args.name === 'notSecretCodeCaption') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <>
          暗号 =
          <Strong css={slightlyLargeCaptionCss}>{args.number}ではない</Strong>{' '}
          <Emoji>❌</Emoji>
          <br />
          (右下に
          <EmojiForLetter letter={args.letter} />が
          <Strong>{args.number}</Strong>個ないから)
        </>
      )
    }
  }
  if (args.name === 'theAnswerIs') {
    if (locale === 'en') {
      return <>?</>
    } else {
      const childNode = (
        <Fragment>
          正解は<Emoji>{args.isYes ? '⭕️' : '❌'}</Emoji>
        </Fragment>
      )
      if (args.sentence) {
        return (
          <>
            <Strong>{childNode}</Strong>でした。
          </>
        )
      } else {
        return childNode
      }
    }
  }
  if (args.name === 'secretCodeAddOneCaption') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <>
          <InlineEmojiBoxesForQuestion size="md" /> <Emoji>➕</Emoji>{' '}
          <EmojiNumber number={1} /> を計算
        </>
      )
    }
  }
  if (args.name === 'secretCodeMinusOneCaption') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <>
          <InlineEmojiBoxesForQuestion size="md" /> <Emoji>➖</Emoji>{' '}
          <EmojiNumber number={1} /> を計算
        </>
      )
    }
  }
  if (args.name === 'secretCodeTwoMinusOneCaption') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <>
          <EmojiNumber number={2} /> <Emoji>➖</Emoji>{' '}
          <EmojiNumber number={1} /> を計算
        </>
      )
    }
  }
  if (args.name === 'secretCodeLetterMinusOneCaption') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <>
          <EmojiForLetter letter={args.letter} /> <Emoji>➖</Emoji>{' '}
          <EmojiNumber number={1} /> を計算
        </>
      )
    }
  }
  if (args.name === 'secretCodeAddOneCaptionWithoutQuestion') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <>
          <EmojiNumber number={1} /> を足す弁当箱
        </>
      )
    }
  }
  if (args.name === 'secretCodeAddCaption') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <>
          <InlineEmojiBoxesForQuestion size="md" /> <Emoji>➕</Emoji>{' '}
          <InlineEmojiBoxesForQuestion size="md" /> を計算
        </>
      )
    }
  }
  if (args.name === 'secretCodeMultiplyCaption') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <>
          {args.arg1 ? (
            <EmojiNumber number={args.arg1} />
          ) : (
            <InlineEmojiBoxesForQuestion size="md" />
          )}{' '}
          <Emoji>✖️</Emoji>{' '}
          {args.arg2 ? (
            <EmojiNumber number={args.arg2} />
          ) : (
            <InlineEmojiBoxesForQuestion size="md" />
          )}{' '}
          を計算
        </>
      )
    }
  }
  if (args.name === 'ifCaption') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <>
          <InlineEmojiBoxesForQuestion size="md" /> が{' '}
          <Strong css={slightlyLargeCaptionCss}>0</Strong> なら
          {args.ifZero}、
          <Strong>
            <span css={slightlyLargeCaptionCss}>1</span>以上
          </Strong>
          なら
          {args.ifNonZero}
          になる
        </>
      )
    }
  }
  if (args.name === 'privacyPolicy') {
    if (locale === 'en') {
      return <>Privacy Policy</>
    } else {
      return <>プライバシーポリシー</>
    }
  }
  if (args.name === 'aboutThisSite') {
    if (locale === 'en') {
      return <>About this Site</>
    } else {
      return <>このサイトについて</>
    }
  }
  if (args.name === 'yesOrNo') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <>
          <Emoji>⭕️</Emoji>か<Emoji>❌</Emoji>か？
        </>
      )
    }
  }
  if (args.name === 'byTheWay') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <>
          <InlineHeader>ちなみに:</InlineHeader>
        </>
      )
    }
  }
  if (args.name === 'epiloguePrefix') {
    if (locale === 'en') {
      return <>Epilogue</>
    } else {
      return <>あとがき</>
    }
  }
  if (args.name === 'stoppedForExplanation') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return <Strong>まだ途中ですが、解説のため一時停止します！</Strong>
    }
  }
  if (args.name === 'isCallArgAndFuncUnboundTheSameCaption') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <>
          {args.same ? (
            <>
              <BottomRightBadge inline bottomRightBadgeType="callArg" />と
              <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
              に同じ料理があります
            </>
          ) : (
            <>
              <BottomRightBadge inline bottomRightBadgeType="callArg" />と
              <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
              に同じ料理がありません
            </>
          )}
        </>
      )
    }
  }
  if (args.name === 'mustChangeBothFuncUnboundAndBound') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <>
          <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
          だけでなく、
          <BottomRightBadge inline bottomRightBadgeType="funcBound" />
          も変える
        </>
      )
    }
  }
  if (args.name === 'secretCodeReview') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <>
          <P>
            <InlineHeader>暗号の法則:</InlineHeader>{' '}
            もし、次のようなパターンの弁当箱があり:
          </P>
          {args.example}
          <P>
            <InlineEmojiBoxesForQuestion />
            の中に<Emoji size="mdlg">🅰️</Emoji>が縦に並んでいる場合、その
            <Strong>
              <Emoji size="mdlg">🅰️</Emoji>の数が暗号の答えになります
            </Strong>
            。
          </P>
        </>
      )
    }
  }
  if (args.name === 'pageNotFound') {
    if (locale === 'en') {
      return <>Page Not Found</>
    } else {
      return <>ページが見つかりません</>
    }
  }
  if (args.name === 'lookAtToc') {
    if (locale === 'en') {
      return <>Take a look at the table of contents:</>
    } else {
      return <>目次はこちらです:</>
    }
  }
  if (args.name === 'computerScience') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return <>コンピュータサイエンス</>
    }
  }
  if (args.name === 'yCombinator') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return <>Yコンビネータ</>
    }
  }
  if (args.name === 'infinitelyAddingQuestionCaption') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <>
          無限に
          <InlineEmojiBoxesForQuestion />
          が追加されていきます
        </>
      )
    }
  }
  if (args.name === 'isZeroReview') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <>
          <Ul>
            <UlLi>
              もし
              <InlineEmojiBoxesForQuestion />に<Strong>暗号が「0」</Strong>
              の弁当箱を埋め込んで実行した場合、最後に
              <Strong>
                <EmojiWithText letter="y" />
              </Strong>
              が残ります 。
            </UlLi>
          </Ul>
          <EmojiSeparator
            nodes={[
              <EmojiNumber number={0} />,
              <Emoji>➡️</Emoji>,
              <EmojiForLetter letter="y" />
            ]}
            description={
              <>
                「<Strong>0</Strong>」なら
                <EmojiWithText letter="y" />に
              </>
            }
          />
          <Ul>
            <UlLi>
              もし
              <InlineEmojiBoxesForQuestion />に<Strong>暗号が「1以上」</Strong>
              の弁当箱を埋め込んで実行した場合、最後に
              <Strong>
                <EmojiWithText letter="z" />
              </Strong>
              が残ります 。
            </UlLi>
          </Ul>
          <EmojiSeparator
            nodes={[
              <Emoji>🔢</Emoji>,
              <Emoji>➡️</Emoji>,
              <EmojiForLetter letter="z" />
            ]}
            description={
              <>
                「<Strong>1以上</Strong>」なら
                <EmojiWithText letter="z" />に
              </>
            }
          />
        </>
      )
    }
  }
  if (args.name === 'witch') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <>
          <InlineHeader>魔女</InlineHeader> <Emoji>🧙‍♀️</Emoji>
        </>
      )
    }
  }
  if (args.name === 'timer') {
    if (locale === 'en') {
      return (
        <>
          <InlineHeader
            css={css`
              color: ${colors('pink400')};
            `}
          >
            {args.numSecondsRemaining}
          </InlineHeader>{' '}
          second
          {args.numSecondsRemaining > 1 ? 's' : ''} left… <Emoji>⏩</Emoji>
        </>
      )
    } else {
      return (
        <>
          <Emoji>⏩</Emoji> 残り{' '}
          <InlineHeader
            css={css`
              color: ${colors('pink400')};
            `}
          >
            {args.numSecondsRemaining}
          </InlineHeader>{' '}
          秒…
        </>
      )
    }
  }
  if (args.name === 'secretCode') {
    if (locale === 'en') {
      return <>Number</>
    } else {
      return <>暗号</>
    }
  }
  if (args.name === 'whatCanComputeFactorial') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <>
          <InlineEmojiBoxesForQuestion />
          に何を入れたら、
          <br />
          {args.start === 5 && (
            <>
              <EmojiNumber number={5} /> <Emoji>✖️</Emoji>{' '}
            </>
          )}
          {args.start >= 4 && (
            <>
              <EmojiNumber number={4} /> <Emoji>✖️</Emoji>{' '}
            </>
          )}
          <EmojiNumber number={3} /> <Emoji>✖️</Emoji>{' '}
          <EmojiNumber number={2} /> <Emoji>✖️</Emoji>{' '}
          <EmojiNumber number={1} />
          が計算できる？
        </>
      )
    }
  }
  if (args.name === 'shareContent') {
    if (locale === 'en') {
      return <>?</>
    } else {
      if (episodeNumber <= numEpisodesExceptFirstAndLast) {
        let quitReason: React.ReactNode
        if (episodeNumber === 0) {
          quitReason = <Em>時間がないからあとで読もう</Em>
        } else {
          quitReason = <Em>長いのでひと休みしよう</Em>
        }

        return (
          <>
            <P>
              <InlineHeader>お願い:</InlineHeader>「{quitReason}
              」とお考えの方にお願いがあります。
            </P>
            <P>
              差し支えなければ、このページを閉じる前に
              <Em>
                <Strong>下のツイートをリツイート</Strong>
                してくださると、宣伝になるので非常に助かります。
              </Em>
              {episodeNumber > 0 && (
                <>
                  もしくは、「
                  <Strong>
                    <H args={{ name: 'titlePrefixColored' }} />
                    までは読み終えた
                  </Strong>
                  」と引用リツイートしてくださると、さらに嬉しいです。
                </>
              )}
            </P>
            <TwitterEmbed id={shareId} />
            <P>
              また、当記事の内容について質問がございましたら、
              <Em>上のツイートにスクリーンショット付きで返信</Em>
              してくだされば最優先で対応します。メール(
              <ExternalLink href="mailto:shu@chibicode.com">
                shu@chibicode.com
              </ExternalLink>
              )でもお答えできますが、返事が遅れる可能性が高いです。
            </P>
            <P>
              ご協力ありがとうございます！次のページに進むには下のボタンを押してください。
            </P>
          </>
        )
      } else {
        return <>?</>
      }
    }
  }
  if (args.name === 'shareTitle') {
    if (locale === 'en') {
      return <>?</>
    } else {
      if (episodeNumber === 0) {
        return (
          <>
            <Emoji>🥺</Emoji>「あとで読む」前に <Emoji>🥺</Emoji>
          </>
        )
      } else if (episodeNumber <= numEpisodesExceptFirstAndLast) {
        return (
          <>
            <Emoji>😴</Emoji> ひと休みする前に <Emoji>😴</Emoji>
          </>
        )
      } else {
        return <>?</>
      }
    }
  }
  if (args.name === 'witchAppearsAgainCaption') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <>
          <H args={{ name: 'witch' }} />
          がまた登場します
        </>
      )
    }
  }
  if (args.name === 'witchReplacedCaption') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <>
          <H args={{ name: 'witch' }} />
          の代わりに、
          <EmojiWithText letter="s" />
          を入れます
        </>
      )
    }
  }
  if (args.name === 'magicalChangedCaption') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <>
          <Em>
            一番上の数字が
            <EmojiNumber number={args.fromNumber} />
            から
            <EmojiNumber number={args.fromNumber - 1} />
            になり、
          </Em>
          <br />
          <Em highlightType="blue">
            <H args={{ name: 'witch' }} />
            の下に<Emoji>✖️</Emoji>
            <EmojiNumber number={args.fromNumber} />
            が追加されました。
          </Em>
        </>
      )
    }
  }
  if (args.name === 'abbreviated') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return <>省略</>
    }
  }
  if (args.name === 'prevAndNextLinks') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <>
          <LinkButton
            css={css`
              text-decoration: none;
              background: ${colors('yellow100')};
              &:hover {
                text-decoration: none;
              }
            `}
            onClick={episodeContext.showModal}
          >
            <InlineHeader>目次</InlineHeader>
          </LinkButton>{' '}
          / 前へ:{' '}
          <InternalLink
            href={`/${episodeNumber - 1}`}
            css={css`
              background: ${colors('yellow100')};
              display: inline-block;
              text-decoration: none;
              &:hover {
                text-decoration: none;
              }
            `}
          >
            <InlineHeader>
              <H
                args={{ name: 'titlePrefixColored' }}
                episodeNumberOverrides={episodeNumber - 1}
              />
            </InlineHeader>
          </InternalLink>{' '}
          / 次へ:{' '}
          <InternalLink
            href={`/${episodeNumber + 1}`}
            css={css`
              text-decoration: none;
              display: inline-block;
              background: ${colors('yellow100')};
              &:hover {
                text-decoration: none;
              }
            `}
          >
            <InlineHeader>
              <H
                args={{ name: 'titlePrefixColored' }}
                episodeNumberOverrides={episodeNumber + 1}
              />
            </InlineHeader>
          </InternalLink>
        </>
      )
    }
  }
  throw new Error()
}

H.defaultProps = {
  highlightType: 'none'
}

export default H
