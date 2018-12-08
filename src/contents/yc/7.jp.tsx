import React from 'react'
import { Em, H3, P, Strong, Ul, UlLi } from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import { episode8 } from 'src/components/Yc/AllExpressionRunners'
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
        <Strong>弁当箱の暗号</Strong>
        について説明します。
      </P>
      <H3>弁当箱の暗号</H3>
      <P>
        このページにあるそれぞれの
        {h('ycBentoBox')}
        には、
        <Strong>あるパターンに基づいた暗号</Strong>
        が隠されています。
      </P>
      <P>
        <Em>
          <Strong>あなたへの挑戦状:</Strong>{' '}
          暗号がどんなパターンに基づいているか考えてみてください！
        </Em>
      </P>
      <EmojiSeparator emojis={['🔢', '🧐', '️🔢']} />
      <H3>暗号の例</H3>
      <P>
        こちらに隠されている暗号は
        <Strong>1</Strong>
        です:
      </P>
      {episode8[i++]()}
      <P>
        こちらに隠されている暗号は
        <Strong>2</Strong>
        です:
      </P>
      {episode8[i++]()}
      <P>
        こちらに隠されている暗号は
        <Strong>3</Strong>
        です:
      </P>
      {episode8[i++]()}
      <P>パターンがわかりましたか？では、問題に挑戦してみましょう。</P>
      <H3>クイズ: 暗号を解きあかせ</H3>
      <P>
        次の
        {h('ycBentoBox')}
        に隠されている暗号は何でしょう？
      </P>
      {episode8[i++]()}
      <EmojiSeparator emojis={['🤔', '🤔', '🤔']} />
      <H3>答え</H3>
      <P>
        <Strong>答え:</Strong>{' '}
        <Em>
          隠されている暗号は
          <Strong>5</Strong>
          です。
        </Em>
      </P>
      <P>
        <Strong>パターンの説明:</Strong>
      </P>
      <Ul>
        <UlLi>
          <Strong>A</Strong>と<Strong>B</Strong>
          の2種類の料理がある (<Emoji size="mdlg">🍝</Emoji> と{' '}
          <Emoji size="mdlg">🍚</Emoji>
          )。
        </UlLi>
        <UlLi>
          <Strong>A</Strong>
          は、
          <Strong>真ん中</Strong>
          のマスと
          <Strong>右上</Strong>
          のマスにある料理 (<Emoji size="mdlg">🍝</Emoji>。 ).
        </UlLi>
        <UlLi>
          <Strong>B</Strong>
          は、
          <Strong>左</Strong>
          のマスと
          <Strong>右の残りのマス</Strong>
          にある料理 (<Emoji size="mdlg">🍚</Emoji>
          )。
        </UlLi>
        <UlLi>
          <Em>
            右のマスにある
            <Strong>B</Strong>
            の料理の数が
            <Strong>暗号の答え</Strong> (<Emoji size="mdlg">🍚</Emoji>{' '}
            <Emoji size="mdlg">🍚</Emoji> <Emoji size="mdlg">🍚</Emoji>{' '}
            <Emoji size="mdlg">🍚</Emoji> <Emoji size="mdlg">🍚</Emoji> ={' '}
            <Strong>5</Strong>
            )。
          </Em>
        </UlLi>
        <P>
          <Strong>簡単すぎましたか？</Strong>
          では、もう少し難しい問題を出しましょう。
        </P>
        <EmojiSeparator emojis={['🔢', '🧐', '️🔢']} />
        <H3>クイズ: 次はどうなる？</H3>
        <P>
          ここに、
          <Em>
            暗号が
            <Strong>2</Strong>
          </Em>
          の{h('ycBentoBox')}
          があります。
        </P>
        {episode8[i++]()}
        <P>
          これを次の
          {h('ycBentoBox')}と<Strong>合体させます</Strong>:
        </P>
        {episode8[i++]()}
        <P>合体させるとこうなります:</P>
        {episode8[i++]()}
        <P>
          <Strong>問題:</Strong> では、上の弁当箱を
          {h('ycDone')}
          になるまで進めたら、いったいどうなるでしょう？
        </P>
        <P>
          <Strong>ヒント:</Strong> 上の部分の弁当箱の暗号は
          <Strong>2</Strong>
          でした 。<Em>これが、新しい数字になります。</Em>
          その新しい暗号は何になるでしょう？
        </P>
        <YcNextLessonButton nextEpisodeNumber={8} />
      </Ul>
    </>
  )
}
