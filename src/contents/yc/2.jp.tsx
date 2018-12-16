import React from 'react'
import {
  Em,
  H3,
  Ol,
  OlLi,
  P,
  Strong,
  Ul,
  UlLi
} from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import { episode2 } from 'src/components/Yc/AllExpressionRunners'
import InlineBackground from 'src/components/Yc/InlineBackground'
import TopRightBadge from 'src/components/Yc/TopRightBadge'
import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
import h from 'src/lib/h'

export default () => {
  let i = 0
  return (
    <>
      {h('ycQuizReview', 2)}
      {episode2[i++]()}
      <P>
        <Strong>答え:</Strong> それぞれの料理に印をつけてみると、こうなります。
      </P>
      {episode2[i++]()}
      <P>
        つまり、
        {h('ycBentoBox')}
        は、以下の状況を表しています。
      </P>
      <Ul size="lg">
        <UlLi>
          <Emoji size="lg">🍽</Emoji> 料理 → <Emoji size="lg">🍔</Emoji>
        </UlLi>
        <UlLi>
          <Emoji size="lg">😋</Emoji> 食べる → <Emoji size="lg">🍔</Emoji>
        </UlLi>
        <UlLi>
          <Emoji size="lg">👨‍🍳</Emoji> 調理中 → <Emoji size="lg">🍗</Emoji>
        </UlLi>
      </Ul>

      <H3>その次はどうなる？</H3>
      <P>
        上の状況だと、あなたがサラダ <Emoji>🍔</Emoji>{' '}
        を食べたあと、シェフはステーキ <Emoji>🍗</Emoji>{' '}
        を持ってきます。ということは、最終的には
        <Em>
          料理はステーキ <Emoji>🍗</Emoji> だけ
        </Em>
        になりますね。
      </P>
      <Ul size="lg">
        <UlLi>
          <Emoji size="lg">🍽</Emoji> 料理 → <Emoji size="lg">🍗</Emoji>
        </UlLi>
      </Ul>
      <P>
        <Strong>
          では、
          {h('ycBentoBox')}
          はどうなるか見てみましょう。
        </Strong>
      </P>
      {episode2[i++]()}
      <P>
        右下のサラダ <Emoji>🍔</Emoji> は、あなたが食べたい料理{' '}
        <Emoji>😋</Emoji> です。これを{' '}
        <TopRightBadge inline topRightBadgeType="match" /> で表します。
      </P>
      {episode2[i++]()}
      <P>
        あなたがサラダ <Emoji>🍔</Emoji> を食べると、それがステーキ{' '}
        <Emoji>🍗</Emoji> と<Em>入れ替わります</Em>
        。これを <TopRightBadge inline topRightBadgeType="betaReduced" />{' '}
        で表します。
      </P>
      {episode2[i++]()}
      <P>
        食べ終わると、左下のサラダと <Emoji>🍔</Emoji> 上段のステーキ{' '}
        <Emoji>🍗</Emoji> は<Em>消えます</Em>
        。これを、
        <Em>
          バツ印 <InlineBackground bgPattern="cross" /> で示します。
        </Em>
      </P>
      {episode2[i++]()}
      <P>
        最終的に、残ったのはステーキ <Emoji>🍗</Emoji> だけになりました。
      </P>
      {episode2[i++]()}
      <H3>「次へ」ボタンと「前へ」ボタン</H3>
      <P>
        遷移をわかりやすくするために、「
        {h('ycNext')}
        」ボタンと「
        {h('ycPrevious')}
        」ボタンを設置してみました。
      </P>
      <Ol>
        <OlLi>{h('ycTryUntilDone')}。</OlLi>
        <OlLi>
          そしたら今度は、{' '}
          <Em>{h('ycPrevious')} ボタンを何度か押してみてください</Em>。
        </OlLi>
      </Ol>
      {episode2[i++]()}
      <P>
        こちらは前回で登場したもうひとつの例です。同じようにボタンを試してみてください。
      </P>
      {episode2[i++]()}
      <P>コツがつかめてきたでしょうか？</P>
      <EmojiSeparator emojis={['⬅️', '🤗', '➡️']} />
      <P>では、クイズに挑戦してみましょう。</P>
      <H3>クイズ</H3>
      <P>
        下の
        {h('ycBentoBox')}を {h('ycNext')} とどんどん進めたとします。
      </P>
      {episode2[i++]()}
      <P>
        <Strong>YesかNoで答えてみてください:</Strong>{' '}
        <Em>
          最終的に
          {h('ycBentoBox')}
          は次のようになるでしょうか？
        </Em>
      </P>
      {episode2[i++]()}
      <P>答えに自信がなくても大丈夫です。次のページで説明しますので！</P>
      <YcNextLessonButton nextEpisodeNumber={3} />
    </>
  )
}
