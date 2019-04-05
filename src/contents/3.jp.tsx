import React from 'react'
import {
  InlineHeader,
  Em,
  H3,
  P,
  Strong,
  Ul,
  UlLi,
  Hr,
  Ol,
  OlLi
} from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import { episode4 } from 'src/components/Yc/AllExpressionRunners'
import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
import h from 'src/lib/h'
import EpisodeCardList from 'src/components/EpisodeCardList'
import YesNoButtons from 'src/components/YesNoButtons'
import AER from 'src/components/Yc/AllExpressionRunners'
import H from 'src/components/H'
import EmojiWithText from 'src/components/EmojiWithText'
import BottomRightBadge from 'src/components/Yc/BottomRightBadge'
import InlinePrioritiesLabel from 'src/components/Yc/InlinePrioritiesLabel'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: '3つの料理',
        content: (
          <>
            <EmojiSeparator letters={['a', 'b', 'a']} />
            <P>
              <H args={{ name: 'episodeWelcomeText' }} />
              前回の最後には、以下のような
              <H args={{ name: 'bentoBox' }} />
              を紹介しました。
            </P>
            {AER.xwim}
            <P>
              <Strong>
                下段に3つの料理(
                <EmojiWithText letter="a" />、<EmojiWithText letter="b" />、
                <EmojiWithText letter="a" />)
              </Strong>
              がありますが、この場合どうなるのかを解説していきます。
            </P>
          </>
        )
      },
      {
        title: '真ん中の料理',
        content: (
          <>
            <P>
              <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcBound" />
              の代わりに、
              <Strong>
                真ん中にある料理には
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
                の印をつけます。
              </Strong>
            </P>
            <EmojiSeparator
              size="sm"
              nodes={[
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />,
                <Emoji>🤗</Emoji>,
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
              ]}
            />
            <P>
              <H args={{ name: 'pressNext' }} />
            </P>
            {AER.rmsd}
          </>
        )
      },
      {
        title: '真ん中の料理はスルー',
        content: (
          <>
            <P>
              <Strong>
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
                の料理は、
              </Strong>
            </P>
            <Ul>
              <UlLi>
                <InlineHeader>
                  コピペ(
                  <BottomRightBadge
                    inline
                    bottomRightBadgeType="callArg"
                  />{' '}
                  <Emoji>➡️</Emoji>{' '}
                  <BottomRightBadge inline bottomRightBadgeType="funcBound" />
                  )にも影響されず、
                </InlineHeader>
              </UlLi>
              <UlLi>
                <InlineHeader>
                  消されること(<Emoji>💥</Emoji>{' '}
                  <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
                  <BottomRightBadge inline bottomRightBadgeType="funcArg" />
                  )もありません。
                </InlineHeader>
              </UlLi>
            </Ul>
            <P>
              <Strong>つまり、スルーして大丈夫ということです。</Strong>
            </P>
            <Hr />
            <P>
              というわけで最後まで見てみましょう。
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.jmqh}
            <P>
              ご覧の通り
              <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
              にある
              <EmojiWithText letter="b" />
              には、最後まで何も起きません。
            </P>
            <P>というわけで、実行結果はこうなります。</P>
            {AER.iped}
          </>
        )
      },
      {
        title: <>ここまでのまとめ</>,
        type: 'summary',
        content: (
          <>
            <P>
              まとめるとこんな感じになります(
              <Em>
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
                について<Strong>変更点</Strong>を加えました
              </Em>
              ):
            </P>
            <Ol>
              <OlLi>
                <Strong>
                  <InlineHeader>印をつける:</InlineHeader>{' '}
                  <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
                  <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
                  <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />{' '}
                  <BottomRightBadge inline bottomRightBadgeType="funcBound" />
                </Strong>
              </OlLi>
              <OlLi>
                <InlineHeader>一致チェック:</InlineHeader>{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
                <Emoji>✅</Emoji> (
                <Strong>
                  <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
                  は無視
                </Strong>
                )
              </OlLi>
              <OlLi>
                (<H args={{ name: 'match' }} />
                した部分のみ)
                <InlineHeader>コピペする:</InlineHeader>{' '}
                <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
                <Emoji>➡️</Emoji>{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcBound" /> (
                <Strong>
                  <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
                  は無視
                </Strong>
                )
              </OlLi>
              <OlLi>
                <InlineHeader>消す:</InlineHeader> <Emoji>💥</Emoji>{' '}
                <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcArg" /> (
                <Strong>
                  <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
                  は無視
                </Strong>
                )
              </OlLi>
            </Ol>
          </>
        )
      },
      {
        title: '3段の弁当箱',
        content: (
          <>
            <EmojiSeparator emojis={['🍱', '3️⃣', '🍱']} />
            <P>
              続いて、こちらの
              <H args={{ name: 'bentoBox' }} />
              をご覧ください:
            </P>
            {AER.cvtc}
            <Ul>
              <UlLi>
                下の2段は先ほどと一緒ですが、
                <Em>
                  一番上に
                  <EmojiWithText letter="d" />
                  が追加されています。
                </Em>
              </UlLi>
              <UlLi>
                <Em>
                  <InlinePrioritiesLabel>1</InlinePrioritiesLabel> や{' '}
                  <InlinePrioritiesLabel>2</InlinePrioritiesLabel>
                  という数字が左端に表示されています。
                </Em>
              </UlLi>
            </Ul>
          </>
        )
      },
      {
        title: '実行するとどうなる？',
        content: (
          <>
            <P>
              さっそく
              <H args={{ name: 'play' }} />
              してみましょう。
              <H args={{ name: 'playUntilDone' }} />
            </P>
            {AER.xhbi}
            <P>
              最終的に
              <EmojiWithText letter="c" />
              だけになりました。
              <Strong>どういう法則でこうなったか、分かりますか？</Strong>
            </P>
          </>
        )
      },
      {
        title: '3段の弁当箱、その2',
        content: (
          <>
            <P>
              こちらの
              <H args={{ name: 'bentoBox' }} />
              はどうでしょう？
              <H args={{ name: 'playUntilDone' }} />
            </P>
            {AER.tbij}
            <P>
              こちらは最終的に
              <EmojiWithText letter="g" />
              だけになりました。 こちらも、
              <Strong>どういう法則でこうなったか、分かりますか？</Strong>
            </P>
          </>
        )
      },
      {
        title: <H args={{ name: 'yesNoQuiz' }} />,
        type: 'yesNoQuiz',
        content: (
          <>
            <P>
              予想が正しいか、
              <H args={{ name: 'yesNoQuiz' }} />
              で確かめてみましょう！
            </P>
            {AER.dkiy}
            <P>
              <H args={{ name: 'whatHappensAtTheEndQuestion' }} />
            </P>
            {AER.owcy}
            <YesNoButtons answer="no" />
          </>
        )
      },
      {
        title: <>答え合わせ</>,
        content: (
          <>
            <P>
              正解はこちら。
              <H args={{ name: 'playUntilDone' }} />
            </P>
            {AER.bagn}
            <P>
              <Strong>
                <EmojiWithText letter="m" />
                だけになったので、正解は<Emoji>❌</Emoji>
              </Strong>
              (<EmojiWithText letter="k" />
              ではない) でした。
            </P>
            <P>どういう法則でこうなるのかは、次のページで説明します！</P>
            <YcNextLessonButton nextEpisodeNumber={4} />
          </>
        )
      }
    ]}
  />
)

export const old = () => {
  let i = 0
  return (
    <>
      {h('ycQuizReview', 3)}
      <P>
        前回同様、ボタンを用意しました。
        {h('ycTryUntilDone')}:
      </P>
      {episode4[i++]()}
      <P>
        つまり、答えは{' '}
        <Em>
          <Strong>
            サンドイッチ <Emoji>🥪</Emoji>
          </Strong>
        </Em>{' '}
        です。でも、どうして？
      </P>
      <EmojiSeparator emojis={['🥪', '🤔', '🥪']} />
      <P>
        理由を説明しましょう。あなたはお寿司 <Emoji>🍣</Emoji>{' '}
        を食べようとしましたが、残念ながら料理の中にはありませんでした。
      </P>
      <Ul size="lg">
        <UlLi>
          <Emoji size="lg">🍽</Emoji> 料理 → <Emoji size="lg">🥪</Emoji>
        </UlLi>
        <UlLi>
          <Emoji size="lg">😋</Emoji> 食べる → <Emoji size="lg">🍣</Emoji>
        </UlLi>
        <UlLi>
          <Emoji size="lg">👨‍🍳</Emoji> 調理中 → <Emoji size="lg">🍔</Emoji>
        </UlLi>
      </Ul>
      <P>
        <Em>というわけで、あなたは何も食べれませんでした</Em>。
      </P>
      <P>
        シェフ <Emoji>👨‍🍳</Emoji> が作ったサラダ <Emoji>🍔</Emoji>{' '}
        と、サンドイッチ <Emoji>🥪</Emoji> は<Strong>入れ替わりません</Strong>
        。サラダ <Emoji>🍔</Emoji> は<Strong>消えてなくなります</Strong>
        。お寿司 <Emoji>🍣</Emoji> も消えます。
      </P>
      {episode4[i++]()}
      <P>
        というわけで、残るのはサンドイッチ <Emoji>🥪</Emoji> だけになります。
      </P>
      {episode4[i++]()}
      <H3>あとで食べるものリスト</H3>
      <P>
        次は、
        <Em>下段に3マスもある</Em>
        問題を見ていきましょう。たとえばこちら:
      </P>
      {episode4[i++]()}
      <P>
        どう読み取ればいいか説明しましょう。まず
        <Em>
          <Strong>下段の一番右のマスは</Strong>
          、選べる食事 <Emoji>🍽</Emoji> を表しています。
        </Em>
      </P>
      {episode4[i++]()}
      <P>
        次に、
        <Em>
          <Strong>下段の一番左のマス</Strong>
          は、あなた <Emoji>😋</Emoji> が次に食べるものを表しています。
        </Em>
      </P>
      {episode4[i++]()}
      <P>
        そして
        <Strong>下段の一番左と一番右以外</Strong>
        のマスは、
        <Em>
          <Strong>
            「あとで食べるものリスト <Emoji>😎</Emoji>」
          </Strong>
        </Em>
        です。
      </P>
      {episode4[i++]()}
      <P>
        ここだと、
        <Strong>サンドイッチ</Strong> <Emoji size="mdlg">🥪</Emoji>{' '}
        が「あとで食べるものリスト <Emoji>😎</Emoji>
        」に入っています。
      </P>
      <P>
        <Em>
          「あとで食べるものリスト <Emoji>😎</Emoji>
          」の中にある料理は、現段階では
          <Strong>無視してかまいません</Strong>。
        </Em>
      </P>
      <P>
        <Strong>次のページ</Strong>
        で、「あとで食べるものリスト <Emoji>😎</Emoji>
        」の料理が
        <Em>
          「次に食べるもの <Emoji>😋</Emoji>」 に変わる
        </Em>
        例を紹介しますので、それまで無視しちゃってください！
      </P>
      <EmojiSeparator emojis={['😎', '➡️', '😋']} />
      <P>
        最後に、
        <Strong>上段のマス</Strong>
        は、シェフ <Emoji>👨‍🍳</Emoji>{' '}
        が作っている料理を表します。これは以前と変わりませんね。
      </P>
      {episode4[i++]()}
      <P>
        では、
        {h('ycTryUntilDone')}:
      </P>
      {episode4[i++]()}
      <P>
        <Strong>もう一度おさらい:</Strong>{' '}
        <Em>
          「あとで食べるものリスト <Emoji>😎</Emoji>
          」の中にある料理は、現段階では
          <Strong>無視してかまいません</Strong>。
        </Em>
      </P>
      <P>
        <Strong>次のページ</Strong>
        で、「あとで食べるものリスト <Emoji>😎</Emoji>
        」の料理が「次に食べるもの <Emoji>😋</Emoji>」 に<Strong>変わる</Strong>
        例を紹介します。
      </P>
      <EmojiSeparator emojis={['😎', '➡', '😋']} />
      <H3>クイズ: 下段が4マスの問題</H3>
      <P>
        では、下の
        {h('ycBentoBox')}
        を最後まで進めたらどうなると思いますか？
      </P>
      {episode4[i++]()}
      <P>
        <Strong>ヒント:</Strong>
      </P>
      <Ul>
        <UlLi>
          食べれる料理は
          <Em>下段の一番右</Em>
          にあるステーキのみ。
          <Emoji size="mdlg">🍗</Emoji>
        </UlLi>
        <UlLi>
          あなたが次に食べるのは、
          <Em>下段の一番左</Em>
          にあるお寿司。
          <Emoji size="mdlg">🍣</Emoji>
        </UlLi>
        <UlLi>
          <Em>下段の他のマス</Em>
          は「あとで食べるものリスト <Emoji>😎</Emoji>
          」なので、無視してよい。
        </UlLi>
      </Ul>
      {episode4[i++]()}
      <P>どうなるか考えてみてから、下のボタンを押してみてください！</P>
      <YcNextLessonButton nextEpisodeNumber={4} />
    </>
  )
}
