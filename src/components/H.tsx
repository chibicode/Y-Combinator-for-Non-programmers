/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Fragment } from 'react'
import { InlineHighlightType } from 'src/components/ContentTags/Inline'
import InlineBorder from 'src/components/InlineBorder'
import { useContext } from 'react'
import {
  Highlight,
  InternalLink,
  P,
  HighlightBold,
  Bold,
  ExternalLink,
  Hr,
  Img,
  Italic
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
import testimonials from 'src/lib/testimonials'

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
    | { name: 'yesNoQuiz'; postfix?: string }
    | { name: 'yesNoQuizCorrect' }
    | { name: 'yesNoQuizIncorrect' }
    | { name: 'yesNoQuizYes'; hideText?: boolean }
    | { name: 'yesNoQuizNo'; hideText?: boolean }
    | { name: 'yesNoQuizCorrectPostfix' }
    | { name: 'yesNoQuizIncorrectPostfix'; isYes: boolean }
    | {
        name: 'bentoBoxPuzzle'
        capitalize?: true
        indefinite?: true
        postfix?: string
      }
    | { name: 'next' }
    | { name: 'play'; lowerCase?: true }
    | { name: 'fastForwarding' }
    | { name: 'pause' }
    | { name: 'fastForward'; lowerCase?: true }
    | { name: 'reset' }
    | { name: 'previous' }
    | { name: 'done' }
    | { name: 'match' }
    | { name: 'unmatch' }
    | { name: 'nextButtonNextPagePrimaryText' }
    | { name: 'nextButtonSecondaryText'; nextEpisodeNumber: number }
    | { name: 'pressPlay'; capitalize?: true }
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
    | { name: 'pageUnderConstructionTitle' }
    | { name: 'question' }
    | { name: 'whatHappensAtTheEndQuestion' }
    | { name: 'lookAtThisBentoBox'; lowerCase?: true }
    | {
        name: 'pressFastForward'
        skipColon?: boolean
        mentionRightArrow?: boolean
        girl?: boolean
        skippable?: boolean
      }
    | { name: 'copy' }
    | { name: 'summary' }
    | { name: 'theAnswerIs'; isYes: boolean; sentence?: true; lowerCase?: true }
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
    | {
        name: 'conditionSectionName'
        type: 'condition' | 'trueCase' | 'falseCase'
      }
    | { name: 'lookAtThisBentoBoxPuzzle' }
    | { name: 'convertToMathbox'; lowerCase?: true }
    | { name: 'runAndConvertToMathbox'; addNewline?: boolean; lowerCase?: true }
    | { name: 'doneRunAndConvertToMathbox' }
    | { name: 'undoConvertToMathbox' }
    | { name: 'doneConvertToMathbox' }
    | { name: 'canBeConverted' }
    | { name: 'plusOneEffect'; capitalize?: true }
    | { name: 'plusOneFeature'; capitalize?: true }
    | { name: 'minusOneFeature'; capitalize?: true }
    | { name: 'repeatFeature'; capitalize?: true }
    | { name: 'conditionFeature'; capitalize?: true }
    | { name: 'minusOneEffect'; capitalize?: true }
    | { name: 'startWithTwoCaption' }
    | { name: 'startWithLeftMostOneCaption' }
    | { name: 'convertiblePatternCaption' }
    | { name: 'convertiblePatternThreeColumnsCaption' }
    | { name: 'convertiblePatternFirstCaption' }
    | { name: 'convertiblePatternSecondCaption' }
    | { name: 'canBeConvertedCaption'; letter: VariableNames; number: number }
    | { name: 'skipToTheEnd' }
    | { name: 'skipToTheStoppingPoint' }
    | { name: 'fastForwardSkippableToTheEnd' }
    | { name: 'slide' }
    | { name: 'testimonialsTitle' }
    | { name: 'testimonialsContent' }
    | { name: 'goToOtherPage' }
    | { name: 'demoTitle' }
    | { name: 'whatTheNumberIsCaption' }
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
          <Bold>Hello!</Bold> This is <Italic>page {episodeNumber + 1}</Italic>{' '}
          of a course called “
          <InternalLink href={'/'}>{lessonTitle}</InternalLink>
          ”. If you just got here,{' '}
          <InternalLink href={'/'}>
            <Bold>click here to read from the beginning</Bold>
          </InternalLink>
          .
        </P>
      )
    } else {
      return (
        <P>
          <Bold>こんにちは！</Bold>このページは「
          <InternalLink href={'/'}>{lessonTitle}</InternalLink>
          」という記事の
          <Highlight>{episodeNumber + 1}ページ目</Highlight>
          です。1ページ目から読むには
          <InternalLink href={'/'}>
            <HighlightBold>こちらからどうぞ</HighlightBold>
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
          <Emoji>👍</Emoji> Yes / <Emoji>👎</Emoji> No Quiz{args.postfix}
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
          <Emoji size="mdlg">🎉</Emoji> Correct!
        </>
      )
    } else {
      return (
        <>
          <Emoji size="mdlg">🎉</Emoji> 正解！
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
          <Emoji>👍</Emoji> <Bold>Yes</Bold>
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
          <Emoji>👎</Emoji> <Bold>No</Bold>
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
          . Nice try though!
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
        <>
          {args.indefinite
            ? args.capitalize
              ? 'A'
              : 'a'
            : args.capitalize
            ? 'The'
            : 'the'}{' '}
          <Bold>“Lunchbox”</Bold> puzzle{args.postfix ? args.postfix : ''}{' '}
          <Emoji>🍱</Emoji>
        </>
      )
    } else {
      return (
        <HighlightBold highlightType={highlightType}>
          「弁当箱のパズル <Emoji>🍱</Emoji>」
        </HighlightBold>
      )
    }
  }
  if (args.name === 'next') {
    if (locale === 'en') {
      return (
        <>
          <HighlightBold highlightType={highlightType}>
            Next <Emoji>➡️</Emoji>
          </HighlightBold>
        </>
      )
    } else {
      return (
        <>
          <HighlightBold highlightType={highlightType}>
            次へ <Emoji>➡️</Emoji>
          </HighlightBold>
        </>
      )
    }
  }
  if (args.name === 'play') {
    if (locale === 'en') {
      return (
        <>
          <HighlightBold highlightType={highlightType}>
            {args.lowerCase ? 'r' : 'R'}un <Emoji>⏭</Emoji>
          </HighlightBold>
        </>
      )
    } else {
      return (
        <>
          <HighlightBold highlightType={highlightType}>
            実行 <Emoji>▶️</Emoji>
          </HighlightBold>
        </>
      )
    }
  }
  if (args.name === 'fastForward') {
    if (locale === 'en') {
      return (
        <>
          <HighlightBold highlightType={highlightType}>
            {args.lowerCase ? 'p' : 'P'}lay <Emoji>▶️</Emoji>
          </HighlightBold>
        </>
      )
    } else {
      return (
        <>
          <HighlightBold highlightType={highlightType}>
            早送り <Emoji>⏩</Emoji>
          </HighlightBold>
        </>
      )
    }
  }
  if (args.name === 'fastForwarding') {
    if (locale === 'en') {
      return (
        <>
          <HighlightBold highlightType={highlightType}>
            Playing… <Emoji>▶️</Emoji>
          </HighlightBold>
        </>
      )
    } else {
      return (
        <>
          <HighlightBold highlightType={highlightType}>
            早送り中… <Emoji>⏩</Emoji>
          </HighlightBold>
        </>
      )
    }
  }
  if (args.name === 'pause') {
    if (locale === 'en') {
      return (
        <>
          <HighlightBold highlightType={highlightType}>
            Pause <Emoji>⏸</Emoji>
          </HighlightBold>
        </>
      )
    } else {
      return (
        <>
          <HighlightBold highlightType={highlightType}>
            一時停止 <Emoji>⏸</Emoji>
          </HighlightBold>
        </>
      )
    }
  }
  if (args.name === 'reset') {
    if (locale === 'en') {
      return (
        <>
          <HighlightBold highlightType={highlightType}>
            Reset <Emoji>↩️</Emoji>
          </HighlightBold>
        </>
      )
    } else {
      return (
        <>
          <HighlightBold highlightType={highlightType}>
            リセット <Emoji>↩️</Emoji>
          </HighlightBold>
        </>
      )
    }
  }
  if (args.name === 'previous') {
    if (locale === 'en') {
      return (
        <>
          <HighlightBold highlightType={highlightType}>
            <Emoji>⬅️</Emoji> Previous
          </HighlightBold>
        </>
      )
    } else {
      return (
        <>
          <HighlightBold highlightType={highlightType}>
            <Emoji>⬅️</Emoji> 前へ
          </HighlightBold>
        </>
      )
    }
  }
  if (args.name === 'done') {
    if (locale === 'en') {
      return (
        <>
          <HighlightBold highlightType={highlightType}>
            Done <Emoji>🏁</Emoji>
          </HighlightBold>
        </>
      )
    } else {
      return (
        <>
          <HighlightBold highlightType={highlightType}>
            実行完了! <Emoji>🏁</Emoji>
          </HighlightBold>
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
    if (locale === 'en') {
      return (
        <Highlight>
          {args.capitalize ? 'T' : 't'}
          ry pressing <H args={{ name: 'play' }} />
        </Highlight>
      )
    } else {
      return (
        <Highlight>
          <H args={{ name: 'play' }} /> を押してみてください:
        </Highlight>
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
      return (
        <>
          It’s okay if you have no idea.
          <br />
          Just guess!
        </>
      )
    } else {
      return (
        <>
          分からなくても大丈夫です！
          <br />
          適当に勘で答えてみてください。
        </>
      )
    }
  }
  if (args.name === 'pageUnderConstruction') {
    if (locale === 'en') {
      return (
        <>
          <Bold>Sorry!</Bold> This page is under construction.
        </>
      )
    } else {
      return <>このページは現在工事中です。</>
    }
  }
  if (args.name === 'pageUnderConstructionTitle') {
    if (locale === 'en') {
      return <>Under Construction</>
    } else {
      return <>工事中</>
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
          <Highlight>
            Press <H args={{ name: 'next' }} />:
          </Highlight>
        </>
      )
    } else {
      return (
        <>
          <Highlight>
            <H args={{ name: 'next' }} /> を押してみてください:
          </Highlight>
        </>
      )
    }
  }
  if (args.name === 'pressFastForward') {
    if (locale === 'en') {
      return (
        <>
          <Highlight>
            Press <H args={{ name: 'fastForward' }} />
            {args.mentionRightArrow || args.skippable
              ? '.'
              : args.skipColon
              ? ''
              : args.girl
              ? '!'
              : ':'}
          </Highlight>
          {args.mentionRightArrow && (
            <>
              {' '}
              <H args={{ name: 'mentionRightArrow' }} />
            </>
          )}
          {args.skippable && (
            <>
              {' '}
              <H args={{ name: 'fastForwardSkippableToTheEnd' }} />
            </>
          )}
        </>
      )
    } else {
      return (
        <>
          <Highlight>
            <H args={{ name: 'fastForward' }} /> を押してみて
            {!args.girl && <>ください</>}
            {args.mentionRightArrow || args.skippable
              ? '。'
              : args.skipColon
              ? ''
              : args.girl
              ? '！'
              : ':'}
          </Highlight>
          {args.mentionRightArrow && (
            <>
              <H args={{ name: 'mentionRightArrow' }} />
            </>
          )}
          {args.skippable && (
            <>
              <H args={{ name: 'fastForwardSkippableToTheEnd' }} />
            </>
          )}
        </>
      )
    }
  }
  if (args.name === 'question') {
    if (locale === 'en') {
      return (
        <>
          <Bold>Question:</Bold>
        </>
      )
    } else {
      return (
        <>
          <Bold>質問:</Bold>
        </>
      )
    }
  }
  if (args.name === 'whatHappensAtTheEndQuestion') {
    if (locale === 'en') {
      return (
        <>
          <Bold>Question:</Bold>{' '}
          <Highlight>
            If we <H args={{ name: 'play', lowerCase: true }} /> the above
            lunchbox, will it eventually become the following?
          </Highlight>
        </>
      )
    } else {
      return (
        <>
          <H args={{ name: 'question' }} /> 上の弁当箱を
          <H args={{ name: 'play' }} /> すると、
          <HighlightBold>最終的に下のようになるでしょうか？</HighlightBold>
        </>
      )
    }
  }
  if (args.name === 'lookAtThisBentoBox') {
    if (locale === 'en') {
      return <>{args.lowerCase ? 't' : 'T'}ake a look at this lunchbox</>
    } else {
      return <>こちらの弁当箱をご覧ください</>
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
      return (
        <>
          {args.sentence ? 'I think ' : ''}
          {args.lowerCase || args.sentence ? 'the' : 'The'} answer is{' '}
          {args.isYes ? (
            <H args={{ name: 'yesNoQuizYes' }} />
          ) : (
            <H args={{ name: 'yesNoQuizNo' }} />
          )}
        </>
      )
    } else {
      const childNode = (
        <Fragment>
          正解は <Emoji>{args.isYes ? '⭕️' : '❌'}</Emoji>
        </Fragment>
      )
      if (args.sentence) {
        return (
          <>
            <HighlightBold>{childNode}</HighlightBold>でした。
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
      return (
        <HighlightBold>まだ途中ですが、解説のため一旦止めます！</HighlightBold>
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
      return <>Here’s table of contents:</>
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
          <Highlight>
            上のツイートに<HighlightBold>スクリーンショット付き</HighlightBold>
            で返信
          </Highlight>
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
          quitReason = <Highlight>時間がないからあとで読もう</Highlight>
        } else {
          quitReason = <Highlight>長いのでひと休みしよう</Highlight>
        }

        return (
          <>
            <P>
              <Bold>お願い:</Bold>「{quitReason}
              」とお考えの方にお願いがあります。
            </P>
            <P>
              差し支えなければ、このページを閉じる前に
              <Highlight>
                <HighlightBold>下のツイートをリツイート</HighlightBold>
                してくださると、宣伝になるので非常に助かります。
              </Highlight>
              {episodeNumber > 0 && (
                <>
                  もしくは、「
                  <HighlightBold>
                    <H args={{ name: 'titlePrefixColored' }} />
                    までは読み終えた
                  </HighlightBold>
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
              <HighlightBold>下のツイートを引用リツイートして</HighlightBold>
              ご共有ください。
            </P>
            <TwitterEmbed id={shareId} />
            {question}
            <Hr />
            <P>
              <Bold>
                本稿を読んで、「
                <Highlight>
                  プログラミング未経験者だけど、コンピュータサイエンスを学びたくなった。次は何を読めばいい？
                </Highlight>
                」と思ってくださった方へ:
              </Bold>
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
              <HighlightBold>
                一定数の方がリクエストしてくださったら、続編を書こう
              </HighlightBold>
              かなと思っています。続編を書くとしたら、
              <HighlightBold>人工知能</HighlightBold>
              についてプログラミング抜きに学べる教材を作りたいと考えています。
            </P>
            <EmojiSeparator
              emojis={['🤖', '🧠', '🤖']}
              description={<>続編を書くとしたら人工知能について</>}
            />
            <P>
              続編をリクエストしたい方は、
              <Highlight>
                以下のツイートの引用リツイートで「
                <HighlightBold>続編が読みたい</HighlightBold>
                」と書いてくださると嬉しいです。
              </Highlight>
            </P>
            <TwitterEmbed id={shareId} />
            <Hr />
            <P>
              <Bold>読みやすくする工夫:</Bold>{' '}
              難しい内容の教材でも最後まで読んでもらう工夫についてもまとめました。本稿で多用した工夫ばかりです。よければご覧ください！
            </P>
            <TwitterEmbed id="1172700114630172672" showCard />
            <Hr />
            <P>
              <Bold>宣伝:</Bold> もしご興味があれば、わたしが共訳した書籍『
              <ExternalLink href="https://amzn.to/2QlZIqm">
                <HighlightBold>ファクトフルネス</HighlightBold>
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
  if (args.name === 'dateAndSource') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <>
          <P>
            {args.includeAboutMe && (
              <>
                <Bold>著者:</Bold> 上杉周作 (
                <ExternalLink href="https://jp.chibicode.com">
                  ブログはこちら
                </ExternalLink>
                )
                <br />
              </>
            )}
            <Bold>公開日:</Bold>{' '}
            <time dateTime={dateSchemaString}>{dateString}</time>
            <br />
            <Bold>ソースコード:</Bold>{' '}
            <ExternalLink href={githubRepo}>GitHubで公開中</ExternalLink>
            {args.includeTwitter && (
              <>
                <br />
                <Bold>Twitter:</Bold>{' '}
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
      return <>Some</>
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
      return (
        <>
          <Emoji>🅰️</Emoji>’s
        </>
      )
    } else {
      return <>いくつか</>
    }
  }
  if (args.name === 'BsingleTop') {
    if (locale === 'en') {
      return <>One</>
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
      return (
        <>
          <Emoji>🅱️</Emoji>
        </>
      )
    } else {
      return <>ひとつ</>
    }
  }
  if (args.name === 'mentionRightArrow') {
    if (locale === 'en') {
      return (
        <>
          (Or{' '}
          <Highlight highlightType="pink">
            press <Emoji>➡️</Emoji>
          </Highlight>{' '}
          to step through manually.)
        </>
      )
    } else {
      return (
        <>
          <Highlight highlightType="pink">
            一回ずつ進める場合は、<Emoji>➡️</Emoji> を押してください。
          </Highlight>
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
            下の部分 <InlineBorder type="condition" />
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
            真ん中の部分 <InlineBorder type="trueCase" />
          </>
        )
      }
    }
  }
  if (args.name === 'lookAtThisBentoBoxPuzzle') {
    if (locale === 'en') {
      return (
        <>
          Take a look at this “Lunchbox” puzzle <Emoji>🍱</Emoji>
        </>
      )
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
      return (
        <>
          <Bold>
            <CustomEmoji type="mathBox" /> {args.lowerCase ? 'c' : 'C'}onvert to{' '}
            {args.lowerCase ? 'm' : 'M'}athbox <Emoji>🐶</Emoji>
          </Bold>
        </>
      )
    } else {
      return (
        <Bold>
          <CustomEmoji type="mathBox" /> 計算箱に変換 <Emoji>🐶</Emoji>
        </Bold>
      )
    }
  }
  if (args.name === 'runAndConvertToMathbox') {
    if (locale === 'en') {
      return (
        <>
          <Bold>
            {args.lowerCase ? 'r' : 'R'}un <Emoji>⏭</Emoji>
          </Bold>{' '}
          and{args.addNewline ? <br /> : ' '}
          <H args={{ name: 'convertToMathbox', lowerCase: args.lowerCase }} />
        </>
      )
    } else {
      return (
        <Bold>
          実行してから
          {args.addNewline ? <br /> : ' '}
          <H args={{ name: 'convertToMathbox' }} />
        </Bold>
      )
    }
  }
  if (args.name === 'doneRunAndConvertToMathbox') {
    if (locale === 'en') {
      return (
        <>
          Ran and converted to a mathbox! <Emoji>🏁</Emoji>
        </>
      )
    } else {
      return (
        <HighlightBold highlightType={highlightType}>
          実行と変換完了! <Emoji>🏁</Emoji>
        </HighlightBold>
      )
    }
  }
  if (args.name === 'undoConvertToMathbox') {
    if (locale === 'en') {
      return (
        <Bold>
          <Emoji>🍱</Emoji> Back to Lunchbox <Emoji>↩</Emoji>
        </Bold>
      )
    } else {
      return (
        <Bold>
          <Emoji>🍱</Emoji> 弁当箱に戻す <Emoji>↩</Emoji>
        </Bold>
      )
    }
  }
  if (args.name === 'doneConvertToMathbox') {
    if (locale === 'en') {
      return (
        <>
          <HighlightBold highlightType={highlightType}>
            <CustomEmoji type="mathBox" /> Converted to a Mathbox!{' '}
            <Emoji>🐶</Emoji>
          </HighlightBold>
        </>
      )
    } else {
      return (
        <>
          <HighlightBold highlightType={highlightType}>
            <CustomEmoji type="mathBox" /> 計算箱に変換しました{' '}
            <Emoji>🐶</Emoji>
          </HighlightBold>
        </>
      )
    }
  }
  if (args.name === 'canBeConverted') {
    if (locale === 'en') {
      return <>Lunchbox that can be converted to</>
    } else {
      return <>に変換できる弁当箱</>
    }
  }
  if (args.name === 'plusOneEffect') {
    if (locale === 'en') {
      return (
        <>
          {args.capitalize ? 'T' : 't'}he <Bold>“Plus 1”</Bold> effect{' '}
          <CustomEmoji type="plusOneOrange" />
        </>
      )
    } else {
      return (
        <>
          「<HighlightBold>1を足す効果</HighlightBold>{' '}
          <CustomEmoji type="plusOneOrange" />」
        </>
      )
    }
  }
  if (args.name === 'minusOneEffect') {
    if (locale === 'en') {
      return (
        <>
          {args.capitalize ? 'T' : 't'}he <Bold>Minus 1”</Bold> effect{' '}
          <CustomEmoji type="minusOnePink" />
        </>
      )
    } else {
      return (
        <>
          「<HighlightBold>1を引く効果</HighlightBold>{' '}
          <CustomEmoji type="minusOnePink" />」
        </>
      )
    }
  }
  if (args.name === 'startWithTwoCaption') {
    if (locale === 'en') {
      return (
        <>
          If you can’t start with{' '}
          <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s because
          <br />
          there’s only one item on the bottom row,
          <br />
          start with the pair of{' '}
          <InlinePrioritiesLabel>2</InlinePrioritiesLabel>
          ’s.
        </>
      )
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
      return (
        <>
          If there are multiple pairs of{' '}
          <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s,
          <br />
          start with the leftmost pair.
        </>
      )
    } else {
      return (
        <>
          <InlinePrioritiesLabel>1</InlinePrioritiesLabel>{' '}
          のペアが左右ふたつ以上ある場合は、
          <br />
          一番左の <InlinePrioritiesLabel>1</InlinePrioritiesLabel>{' '}
          のペアからはじめる
        </>
      )
    }
  }
  if (args.name === 'convertiblePatternCaption') {
    if (locale === 'en') {
      return (
        <>
          Let the <Bold>leftmost</Bold> item be <Emoji>🅰️</Emoji> and
          <br />
          the <Bold>middle</Bold> item be <Emoji>🅱️</Emoji>.
          <br />
          There needs to be <Bold>one</Bold> <Emoji>🅱️</Emoji>
          <br />
          on the <Bold>top-right</Bold> and <Bold>some number of</Bold>
          <br />
          <Emoji>🅰️</Emoji>
          ’s on the <Bold>bottom-right</Bold>
        </>
      )
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
  if (args.name === 'convertiblePatternThreeColumnsCaption') {
    if (locale === 'en') {
      return <>It must have three columns</>
    } else {
      return <>横に3列ある弁当箱でなければいけない</>
    }
  }
  if (args.name === 'convertiblePatternFirstCaption') {
    if (locale === 'en') {
      return (
        <>
          Let the <Bold>leftmost</Bold> item be <Emoji>🅰️</Emoji> and
          <br />
          the <Bold>middle</Bold> item be <Emoji>🅱️</Emoji>…
        </>
      )
    } else {
      return (
        <>
          一番左の料理を <Emoji>🅰️</Emoji> 、<br />
          真ん中の料理を <Emoji>🅱️</Emoji> とした場合…
        </>
      )
    }
  }
  if (args.name === 'convertiblePatternSecondCaption') {
    if (locale === 'en') {
      return (
        <>
          There needs to be <Bold>one</Bold> <Emoji>🅱️</Emoji> on the{' '}
          <Bold>top-right</Bold>
          <br />
          and <Bold>some number of</Bold> <Emoji>🅰️</Emoji>
          ’s on the <Bold>bottom-right</Bold>
        </>
      )
    } else {
      return (
        <>
          右上に <Emoji>🅱️</Emoji> がひとつあり、
          <br />
          右下に <Emoji>🅰️</Emoji> がいくつかある
        </>
      )
    }
  }
  if (args.name === 'canBeConvertedCaption') {
    if (locale === 'en') {
      return (
        <>
          <EmojiNumber number={args.number} />{' '}
          <EmojiForLetter letter={args.letter} />
          ’s with <Emoji>🅰️</Emoji> on the bottom-right
          <br />
          → Can be converted to <EmojiNumber number={args.number} />
        </>
      )
    } else {
      return (
        <>
          右下には <Emoji>🅰️</Emoji> がついた{' '}
          <EmojiForLetter letter={args.letter} /> が「
          <HighlightBold>{args.number}個</HighlightBold>」
          <br />
          → 計算箱に変換すると <EmojiNumber number={args.number} /> になる
        </>
      )
    }
  }
  if (args.name === 'skipToTheEnd') {
    if (locale === 'en') {
      return <>Skip to the end</>
    } else {
      return <>最後までスキップ</>
    }
  }
  if (args.name === 'skipToTheStoppingPoint') {
    if (locale === 'en') {
      return <>Skip to the next stopping point</>
    } else {
      return <>途中までスキップ</>
    }
  }
  if (args.name === 'fastForwardSkippableToTheEnd') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <Highlight highlightType="pink">
          最後までスキップすることも可能です。
        </Highlight>
      )
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
  if (args.name === 'testimonialsTitle') {
    if (locale === 'en') {
      return <>Testimonials</>
    } else {
      return <>読者の声 (抜粋)</>
    }
  }
  if (args.name === 'testimonialsContent') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <>
          <P>みなさまコメントありがとうございます！</P>
          {testimonials.map(id => (
            <TwitterEmbed id={id} key={id} />
          ))}
          <P>
            「読んでみたいかも」と思ってくださった方は、下のボタンを押してみてください！
          </P>
        </>
      )
    }
  }
  if (args.name === 'goToOtherPage') {
    if (locale === 'en') {
      return <>Looking for some other page?</>
    } else {
      return <>他のページをお探しですか？</>
    }
  }
  if (args.name === 'plusOneFeature') {
    if (locale === 'en') {
      return (
        <>
          {args.capitalize ? 'T' : 't'}he <Bold>“Plus 1”</Bold> feature{' '}
          <CustomEmoji type="plusOne" />
        </>
      )
    } else {
      return (
        <>
          <HighlightBold>1を足す機能</HighlightBold>{' '}
          <CustomEmoji type="plusOne" />
        </>
      )
    }
  }
  if (args.name === 'minusOneFeature') {
    if (locale === 'en') {
      return (
        <>
          {args.capitalize ? 'T' : 't'}he <Bold>“Minus 1”</Bold> feature{' '}
          <CustomEmoji type="minusOne" />
        </>
      )
    } else {
      return (
        <>
          <HighlightBold>1を引く機能</HighlightBold>{' '}
          <CustomEmoji type="minusOne" />
        </>
      )
    }
  }
  if (args.name === 'repeatFeature') {
    if (locale === 'en') {
      return (
        <>
          {args.capitalize ? 'T' : 't'}he <Bold>“Repeat”</Bold> feature{' '}
          <Emoji>🔁</Emoji>
        </>
      )
    } else {
      return (
        <>
          <HighlightBold>繰り返しの機能</HighlightBold> <Emoji>🔁</Emoji>
        </>
      )
    }
  }
  if (args.name === 'conditionFeature') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <>
          <HighlightBold>条件分岐の機能</HighlightBold>{' '}
          <CustomEmoji type="condition" />
        </>
      )
    }
  }
  if (args.name === 'demoTitle') {
    if (locale === 'en') {
      return <>Demo Page</>
    } else {
      return <>デモページ</>
    }
  }
  if (args.name === 'whatTheNumberIsCaption') {
    if (locale === 'en') {
      return (
        <>
          The number of <Emoji>🅰️</Emoji>’s on the <Bold>bottom-right</Bold>
          <br />
          is the number after conversion
        </>
      )
    } else {
      return (
        <>
          右下にある <Emoji>🅰️</Emoji> がついた料理の数が、
          <br />
          変換後の計算箱の数字
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
