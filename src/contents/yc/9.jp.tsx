import React from 'react'
import {
  Em,
  H3,
  P,
  Strong
  // Table,
  // Td,
  // Th,
  // Ul,
  // UlLi
} from 'src/components/ContentTags'
// import Emoji from 'src/components/Emoji'
// import EmojiSeparator from 'src/components/EmojiSeparator'
import { episode9 } from 'src/components/Yc/AllExpressionRunners'
// import InlineEmojiBoxes from 'src/components/Yc/InlineEmojiBoxes'
// import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
import h from 'src/lib/h'
// import { colors } from 'src/lib/theme'

export default () => {
  let i = 0
  return (
    <>
      {h('ycQuizReview', 8)}
      <P>{h('ycPlayUntilDone')}:</P>
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
        {h('ycPlayUntilDone')}。
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
    </>
  )
}
