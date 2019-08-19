/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Fragment } from 'react'
import InlineEmojiBoxes, {
  InlineEmojiBoxesForQuestion
} from 'src/components/InlineEmojiBoxes'
import InlineBorder from 'src/components/InlineBorder'
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
import { colors, fontSizes } from 'src/lib/theme'
import {
  episodeCategory,
  numEpisodesExceptFirstAndLast
} from 'src/lib/episodeCategories'
import EmojiForLetter from 'src/components/EmojiForLetter'
import EmojiWithText from 'src/components/EmojiWithText'
import EmojiNumber from 'src/components/EmojiNumber'
import EmojiSeparator from 'src/components/EmojiSeparator'
import BottomRightBadge from 'src/components/BottomRightBadge'
import TwitterEmbed from 'src/components/TwitterEmbed'
import { shareId } from 'src/lib/twitter'
import { magicalVariableName } from 'src/lib/specialVariableNames'
import { dateString, dateSchemaString } from 'src/lib/date'
import { githubRepo } from 'src/lib/meta'
import letterEmojiMapping from 'src/lib/letterEmojiMapping'
import { HProps } from 'src/types/HTypes'
import CustomEmoji from 'src/components/CustomEmoji'
import InlinePrioritiesLabel from 'src/components/InlinePrioritiesLabel'

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
            を押してみてください
            {args.pleaseWait ||
            args.skippingSteps ||
            args.isFaster ||
            args.mentionRightArrow
              ? '。'
              : args.skipColon
              ? ''
              : ':'}
          </Em>
          {args.pleaseWait && <H args={{ name: 'itWillTakeTime' }} />}
          {args.skippingSteps && <H args={{ name: 'skippingSteps' }} />}
          {args.isFaster && <H args={{ name: 'isFaster' }} />}
          {args.mentionRightArrow && <H args={{ name: 'mentionRightArrow' }} />}
        </>
      )
    }
  }
  if (args.name === 'isFaster') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <>
          <Em highlightType="pink">
            時間短縮のため、いつもの
            <InlineHeader>倍速以上</InlineHeader>
            で進みますので、目に優しく半透明にしています。
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
            の弁当箱が残る
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
  if (args.name === 'lookAtThisMathBox') {
    if (locale === 'en') {
      return <>…</>
    } else {
      return <>こちらの計算箱をご覧ください</>
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
          {Array.isArray(args.ifZero) ? (
            <InlineEmojiBoxes
              emojis={args.ifZero.map(x => letterEmojiMapping[x])}
            />
          ) : (
            <EmojiForLetter letter={args.ifZero} size="mdlg" />
          )}
          、
          <Strong>
            <span css={slightlyLargeCaptionCss}>1</span>以上
          </Strong>
          なら
          {Array.isArray(args.ifNonZero) ? (
            <InlineEmojiBoxes
              emojis={args.ifNonZero.map(x => letterEmojiMapping[x])}
            />
          ) : (
            <EmojiForLetter letter={args.ifNonZero} size="mdlg" />
          )}
          に
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
      return <>当サイトについて</>
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
      return <>エピローグ</>
    }
  }
  if (args.name === 'stoppedForExplanation') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return <Strong>まだ途中ですが、解説のため一旦止めます！</Strong>
    }
  }
  if (args.name === 'isCallArgAndFuncUnboundTheSameCaption') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <>
          {args.same ? (
            <Strong>
              <BottomRightBadge inline bottomRightBadgeType="callArg" />と
              <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
              に同じ料理があります
            </Strong>
          ) : (
            <Strong>
              <BottomRightBadge inline bottomRightBadgeType="callArg" />と
              <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
              に同じ料理がありません
            </Strong>
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
              の弁当箱を入れて実行した場合、最後に
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
              の弁当箱を入れて実行した場合、最後に
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
          <H args={{ name: 'inlineFactorial', start: args.start }} />
          が計算できる？
        </>
      )
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
              お疲れ様でした！本稿に対するご意見・ご感想を、下のツイートの引用リツイートで共有してくださるととても嬉しいです。
            </P>
            <TwitterEmbed id={shareId} />
            <P>
              もしも「
              <Em>
                <H args={{ name: 'computerScience' }} />
                の他の題材も、本稿のようにパズルで学んでみたい
              </Em>
              」とお考えの方がいらっしゃいましたら、ツイートで教えてくださると嬉しいです。
            </P>
            {question}
            <Hr />
            <P>
              <InlineHeader>その他の著作:</InlineHeader>{' '}
              もしご興味があれば、わたしが共訳した書籍『
              <ExternalLink href="https://amzn.to/2QlZIqm">
                <Strong>ファクトフルネス</Strong>
              </ExternalLink>
              』や、わたしの
              <ExternalLink href="https://jp.chibicode.com/">
                ブログ
              </ExternalLink>
              もぜひご覧ください。
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
  if (args.name === 'ycChangedCaption') {
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
          その下に同じ弁当箱がふたつ(省略)、
          <br />
          <Em highlightType="blue">
            その下に<Emoji>✖️</Emoji>
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
  if (args.name === 'itWillTakeTime') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <>
          <Em highlightType="pink">
            少し時間がかかりますが、お待ちいただけると嬉しいです！
          </Em>
        </>
      )
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
  if (args.name === 'skippingSteps') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <>
          <Em highlightType="pink">
            時間短縮のため、早送り中は多くのステップを省略しています。
          </Em>
        </>
      )
    }
  }
  if (args.name === 'inlineFactorial') {
    return (
      <>
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
        <EmojiNumber number={3} /> <Emoji>✖️</Emoji> <EmojiNumber number={2} />{' '}
        <Emoji>✖️</Emoji> <EmojiNumber number={1} />
      </>
    )
  }
  if (args.name === 'factorialDefinition') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <>
          「
          <Strong>
            ある数からはじめて、1を引いた数を掛けていき、最後に「1」を掛けるまで、掛け算を繰り返す
          </Strong>
          」
        </>
      )
    }
  }
  if (args.name === 'factorialComputation') {
    if (args.start === 5) {
      return (
        <Strong>
          5 ✕ 4 ✕ 3 ✕ 2 ✕ 1 = <EmojiNumber number={120} />
        </Strong>
      )
    } else if (args.start === 4) {
      return (
        <Strong>
          4 ✕ 3 ✕ 2 ✕ 1 = <EmojiNumber number={24} />
        </Strong>
      )
    } else {
      return (
        <Strong>
          3 ✕ 2 ✕ 1 = <EmojiNumber number={6} />
        </Strong>
      )
    }
  }
  if (args.name === 'changedToPowerCaption') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <>
          上の
          <EmojiNumber number={2} />
          は以前は
          <EmojiWithText letter={magicalVariableName} />
          、下の
          <EmojiNumber number={2} />
          は以前は
          <EmojiNumber number={1} />
          でした。
        </>
      )
    }
  }
  if (args.name === 'powerComputation') {
    if (args.power === 4) {
      return (
        <Strong>
          2 ✕ 2 ✕ 2 ✕ 2 = <EmojiNumber number={16} />
        </Strong>
      )
    } else {
      return (
        <Strong>
          2 ✕ 2 ✕ 2 = <EmojiNumber number={8} />
        </Strong>
      )
    }
  }
  if (args.name === 'thisIsYCombinatorCaption') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <>
          これ{args.too ? 'も' : 'が'}
          <Strong css={slightlyLargeCaptionCss}>
            「<H args={{ name: 'yCombinator' }} />」
          </Strong>
          です
        </>
      )
    }
  }
  if (args.name === 'csDescriptionPreface') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <>
          <Em>
            <H args={{ name: 'computerScience' }} />
            とは、非常に単純化して言うと「ソフトウェア開発や、コンピュータによる情報処理の根幹となる学問」です。
          </Em>
        </>
      )
    }
  }
  if (args.name === 'csDescription') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <>
          <P>
            ちなみに、ここで言う
            <Em>ソフトウェア</Em>
            とは、アプリ・ウェブサービス・ゲーム・AI・組み込みシステムやITシステム・仮想通貨など、「
            <Em>コンピュータプログラムによって機能するもの</Em>
            」の総称です。
          </P>
          <P>
            身近なものでいえば、
            <Emoji>🔎</Emoji> グーグルなどの検索エンジン、
            <Emoji>🗺</Emoji> 地図アプリのナビ機能、<Emoji>📷</Emoji>{' '}
            カメラアプリの顔認識機能には、コンピュータサイエンスの研究結果が応用されています。
          </P>
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
          </P>
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
  if (args.name === 'numberOfAIsSecretCodeCaption') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <>
          右下の<Emoji>🅰️</Emoji>の数が暗号
        </>
      )
    }
  }
  if (args.name === 'mentionRightArrow') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <>
          <Em highlightType="pink">
            一回ずつ進める場合は、<Emoji>➡️</Emoji>を押してください。
          </Em>
        </>
      )
    }
  }
  if (args.name === 'addMathBoxCaption') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <>
          <Emoji>➕</Emoji> 足し算の計算箱 <Emoji>🎁</Emoji>
        </>
      )
    }
  }
  if (args.name === 'remainder') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return <>割ったときの余り</>
    }
  }
  if (args.name === 'conditionalMathBoxCaption') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <>
          <Emoji>↕️</Emoji> 条件分岐の計算箱 <Emoji>🎁</Emoji>
        </>
      )
    }
  }
  if (args.name === 'whatHappensAtTheEndMathBoxQuestion') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <>
          <H args={{ name: 'question' }} /> 上の計算箱を
          <H args={{ name: 'play' }} />
          すると、<Strong>最終的に下のようになるでしょうか？</Strong>{' '}
          <Emoji>🤔</Emoji>
        </>
      )
    }
  }
  if (args.name === 'isLeapYearCaption') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <>
          うるう年なら結果は <EmojiNumber number={0} /> になる
        </>
      )
    }
  }
  if (args.name === 'leapYearConditionalCaption') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return <>うるう年の場合はこうなる</>
    }
  }
  if (args.name === 'yellowHighlighted') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <>
          (<Em>黄色</Em>
          で示しています)
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
  if (args.name === 'repeatingMathBoxCaption') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <>
          <CustomEmoji type="blankNumber" /> 繰り返しの計算箱 <Emoji>🎁</Emoji>
        </>
      )
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
  if (args.name === 'convert') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <InlineHeader>
          {args.type === 'toBentoBox' ? (
            <>
              <Emoji>🍱</Emoji> 弁当箱
            </>
          ) : (
            <>
              <Emoji>🎁</Emoji> 計算箱
            </>
          )}
          に変換 <Emoji>🐶</Emoji>
        </InlineHeader>
      )
    }
  }
  if (args.name === 'runAndConertToMathbox') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <InlineHeader>
          実行してから
          {args.addNewline && <br />}
          <H args={{ name: 'convert', type: 'toMathBox' }} />
        </InlineHeader>
      )
    }
  }
  if (args.name === 'doneRunAndConertToMathbox') {
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
  if (args.name === 'undoConvert') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <InlineHeader>
          {args.type === 'toBentoBox' ? (
            <>
              <Emoji>🎁</Emoji> 計算箱
            </>
          ) : (
            <>
              <Emoji>🍱</Emoji> 弁当箱
            </>
          )}
          に戻す <Emoji>↩</Emoji>
        </InlineHeader>
      )
    }
  }
  if (args.name === 'doneConvert') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <>
          <Strong highlightType={highlightType}>
            {args.type === 'toBentoBox' ? (
              <>
                <Emoji>🍱</Emoji> 弁当箱
              </>
            ) : (
              <>
                <Emoji>🎁</Emoji> 計算箱
              </>
            )}
            に変換しました <Emoji>🐶</Emoji>
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
  if (args.name === 'sameAddRole') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <>
          同じ「<Strong>1を足す</Strong>」効果
        </>
      )
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
  if (args.name === 'startWithTwoCaption') {
    if (locale === 'en') {
      return <>?</>
    } else {
      return (
        <>
          下段にひとつの料理しかなく、
          <br />
          <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
          のペアからはじめられない場合、
          <br />
          <InlinePrioritiesLabel>2</InlinePrioritiesLabel>のペアからはじめる
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
          <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
          のペアがふたつ以上ある場合は、
          <br />
          一番左の<InlinePrioritiesLabel>1</InlinePrioritiesLabel>
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
          一番左の料理を<Emoji>🅰️</Emoji>、<br />
          真ん中の料理を<Emoji>🅱️</Emoji>とした場合、
          <br />
          右上に<Emoji>🅱️</Emoji>がひとつあり、
          <br />
          右下に<Emoji>🅰️</Emoji>
          がいくつかある
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
