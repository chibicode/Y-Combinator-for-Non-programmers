import React from 'react'
import { Em, P, Strong } from 'src/components/ContentTags'
import EmojiSeparator from 'src/components/EmojiSeparator'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { InlineEmojiBoxesForQuestion } from 'src/components/Yc/InlineEmojiBoxes'
import AER from 'src/components/Yc/AllExpressionRunners'
import H from 'src/components/H'
import YesNoButtons from 'src/components/YesNoButtons'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>どんな計算ができる？</>,
        content: (
          <>
            <P>
              こちらが、前回紹介した<Strong>「足し算」</Strong>ができる
              <H args={{ name: 'bentoBox', short: true }} />
              です:
            </P>
            {AER.bxdf}
            <P>
              そして下にあるのが、上のと微妙に違う
              <H args={{ name: 'bentoBox', short: true }} />
              です。 <Strong>右下の部分が微妙に違う</Strong>
              のがお分かりでしょうか。
            </P>
            {AER.ksya}
            <P>
              <Em>
                こちらの
                <H args={{ name: 'bentoBox', short: true }} />
                は、どんな計算ができるのでしょう？
              </Em>
            </P>
            <EmojiSeparator emojis={['🍱', '❓', '️🍱']} />
            <P>
              やっぱり前回と同じく、足し算ができるのでしょうか？
              <H args={{ name: 'yesNoQuiz' }} />
              で見ていきましょう！
            </P>
          </>
        )
      },
      {
        type: 'yesNoQuiz',
        title: (
          <>
            <H args={{ name: 'yesNoQuiz' }} />
          </>
        ),
        content: (
          <>
            <P>
              ここに暗号が<Strong>「2」</Strong>と<Strong>「3」</Strong>の
              <H args={{ name: 'bentoBox', short: true }} />
              があります:
            </P>
            {AER.bdlj}
            {AER.ifwb}
            <P>
              さきほどの
              <H args={{ name: 'bentoBox', short: true }} />の
              <InlineEmojiBoxesForQuestion />
              の部分に埋め込んでみます:
            </P>
            {AER.mame}
            <P>
              さきほどの「足し算」の
              <H args={{ name: 'bentoBox', skipEmoji: true }} />
              とは
              <Em>
                微妙に右下が違いますが、こちらも足し算(
                <Strong>2 + 3 = 5</Strong>
                )になるのでしょうか？それとも、別な計算をするのでしょうか？
              </Em>
              というわけで、質問です。
            </P>
            <P>
              <H args={{ name: 'whatsTheNumberQuestion', number: 5 }} />
            </P>
            <YesNoButtons answer="no" />
          </>
        )
      }
    ]}
  />
)
