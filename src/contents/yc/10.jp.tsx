import React from 'react'
import { Em, H3, P, Strong, Ul, UlLi } from 'src/components/ContentTags'
import EmojiSeparator from 'src/components/EmojiSeparator'
import { episode11 } from 'src/components/Yc/AllExpressionRunners'
import InlineEmojiBoxes from 'src/components/Yc/InlineEmojiBoxes'
import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
import h from 'src/lib/h'

export default () => {
  let i = 0
  return (
    <>
      <P>
        今回は、新しいタイプの
        <Strong>弁当箱の暗号</Strong>
        について解説します。その名も「
        <Strong>秘密の『二択』暗号</Strong>
        」です。
      </P>
      <P>
        <Em>
          <Strong>「二択」</Strong>
          とは、
          <Strong>「はい」</Strong>か<Strong>「いいえ」</Strong>
          の二択のことです。
        </Em>
      </P>
      <H3>挑戦状</H3>
      <P>
        このページにあるそれぞれの
        {h('ycBentoBox')}
        には、
        <Strong>あるパターンに基づいた「二択」暗号</Strong>
        が隠されています。
      </P>
      <P>
        <Em>
          <Strong>あなたへの挑戦状:</Strong>{' '}
          「二択」暗号がどんなパターンに基づいているか考えてみてください！
        </Em>
      </P>
      <EmojiSeparator emojis={['🔵', '🧐', '️🔴']} />
      <H3>二択暗号の例</H3>
      <P>
        こちらに隠されている暗号は「
        <Strong>はい</Strong>
        」です:
      </P>
      {episode11[i++]()}
      <P>
        こちらに隠されている暗号は「
        <Strong>いいえ</Strong>
        」です:
      </P>
      {episode11[i++]()}
      <P>
        こちらに隠されている暗号は「
        <Strong>はい</Strong>
        」です:
      </P>
      {episode11[i++]()}
      <P>パターンがわかりましたか？では、問題に挑戦してみましょう。</P>
      <H3>クイズ: 二択暗号を解きあかせ</H3>
      <P>
        次の
        {h('ycBentoBox')}
        に隠されている二択暗号は何でしょう？
      </P>
      {episode11[i++]()}
      <EmojiSeparator emojis={['🤔', '🤔', '🤔']} />
      <H3>答え</H3>
      <P>
        <Strong>答え:</Strong>{' '}
        <Em>
          隠されている暗号は「
          <Strong>いいえ</Strong>
          」です。
        </Em>
      </P>
      <P>
        <Strong>「はい」になるパターン:</Strong>
      </P>
      <Ul>
        <UlLi>
          <Em>
            二択暗号が「
            <Strong>はい</Strong>
            」の弁当箱は、このパターンに沿っています:{' '}
            <InlineEmojiBoxes emojis={['🔵', '🔴', '🔵']} />
          </Em>
        </UlLi>
        <UlLi>
          例: <InlineEmojiBoxes emojis={['🍗', '🍟', '🍗']} /> と{' '}
          <InlineEmojiBoxes emojis={['🌭', '🍚', '🌭']} />
        </UlLi>
      </Ul>
      <P>
        <Strong>「いいえ」になるパターン:</Strong>
      </P>
      <Ul>
        <UlLi>
          <Em>
            二択暗号が「
            <Strong>いいえ</Strong>
            」の弁当箱は、このパターンに沿っています:{' '}
            <InlineEmojiBoxes emojis={['🔵', '🔴', '🔴']} />
          </Em>
        </UlLi>
        <UlLi>
          例: <InlineEmojiBoxes emojis={['🍕', '🍛', '🍛']} /> と{' '}
          <InlineEmojiBoxes emojis={['🍝', '🥕', '🥕']} />
        </UlLi>
      </Ul>
      <P>
        <Strong>簡単すぎましたか?</Strong>{' '}
        では、もう少し難しい問題を出しましょう。
      </P>
      <EmojiSeparator emojis={['🔵', '🧐', '️🔴']} />
      <H3>次はどうなる？</H3>
      <P>
        仮に、
        <Em>
          二択暗号が
          {h('ycYes')}
        </Em>{' '}
        の{h('ycBentoBox')}
        があるとします。
      </P>
      {episode11[i++]()}
      <P>
        これを次の
        {h('ycBentoBox')}と<Strong>合体させます</Strong>:
      </P>
      {episode11[i++]()}
      <P>合体させるとこうなります:</P>
      {episode11[i++]()}
      <P>
        <Strong>問題:</Strong> では、上の弁当箱を
        {h('ycDone')}
        になるまで進めたら、いったいどうなるでしょう？
      </P>
      <EmojiSeparator emojis={['🤔', '🤔', '🤔']} />
      <H3>実際にやってみましょう！</H3>
      <P>{h('ycPlayUntilDone')}:</P>
      {episode11[i++]()}
      <P>結果はこうなりました:</P>
      {episode11[i++]()}
      <P>
        <InlineEmojiBoxes emojis={['🥪', '🍔', '🍔']} /> のパターンは{' '}
        <InlineEmojiBoxes emojis={['🔵', '🔴', '🔴']} /> ですので、
        <Em>
          二択暗号は
          {h('ycNo')} でした。
        </Em>
      </P>
      <H3>まとめると:</H3>
      <Ul>
        <UlLi>
          最初は
          <InlineEmojiBoxes emojis={['🍗', '🍟', '🍗']} />
          、すなわち二択暗号が
          {h('ycYes')} だった。
        </UlLi>
        <UlLi>
          最終的に
          <InlineEmojiBoxes emojis={['🥪', '🍔', '🍔']} />
          になり、二択暗号が
          {h('ycNo')} になった。
        </UlLi>
        <UlLi>
          <Em>
            つまり、
            {h('ycYes')} が{h('ycNo')} になった。
          </Em>
        </UlLi>
      </Ul>
      <P>うーむ、なぜでしょう。興味深いですね！</P>
      <EmojiSeparator emojis={['🤔', '🤔', '🤔']} />
      <H3>クイズ</H3>
      <P>
        ではここでクイズです。もしも先ほどと違い、
        {h('ycNo')} からはじめたらどうなるでしょう？つまり、こちらの
        {h('ycNo')} の{h('ycBentoBox')}
        と、
      </P>
      {episode11[i++]()}
      <P>
        先ほどの
        {h('ycBentoBox')}
        を合わせます。
      </P>
      {episode11[i++]()}
      <P>
        <Strong>問題:</Strong> この
        {h('ycBentoBox')}
        は最終的にどうなるでしょう？
      </P>
      {episode11[i++]()}
      <P>
        <Em>
          先ほどと反対に、
          {h('ycYes')} になると思いますか？
        </Em>
      </P>
      <YcNextLessonButton nextEpisodeNumber={11} />
    </>
  )
}
