import React from 'react'
import { Em, Hr, P, Strong, Ul, UlLi } from 'src/components/ContentTags'
import EmojiSeparator from 'src/components/EmojiSeparator'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { InlineEmojiBoxesForQuestion } from 'src/components/InlineEmojiBoxes'
import AER from 'src/components/AER'
import H from 'src/components/H'
import YesNoButtons from 'src/components/YesNoButtons'
import NextLessonButton from 'src/components/NextLessonButton'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>どんな計算ができる？</>,
        content: (
          <>
            <P>
              <H args={{ name: 'episodeWelcomeText' }} />
              こちらが、前回紹介した<Strong>「足し算」</Strong>
              ができる弁当箱です:
            </P>
            {AER.bxdf}
            <P>
              そして下にあるのが、上のと微妙に違う弁当箱です。{' '}
              <Strong>右下の部分が微妙に違う</Strong>
              のがお分かりでしょうか。
            </P>
            {AER.ksya}
            <P>
              「足し算」の弁当箱では右下に<Strong>5個</Strong>
              の料理がありましたが、こちらには
              <Strong>4個</Strong>しかありません。
            </P>
            <P>
              では、
              <Em>こちらの弁当箱は、どんな計算ができるのでしょう？</Em>
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
              ここに暗号が<Strong>「1」</Strong>の弁当箱がふたつあります:
            </P>
            {AER.dymt}
            {AER.mhwq}
            <P>
              さきほどの弁当箱の
              <InlineEmojiBoxesForQuestion />
              の部分に埋め込んでみます:
            </P>
            {AER.sojz}
            <P>
              さきほどの「足し算」の弁当箱とは
              <Em>
                微妙に右下が違いますが、こちらも足し算(
                <Strong>1 + 1 = 2</Strong>
                )になるのでしょうか？
              </Em>
            </P>
            <P>
              それとも、別の計算結果が出るのでしょうか？というわけで、質問です。
            </P>
            <Hr />
            <P>
              <H args={{ name: 'whatsTheNumberQuestion', number: 2 }} />
            </P>
            <YesNoButtons answer="no" tooHard />
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
              <H args={{ name: 'theAnswerIs', isYes: false, sentence: true }} />
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
              今度は暗号が<Strong>「2」</Strong>と<Strong>「3」</Strong>
              の弁当箱を使ってみましょう:
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
            <P>そろそろどんな計算が起きたかお分かりでしょうか？</P>
          </>
        )
      },
      {
        title: <>掛け算の弁当箱</>,
        content: (
          <>
            <EmojiSeparator emojis={['🍱', '✖️', '️🍱']} />
            <P>
              そう、答えは<Strong>「掛け算」</Strong>です。
              <Em>「1 ✕ 1 = 1」「2 ✕ 3 = 6」</Em>を計算していたんですね。
            </P>
          </>
        )
      },
      {
        type: 'summary',
        title: (
          <>
            <H args={{ name: 'summary' }} />
          </>
        ),
        content: (
          <>
            <P>
              まとめると、この弁当箱は、
              <Strong>
                ふたつの
                <InlineEmojiBoxesForQuestion />
                に入っている弁当箱の暗号を掛け算してくれます。
              </Strong>
            </P>
            {AER.drvu}
            <P>
              足し算の弁当箱は右下に料理が5個ありましたが、こちらは
              <Strong>右下の料理が4個</Strong>
              しかないのがポイントです。
            </P>
            <P>
              <H args={{ name: 'byTheWay' }} /> 今回も、
              <Strong>上の弁当箱を暗記する必要はありません。</Strong>
              そのまま読み進めて下さい！
            </P>
          </>
        )
      },
      {
        title: <>引き算や割り算もできます</>,
        content: (
          <>
            <P>
              時間の都合上ここでは紹介できませんが、掛け算以外にも、暗号の
              <Strong>引き算や割り算</Strong>
              ができる弁当箱もあります。
            </P>
            <EmojiSeparator emojis={['➖', '🍱️', '➗']} />
            <P>
              つまり、
              <H args={{ name: 'bentoBoxPuzzle' }} />は<Strong>四則演算</Strong>{' '}
              (足し算・掛け算・引き算・割り算)ができるのです。
            </P>
          </>
        )
      },
      {
        title: <>他には何ができるのか？</>,
        content: (
          <>
            <P>
              弁当箱に四則演算ができることがわかりましたが、これだと
              <Em>
                <Strong>普通の電卓</Strong>とさほど変わりません
              </Em>
              よね。
            </P>
            <EmojiSeparator emojis={['🍱', '🤔', '🍱']} />
            <P>
              他に何か弁当箱にできることはあるのでしょうか？次のページで見ていきます！
            </P>
            <NextLessonButton />
          </>
        )
      }
    ]}
  />
)
