import React from 'react'
import { Em, P, Strong, Ul, UlLi } from 'src/components/ContentTags'
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
              「足し算」の
              <H args={{ name: 'bentoBox', skipEmoji: true }} />
              では右下に<Strong>5個</Strong>の料理がありましたが、こちらには
              <Strong>4個</Strong>しかありません。
            </P>
            <P>
              では、
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
              ここに暗号が<Strong>「1」</Strong>の
              <H args={{ name: 'bentoBox', short: true }} />
              がふたつあります:
            </P>
            {AER.dymt}
            {AER.mhwq}
            <P>
              さきほどの
              <H args={{ name: 'bentoBox', short: true }} />の
              <InlineEmojiBoxesForQuestion />
              の部分に埋め込んでみます:
            </P>
            {AER.sojz}
            <P>
              さきほどの「足し算」の
              <H args={{ name: 'bentoBox', skipEmoji: true }} />
              とは
              <Em>
                微妙に右下が違いますが、こちらも足し算(
                <Strong>1 + 1 = 2</Strong>
                )になるのでしょうか？それとも、別な計算結果が出るのでしょうか？
              </Em>
              というわけで、質問です。
            </P>
            <P>
              <H args={{ name: 'whatsTheNumberQuestion', number: 2 }} />
            </P>
            <YesNoButtons answer="no" />
          </>
        )
      },
      {
        title: (
          <>
            <H args={{ name: 'theAnswerIs', isYes: false }} />
          </>
        ),
        content: (
          <>
            <P>
              <Strong>
                <H args={{ name: 'theAnswerIs', isYes: false }} />
                でした。
              </Strong>
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.ktyt}
            <P>
              なんと、最終的に暗号が<Strong>「1」</Strong>になりました！
            </P>
            {AER.aeyv}
            <P>つまり、</P>
            <Ul>
              <UlLi>
                暗号が<Strong>「1」</Strong>の弁当箱ふたつを埋め込んで
                <H args={{ name: 'play' }} />
                すると、
              </UlLi>
              <UlLi>
                最終的に暗号が<Strong>「1」</Strong>の弁当箱になる。
              </UlLi>
            </Ul>
            <P>どういう計算が起きているか、分かりましたか？</P>
          </>
        )
      },
      {
        title: <>2と3を組み合わせると…</>,
        content: (
          <>
            <P>
              今度は暗号が<Strong>「2」</Strong>と<Strong>「3」</Strong>の
              <H args={{ name: 'bentoBox', short: true }} />
              を使ってみましょう:
            </P>
            {AER.bdlj}
            {AER.ifwb}
            <P>
              埋め込むとこうなります。
              <H args={{ name: 'pressFastForward' }} />
            </P>
            {AER.ngus}
            <P>
              こちらは、最終的に暗号が<Strong>「6」</Strong>になりました！
            </P>
            {AER.ujfj}
            <P>つまり、</P>
            <Ul>
              <UlLi>
                暗号が<Strong>「2」</Strong>と<Strong>「3」</Strong>
                の弁当箱ふたつを埋め込んで
                <H args={{ name: 'play' }} />
                すると、
              </UlLi>
              <UlLi>
                最終的に暗号が<Strong>「6」</Strong>の弁当箱になる。
              </UlLi>
            </Ul>
          </>
        )
      }
    ]}
  />
)
