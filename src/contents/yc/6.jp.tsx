import React from 'react'
import { Em, H3, P, Strong } from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import { episode6 } from 'src/components/Yc/AllExpressionRunners'
import BottomRightBadge from 'src/components/Yc/BottomRightBadge'
import InlinePrioritiesLabel from 'src/components/Yc/InlinePrioritiesLabel'
import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
import h from 'src/lib/h'

export default () => {
  let i = 0
  return (
    <>
      {h('ycQuizReview', 5)}
      <P>{h('ycTryUntilDone')}:</P>
      {episode6[i++]()}
      <P>
        というわけで、答えは
        <Strong>お寿司</Strong> <Emoji>🍣</Emoji> です。
      </P>
      <P>
        <Strong>お気づきかもしれませんが、</Strong>
        実行をスピーディーにするために、{' '}
        <BottomRightBadge bottomRightBadgeType="funcBound" inline />{' '}
        <BottomRightBadge bottomRightBadgeType="funcUnbound" inline />{' '}
        <BottomRightBadge bottomRightBadgeType="funcArg" inline />{' '}
        <BottomRightBadge bottomRightBadgeType="callArg" inline />{' '}
        をすべて同時に表示しています。
      </P>
      <H3>続いてはこちら</H3>
      <P>
        今度はこの
        {h('ycBentoBox')}
        を見てみましょう:
      </P>
      {episode6[i++]()}
      <P>
        <Em>
          <InlinePrioritiesLabel>1</InlinePrioritiesLabel> が4つもありますよね。
        </Em>{' '}
        どれから先にやればいいのでしょうか？
      </P>
      <P>
        <Strong>答え:</Strong>{' '}
        <Em>
          <Strong>いちばん左にある</Strong>{' '}
          <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
          のペアからはじめます。
        </Em>
      </P>
      <H3>いちばん左</H3>
      <P>
        <Em>{h('ycNext')} を押してみてください</Em>
        。一番左にあるふたつの{' '}
        <InlinePrioritiesLabel revert>1</InlinePrioritiesLabel>{' '}
        の部分からはじめるということが分かります。
      </P>
      {episode6[i++]()}
      <P>このまま最後まで進めてしまいましょう:</P>
      {episode6[i++]()}
      <H3>ここまでのまとめ</H3>
      <P>
        <InlinePrioritiesLabel>1</InlinePrioritiesLabel> が複数あるときは、
        <Em>
          <Strong>いちばん左にある</Strong>{' '}
          <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
          のペアからはじめること。
        </Em>
      </P>
      <EmojiSeparator emojis={['⬅️', '🤔', '⬅️']} />
      <H3>1のペアからはじめられない場合</H3>
      <P>
        <Strong>
          たまに、
          <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
          のペアからはじめられない場合があります。
        </Strong>
        こちらをご覧ください:
      </P>
      {episode6[i++]()}
      <P>
        <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
        のペアはこちらですが、
        <Em>
          これはマスがふたつしかないので、先に進むことができないやつです！
        </Em>
      </P>
      {episode6[i++]()}
      <P>
        このように
        <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
        のペア からはじめられない時は、
        <InlinePrioritiesLabel>2</InlinePrioritiesLabel>
        のペア からはじめる必要があります。
      </P>
      {episode6[i++]()}
      <H3>ここまでのまとめ</H3>
      <P>
        <Em>
          <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
          のペアからはじめられない時は、
          <InlinePrioritiesLabel>2</InlinePrioritiesLabel>
          のペアからはじめ、
        </Em>
        それが無理なら次の数字へ…と続ける。
      </P>
      <P>それでは、ここでまたクイズです！</P>
      <H3>クイズ</H3>
      <P>
        下の
        {h('ycBentoBox')}を {h('ycNext')} とどんどん進めたとします。
      </P>
      {episode6[i++]()}
      <P>
        <Strong>YesかNoで答えてみてください:</Strong>{' '}
        <Em>最終的に {h('ycBentoBox')} は次のようになるでしょうか？</Em>
      </P>
      {episode6[i++]()}
      <P>
        <Strong>これはちょっと難しい問題ですが</Strong>
        、諦めずにチャレンジしてみてください！
      </P>
      <YcNextLessonButton nextEpisodeNumber={7} />
    </>
  )
}
