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
import InlinePrioritiesLabel from 'src/components/Yc/InlinePrioritiesLabel'
import EmojiSeparator from 'src/components/EmojiSeparator'
import EmojiForLetter from 'src/components/EmojiForLetter'
import Emoji from 'src/components/Emoji'
import EpisodeCardList from 'src/components/EpisodeCardList'
import EmojiWithText from 'src/components/EmojiWithText'
import YesNoButtons from 'src/components/YesNoButtons'
import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
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
        type: 'yesNoQuiz',
        title: (
          <>
            <H args={{ name: 'yesNoQuiz' }} />
          </>
        ),
        content: (
          <>
            <P>
              <H args={{ name: 'question' }} /> こちらの
              <H args={{ name: 'bentoBox', skipEmoji: true }} />
              の<InlineEmojiBoxesForQuestion />
              の部分に<Strong>それぞれ同じ料理を入れた場合、</Strong>
            </P>
            {AER.ongi}
            <P>
              <Strong>
                必ず
                <EmojiWithText letter="u" />と<EmojiWithText letter="v" />
                が最後に残る。
              </Strong>
              <H args={{ name: 'yesOrNo' }} />
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
              でも、なぜでしょう？
            </P>
            <EmojiSeparator emojis={['❓', '😬', '❓']} />
            <P>
              <InlineHeader>解説:</InlineHeader>{' '}
              <Strong>
                <InlineEmojiBoxesForQuestion />
                に<EmojiWithText letter="v" />
                を入れてみました。
              </Strong>
              これで、
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.iphu}
            <P>
              なんと、
              <Strong>
                最後に
                <EmojiWithText letter="u" />
                がふたつ残りました。
              </Strong>
            </P>
            {AER.ddrz}
            <P>
              だから、質問にあった「
              <Strong>
                必ず
                <EmojiWithText letter="u" />と<EmojiWithText letter="v" />
                が最後に残る。
              </Strong>
              」というのは間違いなので、答えは<Emoji>❌</Emoji>
              というわけです。でも、どうしてこうなるのでしょう？
            </P>
            <EmojiSeparator
              nodes={[
                <EmojiForLetter letter="u" />,
                <Emoji>🤔</Emoji>,
                <EmojiForLetter letter="u" />
              ]}
            />
          </>
        )
      },
      {
        title: (
          <>
            <EmojiWithText letter="v" />
            を入れた場合
          </>
        ),
        content: (
          <>
            <P>
              <Strong>
                <InlineEmojiBoxesForQuestion />に<EmojiWithText letter="v" />
                を入れた場合と、それ以外の場合、それぞれの途中経過
              </Strong>
              を見ていくことにしましょう。
            </P>
            <EmojiSeparator
              nodes={[
                <EmojiForLetter letter="v" />,
                <Emoji>🆚</Emoji>,
                <Emoji>❓</Emoji>
              ]}
            />
            <P>
              まず、
              <Strong>
                <InlineEmojiBoxesForQuestion />に<EmojiWithText letter="v" />
                を入れた場合
              </Strong>
              。
              <Em>
                下の
                <H args={{ name: 'fastForward' }} />
                を押すと、最初の<InlinePrioritiesLabel>1</InlinePrioritiesLabel>
                のペアが消えた直後まで進みます
              </Em>
              。
            </P>
            {AER.ypik}
            <P>
              ご覧の通り、
              <Strong>
                下の3つがすべて
                <EmojiWithText letter="v" />
                になりました。
              </Strong>
            </P>
            <P>
              そして、このまま最後まで進めると、
              <Strong>
                上にある
                <EmojiWithText letter="u" />
                が2箇所に
                <H args={{ name: 'copy' }} />
                される
              </Strong>
              のです。
              <Em>
                <H args={{ name: 'fastForward' }} />
                して確かめてみてください
              </Em>
              :
            </P>
            {AER.jpum}
            <P>
              こうして、
              <EmojiWithText letter="u" />
              がふたつ残るのです。
            </P>
          </>
        )
      },
      {
        title: (
          <>
            <EmojiWithText letter="v" />
            以外を入れた場合
          </>
        ),
        content: (
          <>
            <P>
              では、
              <InlineEmojiBoxesForQuestion />に
              <Strong>
                <EmojiWithText letter="v" />
                以外
              </Strong>
              を入れた場合、途中経過はどうなるのでしょう？
            </P>
          </>
        )
      },
      {
        title: <>結論: </>,
        content: (
          <>
            <P>
              結果が変わってしまうか、どうやって見分ければいいのか？答え:
              中と上をチェックする
            </P>
          </>
        )
      },
      {
        title: <></>,
        content: (
          <>
            <P>
              これは掛け算の弁当箱。結果が変わる？ →
              結果が変わると暗号の計算もうまくいかなくなってしまう！
            </P>
          </>
        )
      },
      {
        title: <></>,
        content: (
          <>
            <P>解決策: 結果が変わらないように変える。新規ルール！</P>
          </>
        )
      },
      {
        title: (
          <>
            条件分岐の
            <H args={{ name: 'bentoBox', short: true }} />
            、再び
          </>
        ),
        content: (
          <>
            <P>
              <H args={{ name: 'episodeWelcomeText' }} />
              中級の最後で紹介した「条件分岐」の
              <H args={{ name: 'bentoBox', short: true }} />
              をもう一度ご覧ください。
            </P>
            {AER.nlxe}
            <P>
              <InlineHeader>復習:</InlineHeader> 上の
              <H args={{ name: 'bentoBox', skipEmoji: true }} />の
              <InlineEmojiBoxesForQuestion />
              の部分に…
            </P>
            <P>
              暗号が<Strong>「0」</Strong>の
              <H args={{ name: 'bentoBox', skipEmoji: true }} />
              を埋め込むと、
              <Strong>
                <EmojiWithText letter="y" />
                が残る
              </Strong>
              。
            </P>
            <EmojiSeparator
              nodes={[
                <Emoji>0️⃣</Emoji>,
                <Emoji>➡️</Emoji>,
                <EmojiForLetter letter="y" />
              ]}
            />
            <P>
              暗号が<Strong>「1以上」</Strong>の
              <H args={{ name: 'bentoBox', skipEmoji: true }} />
              を埋め込むと、
              <Strong>
                <EmojiWithText letter="z" />
                が残る
              </Strong>
              。
            </P>
            <EmojiSeparator
              nodes={[
                <Emoji>🔢</Emoji>,
                <Emoji>➡️</Emoji>,
                <EmojiForLetter letter="z" />
              ]}
            />
            <P>
              それでは、ここで
              <H args={{ name: 'yesNoQuiz' }} />
              の時間です！
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
              こちらに、<Strong>暗号が「1」</Strong>の
              <H args={{ name: 'bentoBox', skipEmoji: true }} />
              を用意します。
            </P>
            {AER.azge}
            <P>
              こちらを、先ほどの
              <H args={{ name: 'bentoBox', skipEmoji: true }} />の
              <InlineEmojiBoxesForQuestion />
              の部分に埋め込んでみます。
            </P>
            {AER.eigf}
            <P>
              <H args={{ name: 'question' }} /> 上の
              <H args={{ name: 'bentoBox', skipEmoji: true }} />を
              <H args={{ name: 'play' }} />
              したら最後に残るのは「
              <Strong>
                <EmojiWithText letter="z" />
              </Strong>
              」だ。
              <H args={{ name: 'yesOrNo' }} />
            </P>
            <YesNoButtons answer="no" tooHard />
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
            {AER.eqbo}
            <P>
              なんと、もともとの暗号は
              <Strong>「1」</Strong>だったのに、
              <EmojiWithText letter="z" />
              ではなく、
              <Strong>
                下のような全然関係ない
                <H args={{ name: 'bentoBox', short: true }} />
              </Strong>
              が残ってしまいました！
            </P>
            {AER.xlwo}
            <P>
              先ほど、「
              <Em>
                暗号が1以上の
                <H args={{ name: 'bentoBox', skipEmoji: true }} />
                を埋め込むと、
                <EmojiWithText letter="z" />
                が残る
              </Em>
              」と書いたのと矛盾していますよね。どうしてこうなったのでしょう？
            </P>
            <EmojiSeparator emojis={['🤯', '❓', '🍬']} />
          </>
        )
      },
      {
        title: (
          <>
            答え: <BottomRightBadge inline bottomRightBadgeType="callArg" />と
            <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
            に同じ料理があるか
          </>
        ),
        content: (
          <>
            <P>
              前回、
              <Strong>
                <BottomRightBadge inline bottomRightBadgeType="callArg" />と
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
                に同じ料理があるかどうかで、結果が変わる
                <H args={{ name: 'bentoBox', short: true }} />
                がある
              </Strong>
              と説明しました。
            </P>
            <EmojiSeparator
              nodes={[
                <BottomRightBadge inline bottomRightBadgeType="callArg" />,
                <Emoji>❓</Emoji>,
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
              ]}
            />
            <P>
              先ほどの
              <H args={{ name: 'bentoBox', skipEmoji: true }} />
              では、
              <H args={{ name: 'play' }} />
              直後に
              <Strong>
                <BottomRightBadge inline bottomRightBadgeType="callArg" />と
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
                に同じ料理がある
              </Strong>
              のです。こちらをご覧ください。
            </P>
            {AER.fdpd}
            <P>
              <Strong>
                <EmojiWithText letter="b" />が
                <BottomRightBadge inline bottomRightBadgeType="callArg" />と
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
                の両方にありますね。
              </Strong>
            </P>
            <EmojiSeparator
              nodes={[
                <BottomRightBadge inline bottomRightBadgeType="callArg" />,
                <EmojiForLetter letter="b" />,
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
              ]}
            />
            <P>このことが結果を狂わせているのです。</P>
          </>
        )
      },
      {
        title: (
          <>
            もし
            <EmojiWithText letter="b" />
            じゃなかったら？
          </>
        ),
        content: (
          <>
            <P>
              では、暗号に
              <EmojiWithText letter="b" />
              を使わなければ大丈夫なのか、確かめてみましょう。
            </P>
            <P>
              こちらも<Strong>暗号が「1」</Strong>の
              <H args={{ name: 'bentoBox', skipEmoji: true }} />
              ですが、
              <EmojiWithText letter="b" />
              のかわりに
              <EmojiWithText letter="c" />
              を使っています。
            </P>
            {AER.zlgw}
            <P>
              こちらを条件分岐の
              <H args={{ name: 'bentoBox', short: true }} />
              に埋め込んでみます(<Em>黄色の部分</Em>)。
            </P>
            {AER.ttgq}
            <P>
              この場合、
              <BottomRightBadge inline bottomRightBadgeType="callArg" />と
              <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
              に同じ料理はありません。では、
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.xrzv}
            <P>
              ちゃんと
              <EmojiWithText letter="z" />
              が最後に残りました！
            </P>
            {AER.pyfd}
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
                条件分岐の
                <H args={{ name: 'bentoBox', skipEmoji: true }} />
                は、
                <InlineEmojiBoxesForQuestion />
                に入る
                <H args={{ name: 'bentoBox', skipEmoji: true }} />
                によっては機能しなくなる。
              </Strong>
            </P>
            {AER.nlxe}
            <P>
              たとえば、もしも
              <InlineEmojiBoxesForQuestion />
              に入る
              <H args={{ name: 'bentoBox', skipEmoji: true }} />の
              <Strong>
                真ん中に
                <EmojiWithText letter="b" />
              </Strong>
              がある場合、
              <Strong>
                <BottomRightBadge inline bottomRightBadgeType="callArg" />と
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
                に同じ料理が入ることになる
              </Strong>
              。
            </P>
            {AER.fdpd}
            <P>
              <Strong>
                すると、いつもと結果が変わり、正しく条件分岐ができなくなる。
              </Strong>
            </P>
            <EmojiSeparator
              nodes={[
                <EmojiForLetter letter="z" />,
                <Emoji>❌</Emoji>,
                <EmojiForLetter letter="y" />
              ]}
            />
          </>
        )
      },
      {
        title: <>正しく条件分岐ができるようにするには？</>,
        content: (
          <>
            <P>
              では、
              <Strong>
                暗号にどんな料理が含まれていても、正しく条件分岐ができるようにするには
              </Strong>
              どうすればいいのでしょう？
            </P>
            <EmojiSeparator
              nodes={[
                <EmojiForLetter letter="z" />,
                <Emoji>🤔</Emoji>,
                <EmojiForLetter letter="y" />
              ]}
            />
            <P>
              たとえば、こちらの先ほどの
              <H args={{ name: 'bentoBox', short: true }} />
              をご覧ください。
            </P>
            {AER.dygl}
            <P>
              <BottomRightBadge inline bottomRightBadgeType="callArg" />と
              <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
              に同じ料理(
              <EmojiWithText letter="b" />
              )があるので、このままだと条件分岐ができません。(
              <Em>
                このことを、左上に表示された
                <Emoji>⚠️</Emoji>アイコンが表しています。
              </Em>
              )
            </P>
            <EmojiSeparator
              nodes={[
                <Emoji>⚠️</Emoji>,
                <EmojiForLetter letter="b" />,
                <Emoji>⚠️</Emoji>
              ]}
            />
            <P>どうすれば、この状況を打開できるでしょうか？</P>
          </>
        )
      },
      {
        title: (
          <>
            <H args={{ name: 'drink' }} />
            をつける
          </>
        ),
        content: (
          <>
            <P>
              では、一番下にある
              <Strong>
                <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcBound" />
                の部分に注目してみましょう。
              </Strong>
              暗号が<Strong>「1」</Strong>の
              <H args={{ name: 'bentoBox', skipEmoji: true }} />
              です。
            </P>
            {AER.kogx}
            <P>
              ここで、
              <Strong>
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcBound" />
                にある
                <EmojiWithText letter="b" />
                に、
                <H args={{ name: 'drink' }} />
                の印をつけます。
              </Strong>
            </P>
            {AER.qxhk}
            <P>
              <InlineHeader>ポイント:</InlineHeader>{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />の
              <EmojiWithText letter="b" />
              だけでなく、
              <Em>
                <BottomRightBadge inline bottomRightBadgeType="funcBound" />の
                <EmojiWithText letter="b" />
                にも
                <H args={{ name: 'drink' }} />
                を加えることによって、これまでと同じ
                <Strong>「1」</Strong>の暗号の
                <H args={{ name: 'bentoBox', skipEmoji: true }} />
                になります
              </Em>
              。
            </P>
          </>
        )
      },
      {
        title: (
          <>
            <BottomRightBadge inline bottomRightBadgeType="callArg" />と
            <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
            が被らなくなる
          </>
        ),
        content: (
          <>
            <P>
              <Strong>
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />の
                <EmojiWithText letter="b" />に<H args={{ name: 'drink' }} />
                がついたことで、
                <BottomRightBadge inline bottomRightBadgeType="callArg" />の
                <EmojiWithText letter="b" />
                と被らなくなります。
              </Strong>
            </P>
            {AER.bpyh}
            <P>
              「<H args={{ name: 'drink' }} />
              がある
              <EmojiWithText letter="b" />
              」と、「
              <H args={{ name: 'drink' }} />
              がない
              <EmojiWithText letter="b" />
              」は、<Strong>別物として扱われるので、被らなくなる</Strong>
              のです。
            </P>
            <EmojiSeparator
              nodes={[
                <EmojiForLetter letter="b" />,
                <Emoji>🆚</Emoji>,
                <EmojiForLetter letter="b" />
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
            <Ul>
              <UlLi>
                <Strong>
                  <BottomRightBadge inline bottomRightBadgeType="callArg" />と
                  <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
                  に同じ料理があるときは…
                </Strong>
              </UlLi>
              <UlLi>
                <Strong>
                  <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
                  と
                  <BottomRightBadge inline bottomRightBadgeType="funcBound" />
                  にあるそれと同じ料理に
                  <H args={{ name: 'drink' }} />
                  をつける。
                </Strong>
              </UlLi>
              <UlLi>
                <H args={{ name: 'drink' }} />
                をつけても、<Strong>暗号は変わらない</Strong>。
              </UlLi>
              <UlLi>
                だがこうすることで、
                <Strong>
                  <BottomRightBadge inline bottomRightBadgeType="callArg" />と
                  <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
                  が被るという状況を必ず回避できる。
                </Strong>
              </UlLi>
              <EmojiSeparator
                nodes={[
                  <BottomRightBadge inline bottomRightBadgeType="callArg" />,
                  <BottomRightBadge
                    inline
                    bottomRightBadgeType="funcUnbound"
                  />,
                  <BottomRightBadge inline bottomRightBadgeType="funcBound" />
                ]}
              />
            </Ul>
          </>
        )
      },
      {
        title: <>最後まで進めると…</>,
        content: (
          <>
            <P>
              では、
              <H args={{ name: 'drink' }} />
              をつけた時点から最後まで
              <H args={{ name: 'fastForward' }} />
              してみましょう。
            </P>
            {AER.sqnu}
            <P>
              ちゃんと
              <EmojiWithText letter="z" />
              が残りました！
            </P>
            {AER.fjxw}
            <P>
              つまり、
              <BottomRightBadge inline bottomRightBadgeType="callArg" />と
              <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
              が同じになる場合でも、
              <H args={{ name: 'drink' }} />
              をつけることで、<Em>条件分岐が正しく機能する</Em>のです。
            </P>
            <EmojiSeparator emojis={['🥤', '🤗', '️🥤']} />
          </>
        )
      },
      {
        title: <>暗記する必要はありません！</>,
        content: (
          <>
            <P>
              今回紹介した
              <H args={{ name: 'drink' }} />
              のルールは、
              <Em>
                次以降のページに出てくる、
                <Strong>
                  条件分岐以外の
                  <H args={{ name: 'bentoBox', short: true }} />
                  にも適用されます
                </Strong>
                。
              </Em>
            </P>
            <EmojiSeparator emojis={['🥤', '🍱', '️🥤']} />
            <P>
              ただし、<Strong>ルールを暗記する必要はありません</Strong>。
            </P>
            <P>
              <H args={{ name: 'bentoBox', skipEmoji: true }} />を
              <H args={{ name: 'fastForward' }} />
              をする途中で
              <H args={{ name: 'drink' }} />
              が出てきたら、「<Em>ああ、あのルールね</Em>
              」と思ってくださるだけで大丈夫です。
            </P>
          </>
        )
      },
      {
        title: <>次のページへ</>,
        content: (
          <>
            <EmojiSeparator emojis={['🔥', '️😤', '🔥']} />
            <P>
              そろそろこの記事のクライマックスに入ります！ゴールまでもう少しです。あと少しお付き合いください！
            </P>
            <YcNextLessonButton />
          </>
        )
      }
    ]}
  />
)
