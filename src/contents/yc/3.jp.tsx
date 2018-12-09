import React from 'react'
import { Em, H3, P, Strong, Ul, UlLi } from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import { episode4 } from 'src/components/Yc/AllExpressionRunners'
import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
import h from 'src/lib/h'

export default () => {
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
          <Emoji size="lg">👨‍🍳</Emoji> 調理中 → <Emoji size="lg">🥗</Emoji>
        </UlLi>
      </Ul>
      <P>
        <Em>というわけで、あなたは何も食べれませんでした</Em>。
      </P>
      <P>
        シェフ <Emoji>👨‍🍳</Emoji> が作ったサラダ <Emoji>🥗</Emoji>{' '}
        と、サンドイッチ <Emoji>🥪</Emoji> は<Strong>入れ替わりません</Strong>
        。サラダ <Emoji>🥗</Emoji> は<Strong>消えてなくなります</Strong>
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
