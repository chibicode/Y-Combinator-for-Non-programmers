/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Fragment } from 'react'
import { InlineHighlightType } from 'src/types/ContentTagTypes'
import InlineBorder from 'src/components/InlineBorder'
import { useContext } from 'react'
import {
  Em,
  InternalLink,
  P,
  Strong,
  InlineHeader,
  ExternalLink,
  LinkButton,
  Hr,
  Img
} from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import locale from 'src/lib/locale'
import {
  lessonTitle,
  episodePrefix,
  episodePrefixes,
  episodeTitles
} from 'src/lib/titles'
import EpisodeContext from 'src/components/EpisodeContext'
import { colors } from 'src/lib/theme'
import {
  episodeCategory,
  numEpisodesExceptFirstAndLast
} from 'src/lib/episodeCategories'
import EmojiForLetter from 'src/components/EmojiForLetter'
import EmojiSeparator from 'src/components/EmojiSeparator'
import EmojiNumber from 'src/components/EmojiNumber'
import TwitterEmbed from 'src/components/TwitterEmbed'
import { shareId, shareVisible } from 'src/lib/twitter'
import { dateString, dateSchemaString } from 'src/lib/date'
import { githubRepo } from 'src/lib/meta'
import CustomEmoji from 'src/components/CustomEmoji'
import InlinePrioritiesLabel from 'src/components/InlinePrioritiesLabel'
import { VariableNames } from 'src/types/VariableNames'

const prefixColors = {
  intro: colors('grey600'),
  beginner: colors('green600'),
  intermediate: colors('blue600'),
  advanced: colors('pink400'),
  epilogue: colors('deepPurple300')
}

interface HProps {
  highlightType: InlineHighlightType
  episodeNumberOverrides?: number
  args:
    | { name: 'prevNextLinkPrevious' }
    | { name: 'prevNextLinkNext' }
    | {
        name: 'dateAndSource'
        includeAboutMe?: boolean
        includeTwitter?: boolean
      }
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
        <P t>
          <InlineHeader>Hello!</InlineHeader> This is{' '}
          <Em>page {episodeNumber + 1}</Em> of the online course called “
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
          <Emoji>❌</Emoji> クイズ
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
            Run <Emoji>▶️</Emoji>
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
            Play <Emoji>⏩</Emoji>
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
            Playing… <Emoji>⏩</Emoji>
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
            リセット <Emoji>↩️</Emoji>
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
      return <>Index</>
    } else {
      return <>目次</>
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
  if (args.name === 'yesNoQuizDontWorry') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <>
          <Emoji size="mdlg">😉</Emoji> 分からなくても大丈夫です！
          <br />
          適当に勘で答えてみてください。
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
            <H args={{ name: 'next' }} /> を押してみてください:
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
            <H args={{ name: 'fastForward' }} /> を押してみて
            {!args.girl && <>ください</>}
            {args.mentionRightArrow || args.skippable
              ? '。'
              : args.skipColon
              ? ''
              : args.girl
              ? '！'
              : ':'}
          </Em>
          {args.mentionRightArrow && <H args={{ name: 'mentionRightArrow' }} />}
          {args.skippable && (
            <H args={{ name: 'fastForwardSkippableToTheEnd' }} />
          )}
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
          <H args={{ name: 'play' }} /> すると、
          <Strong>最終的に下のようになるでしょうか？</Strong>
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
  if (args.name === 'lookAtThisMathBox') {
    if (locale === 'en') {
      return <>…</>
    } else {
      return <>こちらの計算箱をご覧ください</>
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
  if (args.name === 'theAnswerIs') {
    if (locale === 'en') {
      return <>?</>
    } else {
      const childNode = (
        <Fragment>
          正解は <Emoji>{args.isYes ? '⭕️' : '❌'}</Emoji>
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
      return <>当サイトについて</>
    }
  }
  if (args.name === 'stoppedForExplanation') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return <Strong>まだ途中ですが、解説のため一旦止めます！</Strong>
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
  if (args.name === 'shareContent') {
    if (locale === 'en') {
      return <>?</>
    } else {
      const question = (
        <P>
          また、本稿の内容について質問がございましたら、
          <Em>
            上のツイートに<Strong>スクリーンショット付き</Strong>で返信
          </Em>
          してくだされば最優先で対応します。メール(
          <ExternalLink href="mailto:shu@chibicode.com">
            shu@chibicode.com
          </ExternalLink>
          )でもお答えできますが、返事が遅れる可能性が高いです。
        </P>
      )

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
                  」と引用リツイートしてくださると、さらに励みになります。
                </>
              )}
              図々しいお願いで恐縮です。
            </P>
            <TwitterEmbed id={shareId} />
            {question}
          </>
        )
      } else {
        return (
          <>
            <P>
              お疲れ様でした！本稿に対するご意見・ご感想を、ぜひ
              <Strong>下のツイートを引用リツイートして</Strong>
              ご共有ください。
            </P>
            <TwitterEmbed id={shareId} />
            {question}
            <Hr />
            <P>
              <InlineHeader>
                本稿を読んで、「
                <Em>
                  プログラミング未経験者だけど、コンピュータサイエンスを学びたくなった。次は何を読めばいい？
                </Em>
                」と思ってくださった方へ:
              </InlineHeader>
            </P>
            <EmojiSeparator
              emojis={['❓', '🤔', '❓']}
              description={<>次は何を読めばいい？</>}
            />
            <P>
              プログラミング抜きに、コンピュータサイエンスを学べる教材が他にもあればご紹介したいのですが、現時点では筆者がおすすめできるものが見つかっておりません。
            </P>
            <P>
              というわけで、
              <Strong>
                一定数の方がリクエストしてくださったら、続編を書こう
              </Strong>
              かなと思っています。続編を書くとしたら、
              <Strong>人工知能</Strong>
              についてプログラミング抜きに学べる教材を作りたいと考えています。
            </P>
            <EmojiSeparator
              emojis={['🤖', '🧠', '🤖']}
              description={<>続編を書くとしたら人工知能について</>}
            />
            <P>
              続編をリクエストしたい方は、
              <Em>
                以下のツイートの引用リツイートで「
                <Strong>続編が読みたい</Strong>」と書いてくださると嬉しいです。
              </Em>
            </P>
            <TwitterEmbed id={shareId} />
            <Hr />
            <P>
              <InlineHeader>宣伝:</InlineHeader>{' '}
              もしご興味があれば、わたしが共訳した書籍『
              <ExternalLink href="https://amzn.to/2QlZIqm">
                <Strong>ファクトフルネス</Strong>
              </ExternalLink>
              』や、
              <ExternalLink href="https://jp.chibicode.com/">
                わたしのブログ
              </ExternalLink>
              もご覧ください。
            </P>
            <P>
              <ExternalLink href="https://amzn.to/2QlZIqm">
                <Img
                  size="small"
                  src="/static/images/factfulness.jpg"
                  alt="ファクトフルネス"
                />
              </ExternalLink>
            </P>
            <P>
              重ね重ね、本稿をお読みになってくださりありがとうございました！
            </P>
          </>
        )
      }
    }
  }
  if (args.name === 'shareTitle') {
    if (locale === 'en') {
      return <>?</>
    } else {
      if (episodeNumber === 0) {
        return <>「あとで読む」前に</>
      } else if (episodeNumber <= numEpisodesExceptFirstAndLast) {
        return (
          <>
            <Emoji>😴</Emoji> ひと休みする前に <Emoji>😴</Emoji>
          </>
        )
      } else {
        return <>ありがとうございました！</>
      }
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
  if (args.name === 'dateAndSource') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <>
          <P>
            {args.includeAboutMe && (
              <>
                <InlineHeader>著者:</InlineHeader> 上杉周作 (
                <ExternalLink href="https://jp.chibicode.com">
                  ブログはこちら
                </ExternalLink>
                )
                <br />
              </>
            )}
            <InlineHeader>公開日:</InlineHeader>{' '}
            <time dateTime={dateSchemaString}>{dateString}</time>
            <br />
            <InlineHeader>ソースコード:</InlineHeader>{' '}
            <ExternalLink href={githubRepo}>GitHubで公開中</ExternalLink>
            {args.includeTwitter && (
              <>
                <br />
                <InlineHeader>Twitter:</InlineHeader>{' '}
                <ExternalLink href="https://twitter.com/chibicode">
                  @chibicode
                </ExternalLink>
              </>
            )}
          </P>
          {args.includeTwitter && shareVisible && <TwitterEmbed id={shareId} />}
        </>
      )
    }
  }
  if (args.name === 'AmultTop') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <>
          <Emoji>🅰️</Emoji> が
        </>
      )
    }
  }
  if (args.name === 'AmultBottom') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return <>いくつか</>
    }
  }
  if (args.name === 'BsingleTop') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <>
          <Emoji>🅱️</Emoji> が
        </>
      )
    }
  }
  if (args.name === 'BsingleBottom') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return <>ひとつ</>
    }
  }
  if (args.name === 'mentionRightArrow') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <>
          <Em highlightType="pink">
            一回ずつ進める場合は、<Emoji>➡️</Emoji> を押してください。
          </Em>
        </>
      )
    }
  }
  if (args.name === 'conditionSectionName') {
    if (locale === 'en') {
      return <>?</>
    } else {
      if (args.type === 'condition') {
        return (
          <>
            真ん中の部分 <InlineBorder type="condition" />
          </>
        )
      } else if (args.type === 'falseCase') {
        return (
          <>
            上の部分 <InlineBorder type="falseCase" />
          </>
        )
      } else {
        return (
          <>
            下の部分 <InlineBorder type="trueCase" />
          </>
        )
      }
    }
  }
  if (args.name === 'lookAtThisBentoBoxPuzzle') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <>
          こちらの
          <H args={{ name: 'bentoBoxPuzzle' }} />
          をご覧ください
        </>
      )
    }
  }
  if (args.name === 'convertToMathbox') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <InlineHeader>
          <CustomEmoji type="mathBox" /> 計算箱に変換 <Emoji>🐶</Emoji>
        </InlineHeader>
      )
    }
  }
  if (args.name === 'runAndConvertToMathbox') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <InlineHeader>
          実行してから
          {args.addNewline ? <br /> : ' '}
          <H args={{ name: 'convertToMathbox' }} />
        </InlineHeader>
      )
    }
  }
  if (args.name === 'doneRunAndConvertToMathbox') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <Strong highlightType={highlightType}>
          実行と変換完了! <Emoji>🏁</Emoji>
        </Strong>
      )
    }
  }
  if (args.name === 'undoConvertToMathbox') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <InlineHeader>
          <Emoji>🍱</Emoji> 弁当箱に戻す <Emoji>↩</Emoji>
        </InlineHeader>
      )
    }
  }
  if (args.name === 'doneConvertToMathbox') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <>
          <Strong highlightType={highlightType}>
            <CustomEmoji type="mathBox" /> 計算箱に変換しました{' '}
            <Emoji>🐶</Emoji>
          </Strong>
        </>
      )
    }
  }
  if (args.name === 'canBeConverted') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return <>に変換できる弁当箱</>
    }
  }
  if (args.name === 'plusOneEffect') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <>
          「<Strong>1を足す効果</Strong> <CustomEmoji type="plusOneOrange" />」
        </>
      )
    }
  }
  if (args.name === 'minusOneEffect') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <>
          「<Strong>1を引く効果</Strong> <CustomEmoji type="minusOnePink" />」
        </>
      )
    }
  }
  if (args.name === 'startWithTwoCaption') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <>
          下段にひとつの料理しかなく、
          <br />
          <InlinePrioritiesLabel>1</InlinePrioritiesLabel>{' '}
          のペアからはじめられない場合、
          <br />
          <InlinePrioritiesLabel>2</InlinePrioritiesLabel> のペアからはじめる
        </>
      )
    }
  }
  if (args.name === 'startWithLeftMostOneCaption') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <>
          <InlinePrioritiesLabel>1</InlinePrioritiesLabel>{' '}
          のペアがふたつ以上ある場合は、
          <br />
          一番左の <InlinePrioritiesLabel>1</InlinePrioritiesLabel>{' '}
          のペアからはじめる
        </>
      )
    }
  }
  if (args.name === 'convertiblePatternCaption') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <>
          一番左の料理を <Emoji>🅰️</Emoji> 、<br />
          真ん中の料理を <Emoji>🅱️</Emoji> とした場合、
          <br />
          右上に <Emoji>🅱️</Emoji> がひとつあり、
          <br />
          右下に <Emoji>🅰️</Emoji> がいくつかある
        </>
      )
    }
  }
  if (args.name === 'canBeConvertedCaption') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <>
          右下には <Emoji>🅰️</Emoji> がついた{' '}
          <EmojiForLetter letter={args.letter} /> が「
          <Strong>{args.number}個</Strong>」
          <br />
          → 計算箱に変換すると <EmojiNumber number={args.number} /> になる
        </>
      )
    }
  }
  if (args.name === 'skipToTheEnd') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return <>最後までスキップ</>
    }
  }
  if (args.name === 'skipToTheStoppingPoint') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return <>途中までスキップ</>
    }
  }
  if (args.name === 'fastForwardSkippableToTheEnd') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return <Em highlightType="pink">最後までスキップすることも可能です。</Em>
    }
  }
  if (args.name === 'slide') {
    if (locale === 'en') {
      return <>Slide</>
    } else {
      return <>スライド</>
    }
  }
  if (args.name === 'prevNextLinkPrevious') {
    if (locale === 'en') {
      return <>Previous</>
    } else {
      return <>前へ</>
    }
  }
  if (args.name === 'prevNextLinkNext') {
    if (locale === 'en') {
      return <>Next</>
    } else {
      return <>次へ</>
    }
  }
  throw new Error()
}

H.defaultProps = {
  highlightType: 'none'
}

export default H
