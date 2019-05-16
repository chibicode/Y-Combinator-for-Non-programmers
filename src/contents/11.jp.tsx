import React from 'react'
import {
  Ul,
  UlLi,
  Em,
  P,
  Strong,
  InlineHeader
} from 'src/components/ContentTags'
import AER from 'src/components/Yc/AER'
import EmojiSeparator from 'src/components/EmojiSeparator'
import EmojiForLetter from 'src/components/EmojiForLetter'
import Emoji from 'src/components/Emoji'
import EpisodeCardList from 'src/components/EpisodeCardList'
import EmojiWithText from 'src/components/EmojiWithText'
import YesNoButtons from 'src/components/YesNoButtons'
import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
import EmojiForLetterWithBottomRightBadgeWrapper from 'src/components/EmojiForLetterWithBottomRightBadgeWrapper'
import H from 'src/components/H'
import { InlineEmojiBoxesForQuestion } from 'src/components/Yc/InlineEmojiBoxes'
import BottomRightBadge from 'src/components/Yc/BottomRightBadge'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: (
          <>
            <EmojiWithText letter="v" />
            の入った
            <H args={{ name: 'bentoBox', skipEmoji: true }} />
          </>
        ),
        content: (
          <>
            <P>
              <H args={{ name: 'episodeWelcomeText' }} />
              早速、
              <H args={{ name: 'lookAtThisBentoBox' }} />。
            </P>
            {AER.wbpx}
            <P>注目ポイントはふたつあります:</P>
            <Ul>
              <UlLi>
                <Em>
                  一番上に
                  <Strong>
                    <EmojiWithText letter="v" />
                  </Strong>
                  が入っています。
                </Em>
              </UlLi>
              <UlLi>
                <Em>
                  <InlineEmojiBoxesForQuestion />
                  の部分には、料理が「<Strong>ひとつだけ</Strong>」入ります。
                </Em>
              </UlLi>
            </Ul>
          </>
        )
      },
      {
        title: (
          <>
            <InlineEmojiBoxesForQuestion size="md" /> に何か入れてみる
          </>
        ),
        content: (
          <>
            <P>
              とりあえず、
              <EmojiWithText letter="c" />
              を<InlineEmojiBoxesForQuestion />
              に入れてみました。
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.gszp}
            <P>
              <InlineEmojiBoxesForQuestion />
              に入っていた
              <Strong>
                <EmojiWithText letter="c" />
              </Strong>
              が最後に残りますね。
            </P>
            <EmojiSeparator
              nodes={[
                <EmojiForLetter letter="c" />,
                <Emoji>➡️</Emoji>,
                <EmojiForLetter letter="c" />
              ]}
            />
            <P>
              <EmojiWithText letter="d" />
              を<InlineEmojiBoxesForQuestion />
              に入れてみたらどうでしょう？
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.kntz}
            <P>
              今回も、
              <InlineEmojiBoxesForQuestion />
              に入っていた
              <Strong>
                <EmojiWithText letter="d" />
              </Strong>
              が最後に残りました。
            </P>
            <EmojiSeparator
              nodes={[
                <EmojiForLetter letter="d" />,
                <Emoji>➡️</Emoji>,
                <EmojiForLetter letter="d" />
              ]}
            />
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
            <P>では、ここで質問です！</P>
            {AER.wbpx}
            <P>
              <H args={{ name: 'question' }} />
            </P>
            <Ul>
              <UlLi>
                こちらの
                <H args={{ name: 'bentoBox', short: true }} />の
                <Strong>
                  <InlineEmojiBoxesForQuestion />
                  に料理をひとつだけ入れて
                  <H args={{ name: 'play' }} />
                  すると
                </Strong>
                、
              </UlLi>
              <UlLi>
                最終的にかならず
                <Strong>
                  <InlineEmojiBoxesForQuestion />
                  に入れた料理が残る
                </Strong>
                。<H args={{ name: 'yesOrNo' }} />
              </UlLi>
              <YesNoButtons answer="no" />
            </Ul>
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
            </P>
            <P>
              <Strong>
                <InlineEmojiBoxesForQuestion />に<EmojiWithText letter="b" />
                を入れる
              </Strong>
              のがポイントです。
            </P>
            <EmojiSeparator
              nodes={[
                <EmojiForLetter letter="b" />,
                <Emoji>🤔</Emoji>,
                <InlineEmojiBoxesForQuestion size="md" />
              ]}
            />
            <P>
              <InlineEmojiBoxesForQuestion />に<EmojiWithText letter="b" />
              を入れてみると下のようになります。
              <H args={{ name: 'pressFastForward' }} />{' '}
            </P>
            {AER.bmms}
            <P>
              なんと、最後に
              <Strong>
                <EmojiWithText letter="v" />
              </Strong>
              が残りました！
            </P>
            <EmojiSeparator
              nodes={[
                <EmojiForLetter letter="v" />,
                <Emoji>🥳</Emoji>,
                <EmojiForLetter letter="v" />
              ]}
            />
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
              こちらの
              <H args={{ name: 'bentoBox', short: true }} />
              の…
            </P>
            {AER.wbpx}
            <Ul>
              <UlLi>
                <Em>
                  <InlineEmojiBoxesForQuestion />に
                  <Strong>
                    <EmojiWithText letter="b" />
                  </Strong>
                  を入れた場合、
                  <Strong>
                    <EmojiWithText letter="v" />
                  </Strong>
                  が残る。
                </Em>
              </UlLi>
              <UlLi>
                <Em>
                  <InlineEmojiBoxesForQuestion />
                  にそれ以外を入れた場合、
                  <InlineEmojiBoxesForQuestion />
                  に入れた料理が残る。
                </Em>
              </UlLi>
            </Ul>
            <P>でも、どうしてこうなったのでしょう？</P>
          </>
        )
      },
      {
        title: (
          <>
            <BottomRightBadge inline bottomRightBadgeType="callArg" />と
            <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
            が両方とも
            <EmojiWithText letter="b" />
            になるから
          </>
        ),
        content: (
          <>
            <EmojiSeparator
              nodes={[
                <BottomRightBadge inline bottomRightBadgeType="callArg" />,
                <EmojiForLetter letter="b" />,
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
              ]}
            />
            <P>
              理由は、
              <InlineEmojiBoxesForQuestion />に
              <Strong>
                <EmojiWithText letter="b" />
              </Strong>
              を入れた場合、
              <BottomRightBadge inline bottomRightBadgeType="callArg" />と
              <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />が
              <Strong>
                両方とも
                <Strong>
                  <EmojiWithText letter="b" />
                </Strong>
                になるから
              </Strong>
              です。
            </P>
            {AER.gmcn}
            <P>
              すると途中で
              <BottomRightBadge inline bottomRightBadgeType="funcArg" />と
              <BottomRightBadge inline bottomRightBadgeType="funcBound" />
              が両方とも
              <EmojiWithText letter="b" />
              になり…(
              <H args={{ name: 'pressFastForward', skipColon: true }} />)
            </P>
            {AER.vpjw}
            <P>
              最後に
              <EmojiWithText letter="v" />
              が残るのです。(
              <H args={{ name: 'pressFastForward', skipColon: true }} />)
            </P>
            {AER.kjyi}
          </>
        )
      },
      {
        title: (
          <>
            <BottomRightBadge inline bottomRightBadgeType="callArg" />と
            <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
            が違うとどうなるか
          </>
        ),
        content: (
          <>
            <P>
              それ以外の料理(たとえば
              <EmojiWithText letter="c" />
              )を
              <InlineEmojiBoxesForQuestion />
              に入れた場合、
              <Strong>
                <BottomRightBadge inline bottomRightBadgeType="callArg" />と
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
                が異なります。
              </Strong>
            </P>
            {AER.dpst}
            <P>
              すると先ほどと違い、途中で
              <BottomRightBadge inline bottomRightBadgeType="funcArg" />と
              <BottomRightBadge inline bottomRightBadgeType="funcBound" />
              が同じにならず…(
              <H args={{ name: 'pressFastForward', skipColon: true }} />)
            </P>
            {AER.xhwx}
            <P>
              最初に
              <InlineEmojiBoxesForQuestion />
              に入れた
              <EmojiWithText letter="c" />
              が残るのです。(
              <H args={{ name: 'pressFastForward', skipColon: true }} />)
            </P>
            {AER.ttvy}
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
                に同じ料理があるかどうかで、結果が変わることがある。
              </Strong>
            </P>
            <EmojiSeparator
              nodes={[
                <BottomRightBadge inline bottomRightBadgeType="callArg" />,
                <Emoji>🆚</Emoji>,
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
              ]}
            />
            <P>
              先ほどの
              <H args={{ name: 'bentoBox', skipEmoji: true }} />
              だと、
            </P>
            {AER.wbpx}
            <P>
              <Em>
                <InlineEmojiBoxesForQuestion />に
                <Strong>
                  <EmojiWithText letter="b" />
                </Strong>
                を入れた場合、
                <BottomRightBadge inline bottomRightBadgeType="callArg" />と
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />が
                <Strong>同じになる。</Strong>
              </Em>
            </P>
            {AER.gmcn}
            <P>
              <Em>
                <InlineEmojiBoxesForQuestion />
                にそれ以外を入れた場合、
                <BottomRightBadge inline bottomRightBadgeType="callArg" />と
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />が
                <Strong>異なる。</Strong>
              </Em>
            </P>
            {AER.dpst}
            <P>
              だから、<Strong>それぞれ違う結果になる。</Strong>
            </P>
            <Ul>
              <UlLi>
                <InlineEmojiBoxesForQuestion />に
                <Strong>
                  <EmojiWithText letter="b" />
                </Strong>
                を入れた場合、
                <Strong>
                  <EmojiWithText letter="v" />
                </Strong>
                が残る。
              </UlLi>
              <UlLi>
                <InlineEmojiBoxesForQuestion />
                にそれ以外を入れた場合、
                <InlineEmojiBoxesForQuestion />
                に入れた料理が残る。
              </UlLi>
            </Ul>
          </>
        )
      },
      {
        title: <>何か問題でも？</>,
        content: (
          <>
            <P>
              <BottomRightBadge inline bottomRightBadgeType="callArg" />と
              <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
              に同じ料理があるかどうかで、結果が変わる
              <H args={{ name: 'bentoBox', skipEmoji: true }} />
              があることがわかりました。
            </P>
            <P>
              でも、「<Em>それで何か問題でもあるの？</Em>
              」と思う方がいらっしゃるかもしれません。
            </P>
            <EmojiSeparator
              nodes={[
                <BottomRightBadge inline bottomRightBadgeType="callArg" />,
                <Emoji>🤔</Emoji>,
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
              ]}
            />
            <P>
              というわけで、
              <Em>なぜこれが大事なポイントなのか、解説していきます！</Em>
            </P>
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
            <EmojiSeparator emojis={['❓', '➕', '1️⃣']} />
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
              先ほど、「
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
              <H args={{ name: 'match' }} />が<H args={{ name: 'unmatch' }} />
              などのパターンが変わってしまい、 「
              <Strong>
                1を足す
                <H args={{ name: 'bentoBox', skipEmoji: true }} />
              </Strong>
              」として機能しなくなってしまいます。
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
                を違う料理に変えることによって、結果が変わってしまうのを避けることができます。
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
            <EmojiSeparator emojis={['🎉', '🥳', '🎉']} />
            <P>
              上級1発目から、ずいぶんと長いページになってしまいました。お疲れ様です。次のページは比較的短いので、このまま読み進めてくださると嬉しいです。
            </P>
            <YcNextLessonButton />
          </>
        )
      }
    ]}
  />
)
