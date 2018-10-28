import React from 'react'
import { Em, H3, P, Strong } from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import { episode6 } from 'src/components/Yc/AllExpressionRunners'
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
      <P>
        <Strong>今度は、</Strong>
        ステップ1-8に進むまで <Em>{h('ycNext')} を押してみてください</Em>。
      </P>
      {episode6[i++]()}
      <P>
        ステップ
        <Strong>1-8</Strong>
        のところで、
        <Em>
          シェフ <Emoji>👨‍🍳</Emoji> が用意した
          <Strong>ふたつ</Strong>
          のサラダ <Emoji>🥗</Emoji> とお寿司 <Emoji>🍣</Emoji>{' '}
          が入れ替わっている
        </Em>
        のに注目です。
      </P>
      <P>
        そのあとは、ステップ2-1に進むまで{' '}
        <Em>{h('ycNext')} を押してみてください</Em>。
      </P>
      {episode6[i++]()}
      <P>
        またしても、 <InlinePrioritiesLabel>1</InlinePrioritiesLabel>{' '}
        が4つ登場します。ここでも、
        <Strong>一番左のペア</Strong>
        を先にやります。
        {h('ycTryUntilDone')}。
      </P>
      {episode6[i++]()}
      <P>
        <Strong>以上です！</Strong>
        最初から最後まで通して見てみましょう:
      </P>
      {episode6[i++]()}
      <H3>まとめ</H3>
      <P>
        <InlinePrioritiesLabel>1</InlinePrioritiesLabel> が複数あるときは、
        <Em>
          <Strong>いちばん左にある</Strong>{' '}
          <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
          のペアからはじめること。
        </Em>
      </P>
      <EmojiSeparator emojis={['⬅️', '🤔', '⬅️']} />
      <P>それでは、ここでまたクイズです！</P>
      <H3>かなり難しいクイズ</H3>
      <P>
        今回のは難問です。下の
        {h('ycBentoBox')}を {h('ycNext')} とどんどん進めたとします。
      </P>
      {episode6[i++]()}
      <P>
        <Strong>YesかNoで答えてみてください:</Strong>{' '}
        <Em>最終的に {h('ycBentoBox')} は次のようになるでしょうか？</Em>
      </P>
      {episode6[i++]()}
      <P>
        <Strong>頭の中でやるには、</Strong>
        なかなか難しい問題ですよね。
      </P>
      <EmojiSeparator emojis={['🤯', '🤯', '🤯']} />
      <P>
        <Em>投げ出さずにチャレンジしてみてください！</Em>
      </P>
      <YcNextLessonButton nextEpisodeNumber={7} />
    </>
  )
}
