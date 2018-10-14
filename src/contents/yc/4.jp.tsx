import React from 'react'
import {
  Em,
  H3,
  InternalLink,
  P,
  Strong,
  Ul,
  UlLi
} from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import { episode4 } from 'src/components/Yc/AllExpressionRunners'
import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
import h from 'src/lib/h'
import { yc } from 'src/lib/pathHelpers'

export default () => {
  let i = 0
  return (
    <>
      <P>
        <InternalLink href={yc(3)}>第3章で出したクイズ</InternalLink>
        の答え合わせをしましょう。
      </P>
      <P>
        前回同様、ボタンを用意しました。
        <Em>
          {h('ycNext')}
          をクリックすれば
        </Em>
        答えがわかります。
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
        <Em>というわけで、あなたは何も食べれませんでした</Em>
        。シェフ <Emoji>👨‍🍳</Emoji> が作ったサラダ <Emoji>🥗</Emoji>{' '}
        と、サンドイッチ <Emoji>🥪</Emoji> は入れ替わりません。サラダ{' '}
        <Emoji>🥗</Emoji> は<Strong>消えてなくなります</Strong>。
      </P>
      {episode4[i++]()}
      <P>
        というわけで、残るのはサンドイッチ <Emoji>🥪</Emoji> だけになります。
      </P>
      {episode4[i++]()}
      <H3>下段が3マスの問題</H3>
      <P>次は、下段に3マスもある問題を見ていきましょう。たとえばこちら:</P>
      {episode4[i++]()}
      <P>
        どう読み取ればいいか説明しましょう。まず
        <Em>
          <Strong>下段は、一番左のマスを除き</Strong>
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
        最後に、
        <Strong>上段のマス</Strong>
        は、シェフ <Emoji>👨‍🍳</Emoji>{' '}
        が作っている料理を表します。これは以前と変わりませんね。
      </P>
      {episode4[i++]()}
      <P>
        <Em>
          {h('ycNext')}
          をクリックして
        </Em>
        どうなるか確かめてみましょう。
      </P>
      {episode4[i++]()}
      <P>
        難しくなってきました。では、次は
        <Em>下段が4マス</Em>
        の問題をやってみましょう。
      </P>
      <EmojiSeparator emojis={['🤯', '🤯', '🤯']} />
      <H3>クイズ: 下段が4マスの問題</H3>
      <P>
        たとえば、下の
        {h('ycBentoBox')}
        は、最終的にどうなると思いますか？
      </P>
      {episode4[i++]()}
      <P>
        <Strong>ヒント:</Strong>
      </P>
      <Ul>
        <UlLi>
          あなたが次に食べるのは、
          <Em>下段の一番左</Em>
          にあるお寿司。
          <Emoji>🍣</Emoji>
        </UlLi>
        <UlLi>
          <Em>下段の他のマス</Em>
          は選べる料理。
          <Emoji>🍽</Emoji>
        </UlLi>
      </Ul>
      {episode4[i++]()}
      <YcNextLessonButton nextEpisodeNumber={5} />
    </>
  )
}
