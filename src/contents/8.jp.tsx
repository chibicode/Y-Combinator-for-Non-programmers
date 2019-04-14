import React from 'react'
import { Em, H3, P, Strong } from 'src/components/ContentTags'
import EmojiSeparator from 'src/components/EmojiSeparator'
import { episode9 } from 'src/components/Yc/AllExpressionRunners'
import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
import h from 'src/lib/h'
import EpisodeCardList from 'src/components/EpisodeCardList'

export default () => <EpisodeCardList cards={[]} />

export const old = () => {
  let i = 0
  return (
    <>
      {h('ycQuizReview', 8)}
      <P>{h('ycpressPlay')}:</P>
      {episode9[i++]()}
      <P>つまり、最終的にはこうなりました。</P>
      {episode9[i++]()}
      <P>
        これの暗号は
        <Strong>3</Strong>
        ですね。
      </P>
      <P>
        もともとの暗号は、
        <Strong>2</Strong>
        でした。
      </P>
      {episode9[i++]()}
      <P>
        つまり、
        <Em>
          暗号の数字が
          <Strong>1増えた</Strong>
          のです
        </Em>
        。
      </P>
      <P>
        ということは、合体させたこの弁当箱は、
        <Strong>「暗号の数字に1を足す」効果がある</Strong>
        といえます。
      </P>
      {episode9[i++]()}
      <EmojiSeparator emojis={['🍱', '➕', '1️⃣']} />
      <P>他の弁当箱でも試してみましょう！</P>
      <H3>4 + 1 = 5</H3>
      <P>
        こちらの弁当箱の暗号は
        <Strong>4</Strong>
        ですね。
      </P>
      {episode9[i++]()}
      <P>
        これをまた例の
        <Strong>「暗号の数字に1を足す」効果がある弁当箱</Strong>
        と合体させてみましたので、
        {h('ycpressPlay')}。
      </P>
      {episode9[i++]()}
      <P>
        <Em>
          予想通り、暗号は
          <Strong>4 + 1 = 5</Strong>
          になりました！
        </Em>
      </P>
      {episode9[i++]()}
      <P>
        <Strong>というわけで:</Strong> この弁当箱に
        <Strong>「暗号の数字に1を足す」</Strong>
        効果があるのは確かなようです。
      </P>
      {episode9[i++]()}
      <EmojiSeparator emojis={['🍱', '➕', '1️⃣']} />
      <H3>クイズ</H3>
      <P>
        <Strong>では、ここで問題です。</Strong>
        <Em>こちらの弁当箱にはどんな効果があるでしょう？</Em>
      </P>
      {episode9[i++]()}
      <P>
        <Em>
          <Strong>ヒント:</Strong> この弁当箱は
          <Strong>暗号があるふたつの</Strong>
          弁当箱と組み合わせるようにできています。
        </Em>
      </P>
      <P>
        たとえば、こちらの暗号が
        <Strong>2</Strong>
        の弁当箱と、
      </P>
      {episode9[i++]()}
      <P>
        こちらの暗号が
        <Strong>3</Strong>
        の弁当箱と、
      </P>
      {episode9[i++]()}
      <P>先ほどの弁当箱を合体させると、こうなります。</P>
      {episode9[i++]()}
      <P>
        <Strong>問題:</Strong> これを
        {h('ycDone')}
        になるまで進めたらどうなるでしょう？
      </P>
      <P>
        もともとの暗号は2と3でした。
        <Em>新しい暗号は何になるでしょう？</Em>
      </P>
      <YcNextLessonButton nextEpisodeNumber={9} />
    </>
  )
}
