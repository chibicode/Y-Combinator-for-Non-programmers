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
  Italic,
  Ul,
  UlLi
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
import { colors, fontSizes } from 'src/lib/theme'
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
import { githubRepo, jpBaseUrl, enBaseUrl } from 'src/lib/meta'
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
    | { name: 'yesNoQuiz'; postfix?: string; lowerCase?: true }
    | { name: 'yesNoQuizCorrect' }
    | { name: 'yesNoQuizIncorrect' }
    | { name: 'yesNoQuizYes'; hideText?: boolean }
    | { name: 'yesNoQuizNo'; hideText?: boolean }
    | { name: 'yesNoQuizCorrectPostfix' }
    | { name: 'yesNoQuizIncorrectPostfix'; isYes: boolean }
    | {
        name: 'lunchBoxPuzzle'
        capitalize?: true
        indefinite?: true
        postfix?: string
      }
    | { name: 'next' }
    | { name: 'run'; lowerCase?: true }
    | { name: 'running' }
    | { name: 'pause' }
    | { name: 'reset' }
    | { name: 'previous' }
    | { name: 'done' }
    | { name: 'match' }
    | { name: 'unmatch' }
    | { name: 'nextButtonNextPagePrimaryText' }
    | { name: 'nextButtonSecondaryText'; nextEpisodeNumber: number }
    | { name: 'deprecatedPressRun'; capitalize?: true }
    | { name: 'indexPageLink' }
    | { name: 'titlePrefix' }
    | { name: 'titlePrefixColored'; addColon?: boolean }
    | { name: 'titleWithPrefixColored' }
    | { name: 'newUser' }
    | { name: 'titleSplit' }
    | { name: 'toc' }
    | { name: 'tocClose' }
    | { name: 'yesNoQuizDontWorry' }
    | { name: 'question' }
    | { name: 'whatHappensAtTheEndQuestion' }
    | { name: 'lookAtThisLunchBox'; lowerCase?: true }
    | {
        name: 'pressRun'
        skipColon?: boolean
        mentionRightArrow?: boolean
        girl?: boolean
        skippable?: boolean
        skippableToTheStoppingPoint?: boolean
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
        text?: React.ReactNode
      }
    | { name: 'stoppedForExplanation' }
    | { name: 'pageNotFound' }
    | { name: 'lookAtToc' }
    | { name: 'mentionRightArrow' }
    | {
        name: 'conditionSectionName'
        type: 'condition' | 'trueCase' | 'falseCase'
        capitalize?: true
      }
    | { name: 'lookAtThisLunchBoxPuzzle' }
    | { name: 'convertToMathbox'; lowerCase?: true }
    | { name: 'undoConvertToMathbox' }
    | { name: 'doneConvertToMathbox' }
    | { name: 'convertToChurchNumeral'; lowerCase?: true }
    | { name: 'undoConvertToChurchNumeral' }
    | { name: 'doneConvertToChurchNumeral' }
    | { name: 'canBeConverted'; emojiPuzzle?: true }
    | { name: 'plusOneFeature'; capitalize?: true }
    | { name: 'minusOneFeature'; capitalize?: true; addNewline?: true }
    | { name: 'repeatFeature'; capitalize?: true; addNewline?: true }
    | {
        name: 'conditionFeature'
        capitalize?: true
        addNewline?: true
        hideIcon?: true
      }
    | { name: 'startWithTwoCaption' }
    | { name: 'startWithLeftMostOneCaption' }
    | { name: 'convertiblePatternCaption'; skipFirst?: true }
    | { name: 'convertiblePatternThreeColumnsCaption' }
    | { name: 'convertiblePatternFirstCaption' }
    | { name: 'convertiblePatternSecondCaption' }
    | { name: 'canBeConvertedCaption'; letter: VariableNames; number: number }
    | { name: 'skipToTheEnd' }
    | { name: 'skipToTheStoppingPoint' }
    | { name: 'runSkippableToTheEnd' }
    | { name: 'runSkippableToTheStoppingPoint' }
    | { name: 'slide' }
    | { name: 'testimonialsTitle' }
    | { name: 'testimonialsContent' }
    | { name: 'goToOtherPage' }
    | { name: 'whatTheNumberIsCaption' }
    | { name: 'runAndShowAllSteps' }
    | { name: 'ignoreForNow' }
    | { name: 'aboutMe'; hideNextPageButton?: boolean }
    | { name: 'pointToRunButton' }
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
        {args.text || episodePrefixes[args.category]}
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
      return (
        <>
          Y Combinator for
          <br />
          Non-programmers
        </>
      )
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
        <>
          <Bold>Hello!</Bold> This is <Italic>page {episodeNumber + 1}</Italic>{' '}
          of the course called “
          <InternalLink href={'/'}>{lessonTitle}</InternalLink>
          ”. If you just got here,{' '}
          <InternalLink href={'/'}>
            <Bold>click here to read from the beginning</Bold>
          </InternalLink>
          .
        </>
      )
    } else {
      return (
        <>
          <Bold>こんにちは！</Bold>このページは「
          <InternalLink href={'/'}>{lessonTitle}</InternalLink>
          」という記事の{episodeNumber + 1}ページ目です。1ページ目から読むには
          <InternalLink href={'/'}>
            <Bold>こちらからどうぞ</Bold>
          </InternalLink>
          。
        </>
      )
    }
  }
  if (args.name === 'yesNoQuiz') {
    if (locale === 'en') {
      return (
        <>
          <Emoji>👍</Emoji> Yes / <Emoji>👎</Emoji> No{' '}
          {args.lowerCase ? 'q' : 'Q'}uiz{args.postfix}
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
  if (args.name === 'lunchBoxPuzzle') {
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
  if (args.name === 'run') {
    if (locale === 'en') {
      return (
        <>
          <HighlightBold highlightType={highlightType}>
            {args.lowerCase ? 'r' : 'R'}un <Emoji>▶️</Emoji>
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
  if (args.name === 'runAndShowAllSteps') {
    if (locale === 'en') {
      return (
        <>
          <HighlightBold highlightType={highlightType}>
            <span
              css={css`
                display: block;
              `}
            >
              Run <Emoji>▶️</Emoji>
            </span>
            <span
              css={css`
                font-size: ${fontSizes(0.7)};
                display: block;
              `}
            >
              (Show every step)
            </span>
          </HighlightBold>
        </>
      )
    } else {
      return (
        <>
          <HighlightBold highlightType={highlightType}>
            <span
              css={css`
                display: block;
              `}
            >
              実行 <Emoji>▶️</Emoji>
            </span>
            <span
              css={css`
                font-size: ${fontSizes(0.7)};
                display: block;
              `}
            >
              (全ステップを表示)
            </span>
          </HighlightBold>
        </>
      )
    }
  }
  if (args.name === 'running') {
    if (locale === 'en') {
      return (
        <>
          <HighlightBold highlightType={highlightType}>
            Running… <Emoji>▶️</Emoji>
          </HighlightBold>
        </>
      )
    } else {
      return (
        <>
          <HighlightBold highlightType={highlightType}>
            実行中… <Emoji>▶️</Emoji>
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
  if (args.name === 'deprecatedPressRun') {
    if (locale === 'en') {
      return (
        <Highlight>
          {args.capitalize ? 'T' : 't'}
          ry pressing <H args={{ name: 'run' }} />
        </Highlight>
      )
    } else {
      return (
        <Highlight>
          <H args={{ name: 'run' }} /> を押してみてください:
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
  if (args.name === 'pressRun') {
    if (locale === 'en') {
      return (
        <>
          <Highlight>
            Press <H args={{ name: 'run' }} />
            {args.mentionRightArrow ||
            args.skippable ||
            args.skippableToTheStoppingPoint
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
              <H args={{ name: 'runSkippableToTheEnd' }} />
            </>
          )}
          {args.skippableToTheStoppingPoint && (
            <>
              {' '}
              <H args={{ name: 'runSkippableToTheStoppingPoint' }} />
            </>
          )}
        </>
      )
    } else {
      return (
        <>
          <Highlight>
            <H args={{ name: 'run' }} /> を押してみて
            {!args.girl && <>ください</>}
            {args.mentionRightArrow ||
            args.skippable ||
            args.skippableToTheStoppingPoint
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
              <H args={{ name: 'runSkippableToTheEnd' }} />
            </>
          )}
          {args.skippableToTheStoppingPoint && (
            <>
              <H args={{ name: 'runSkippableToTheStoppingPoint' }} />
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
            If we <H args={{ name: 'run', lowerCase: true }} /> the above
            lunchbox, will it eventually become the following?
          </Highlight>
        </>
      )
    } else {
      return (
        <>
          <H args={{ name: 'question' }} /> 上の弁当箱を
          <H args={{ name: 'run' }} /> すると、
          <HighlightBold>最終的に下のようになるでしょうか？</HighlightBold>
        </>
      )
    }
  }
  if (args.name === 'lookAtThisLunchBox') {
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
      return (
        <>
          <Highlight highlightType="pink">
            <Bold
              css={css`
                font-size: ${fontSizes(1)};
              `}
            >
              We’re not done yet:
            </Bold>
            <br />
            Just pausing here for an explanation.
          </Highlight>
        </>
      )
    } else {
      return (
        <Highlight highlightType="pink">
          <Bold
            css={css`
              font-size: ${fontSizes(1)};
            `}
          >
            まだ途中ですが、
            <br />
            解説のため一旦止めます！
          </Bold>
        </Highlight>
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
      return <>Table of contents:</>
    } else {
      return <>目次はこちらです:</>
    }
  }
  if (args.name === 'shareContent') {
    if (locale === 'en') {
      const question = (
        <>
          <P>
            <Bold>If you have a question or a comment:</Bold> Please reply to
            the above tweet with a screenshot, or email me at{' '}
            <ExternalLink href="mailto:shu@chibicode.com">
              shu@chibicode.com
            </ExternalLink>
            . You can also{' '}
            <ExternalLink href="https://news.ycombinator.com/item?id=21399025">
              discuss this on <Highlight>Hacker News</Highlight>
            </ExternalLink>
            .
          </P>
          <P>
            <Bold>If you’re a programmer:</Bold>
          </P>
          <Ul>
            <UlLi>
              You should also check out this article of mine: “
              <InternalLink href="/functional-programming-emojis">
                <Highlight>
                  You Can Explain Functional Programming Using Emojis
                </Highlight>
              </InternalLink>
              ”.
            </UlLi>
            <UlLi>
              This course is built using TypeScript and React.{' '}
              <ExternalLink href={githubRepo}>
                Check out the source on GitHub
              </ExternalLink>
              .
            </UlLi>
          </Ul>
          <Hr />
        </>
      )

      if (episodeNumber <= numEpisodesExceptFirstAndLast) {
        return (
          <>
            <P>
              <Bold>Before you go:</Bold> I’d really appreciate it if you could{' '}
              <Highlight>
                retweet the following tweet before closing this page.
              </Highlight>{' '}
              <Emoji>😉</Emoji>
            </P>
            <TwitterEmbed id={shareId} />
            {question}
            <P>
              <Bold>To keep reading this course:</Bold> Press the button below!
            </P>
          </>
        )
      } else {
        return (
          <>
            <P>
              <Bold>Thank you for reading!</Bold> I’d appreciate it if you could{' '}
              <Highlight>
                share your thoughts by quote-retweeting the following tweet
              </Highlight>
              :
            </P>
            <TwitterEmbed id={shareId} />
            {question}
            <P>Once again, thank you for reading! </P>
          </>
        )
      }
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
              <ExternalLink href="https://www.amazon.co.jp/dp/4822289605/ref=cm_sw_em_r_mt_dp_U_h20QDbG5PNQK4">
                <HighlightBold>ファクトフルネス</HighlightBold>
              </ExternalLink>
              』や、
              <ExternalLink href="https://jp.chibicode.com/">
                わたしのブログ
              </ExternalLink>
              もご覧ください。
            </P>
            <P>
              <ExternalLink href="https://www.amazon.co.jp/dp/4822289605/ref=cm_sw_em_r_mt_dp_U_h20QDbG5PNQK4">
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
      if (episodeNumber === 0) {
        return <>If you decide to read later…</>
      } else if (episodeNumber <= numEpisodesExceptFirstAndLast) {
        return (
          <>
            <Emoji>😴</Emoji> Before you take a break… <Emoji>😴</Emoji>
          </>
        )
      } else {
        return <>Thank you for reading!</>
      }
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
      return (
        <>
          <P>
            {args.includeAboutMe && (
              <>
                <Bold>Author:</Bold> <HighlightBold>Shu Uesugi</HighlightBold> (
                <ExternalLink href="https://twitter.com/chibicode">
                  Twitter: @chibicode
                </ExternalLink>
                )
                <br />
              </>
            )}
            <Bold>Published on:</Bold>{' '}
            <time dateTime={dateSchemaString}>{dateString}</time>
            <br />
            <Bold>Source code:</Bold>{' '}
            <ExternalLink href={githubRepo}>Available on GitHub</ExternalLink>
            <br />
            <Bold>Japanese translation:</Bold>{' '}
            <ExternalLink href={jpBaseUrl}>日本語版はこちら</ExternalLink>
          </P>
        </>
      )
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
            <br />
            <Bold>英語版:</Bold>{' '}
            <ExternalLink href={enBaseUrl}>英語版はこちら</ExternalLink>
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
            手動で進める場合は、<Emoji>➡️</Emoji> を押してください。
          </Highlight>
        </>
      )
    }
  }
  if (args.name === 'conditionSectionName') {
    if (locale === 'en') {
      if (args.type === 'condition') {
        return (
          <>
            {args.capitalize ? 'T' : 't'}he <Bold>bottom</Bold> section{' '}
            <InlineBorder type="condition" />
          </>
        )
      } else if (args.type === 'falseCase') {
        return (
          <>
            {args.capitalize ? 'T' : 't'}he <Bold>top</Bold> section{' '}
            <InlineBorder type="falseCase" />
          </>
        )
      } else {
        return (
          <>
            {args.capitalize ? 'T' : 't'}he <Bold>middle</Bold> section{' '}
            <InlineBorder type="trueCase" />
          </>
        )
      }
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
  if (args.name === 'lookAtThisLunchBoxPuzzle') {
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
          <H args={{ name: 'lunchBoxPuzzle' }} />
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
  if (args.name === 'convertToChurchNumeral') {
    if (locale === 'en') {
      return (
        <>
          <Bold>{args.lowerCase ? 'c' : 'C'}onvert to a Number</Bold>
        </>
      )
    } else {
      return <></>
    }
  }
  if (args.name === 'undoConvertToChurchNumeral') {
    if (locale === 'en') {
      return (
        <Bold>
          Reset <Emoji>↩</Emoji>
        </Bold>
      )
    } else {
      return <></>
    }
  }
  if (args.name === 'doneConvertToChurchNumeral') {
    if (locale === 'en') {
      return (
        <>
          <HighlightBold highlightType={highlightType}>
            Converted to a number!
          </HighlightBold>
        </>
      )
    } else {
      return <></>
    }
  }
  if (args.name === 'canBeConverted') {
    if (locale === 'en') {
      return (
        <>
          {args.emojiPuzzle ? 'Emoji puzzle' : 'Lunchbox'} that can be converted
          to
        </>
      )
    } else {
      return <>に変換できる弁当箱</>
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
          {!args.skipFirst && (
            <>
              Let the <Bold>leftmost</Bold> item be <Emoji>🅰️</Emoji> and
              <br />
              the <Bold>middle</Bold> item be <Emoji>🅱️</Emoji>.
              <br />
            </>
          )}
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
  if (args.name === 'runSkippableToTheEnd') {
    if (locale === 'en') {
      return (
        <Highlight highlightType="pink">
          You can also <Bold>skip to the end</Bold>.
        </Highlight>
      )
    } else {
      return (
        <Highlight highlightType="pink">
          <Bold>最後までスキップ</Bold>することも可能です。
        </Highlight>
      )
    }
  }
  if (args.name === 'runSkippableToTheStoppingPoint') {
    if (locale === 'en') {
      return (
        <Highlight highlightType="pink">
          You can also <Bold>skip to the next stopping point.</Bold>
        </Highlight>
      )
    } else {
      return (
        <Highlight highlightType="pink">
          <Bold>途中までスキップ</Bold>することも可能です。
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
      return (
        <>
          <P>Here are some of the readers’ comments:</P>
          {testimonials.map(id => (
            <TwitterEmbed id={id} key={id} />
          ))}
          <P>Press the button below to continue to the course!</P>
        </>
      )
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
          {args.capitalize ? 'T' : 't'}he <Bold>“Minus 1”</Bold>
          {args.addNewline ? <br /> : ' '}feature{' '}
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
          {args.capitalize ? 'T' : 't'}he <Bold>“Repeat”</Bold>
          {args.addNewline ? <br /> : ' '}feature <Emoji>🔁</Emoji>
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
      return (
        <>
          {args.capitalize ? 'T' : 't'}he <Bold>“Conditional”</Bold>
          {args.addNewline ? <br /> : ' '}feature
          {!args.hideIcon && (
            <>
              {' '}
              <CustomEmoji type="condition" />
            </>
          )}
        </>
      )
    } else {
      return (
        <>
          <HighlightBold>条件分岐の機能</HighlightBold>{' '}
          <CustomEmoji type="condition" />
        </>
      )
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
  if (args.name === 'ignoreForNow') {
    if (locale === 'en') {
      return (
        <>
          Ignore
          <br />
          for Now
        </>
      )
    } else {
      return (
        <>
          一時的に
          <br />
          省略
        </>
      )
    }
  }
  if (args.name === 'pointToRunButton') {
    if (locale === 'en') {
      return <>Press this button!</>
    } else {
      return <>押してみてください！</>
    }
  }
  if (args.name === 'aboutMe') {
    if (locale === 'en') {
      return (
        <>
          <P>
            <Emoji>👨🏻‍💻</Emoji> <Bold>About me:</Bold> I’m <Bold>Shu Uesugi</Bold>
            , a full-stack developer based in San Francisco Bay Area, USA.
          </P>
        </>
      )
    } else {
      return <></>
    }
  }
  throw new Error()
}

H.defaultProps = {
  highlightType: 'none'
}

export default H
