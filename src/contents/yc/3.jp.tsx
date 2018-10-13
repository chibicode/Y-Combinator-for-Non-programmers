import React from 'react'
import {
  Em,
  H3,
  InternalLink,
  Ol,
  OlLi,
  P,
  Strong,
  Ul,
  UlLi
} from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import { episode3 } from 'src/components/Yc/AllExpressionRunners'
import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
import h from 'src/lib/h'
import { yc } from 'src/lib/pathHelpers'

export default () => {
  let i = 0
  return (
    <>
      <P>
        <Strong>
          <InternalLink href={yc(2)}>第2章で出したクイズ</InternalLink>
          の答え合わせをしましょう。
        </Strong>
      </P>
      {episode3[i++]()}
      <P>
        <Strong>答え:</Strong> この
        {h('ycBentoBox')}
        は、以下の状況を表しています。
      </P>
      <Ul size="lg">
        <UlLi>
          <Emoji size="lg">🍽</Emoji> 料理 → <Emoji size="lg">🥗</Emoji>
        </UlLi>
        <UlLi>
          <Emoji size="lg">😋</Emoji> 食べる → <Emoji size="lg">🥗</Emoji>
        </UlLi>
        <UlLi>
          <Emoji size="lg">👨‍🍳</Emoji> 調理中 → <Emoji size="lg">🥩</Emoji>
        </UlLi>
      </Ul>
      <P>それぞれの料理に印をつけてみると、こうなります。</P>
      {episode3[i++]()}
      <H3>その次はどうなる？</H3>
      <P>
        上の状況だと、あなたがサラダ <Emoji>🥗</Emoji>{' '}
        を食べたあと、シェフはステーキ <Emoji>🥩</Emoji>{' '}
        を持ってきます。ということは、次のステップでは、
        <Em>
          料理はステーキ <Emoji>🥩</Emoji> だけ
        </Em>
        になりますね。
      </P>
      <Ul size="lg">
        <UlLi>
          <Emoji size="lg">🍽</Emoji> 料理 → <Emoji size="lg">🥩</Emoji>
        </UlLi>
      </Ul>
      <P>
        <Strong>
          すると、
          {h('ycBentoBox')}
          はどうなるか。
        </Strong>
      </P>
      <Ul>
        <UlLi>
          右下のサラダ <Emoji>🥗</Emoji> は、ステーキ <Emoji>🥩</Emoji> と
          <Em>
            入れ替わる。 <Emoji>🆕</Emoji>
          </Em>
        </UlLi>
        <UlLi>
          左下のサラダ <Emoji>🥗</Emoji> と、上のステーキ <Emoji>🥩</Emoji>{' '}
          のマスは
          <Em>消える</Em>。
        </UlLi>
      </Ul>
      {episode3[i++]()}
      <P>つまり、次のようになります:</P>
      {episode3[i++]()}
      <H3>「次へ」ボタンと「前へ」ボタン</H3>
      <P>
        遷移をわかりやすくするために、「
        {h('ycNext')}
        」ボタンと「
        {h('ycPrevious')}
        」ボタンを設置してみました。
      </P>
      <Ol>
        <OlLi>
          {h('ycBentoBox')}
          の下にある、
          <Em>{h('ycNext')} ボタンを何度か押してみてください</Em>
          。いずれ {h('ycDone')} になり、料理がステーキ <Emoji>🥩</Emoji>{' '}
          だけになるはずです。
        </OlLi>
        <OlLi>
          そしたら今度は、{' '}
          <Em>{h('ycPrevious')} ボタンを何度か押してみてください</Em>
          。元に戻るはずです。
        </OlLi>
      </Ol>
      {episode3[i++]()}
      <P>
        こちらは前回で登場したもうひとつの例です。同じようにボタンを試してみてください。
      </P>
      {episode3[i++]()}
      <P>コツがつかめてきたでしょうか？</P>
      <EmojiSeparator emojis={['⏪', '🤗', '⏩']} />
      <P>では、クイズに挑戦してみましょう。</P>
      <H3>クイズ</H3>
      <P>
        下の
        {h('ycBentoBox')}
        を「次へ」とどんどん進めたとします。
      </P>
      {episode3[i++]()}
      <P>
        <Strong>YesかNoで答えてみてください:</Strong>{' '}
        <Em>
          最終的に
          {h('ycBentoBox')}
          は次のようになるでしょうか？
        </Em>
      </P>
      {episode3[i++]()}
      <P>答えに自信がなくても大丈夫です。次章で説明しますので！</P>
      <YcNextLessonButton nextEpisodeNumber={4} />
    </>
  )
}
