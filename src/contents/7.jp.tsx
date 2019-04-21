import React from 'react'
import { Em, H3, P, Strong, Ul, UlLi } from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import { episode8 } from 'src/components/Yc/AllExpressionRunners'
import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
import AER from 'src/components/Yc/AllExpressionRunners'
import h from 'src/lib/h'
import H from 'src/components/H'
import { InlineEmojiBoxesForQuestion } from 'src/components/Yc/InlineEmojiBoxes'
import EpisodeCardList from 'src/components/EpisodeCardList'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>暗号が「1」の場合</>,
        content: (
          <>
            <P>
              <H args={{ name: 'episodeWelcomeText' }} />
              前回紹介したこちらの
              <H args={{ name: 'bentoBox', short: true }} />
              ですが、
            </P>
            {AER.qmof}
            <P>
              今度は暗号が<Strong>「1」</Strong>の
              <H args={{ name: 'bentoBox', short: true }} />
              と組み合わせてみましょう。
            </P>
            {AER.slyk}
            <P>
              するとどうなるでしょうか？
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.eemn}
            <P>
              最終的に暗号が<Strong>「2」</Strong>になりました:
            </P>
            {AER.rceu}
            <P>
              つまり、暗号が<Strong>「1」</Strong>から<Strong>「2」</Strong>
              に変化したというわけです。
            </P>
            <EmojiSeparator emojis={['1️⃣', '➡️', '2️⃣']} />
          </>
        )
      },
      {
        title: <>暗号が「2」の場合</>,
        content: (
          <>
            <P>暗号が「2」だったらどうでしょう？</P>
            {AER.sisn}
            <P>
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.syhh}
            <P>
              最終的に暗号が<Strong>「3」</Strong>になりました:
            </P>
            {AER.ablz}
            <P>
              つまり、暗号が<Strong>「2」</Strong>から<Strong>「3」</Strong>
              に変化したというわけです。
            </P>
            <EmojiSeparator emojis={['2️⃣', '➡️', '3️⃣']} />
          </>
        )
      },
      {
        type: 'summary',
        title: <>1を足す弁当箱</>,
        content: (
          <>
            <P>
              結論から言うと、この
              <H args={{ name: 'bentoBox', short: true }} />
              には、
              <Strong>
                <InlineEmojiBoxesForQuestion />
                に入っている
                <H args={{ name: 'bentoBox', short: true }} />
                の暗号に「1」を加える効果があります。
              </Strong>
            </P>
            {AER.qmof}
            <P>
              <InlineEmojiBoxesForQuestion />
              の暗号が<Strong>「1」</Strong>だったら実行後に暗号が
              <Strong>「2」</Strong>
              になり、
              <InlineEmojiBoxesForQuestion />
              の暗号が<Strong>「2」</Strong>だったら実行後に暗号が
              <Strong>「3」</Strong>
              になるというわけです。
            </P>
            <EmojiSeparator emojis={['❓', '➕', '1️⃣']} />
          </>
        )
      },
      {
        title: <>つまり…</>,
        content: (
          <>
            <P>
              <H args={{ name: 'bentoBox' }} />は
              <Em>
                ただのパズルかと思いきや、「<Strong>1を足す</Strong>
                」という<Strong>簡単な計算</Strong>をすることもできる
              </Em>
              ようです。
            </P>
            <EmojiSeparator emojis={['🍱', '➕', '️1️⃣']} />
            <P>
              他にはどんな計算ができるのでしょう？たとえば、
              <Strong>
                <H args={{ name: 'bentoBox', short: true }} />{' '}
                同士の足し算はできるのでしょうか？
              </Strong>
            </P>
            <EmojiSeparator emojis={['🍱', '➕', '️🍱']} />
            <P>さっそく検証してみましょう！</P>
          </>
        )
      },
      {
        title: <>1 + 2 = 3?</>,
        content: (
          <>
            <P>
              こちらに暗号が<Strong>「1」</Strong>の
              <H args={{ name: 'bentoBox', short: true }} />
              があります:
            </P>
            {AER.slyk}
            <P>
              そして、こちらには暗号が<Strong>「2」</Strong>の
              <H args={{ name: 'bentoBox', short: true }} />
              があります:
            </P>
            {AER.vrvl}
            <P>
              このふたつの
              <H args={{ name: 'bentoBox', short: true }} />
              の暗号を足して、<Strong>1 + 2 = 3</Strong>
              を計算することはできるのでしょうか？
            </P>
            <EmojiSeparator emojis={['1️⃣', '➕', '️2️⃣']} />
          </>
        )
      }
    ]}
  />
)

export const old = () => {
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
