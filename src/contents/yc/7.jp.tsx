import React from 'react'
import { Em, H3, P, Strong, Ul, UlLi } from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import { episode7 } from 'src/components/Yc/AllExpressionRunners'
import InlineEmojiBoxes from 'src/components/Yc/InlineEmojiBoxes'
import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
import h from 'src/lib/h'

export default () => {
  let i = 0
  return (
    <>
      {h('ycQuizReview', 6)}
      <P>{h('ycTryUntilDone')}:</P>
      {episode7[i++]()}
      <P>
        というわけで答えは
        <Strong>No</Strong>。
        <Em>
          正解は
          <Emoji>🥪</Emoji> <Emoji>🥗</Emoji> <Emoji>🥪</Emoji>
          ではなく、 <Emoji>🥪</Emoji> <Emoji>🥗</Emoji> <Emoji>🥗</Emoji>
          でした
        </Em>
        :
      </P>
      {episode7[i++]()}
      <P>
        どうでしたか？難しい問題だったので、解けなくても気にしないでください！
      </P>
      <EmojiSeparator emojis={['🤯', '🤯', '🤯']} />
      <H3>
        <Emoji>🥩</Emoji> <Emoji>🍔</Emoji> <Emoji>🍔</Emoji> のかわりに、{' '}
        <Emoji>🥩</Emoji> <Emoji>🍔</Emoji> <Emoji>🥩</Emoji> を使った場合
      </H3>
      <P>
        前の例だと、
        <Strong>上段</Strong>
        には次の3つが並んでいました。
      </P>
      {episode7[i++]()}
      <P>
        <Strong>では、</Strong>
        <Em>
          一番右のステーキ <Emoji>🥩</Emoji> をハンバーガー <Emoji>🍔</Emoji>{' '}
          に変えた場合、答えはどう変わるのでしょう？
        </Em>
      </P>
      {episode7[i++]()}
      <P>
        試してみましょう。下の例では上段を <Emoji>🥩</Emoji> <Emoji>🍔</Emoji>{' '}
        <Emoji>🍔</Emoji> に変えてみました。
        {h('ycTryUntilDone')}:
      </P>
      {episode7[i++]()}
      <P>つまり、答えはこうなります:</P>
      {episode7[i++]()}
      <P>うーん、待てよ…？</P>
      <EmojiSeparator emojis={['🤔', '🤔', '🤔']} />
      <H3>何が起きたのか</H3>
      <P>
        <Strong>まとめると、こうなります:</Strong>
      </P>
      <Ul>
        <UlLi>
          上段が <InlineEmojiBoxes emojis={['🥩', '🍔', '🥩']} /> のとき、答えは{' '}
          <InlineEmojiBoxes emojis={['🥪', '🥗', '🥗']} />
        </UlLi>
        <UlLi>
          上段が <InlineEmojiBoxes emojis={['🥩', '🍔', '🍔']} /> のとき、答えは{' '}
          <InlineEmojiBoxes emojis={['🥪', '🥗', '🥪']} />
        </UlLi>
      </Ul>
      <P>ということは、もし:</P>
      <Ul>
        <UlLi>
          <Emoji size="mdlg">🥩</Emoji> と <Emoji size="mdlg">🥪</Emoji> を{' '}
          <Emoji size="mdlg">1️⃣</Emoji> で示し、
        </UlLi>
        <UlLi>
          <Emoji size="mdlg">🍔</Emoji> と <Emoji size="mdlg">🥗</Emoji> を{' '}
          <Emoji size="mdlg">2️⃣</Emoji> で示すと、
        </UlLi>
      </Ul>
      <P>次のようになります:</P>
      <Ul>
        <UlLi>
          上段が <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '1️⃣']} /> のとき、答えは{' '}
          <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '2️⃣']} />
        </UlLi>
        <UlLi>
          上段が <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '2️⃣']} /> のとき、答えは{' '}
          <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '1️⃣']} />
        </UlLi>
      </Ul>
      <EmojiSeparator emojis={['✨', '🧙‍♂️', '✨']} />
      <P>
        <Strong>不思議じゃないですか？</Strong>
        <Em>
          <Strong>下段</Strong> (下を参照)
          が何かをしでかしているに違いありません。
        </Em>
      </P>
      {episode7[i++]()}
      <P>
        <Strong>下段の秘密</Strong>
        についてはこれから説明します。
        <Em>ですがその前に</Em>
        、ここまで理解できているかをクイズでチェックしてみましょう。
      </P>
      <H3>クイズ</H3>
      <P>
        前回とは違う料理を使います。下の
        {h('ycBentoBox')}を {h('ycNext')} とどんどん進めたとします:
      </P>
      {episode7[i++]()}
      <P>
        <Strong>YesかNoで答えてみてください:</Strong>{' '}
        <Em>最終的に {h('ycBentoBox')} は次のようになるでしょうか？</Em>
      </P>
      {episode7[i++]()}
      <P>
        ここまできちんと読んだ方なら、答えられるはずです。
        <Strong>頑張ってください！</Strong>
      </P>
      <YcNextLessonButton nextEpisodeNumber={8} />
    </>
  )
}
