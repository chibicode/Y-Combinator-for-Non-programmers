import React, { useContext } from 'react'
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
import episodeTitlePrefix from 'src/lib/episodeTitlePrefixAndColor'
import locale from 'src/lib/locale'
import { lessonTitle } from 'src/lib/titles'
import EpisodeContext from 'src/components/EpisodeContext'

export interface HProps {
  highlightType?: InlineHighlightType
  args:
    | { name: 'yesNoQuizSeeAnswer' }
    | { name: 'yesNoQuizAnswerHeading'; isYes: boolean }
    | { name: 'yesNoQuiz' }
    | { name: 'yesNoQuizCorrect' }
    | { name: 'yesNoQuizIncorrect' }
    | { name: 'yesNoQuizYes'; hideText?: boolean }
    | { name: 'yesNoQuizNo'; hideText?: boolean }
    | { name: 'yesNoQuizCorrectPostfix' }
    | { name: 'yesNoQuizIncorrectPostfix'; isYes: boolean }
    | {
        name: 'bentoBox'
        plural?: boolean
        highlightType?: InlineHighlightType
      }
    | { name: 'next' }
    | { name: 'play' }
    | { name: 'pause' }
    | { name: 'reset' }
    | { name: 'previous' }
    | { name: 'whatWeHaveLearned' }
    | { name: 'done' }
    | { name: 'true' }
    | { name: 'false' }
    | { name: 'tryGuessing' }
    | { name: 'trueOrFalse' }
    | { name: 'nextButtonNextPagePrimaryText' }
    | { name: 'nextButtonSecondaryText'; nextEpisodeNumber: number }
    | { name: 'quizReview'; previousEpisodeNumber: number }
    | { name: 'tryUntilDone'; capitalize?: boolean }
    | { name: 'playUntilDone'; capitalize?: boolean }
    | { name: 'yes' }
    | { name: 'no' }
    | { name: 'introductionPageLink' }
    | { name: 'indexPageLink' }
    | { name: 'sideNotePrefix' }
    | { name: 'continueReading' }
    | { name: 'titlePrefix' }
    | { name: 'episodeWelcomeText' }
    | { name: 'newUser' }
    | { name: 'titleSplit' }
    | { name: 'toc' }
    | { name: 'tocClose' }
    | { name: 'playButton' }
    | { name: 'afterPlay' }
}

const H = ({ args, highlightType }: HProps) => {
  const { episodeNumber } = useContext(EpisodeContext)

  if (args.name === 'titlePrefix') {
    return <>{episodeTitlePrefix(episodeNumber).prefix}</>
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
          <Strong>
            Next <Emoji>➡️</Emoji>
          </Strong>
        </>
      )
    } else {
      return (
        <>
          <Strong>
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
  if (args.name === 'pause') {
    if (locale === 'en') {
      return (
        <>
          <Strong>
            Pause <Emoji>⏸</Emoji>
          </Strong>
        </>
      )
    } else {
      return (
        <>
          <Strong>
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
          <Strong>
            <Emoji>⬅️</Emoji> Previous
          </Strong>
        </>
      )
    } else {
      return (
        <>
          <Strong>
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
      return (
        <>Continue to {episodeTitlePrefix(args.nextEpisodeNumber).prefix}</>
      )
    } else {
      return <>{episodeTitlePrefix(args.nextEpisodeNumber).prefix}へ</>
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
  if (args.name === 'playUntilDone') {
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
          <H args={{ name: 'play' }} /> を押してみてください
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
  if (args.name === 'introductionPageLink') {
    if (locale === 'en') {
      return <>Introduction</>
    } else {
      return <>序章</>
    }
  }
  if (args.name === 'indexPageLink') {
    if (locale === 'en') {
      return <>View All Pages</>
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
  throw new Error('error')
}

export default H
