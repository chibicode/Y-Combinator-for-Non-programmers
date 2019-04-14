/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useContext } from 'react'
import {
  Em,
  H3,
  InternalLink,
  P,
  Strong,
  InlineHeader
} from 'src/components/ContentTags'
import { InlineHighlightType } from 'src/components/ContentTags/Inline'
import Emoji from 'src/components/Emoji'
import locale from 'src/lib/locale'
import { lessonTitle, episodePrefix, episodeTitles } from 'src/lib/titles'
import EpisodeContext from 'src/components/EpisodeContext'
import { colors } from 'src/lib/theme'
import { episodeCategory } from 'src/lib/episodeCategories'

export interface HProps {
  highlightType: InlineHighlightType
  episodeNumberOverrides?: number
  args:
    | { name: 'pressNext' }
    | { name: 'yesNoQuizSeeAnswer' }
    | { name: 'yesNoQuizAnswerHeading'; isYes: boolean }
    | { name: 'yesNoQuiz' }
    | { name: 'yesNoQuizCorrect' }
    | { name: 'yesNoQuizIncorrect' }
    | { name: 'yesNoQuizYes'; hideText?: boolean }
    | { name: 'yesNoQuizNo'; hideText?: boolean }
    | { name: 'yesNoQuizCorrectPostfix' }
    | { name: 'yesNoQuizIncorrectPostfix'; isYes: boolean }
    | { name: 'pauseIfLost' }
    | {
        name: 'bentoBox'
        plural?: boolean
        highlightType?: InlineHighlightType
        short?: boolean
      }
    | { name: 'next' }
    | { name: 'play' }
    | { name: 'pause' }
    | { name: 'fastForward' }
    | { name: 'reset' }
    | { name: 'previous' }
    | { name: 'whatWeHaveLearned' }
    | { name: 'done' }
    | { name: 'true' }
    | { name: 'false' }
    | { name: 'match' }
    | { name: 'unmatch' }
    | { name: 'tryGuessing' }
    | { name: 'trueOrFalse' }
    | { name: 'nextButtonNextPagePrimaryText' }
    | { name: 'nextButtonSecondaryText'; nextEpisodeNumber: number }
    | { name: 'quizReview'; previousEpisodeNumber: number }
    | { name: 'tryUntilDone'; capitalize?: boolean }
    | { name: 'pressPlay'; capitalize?: boolean }
    | { name: 'yes' }
    | { name: 'no' }
    | { name: 'introductionPrefix' }
    | { name: 'indexPageLink' }
    | { name: 'sideNotePrefix' }
    | { name: 'continueReading' }
    | { name: 'titlePrefix' }
    | { name: 'titlePrefixColored' }
    | { name: 'titleWithPrefixColored' }
    | { name: 'episodeWelcomeText' }
    | { name: 'newUser' }
    | { name: 'titleSplit' }
    | { name: 'toc' }
    | { name: 'tocClose' }
    | { name: 'playButton' }
    | { name: 'afterPlay' }
    | { name: 'yesNoQuizDontWorry' }
    | { name: 'unknownRule' }
    | { name: 'pageUnderConstruction' }
    | { name: 'question' }
    | { name: 'whatHappensAtTheEndQuestion' }
    | { name: 'lookAtThisBentoBox' }
    | { name: 'pressFastForward' }
    | { name: 'copy' }
}

const prefixColors = {
  intro: colors('grey600'),
  beginner: colors('green600'),
  intermediate: colors('blue600'),
  advanced: colors('pink400')
}

const H = ({ args, highlightType, episodeNumberOverrides }: HProps) => {
  const episodeNumberFromContext = useContext(EpisodeContext).episodeNumber
  const episodeNumber = episodeNumberOverrides || episodeNumberFromContext

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
      </span>
    )
  }
  if (args.name === 'titleWithPrefixColored') {
    return (
      <>
        <H
          args={{ name: 'titlePrefixColored' }}
          episodeNumberOverrides={episodeNumberOverrides}
        />
        : {episodeTitles[episodeNumber as keyof typeof episodeTitles]}
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
  if (args.name === 'yesNoQuizSeeAnswer') {
    if (locale === 'en') {
      return (
        <>
          <Emoji size="mdlg">🤔</Emoji> See Answer
        </>
      )
    } else {
      return (
        <>
          <Emoji size="mdlg">🤔</Emoji> 正解を見る
        </>
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
      return args.short ? (
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
  if (args.name === 'whatWeHaveLearned') {
    if (locale === 'en') {
      return <>What we have learned so far</>
    } else {
      return <>これまでのまとめ</>
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
  if (args.name === 'true') {
    if (locale === 'en') {
      return (
        <>
          <Strong>True</Strong> <Emoji>👍</Emoji>
        </>
      )
    } else {
      return (
        <>
          「<Strong>はい</Strong> <Emoji>🙆🏻‍♀️</Emoji>」
        </>
      )
    }
  }
  if (args.name === 'false') {
    if (locale === 'en') {
      return (
        <>
          <Strong>False</Strong> <Emoji>👎</Emoji>
        </>
      )
    } else {
      return (
        <>
          「<Strong>いいえ</Strong> <Emoji>🙅🏻‍♀️</Emoji>」
        </>
      )
    }
  }
  if (args.name === 'tryGuessing') {
    if (locale === 'en') {
      return <P>Try guessing before you press on the button below!</P>
    } else {
      return (
        <P>
          勘で予想してみてください！下のボタンを押していただいて、次のページに進むと答えがわかります。
        </P>
      )
    }
  }
  if (args.name === 'trueOrFalse') {
    if (locale === 'en') {
      return (
        <>
          <H args={{ name: 'true' }} /> or <H args={{ name: 'false' }} />
        </>
      )
    } else {
      return (
        <>
          <H args={{ name: 'true' }} />か<H args={{ name: 'false' }} />
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
  if (args.name === 'quizReview') {
    if (locale === 'en') {
      return (
        <>
          <H3>
            <H args={{ name: 'trueOrFalse' }} /> Quiz Review
          </H3>
          <P>
            Before we begin, let’s take a look at{' '}
            <InternalLink href={`/${args.previousEpisodeNumber}`}>
              the quiz from episode {args.previousEpisodeNumber}
            </InternalLink>
            .
          </P>
        </>
      )
    } else {
      return (
        <>
          <H3>二択クイズの答え合わせ</H3>
          <P>
            まずはじめに、
            <InternalLink href={`/${args.previousEpisodeNumber}`}>
              前のページで出したクイズ
            </InternalLink>
            の答え合わせをしましょう。
          </P>
        </>
      )
    }
  }
  if (args.name === 'tryUntilDone') {
    const capitalize =
      typeof args.capitalize === 'undefined' ? true : args.capitalize
    if (locale === 'en') {
      return (
        <Em>
          {capitalize ? 'K' : 'k'}
          eep pressing <H args={{ name: 'next' }} /> until you see{' '}
          <H args={{ name: 'done' }} />
        </Em>
      )
    } else {
      return (
        <Em>
          <H args={{ name: 'done' }} /> になるまで <H args={{ name: 'next' }} />{' '}
          を何度も押してみてください
        </Em>
      )
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
  if (args.name === 'yes') {
    if (locale === 'en') {
      return (
        <Strong>
          Yes <Emoji>🔵</Emoji> <Emoji>🔴</Emoji> <Emoji>🔵</Emoji>
        </Strong>
      )
    } else {
      return (
        <Strong>
          「はい」 <Emoji>🔵</Emoji> <Emoji>🔴</Emoji> <Emoji>🔵</Emoji>
        </Strong>
      )
    }
  }
  if (args.name === 'no') {
    if (locale === 'en') {
      return (
        <Strong>
          No <Emoji>🔵</Emoji> <Emoji>🔴</Emoji> <Emoji>🔴</Emoji>
        </Strong>
      )
    } else {
      return (
        <Strong>
          「いいえ」 <Emoji>🔵</Emoji> <Emoji>🔴</Emoji> <Emoji>🔴</Emoji>
        </Strong>
      )
    }
  }
  if (args.name === 'introductionPrefix') {
    if (locale === 'en') {
      return <>Intro</>
    } else {
      return <>序章</>
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
      return (
        <>
          <Emoji size="mdlg">😉</Emoji> Don’t worry if you have no idea.
          <br />
          Just take a guess!
        </>
      )
    } else {
      return (
        <>
          <Emoji size="mdlg">😉</Emoji> 分からなくても大丈夫です！
          <br />
          勘で答えてみてください。
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
            を押してみてください:
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
          <H args={{ name: 'pause' }} />
          を押してみてください。説明が上に表示されます。
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
  throw new Error('error')
}

H.defaultProps = {
  highlightType: 'none'
}

export default H
