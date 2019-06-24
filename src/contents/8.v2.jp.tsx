import React from 'react'
import { Em, Hr, P, Strong, Ul, UlLi } from 'src/components/ContentTags'
import EmojiSeparator from 'src/components/EmojiSeparator'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { InlineEmojiBoxesForQuestion } from 'src/components/InlineEmojiBoxes'
import H from 'src/components/H'
import YesNoButtons from 'src/components/YesNoButtons'
import NextLessonButton from 'src/components/NextLessonButton'
import * as R from 'src/components/Runners'

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
            <R.Bxdf />
            <P>
              そして下にあるのが、上のと微妙に違う弁当箱です。{' '}
              <Strong>右下の部分が微妙に違う</Strong>
              のがお分かりでしょうか。
            </P>
            <R.Ksya />
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
            <R.Dymt />
            <R.Mhwq />
            <P>
              さきほどの、<Strong>足し算の弁当箱とは微妙に違う</Strong>弁当箱の
              <InlineEmojiBoxesForQuestion />
              の部分に入れてみます:
            </P>
            <R.Sojz />
            <P>
              <Em>
                こちらも足し算(
                <Strong>1 + 1 = 2</Strong>
                )になるのでしょうか？
              </Em>
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
            <R.Ktyt />
            <P>
              なんと、最終的に暗号が<Strong>「1」</Strong>の弁当箱が残りました！
            </P>
            <R.Aeyv />
            <P>つまり、</P>
            <Ul>
              <UlLi>
                暗号が<Strong>「1」</Strong>の弁当箱ふたつを入れて
                <H args={{ name: 'play' }} />
                すると、
              </UlLi>
              <UlLi>
                最終的に暗号が<Strong>「1」</Strong>の弁当箱が残る。
              </UlLi>
            </Ul>
            <P>どんな計算が起きているか、分かりましたか？</P>
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
            <R.Bdlj />
            <R.Ifwb />
            <P>
              それぞれを
              <InlineEmojiBoxesForQuestion />
              に入れるとこうなります。
              <H args={{ name: 'pressFastForward', pleaseWait: true }} />
            </P>
            <R.Ngus />
            <P>
              こちらは、最終的に暗号が<Strong>「6」</Strong>
              の弁当箱が残りました！
            </P>
            <R.Ujfj />
            <P>つまり、</P>
            <Ul>
              <UlLi>
                暗号が<Strong>「2」</Strong>と<Strong>「3」</Strong>
                の弁当箱ふたつを入れて
                <H args={{ name: 'play' }} />
                すると、
              </UlLi>
              <UlLi>
                最終的に暗号が<Strong>「6」</Strong>の弁当箱が残る。
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
            <R.Drvu />
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
