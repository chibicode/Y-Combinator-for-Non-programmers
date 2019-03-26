import React, { useContext } from 'react'
import { Em, H3, InternalLink, P, Strong } from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import episodeTitlePrefix from 'src/lib/episodeTitlePrefixAndColor'
import locale from 'src/lib/locale'
import t from 'src/lib/titles'
import EpisodeContext from 'src/components/EpisodeContext'

export interface HProps {
  args:
    | { name: 'yesNoQuizSeeAnswer' }
    | { name: 'yesNoQuizAnswerHeading'; isYes: boolean }
    | { name: 'yesNoQuiz' }
    | { name: 'yesNoQuizCorrect' }
    | { name: 'yesNoQuizIncorrect' }
    | { name: 'yesNoQuizSkipped' }
    | { name: 'yesNoQuizYes'; hideText?: boolean }
    | { name: 'yesNoQuizNo'; hideText?: boolean }
    | { name: 'yesNoQuizCorrectPostfix' }
    | { name: 'yesNoQuizIncorrectPostfix'; isYes: boolean }
    | { name: 'yesNoQuizSkippedPostfix'; isYes: boolean }
    | { name: 'ycBentoBox'; plural?: boolean }
    | { name: 'ycNext' }
    | { name: 'ycPlay' }
    | { name: 'ycPause' }
    | { name: 'ycReset' }
    | { name: 'ycPrevious' }
    | { name: 'ycWhatWeHaveLearned' }
    | { name: 'ycDone' }
    | { name: 'ycTrue' }
    | { name: 'ycFalse' }
    | { name: 'ycTryGuessing' }
    | { name: 'ycTrueOrFalse' }
    | { name: 'ycNextButtonStartPrimaryText' }
    | { name: 'ycNextButtonCheckAnswerPrimaryText' }
    | { name: 'ycNextButtonNextPagePrimaryText' }
    | { name: 'ycNextButtonSecondaryText'; nextEpisodeNumber: number }
    | { name: 'ycQuizReview'; previousEpisodeNumber: number }
    | { name: 'ycTryUntilDone'; capitalize?: boolean }
    | { name: 'ycPlayUntilDone'; capitalize?: boolean }
    | { name: 'ycYes' }
    | { name: 'ycNo' }
    | { name: 'introductionPageLink' }
    | { name: 'indexPageLink' }
    | { name: 'sideNotePrefix' }
    | { name: 'continueReading' }
    | { name: 'titlePrefix' }
    | { name: 'episodeWelcomeText' }
    | { name: 'newUser' }
    | { name: 'titleSplit' }
}

const H = ({ args }: HProps) => {
  const { episodeNumber } = useContext(EpisodeContext)

  if (args.name === 'titlePrefix') {
    return <>{episodeTitlePrefix(episodeNumber).prefix}</>
  }
  if (args.name === 'titleSplit') {
    if (locale === 'en') {
      return <>{t('title')}</>
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
          <Strong>Hello!</Strong> This is{' '}
          <Strong>page {episodeNumber + 1}</Strong> of the series called “
          <InternalLink href={'/'}>{t('title')}</InternalLink>
          ”. If you just got here,
          <InternalLink href={'/'}>
            <Strong>click here to read from the beginning</Strong>
          </InternalLink>
          . Or you can view the
          <InternalLink href={'/toc'}>table of contents</InternalLink>.
        </P>
      )
    } else {
      return (
        <P>
          <Strong>こんにちは！</Strong>このページは「
          <InternalLink href={'/'}>{t('title')}</InternalLink>
          」という記事の
          <Strong>{episodeNumber + 1}ページ目</Strong>
          です。1ページ目から読むには
          <InternalLink href={'/'}>
            <Strong>こちらからどうぞ</Strong>
          </InternalLink>
          。目次は
          <InternalLink href={'/toc'}>こちら</InternalLink>。
        </P>
      )
    }
  }
  if (args.name === 'episodeWelcomeText') {
    if (locale === 'en') {
      return (
        <Strong>
          Welcome to <H args={{ name: 'titlePrefix' }} />!
        </Strong>
      )
    } else {
      return (
        <Strong>
          <H args={{ name: 'titlePrefix' }} />
          へようこそ！
        </Strong>
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
  if (args.name === 'yesNoQuizSkipped') {
    if (locale === 'en') {
      return (
        <>
          <Emoji size="mdlg">😉</Emoji>
        </>
      )
    } else {
      return (
        <>
          <Emoji size="mdlg">😉</Emoji>
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
          <Strong>
            <Emoji>👎</Emoji> No
          </Strong>
        </>
      )
    } else {
      return (
        <>
          <Strong>
            <Emoji>❌</Emoji>
            {!args.hideText && ' いいえ'}
          </Strong>
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
  if (args.name === 'yesNoQuizSkippedPostfix') {
    if (locale === 'en') {
      return (
        <>
          The corret answer was{' '}
          {args.isYes ? (
            <H args={{ name: 'yesNoQuizYes' }} />
          ) : (
            <H args={{ name: 'yesNoQuizNo' }} />
          )}
          .
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
          でした。
        </>
      )
    }
  }
  if (args.name === 'ycBentoBox') {
    if (locale === 'en') {
      return (
        <Strong>
          {`“bento box${args.plural ? 'es' : ''}”`} <Emoji>🍱</Emoji>
        </Strong>
      )
    } else {
      return (
        <Strong>
          「弁当箱のパズル <Emoji>🍱</Emoji>」
        </Strong>
      )
    }
  }
  if (args.name === 'ycNext') {
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
  if (args.name === 'ycPlay') {
    if (locale === 'en') {
      return (
        <>
          <Strong>
            Play <Emoji>▶️</Emoji>
          </Strong>
        </>
      )
    } else {
      return (
        <>
          <Strong>
            実行 <Emoji>▶️</Emoji>
          </Strong>
        </>
      )
    }
  }
  if (args.name === 'ycPause') {
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
  if (args.name === 'ycReset') {
    if (locale === 'en') {
      return (
        <>
          <Strong>
            Reset <Emoji>↩️</Emoji>
          </Strong>
        </>
      )
    } else {
      return (
        <>
          <Strong>
            最初から <Emoji>↩️</Emoji>
          </Strong>
        </>
      )
    }
  }
  if (args.name === 'ycPrevious') {
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
  if (args.name === 'ycWhatWeHaveLearned') {
    if (locale === 'en') {
      return <>What we have learned so far</>
    } else {
      return <>これまでのまとめ</>
    }
  }
  if (args.name === 'ycDone') {
    if (locale === 'en') {
      return (
        <>
          <Strong>
            Done <Emoji>🏁</Emoji>
          </Strong>
        </>
      )
    } else {
      return (
        <>
          <Strong>
            終了 <Emoji>🏁</Emoji>
          </Strong>
        </>
      )
    }
  }
  if (args.name === 'ycTrue') {
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
  if (args.name === 'ycFalse') {
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
  if (args.name === 'ycTryGuessing') {
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
  if (args.name === 'ycTrueOrFalse') {
    if (locale === 'en') {
      return (
        <>
          <H args={{ name: 'ycTrue' }} /> or <H args={{ name: 'ycFalse' }} />
        </>
      )
    } else {
      return (
        <>
          <H args={{ name: 'ycTrue' }} />か<H args={{ name: 'ycFalse' }} />
        </>
      )
    }
  }
  if (args.name === 'ycNextButtonStartPrimaryText') {
    if (locale === 'en') {
      return <>OK, Let’s Go!</>
    } else {
      return <>次のページへ進む</>
    }
  }
  if (args.name === 'ycNextButtonCheckAnswerPrimaryText') {
    if (locale === 'en') {
      return <>Check My Answer</>
    } else {
      return <>次のページへ進む</>
    }
  }
  if (args.name === 'ycNextButtonNextPagePrimaryText') {
    if (locale === 'en') {
      return <>Go to Next Page</>
    } else {
      return <>次のページへ進む</>
    }
  }
  if (args.name === 'ycNextButtonSecondaryText') {
    if (locale === 'en') {
      return (
        <>Continue to {episodeTitlePrefix(args.nextEpisodeNumber).prefix}</>
      )
    } else {
      return <>{episodeTitlePrefix(args.nextEpisodeNumber).prefix}へ</>
    }
  }
  if (args.name === 'ycQuizReview') {
    if (locale === 'en') {
      return (
        <>
          <H3>
            <H args={{ name: 'ycTrueOrFalse' }} /> Quiz Review
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
  if (args.name === 'ycTryUntilDone') {
    const capitalize =
      typeof args.capitalize === 'undefined' ? true : args.capitalize
    if (locale === 'en') {
      return (
        <Em>
          {capitalize ? 'K' : 'k'}
          eep pressing <H args={{ name: 'ycNext' }} /> until you see{' '}
          <H args={{ name: 'ycDone' }} />
        </Em>
      )
    } else {
      return (
        <Em>
          <H args={{ name: 'ycDone' }} /> になるまで{' '}
          <H args={{ name: 'ycNext' }} /> を何度も押してみてください
        </Em>
      )
    }
  }
  if (args.name === 'ycPlayUntilDone') {
    const capitalize =
      typeof args.capitalize === 'undefined' ? true : args.capitalize
    if (locale === 'en') {
      return (
        <Em>
          {capitalize ? 'T' : 't'}
          ry pressing <H args={{ name: 'ycPlay' }} />
        </Em>
      )
    } else {
      return (
        <Em>
          <H args={{ name: 'ycPlay' }} /> を押してみてください
        </Em>
      )
    }
  }
  if (args.name === 'ycYes') {
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
  if (args.name === 'ycNo') {
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
  throw new Error('error')
}

export default H
