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
        <Strong>パターンの説明:</Strong>
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
          例: <InlineEmojiBoxes emojis={['🥩', '🍔', '🥩']} /> と{' '}
          <InlineEmojiBoxes emojis={['🌭', '🍚', '🌭']} />
        </UlLi>
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
          <InlineEmojiBoxes emojis={['🍝', '🥦', '🥦']} />
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
        <InlineEmojiBoxes emojis={['🥪', '🥗', '🥗']} /> のパターンは{' '}
        <InlineEmojiBoxes emojis={['🔵', '🔴', '🔴']} /> ですので、
        <Em>
          二択暗号は
          {h('ycNo')}
          でした。
        </Em>
        .
      </P>
      <H3>To Summarize:</H3>
      <Ul>
        <UlLi>
          We started with <InlineEmojiBoxes emojis={['🥩', '🍔', '🥩']} />,
          which has the secret boolean code {h('ycYes')}.
        </UlLi>
        <UlLi>
          We ended up with <InlineEmojiBoxes emojis={['🥪', '🥗', '🥗']} />,
          which has the secret boolean code {h('ycNo')}.
        </UlLi>
        <UlLi>
          <Em>
            So {h('ycYes')} became {h('ycNo')}.
          </Em>
        </UlLi>
      </Ul>
      <P>Hmm… This is interesting!</P>
      <EmojiSeparator emojis={['🤔', '🤔', '🤔']} />
      <H3>Quiz</H3>
      <P>
        What if we start with {h('ycNo')} instead? In other words, if we combine
        this:
      </P>
      {episode11[i++]()}
      <P>With this again:</P>
      {episode11[i++]()}
      <P>
        <Strong>Question:</Strong> What will be the end result of this{' '}
        {h('ycBentoBox')}?
      </P>
      {episode11[i++]()}
      <P>
        <Em>Do you think it will become {h('ycYes')}?</Em>
      </P>
      <YcNextLessonButton nextEpisodeNumber={12} />
    </>
  )
}
