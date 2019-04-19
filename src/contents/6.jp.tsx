import React from 'react'
import {
  InlineHeader,
  Em,
  H3,
  P,
  Strong,
  Ul,
  UlLi
} from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import { episode7 } from 'src/components/Yc/AllExpressionRunners'
import BottomRightBadge from 'src/components/Yc/BottomRightBadge'
import TopBadge from 'src/components/Yc/TopBadge'
import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
import h from 'src/lib/h'
import H from 'src/components/H'
import EpisodeCardList from 'src/components/EpisodeCardList'
import AER from 'src/components/Yc/AllExpressionRunners'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>弁当箱の暗号</>,
        content: (
          <>
            <P>
              このページにあるそれぞれの
              {h('ycBentoBox')}には、
              <Strong>あるパターンに基づいた暗号</Strong>
              が隠されています。
            </P>
            <EmojiSeparator emojis={['❓', '🧐', '️❓']} />
            <P>
              <InlineHeader>あなたへの挑戦状:</InlineHeader>{' '}
              <Em>暗号がどんな法則に基づいているか考えてみてください！</Em>
            </P>
          </>
        )
      },
      {
        title: (
          <>
            こちらに隠されている暗号は<Em>「0」</Em>です
          </>
        ),
        content: (
          <>
            {AER.e6E1}
            <P>
              これだけでは暗号の法則がわからないと思うので、もう2個見ていきましょう！
            </P>
          </>
        )
      },
      {
        title: (
          <>
            こちらに隠されている暗号は<Em>「1」</Em>です
          </>
        ),
        content: (
          <>
            {AER.e6E2}
            <P>そろそろ分かりましたか？あと1個見ていきましょう！</P>
          </>
        )
      },
      {
        title: (
          <>
            こちらに隠されている暗号は<Em>「2」</Em>です
          </>
        ),
        content: (
          <>
            {AER.e6E3}
            <P>
              もうお分かりでしょうか？
              <H args={{ name: 'yesNoQuiz' }} />
              で確かめてみましょう！
            </P>
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
      {h('ycQuizReview', 6)}
      <P>{h('ycTryUntilDone')}:</P>
      {episode7[i++]()}
      <P>
        最終的には以下のようになったので、答えは
        <Strong>Yes</Strong>
        でした。
      </P>
      {episode7[i++]()}
      <P>
        <Strong>ちょっと難しかった部分:</Strong>{' '}
        下のステップはちょっと難しかったかもしれません。(
        <Em>{h('ycNext')} を押してみてください</Em>
        ):
      </P>
      {episode7[i++]()}
      <P>
        ご覧の通り、
        <Em>
          <BottomRightBadge bottomRightBadgeType="callArg" inline />
          がついている料理がすべてマッチ{' '}
          <TopBadge inline topBadgeType="match" /> したマスにコピーされた
        </Em>
        のがわかります。
      </P>
      <P>
        では、いよいよ最後の基本ルール、
        <Strong>
          シャッフルタイム <Emoji>🔀</Emoji>
        </Strong>{' '}
        を紹介します。
      </P>
      <EmojiSeparator emojis={['🔀', '🔀', '🔀']} />
      <H3>シャッフルタイム</H3>
      <P>
        次の
        {h('ycBentoBox')}
        をご覧ください。{' '}
        <Em>
          <Strong>
            サンドイッチ <Emoji size="mdlg">🥪</Emoji>
          </Strong>{' '}
          が、
          <BottomRightBadge bottomRightBadgeType="callArg" inline /> と{' '}
          <BottomRightBadge bottomRightBadgeType="funcUnbound" inline /> と{' '}
          <BottomRightBadge bottomRightBadgeType="funcBound" inline />
          にあることに注目です。
        </Em>
        .
      </P>
      {episode7[i++]()}
      <P>
        <Em>
          同じ料理が
          <BottomRightBadge bottomRightBadgeType="callArg" inline /> と{' '}
          <BottomRightBadge bottomRightBadgeType="funcUnbound" inline /> と{' '}
          <BottomRightBadge bottomRightBadgeType="funcBound" inline />
          にあると、
          <Strong>
            シャッフルタイム <Emoji>🔀</Emoji>
          </Strong>{' '}
          になります。
        </Em>
      </P>
      {episode7[i++]()}
      <P>
        <Strong>
          シャッフルタイム <Emoji>🔀</Emoji>
        </Strong>{' '}
        では、次のようなことが起こります:
      </P>
      <Ul>
        <UlLi>
          <Em>
            <BottomRightBadge bottomRightBadgeType="funcUnbound" inline /> と{' '}
            <BottomRightBadge bottomRightBadgeType="funcBound" inline />{' '}
            にある全てのサンドイッチ <Emoji size="mdlg">🥪</Emoji>{' '}
            がまだ使われていない
            <Strong>新しい</Strong>
            料理になる。
          </Em>
        </UlLi>
        <UlLi>
          <BottomRightBadge bottomRightBadgeType="callArg" inline />{' '}
          にあるサンドイッチ <Emoji size="mdlg">🥪</Emoji> はそのまま。
        </UlLi>
      </Ul>
      <P>
        <Em>{h('ycNext')} を押して、どうなるか見てみましょう:</Em>
      </P>
      {episode7[i++]()}
      <P>
        というわけで、
        <Strong>
          サンドイッチ <Emoji size="mdlg">🥪</Emoji> がステーキ{' '}
          <Emoji size="mdlg">🍗</Emoji> に
        </Strong>
        なりました。
      </P>
      <EmojiSeparator emojis={['🥪', '🔀', '🍗']} />
      <P>
        あとはいつも通り、
        {h('ycTryUntilDone')}:
      </P>
      {episode7[i++]()}
      <P>以上です！</P>
      <H3>もうひとつの例</H3>
      <P>
        シャッフルタイム <Emoji>🔀</Emoji> が起きるもうひとつの例はこちら。
        {h('ycTryUntilDone')}:
      </P>
      {episode7[i++]()}
      <H3>それではここで…</H3>
      <P>良いお知らせがあります！</P>
      <Ul>
        <UlLi>
          <Strong>
            <Em>
              シャッフルタイム <Emoji>🔀</Emoji>{' '}
              のルールを暗記する必要はありません。
            </Em>
          </Strong>
          「こういうルールもあるんだ」と思っていただければ大丈夫です。
        </UlLi>
        <UlLi>
          <Strong>初級はこれで終了です！</Strong>
          次の中級からは面白い問題を解いていきます。
        </UlLi>
        <UlLi>
          <Strong>今回はクイズはなしです。</Strong>
          そのまま次のページに進んでください！
        </UlLi>
      </Ul>
      <YcNextLessonButton nextEpisodeNumber={7} />
    </>
  )
}
