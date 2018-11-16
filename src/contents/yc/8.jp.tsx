import React from 'react'
import { Em, H3, P, Strong, Ul, UlLi } from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import { episode8 } from 'src/components/Yc/AllExpressionRunners'
import InlineEmojiBoxes from 'src/components/Yc/InlineEmojiBoxes'
import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
import h from 'src/lib/h'

export default () => {
  let i = 0
  return (
    <>
      <H3>{h('ycPlay')} ボタン</H3>
      <P>
        中級レベルでは新しく「
        <Strong>{h('ycPlay')}</Strong>
        」ボタンを使うことができます。
      </P>
      <P>
        <Em>下の 「{h('ycPlay')}」 を押してみてください。</Em>
      </P>
      {episode8[i++]()}
      <P>
        {h('ycBentoBox')}
        を自動で実行してくれる、便利な機能です！
      </P>
      <EmojiSeparator emojis={['▶️', '🤗', '▶️']} />
      <P>
        それでは本題に入りましょう。
        <Strong>ふたつのパターン</Strong>
        について説明します。
      </P>
      <H3>パターンその1</H3>
      <P>
        下の
        {h('ycBentoBox')}
        をご覧ください:
      </P>
      {episode8[i++]()}
      <P>
        仮に、
        <Emoji size="mdlg">🍣</Emoji> を <Emoji size="mdlg">1️⃣</Emoji> とし、{' '}
        <Emoji size="mdlg">🥪</Emoji> を <Emoji size="mdlg">2️⃣</Emoji>{' '}
        で表したとします。
      </P>
      <P>
        つまり、 <InlineEmojiBoxes emojis={['🍣', '🥪', '🍣']} /> は{' '}
        <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '1️⃣']} />{' '}
        というパターンといえます。
      </P>
      <H3>パターンその2</H3>
      <P>では、こちらはどんなパターンでしょうか？</P>
      {episode8[i++]()}
      <P>
        <Strong>答え:</Strong> 仮に <Emoji size="mdlg">🥗</Emoji> を{' '}
        <Emoji size="mdlg">1️⃣</Emoji> とし、 <Emoji size="mdlg">🥩</Emoji> を{' '}
        <Emoji size="mdlg">2️⃣</Emoji> とした場合、パターンは{' '}
        <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '2️⃣']} /> となります。
      </P>
      <H3>ここで質問です</H3>
      <P>
        <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '1️⃣']} /> のパターンの
        {h('ycBentoBox')}
        と、
      </P>
      {episode8[i++]()}
      <P>
        下の
        {h('ycBentoBox')}
        を組み合わせ、
      </P>
      {episode8[i++]()}
      <P>
        次のような
        {h('ycBentoBox')}
        を作ったとします。
      </P>
      {episode8[i++]()}
      <P>
        <Strong>問題:</Strong>{' '}
        <Em>
          これを
          {h('ycDone')}
          になるまで進めたらどうなるでしょう？
        </Em>
      </P>
      <EmojiSeparator emojis={['🤔', '🤔', '🤔']} />
      <H3>早速やってみましょう</H3>
      <P>
        <Em>
          新しい「
          {h('ycPlay')}
          」ボタン
        </Em>
        を使って、
        {h('ycDone')}
        になるまで進めてみてください。
      </P>
      {episode8[i++]()}
      <P>というわけで、結果はこうなりました:</P>
      {episode8[i++]()}
      <P>
        <Em>これのパターンは何でしょう？</Em>
      </P>
      <P>
        <Strong>答え:</Strong> <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '2️⃣']} />{' '}
        のパターンです。
      </P>
      <H3>まとめると:</H3>
      <Ul>
        <UlLi>
          最初の <InlineEmojiBoxes emojis={['🍣', '🥪', '🍣']} /> は{' '}
          <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '1️⃣']} />{' '}
          というパターンだった。
        </UlLi>
        <UlLi>
          最終的に <InlineEmojiBoxes emojis={['🍕', '🍛', '🍛']} /> 、つまり{' '}
          <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '2️⃣']} /> になった。
        </UlLi>
        <UlLi>
          <Em>
            つまり、 <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '1️⃣']} /> が{' '}
            <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '2️⃣']} /> になった。
          </Em>
        </UlLi>
      </Ul>
      <P>ふーむ、これは何かありそうですね。</P>
      <EmojiSeparator emojis={['🤔', '🤔', '🤔']} />
      <H3>ここでクイズです</H3>
      <P>
        それでは先ほどと反対に、{' '}
        <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '2️⃣']} />{' '}
        からはじめたらどうなるでしょう？つまり、下の
        {h('ycBentoBox')}
        と、
      </P>
      {episode8[i++]()}
      <P>
        先ほどと同じく下の
        {h('ycBentoBox')}
        の弁当箱を合わせたら、
      </P>
      {episode8[i++]()}
      <P>
        下の
        {h('ycBentoBox')}
        は最終的にはどうなるでしょう？
      </P>
      {episode8[i++]()}
      <P>
        <Em>
          果たして今度は <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '1️⃣']} />
          になるのでしょうか?
        </Em>
      </P>
      <YcNextLessonButton nextEpisodeNumber={9} />
    </>
  )
}
