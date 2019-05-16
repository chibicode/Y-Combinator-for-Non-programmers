/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { episodeUrl } from 'src/lib/meta'
import { InlineEmojiBoxesForQuestion } from 'src/components/Yc/InlineEmojiBoxes'
import { useContext } from 'react'
import {
  Em,
  InternalLink,
  P,
  Strong,
  InlineHeader,
  Blockquote,
  ExternalLink
} from 'src/components/ContentTags'
import { InlineHighlightType } from 'src/components/ContentTags/Inline'
import Emoji from 'src/components/Emoji'
import locale from 'src/lib/locale'
import {
  lessonTitle,
  episodeCategoryName,
  episodePrefix,
  episodePrefixes,
  episodeTitles
} from 'src/lib/titles'
import EpisodeContext from 'src/components/EpisodeContext'
import { colors, fontSizes } from 'src/lib/theme'
import { episodeCategory } from 'src/lib/episodeCategories'
import EmojiForLetter from 'src/components/EmojiForLetter'
import { VariableNames } from 'src/types/yc/VariableNames'
import EmojiSeparator from 'src/components/EmojiSeparator'
import BottomRightBadge from 'src/components/Yc/BottomRightBadge'

export interface HProps {
  highlightType: InlineHighlightType
  episodeNumberOverrides?: number
  args:
    | { name: 'pressNext' }
    | { name: 'yesNoQuizAnswerHeading'; isYes: boolean }
    | { name: 'yesNoQuiz' }
    | { name: 'yesNoQuizCorrect' }
    | { name: 'yesNoQuizIncorrect' }
    | { name: 'yesNoQuizYes'; hideText?: boolean }
    | { name: 'yesNoQuizNo'; hideText?: boolean }
    | { name: 'yesNoQuizCorrectPostfix' }
    | { name: 'yesNoQuizIncorrectPostfix'; isYes: boolean }
    | { name: 'pauseIfLost' }
    | { name: 'byTheWay' }
    | {
        name: 'bentoBox'
        plural?: boolean
        highlightType?: InlineHighlightType
        short?: boolean
        skipEmoji?: boolean
      }
    | { name: 'next' }
    | { name: 'play' }
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
    | { name: 'whatHappensAtTheEndQuestion' }
    | { name: 'whatsTheNumberQuestion'; number: number }
    | { name: 'lookAtThisBentoBox' }
    | { name: 'pressFastForward'; skipColon?: boolean }
    | { name: 'copy' }
    | { name: 'summary' }
    | { name: 'secretCodeCaptionSimple'; number: number }
    | { name: 'isCallArgAndFuncUnboundTheSameCaption'; same: boolean }
    | { name: 'secretCodeAddOneCaption' }
    | { name: 'secretCodeAddCaption' }
    | { name: 'secretCodeMultiplyCaption' }
    | { name: 'secretCodeCaption'; number: number; letter: VariableNames }
    | { name: 'notSecretCodeCaption'; number: number; letter: VariableNames }
    | { name: 'theAnswerIs'; isYes: boolean }
    | { name: 'ifCaption'; ifZero: React.ReactNode; ifNonZero: React.ReactNode }
    | { name: 'whatIsComputerScience' }
    | { name: 'epiloguePrefix' }
    | { name: 'yesOrNo' }
    | { name: 'takeABreak' }
    | { name: 'privacyPolicy' }
    | { name: 'aboutThisSite' }
    | { name: 'noCallArgFuncUnboundOverlap'; letter: VariableNames }
    | {
        name: 'categoryNameColored'
        category: keyof typeof episodePrefixes
      }
    | { name: 'infiniteBentoBox' }
    | { name: 'stoppedBecauseInfiniteLoop' }
    | { name: 'secretCodeAddOneCaptionWithoutQuestion' }
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
  const episodeNumberFromContext = useContext(EpisodeContext).episodeNumber
  const episodeNumber = episodeNumberOverrides || episodeNumberFromContext
  const currentEpisodeCategoryName = episodeCategoryName(episodeNumber)
  const nextEpisodeCategoryName = episodeCategoryName(episodeNumber + 1)

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
          コンピュターサイエンスと
          <br />
          魔法のYコンビネーター
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
  if (args.name === 'yesNoQuizAnswerHeading') {
    const { isYes } = args
    if (locale === 'en') {
      return (
        <>
          Correct Answer: <Emoji>{args.isYes ? '👍' : '👎'}</Emoji>{' '}
          {isYes ? 'Yes' : 'No'}
        </>
      )
    } else {
      return (
        <>
          正解は<Emoji>{isYes ? '⭕️' : '❌'}</Emoji>
        </>
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
  if (args.name === 'bentoBox') {
    if (locale === 'en') {
      return (
        <Strong highlightType={highlightType}>
          {`“bento box${args.plural ? 'es' : ''}”`} <Emoji>🍱</Emoji>
        </Strong>
      )
    } else {
      return args.skipEmoji ? (
        <>弁当箱</>
      ) : args.short ? (
        <>
          弁当箱 <Emoji>🍱</Emoji>
        </>
      ) : (
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
          <H args={{ name: 'question' }} /> 上の
          <H args={{ name: 'bentoBox', short: true }} />を
          <H args={{ name: 'play' }} />
          すると、<Strong>最終的に下のようになるでしょうか？</Strong>
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
          <H args={{ name: 'question' }} /> 上の
          <H args={{ name: 'bentoBox', short: true }} />を
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
      return (
        <>
          こちらの
          <H args={{ name: 'bentoBox', short: true }} />
          をご覧ください
        </>
      )
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
      return (
        <>
          正解は<Emoji>{args.isYes ? '⭕️' : '❌'}</Emoji>
        </>
      )
    }
  }
  if (args.name === 'secretCodeAddOneCaption') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <>
          <InlineEmojiBoxesForQuestion size="md" /> <Emoji>➕</Emoji>{' '}
          <Emoji>1️⃣</Emoji> を計算
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
          <Emoji>1️⃣</Emoji> を足す
          <H args={{ name: 'bentoBox', skipEmoji: true }} />
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
          <InlineEmojiBoxesForQuestion size="md" /> <Emoji>✖️</Emoji>{' '}
          <InlineEmojiBoxesForQuestion size="md" /> を計算
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
  if (args.name === 'takeABreak') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <>
          <P>
            「{nextEpisodeCategoryName}
            に入る前にちょっと休憩したい」という方は、もしよければですが、ツイッターなどのSNSで
          </P>
          <Blockquote>
            <P>
              <Strong>
                「魔法のYコンビネーター、とりあえず{currentEpisodeCategoryName}
                編は終わった」
              </Strong>
            </P>
          </Blockquote>
          <P>とつぶやいてくださると、宣伝になるので大変ありがたいです。</P>
          <EmojiSeparator emojis={['📱', '🙂', '💬']} />
          <P>
            <Strong>その際には、下のURLをコピーしてシェアしてください。</Strong>
            <Em>
              後にこのURLを開けば、
              <Strong>{nextEpisodeCategoryName}その1</Strong>
              に飛ぶことができるので、ブックマークとしても便利です。
            </Em>
          </P>
          <P
            css={css`
              text-align: center;
            `}
          >
            <Em
              highlightType="white"
              css={css`
                font-size: ${fontSizes(1.2)};
              `}
            >
              <ExternalLink href={episodeUrl(episodeNumber + 1)}>
                {episodeUrl(episodeNumber + 1)}
              </ExternalLink>
            </Em>
            <br />
            <span
              css={css`
                font-size: ${fontSizes(0.85)};
                color: ${colors('grey700')};
              `}
            >
              (↑ {nextEpisodeCategoryName}その1に飛ぶURLです)
            </span>
          </P>
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
  if (args.name === 'whatIsComputerScience') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <>
          <Strong>
            コンピューターサイエンスとは、
            プログラミングやAI開発の根幹となる学問です。
          </Strong>
          たとえば、グーグルなどの検索エンジンや、地図アプリのナビ機能、カメラアプリの顔認識機能には、コンピューターサイエンスの考え方が応用されています。
        </>
      )
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
  if (args.name === 'noCallArgFuncUnboundOverlap') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <>
          <Strong>
            <BottomRightBadge bottomRightBadgeType="funcUnbound" inline /> の{' '}
            <EmojiForLetter letter={args.letter} /> には <Emoji>🥤</Emoji>
            があり、
            <BottomRightBadge bottomRightBadgeType="callArg" inline /> の
            <EmojiForLetter letter={args.letter} /> にはない
          </Strong>
        </>
      )
    }
  }
  if (args.name === 'infiniteBentoBox') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <>
          「
          <InlineHeader>
            無限ループの弁当箱 <Emoji>♾</Emoji>
          </InlineHeader>
          」
        </>
      )
    }
  }
  if (args.name === 'stoppedBecauseInfiniteLoop') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <Strong>
          <Emoji>♾</Emoji> 無限に続くので、ここで中断します！
        </Strong>
      )
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
              が同じ！
            </>
          ) : (
            <>
              <BottomRightBadge inline bottomRightBadgeType="callArg" />と
              <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
              が違う！
            </>
          )}
        </>
      )
    }
  }
  throw new Error('error')
}

H.defaultProps = {
  highlightType: 'none'
}

export default H
