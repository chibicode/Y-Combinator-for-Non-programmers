import React from 'react'
import { Em, H3, P, Strong } from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import { episode10 } from 'src/components/Yc/AllExpressionRunners'
import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
import h from 'src/lib/h'

export default () => {
  let i = 0
  return (
    <>
      {h('ycQuizReview', 9)}
      <P>{h('ycPlayUntilDone')}:</P>
      <P>
        (<Strong>ちなみに:</Strong> ステップが多いため、
        {h('ycPlay')} ボタンの実行速度を少し速くしています。)
      </P>
      {episode10[i++]()}
      <P>
        最終的に暗号は
        <Strong>5</Strong>
        になりました。
      </P>
      {episode10[i++]()}
      <P>
        最初は、暗号が
        <Strong>2</Strong>と<Strong>3</Strong>
        の弁当箱からはじめましたよね。
      </P>
      {episode10[i++]()}
      {episode10[i++]()}
      <P>
        結果が
        <Strong>5</Strong>
        ということは、つまり
        <Strong>2 + 3</Strong>
        を計算したことになります。
        <Em>
          つまり、
          <Strong>足し算</Strong>
          をやったのです。
        </Em>
        こちらの弁当箱は、
        <Em>
          <Strong>ふたつの暗号の数字を合計することができるのです</Strong>。
        </Em>
      </P>
      {episode10[i++]()}
      <P>
        だから、下の弁当箱は
        <Strong>2 + 3</Strong>
        を表しているというわけです。
      </P>
      {episode10[i++]()}
      <H3>ここまでのまとめ</H3>
      <P>
        <Em>
          {h('ycBentoBox')}
          を使えば、
          <Strong>ふたつの数字の足し算ができる</Strong>。
        </Em>
      </P>
      <EmojiSeparator emojis={['🍱', '➕', '🍱']} />
      <H3>掛け算もできます</H3>
      <P>
        足し算だけでなく、
        <Em>
          <Strong>ふたつの数字の掛け算</Strong>
        </Em>
        も、弁当箱を使えばできちゃいます。
      </P>
      <EmojiSeparator emojis={['🍱', '✖️', '🍱']} />
      <P>
        <Strong>掛け算</Strong>
        をするための弁当箱はこちら。
      </P>
      {episode10[i++]()}
      <P>
        <Strong>さっそくやってみましょう！</Strong>
        <Em>
          <Strong>2</Strong> × <Strong>3</Strong>
        </Em>
        を計算してみます。
      </P>
      <P>
        掛け算をするのに、暗号がそれぞれ
        <Strong>2</Strong>と<Strong>3</Strong>
        の弁当箱を使います。
      </P>
      {episode10[i++]()}
      {episode10[i++]()}
      <P>
        さきほどの弁当箱と組み合わせれば、
        <Strong>2</Strong> × <Strong>3</Strong>
        を計算してくれます。
        {h('ycPlayUntilDone')}。
      </P>
      {episode10[i++]()}
      <P>
        最終的に暗号が
        <Strong>6</Strong>
        の弁当箱になりました。
        <Strong>2</Strong> × <Strong>3</Strong>
        と同じですね。
      </P>
      {episode10[i++]()}
      <P>
        というわけで、こちらの弁当箱が
        <Strong>2</Strong> × <Strong>3</Strong>
        を計算してくれることを確かめることができました！
      </P>
      {episode10[i++]()}
      <H3>ここまでのまとめ</H3>
      <P>
        <Em>
          {h('ycBentoBox')}は<Strong>足し算</Strong>も<Strong>掛け算</Strong>
          もできる。
        </Em>
      </P>
      {episode10[i++]()}
      {episode10[i++]()}
      <EmojiSeparator emojis={['➕', '🍱', '✖️']} />
      <P>
        <Strong>さらに:</Strong> ここでは詳しく書きませんが、弁当箱を使って
        <Strong>引き算</Strong>や<Strong>割り算</Strong>
        をすることもできます。
      </P>
      <EmojiSeparator emojis={['➖', '🍱', '➗']} />
      <P>
        <Strong>ということは:</Strong>{' '}
        <Em>
          弁当箱は
          <Strong>電卓のように使える</Strong>
          ということです。
        </Em>
      </P>
      <P>とっても興味深いと思いませんか？</P>
      <EmojiSeparator emojis={['🔢', '😲', '🔢']} />
      <H3>弁当箱は「論理」もできる</H3>
      <P>
        弁当箱は計算だけでなく、
        <Strong>論理</Strong>
        もできます。
      </P>
      <P>
        次のページでは、弁当箱を使って
        <Strong>論理演算</Strong>
        をやる方法を紹介していきます。
      </P>
      <YcNextLessonButton nextEpisodeNumber={11} />
    </>
  )
}
