import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { Hr, P, Em, Strong, InlineHeader } from 'src/components/ContentTags'
import H from 'src/components/H'
import AER from 'src/components/Yc/AER'
import { InlineEmojiBoxesForQuestion } from 'src/components/Yc/InlineEmojiBoxes'
import YesNoButtons from 'src/components/YesNoButtons'
import EmojiSeparator from 'src/components/EmojiSeparator'
import Emoji from 'src/components/Emoji'
import BottomRightBadge from 'src/components/Yc/BottomRightBadge'
import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
import EmojiWithText from 'src/components/EmojiWithText'
import EmojiForLetter from 'src/components/EmojiForLetter'
import EmojiForLetterWithBottomRightBadgeWrapper from 'src/components/EmojiForLetterWithBottomRightBadgeWrapper'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>暗号の復習</>,
        content: (
          <>
            <P>
              中級で話した「
              <Strong>
                <H args={{ name: 'bentoBox', short: true }} />
                の暗号
              </Strong>
              」について忘れてしまった方もいるかもしれないので、復習としてここに法則をもう一度書いておきますね。
            </P>
            <Hr />
            <H args={{ name: 'secretCodeReview', example: AER.eozk }} />
          </>
        )
      },
      {
        title: (
          <>
            1を足す
            <H args={{ name: 'bentoBox', short: true }} />
          </>
        ),
        content: (
          <>
            <EmojiSeparator
              nodes={[
                <InlineEmojiBoxesForQuestion size="md" />,
                <Emoji>➕</Emoji>,
                <Emoji>1️⃣</Emoji>
              ]}
            />
            <P>
              以前紹介した、「
              <Strong>
                <InlineEmojiBoxesForQuestion />
                の暗号に1を足す
                <H args={{ name: 'bentoBox', short: true }} />
              </Strong>
              」をご覧ください。
            </P>
            {AER.xgei}
            <P>
              そしてこちらに、暗号が「<Strong>1</Strong>」の
              <H args={{ name: 'bentoBox', short: true }} />
              を用意しました。
            </P>
            {AER.slyk}
            <P>
              これを
              <InlineEmojiBoxesForQuestion />
              に埋め込んで、
              <H args={{ name: 'fastForward' }} />
              してみましょう。
            </P>
            {AER.eemn}
            <P>
              最終的に暗号が「<Strong>2</Strong>」の
              <H args={{ name: 'bentoBox', short: true }} />
              が残りました。
            </P>
            {AER.rceu}
            <P>
              以前話した通り、「<Strong>1 + 1 = 2</Strong>
              」が計算できたわけですね。
            </P>
            <EmojiSeparator emojis={['1️⃣', '➕', '1️⃣']} />
            <P>
              では、ここでまた
              <H args={{ name: 'yesNoQuiz' }} />
              をしてみましょう！
            </P>
          </>
        )
      },
      {
        type: 'yesNoQuiz',
        title: (
          <>
            <H args={{ name: 'yesNoQuiz' }} />
          </>
        ),
        content: (
          <>
            <P>
              こちらに別の暗号が「<Strong>1</Strong>」の
              <H args={{ name: 'bentoBox', skipEmoji: true }} />
              があります。
            </P>
            {AER.lrja}
            <P>
              これを、先ほどの「
              <Strong>
                <InlineEmojiBoxesForQuestion />
                の暗号に1を足す
                <H args={{ name: 'bentoBox', skipEmoji: true }} />
              </Strong>
              」に入れてみます。
            </P>
            {AER.bcae}
            <P>
              <H args={{ name: 'whatsTheNumberQuestion', number: 2 }} />
            </P>
            <YesNoButtons answer="no" />
          </>
        )
      },
      {
        title: (
          <>
            <H args={{ name: 'theAnswerIs', isYes: false }} />
          </>
        ),
        content: (
          <>
            <P>
              <Strong>
                <H args={{ name: 'theAnswerIs', isYes: false }} />
                でした。
              </Strong>
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.zuam}
            <P>
              最後に残ったのは、
              <Strong>
                暗号が「2」の
                <H args={{ name: 'bentoBox', skipEmoji: true }} />
                ではありません。
              </Strong>
              よく似ていますが、違います。
            </P>
            <EmojiSeparator emojis={['❌', '2️⃣', '❌']} />
            <P>
              なぜなら、
              <Strong>
                <EmojiWithText letter="b" />
                が右下にひとつしかないからです
              </Strong>
              。暗号が「2」の場合、
              <EmojiWithText letter="b" />
              が右下にふたつありますが、ここではひとつしかありません。
            </P>
            {AER.kfcw}
            <P>
              つまり、<Strong>1 + 1 = 2</Strong>にならなかったのです。
            </P>
          </>
        )
      },
      {
        title: (
          <>
            理由: <EmojiWithText letter="b" />が
            <BottomRightBadge inline bottomRightBadgeType="callArg" />と
            <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
            にあるから
          </>
        ),
        content: (
          <>
            <P>
              前回、「
              <Em>
                <BottomRightBadge inline bottomRightBadgeType="callArg" />と
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
                に同じ料理があるかどうかで、結果が変わることがある。
              </Em>
              」と説明しました。
            </P>
            <EmojiSeparator
              nodes={[
                <BottomRightBadge inline bottomRightBadgeType="callArg" />,
                <EmojiForLetter letter="b" />,
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
              ]}
            />
            <P>
              「1 + 1 = 2」にならなかった理由は、
              <Strong>
                <BottomRightBadge inline bottomRightBadgeType="callArg" />と
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
                に同じ料理(
                <EmojiWithText letter="b" />
                )があり、
              </Strong>
              これが結果を狂わせてしまったからです。
            </P>
            {AER.jxyg}
            <P>
              では、
              <Strong>
                どうすれば「1 + 1 = 2」を正しく計算できるでしょうか？
              </Strong>
            </P>
            <EmojiSeparator emojis={['❓', '🤔', '❓']} />
          </>
        )
      },
      {
        title: (
          <>
            解決策: どちらかの
            <EmojiWithText letter="b" />
            を別の料理にする
          </>
        ),
        content: (
          <>
            <P>
              これを解決するには、
              <BottomRightBadge inline bottomRightBadgeType="callArg" />か
              <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
              のどちらかの
              <EmojiWithText letter="b" />
              を別の料理にしないといけません。
            </P>
            <EmojiSeparator
              nodes={[
                <EmojiForLetter letter="b" />,
                <Emoji>➡️</Emoji>,
                <Emoji>❓</Emoji>
              ]}
            />
            <P>
              どちらでもいいですが、ここでは
              <Strong>
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
                の
                <EmojiWithText letter="b" />
                を変えることにしましょう。
              </Strong>
            </P>
            <EmojiSeparator
              nodes={[
                <EmojiForLetterWithBottomRightBadgeWrapper bottomRightBadgeType="funcUnbound">
                  <EmojiForLetter letter="b" />
                </EmojiForLetterWithBottomRightBadgeWrapper>,
                <Emoji>➡️</Emoji>,
                <Emoji>❓</Emoji>
              ]}
            />
            <P>
              しかし、
              <Strong>
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
                の
                <EmojiWithText letter="b" />
                を変えるなら、
                <BottomRightBadge inline bottomRightBadgeType="funcBound" />の
                <EmojiWithText letter="b" />
                も同じく変えないといけません。
              </Strong>
            </P>
            <EmojiSeparator
              nodes={[
                <EmojiForLetterWithBottomRightBadgeWrapper bottomRightBadgeType="funcBound">
                  <EmojiForLetter letter="b" />
                </EmojiForLetterWithBottomRightBadgeWrapper>,
                <Emoji>➡️</Emoji>,
                <Emoji>❓</Emoji>
              ]}
            />
            <P>
              でないと、
              <H args={{ name: 'match' }} />や<H args={{ name: 'unmatch' }} />
              などのパターンが変わってしまい、 「
              <Strong>
                1を足す
                <H args={{ name: 'bentoBox', skipEmoji: true }} />
              </Strong>
              」として機能しなくなってしまいます。だから、
              <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />と
              <BottomRightBadge inline bottomRightBadgeType="funcBound" />
              を同時に変えないといけないのです。
            </P>
            {AER.oiwu}
          </>
        )
      },
      {
        title: (
          <>
            <EmojiWithText letter="b" />を<EmojiWithText letter="e" />に
          </>
        ),
        content: (
          <>
            <EmojiSeparator
              nodes={[
                <EmojiForLetter letter="b" />,
                <Emoji>➡️</Emoji>,
                <EmojiForLetter letter="e" />
              ]}
            />
            <P>
              というわけで、
              <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />と
              <BottomRightBadge inline bottomRightBadgeType="funcBound" />の
              <Strong>
                <EmojiWithText letter="b" />を<EmojiWithText letter="e" />
                に変えてみました。
              </Strong>
            </P>
            {AER.uqpp}
            <P>
              <InlineHeader>ちなみに:</InlineHeader>{' '}
              <Em>
                <BottomRightBadge inline bottomRightBadgeType="callArg" />
                <BottomRightBadge inline bottomRightBadgeType="funcArg" />
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
                <BottomRightBadge inline bottomRightBadgeType="funcBound" />
                の他の料理と被らなければ、何の料理に変えても構いません。
              </Em>
            </P>
            <P>
              こうすることで、
              <BottomRightBadge inline bottomRightBadgeType="callArg" />と
              <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
              が被らなくなりました！
            </P>
            {AER.hxmk}
            <P>
              このまま最後まで進めてみましょう。
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.rzbq}
            <P>
              すると、最後に暗号が「<Strong>2</Strong>」の
              <H args={{ name: 'bentoBox', skipEmoji: true }} />
              が残りました。「<Strong>1 + 1 = 2</Strong>」が計算できたわけです。
            </P>
            {AER.jlet}
            <P>というわけで、まとめに入りましょう！</P>
          </>
        )
      },
      {
        type: 'summary',
        title: (
          <>
            <H args={{ name: 'summary' }} />
          </>
        ),
        content: (
          <>
            <P>
              <Strong>
                <BottomRightBadge inline bottomRightBadgeType="callArg" />と
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
                に同じ料理がある場合は…
              </Strong>
            </P>
            {AER.kqip}
            <P>
              <Strong>
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />と
                <BottomRightBadge inline bottomRightBadgeType="funcBound" />
                の該当する料理を別の料理に変えることによって、結果が変わってしまうのを避けることができます。
              </Strong>
            </P>
            {AER.tkbr}
            <P>
              <InlineHeader>ちなみに:</InlineHeader>{' '}
              <BottomRightBadge inline bottomRightBadgeType="callArg" />
              <BottomRightBadge inline bottomRightBadgeType="funcArg" />
              <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
              <BottomRightBadge inline bottomRightBadgeType="funcBound" />
              の他の料理と被らなければ、何の料理に変えても構いません。
            </P>
          </>
        ),
        footer: {
          content: (
            <>
              <P>
                このルールは次のページにある
                <H args={{ name: 'bentoBox', skipEmoji: true }} />
                から
                <Strong>自動で発動するので、 暗記する必要はありません。</Strong>
                なんとなく「
                <Em>こういうルールがあるんだな</Em>
                」と思ってくだされば大丈夫です。
              </P>
            </>
          )
        }
      },
      {
        title: <>お疲れ様でした！</>,
        content: (
          <>
            <P>
              <BottomRightBadge inline bottomRightBadgeType="callArg" />と
              <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
              にまつわる新ルールについてはこれで終了です。
            </P>
            <EmojiSeparator emojis={['🎉', '🥳', '🎉']} />
            <P>
              次のページからは、
              <H args={{ name: 'bentoBox', skipEmoji: true }} />
              の「<Strong>省略表記</Strong>」について見ていきます。
            </P>
            <YcNextLessonButton />
          </>
        )
      }
    ]}
  />
)
