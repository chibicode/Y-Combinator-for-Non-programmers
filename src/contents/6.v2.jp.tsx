import React from 'react'
import {
  InlineHeader,
  Em,
  P,
  Strong,
  Hr,
  Ul,
  UlLi
} from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import NextLessonButton from 'src/components/NextLessonButton'
import H from 'src/components/H'
import EpisodeCardList from 'src/components/EpisodeCardList'
import YesNoButtons from 'src/components/YesNoButtons'
import { InlineEmojiBoxesForQuestion } from 'src/components/InlineEmojiBoxes'
import EmojiWithText from 'src/components/EmojiWithText'
import * as R from 'src/components/Runners'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>弁当箱の暗号</>,
        content: (
          <>
            <P>
              <H args={{ name: 'episodeWelcomeText' }} />
              中級では、「<Strong>弁当箱の暗号</Strong>」を見ていきます。
            </P>
            <EmojiSeparator emojis={['❓', '🧐', '️❓']} />
            <P>
              このページにあるそれぞれの
              <H args={{ name: 'bentoBoxPuzzle' }} />
              には、
              <Strong>あるパターンに基づいた暗号</Strong>
              が隠されています。
              <Em>暗号がどんな法則に基づいているか考えてみてください！</Em>
            </P>
          </>
        )
      },
      {
        title: (
          <>
            こちらに隠されている暗号は<Em>「0」</Em>です
          </>
        ),
        content: (
          <>
            <R.Tiok />
            <P>
              これだけでは暗号の法則がわからないと思うので、
              <InlineHeader>もう2個</InlineHeader>
              見ていきましょう！
            </P>
          </>
        )
      },
      {
        title: (
          <>
            こちらに隠されている暗号は<Em>「1」</Em>です
          </>
        ),
        content: (
          <>
            <R.Tfho />
            <P>
              そろそろ分かりましたか？<InlineHeader>あと1個</InlineHeader>
              見ていきましょう！
            </P>
          </>
        )
      },
      {
        title: (
          <>
            こちらに隠されている暗号は<Em>「2」</Em>です
          </>
        ),
        content: (
          <>
            <R.Idcf />
            <P>
              もうお分かりでしょうか？
              <H args={{ name: 'yesNoQuiz' }} />
              で確かめてみましょう！
            </P>
            <EmojiSeparator emojis={['⭕️', '🧐', '️❌']} />
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
              <H args={{ name: 'lookAtThisBentoBox' }} />:
            </P>
            <R.Xemt />
            <P>
              <H args={{ name: 'question' }} />{' '}
              <Em>
                こちらに隠されている暗号は<Strong>「4」</Strong>でしょうか？
              </Em>
            </P>
            <YesNoButtons answer="no" />
          </>
        )
      },
      {
        title: <>正解は「3」</>,
        content: (
          <>
            <R.Bpwl />
            <P>では、どうやって暗号を解読するか説明しますね！</P>
          </>
        )
      },
      {
        title: <>暗号の法則</>,
        content: (
          <>
            <P>
              まず、暗号が隠されている弁当箱には
              <Strong>2種類の料理がある</Strong>
              ことに注目します。
              <Strong>
                分かりやすいように、それぞれに、
                <Emoji>🅰️</Emoji>と<Emoji>🅱️</Emoji>
                の印をつけてみます。
              </Strong>
            </P>
            <EmojiSeparator emojis={['🅰️', '🍱', '🅱️']} />
            <P>
              こちらには、
              <EmojiWithText letter="a" />に<Emoji>🅰️</Emoji>、
              <EmojiWithText letter="b" />に<Emoji>🅱️</Emoji>
              の印をつけてみます。
            </P>
            <R.Blre />
            <P>
              こちらには、
              <EmojiWithText letter="c" />に<Emoji>🅰️</Emoji>、
              <EmojiWithText letter="d" />に<Emoji>🅱️</Emoji>
              の印をつけてみます。
            </P>
            <R.Jmyv />
            <P>
              こちらには、
              <EmojiWithText letter="e" />に<Emoji>🅰️</Emoji>、
              <EmojiWithText letter="f" />に<Emoji>🅱️</Emoji>
              の印をつけてみます。
            </P>
            <R.Ilnb />
            <P>
              こちらには、
              <EmojiWithText letter="g" />に<Emoji>🅰️</Emoji>、
              <EmojiWithText letter="h" />に<Emoji>🅱️</Emoji>
              の印をつけてみます。
            </P>
            <R.Qsfp />
            <P>
              すると、暗号が隠されている弁当箱は、
              <Strong>どれも次のようなパターンに従っている</Strong>
              ことがわかります。
            </P>
            <Ul>
              <UlLi>
                <Em>
                  一番左に<Emoji>🅰️</Emoji>の料理があり、
                </Em>
              </UlLi>
              <UlLi>
                <Em>
                  真ん中に<Emoji>🅱️</Emoji>の料理があり、
                </Em>
              </UlLi>
              <UlLi>
                <Em>
                  右上に<Emoji>🅱️</Emoji>の料理がひとつだけあり、
                </Em>
              </UlLi>
              <UlLi>
                <Em>
                  右下に<Emoji>🅰️</Emoji>
                  の料理がいくつか縦に並んでいます
                </Em>
                (ゼロ個の場合もあります)。
              </UlLi>
            </Ul>
            <P>
              <Strong>
                もしこのようなパターンに沿っていない場合、暗号は存在しません。
              </Strong>
            </P>
            <R.Eozk />
            <P>それでは、暗号の解読方法を伝授しましょう！</P>
          </>
        )
      },
      {
        type: 'summary',
        title: (
          <>
            右下にある<Emoji>🅰️</Emoji>がついた料理の数が暗号
          </>
        ),
        content: (
          <>
            <P>
              <InlineHeader>暗号の解読方法:</InlineHeader>{' '}
              もし弁当箱が先述のようなパターンに沿っている場合、
              <Strong>
                右下にある<Emoji>🅰️</Emoji>がついた料理の数が暗号
              </Strong>
              の数が暗号になります。
            </P>
            <R.Stio />
            <P>
              先ほどのクイズの例だと、右下に
              <Emoji>🅰️</Emoji>である
              <EmojiWithText letter="g" />
              が縦に3個並んでいるので、暗号は<Strong>「3」</Strong>
              になります。
            </P>
            <R.Sfop />
            <P>
              こちらの例だと、右下に
              <Emoji>🅰️</Emoji>である
              <EmojiWithText letter="e" />
              が縦に2個並んでいるので、暗号は<Strong>「2」</Strong>
              になります。
            </P>
            <R.Qvxe />
            <P>
              こちらの例だと、右下に<Emoji>🅰️</Emoji>である
              <EmojiWithText letter="a" />
              がひとつもないので、暗号は<Strong>「0」</Strong>
              になります。
            </P>
            <R.Xpvh />
            <P>
              暗号はこれから何度も出現するので、仕組みをしっかり覚えていてください。「
              <Strong>右下に同じ料理がいくつあるか</Strong>」がポイントです。
            </P>
            <R.Stio />
          </>
        )
      },
      {
        type: 'yesNoQuiz',
        title: <>復習クイズ</>,
        content: (
          <>
            <P>
              ちゃんと覚えられたか、
              <H args={{ name: 'yesNoQuiz' }} />
              で確かめてみましょう！
            </P>
            <P>
              <H args={{ name: 'lookAtThisBentoBox' }} />:
            </P>
            <R.Howy />
            <P>
              <H args={{ name: 'question' }} />{' '}
              <Em>
                こちらに隠されている暗号は<Strong>「4」</Strong>でしょうか？
              </Em>
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
              <H args={{ name: 'theAnswerIs', isYes: false, sentence: true }} />
              右下に
              <EmojiWithText letter="i" />
              が縦に5個並んでいるので、暗号は<Strong>「4」ではなく「5」</Strong>
              になります。
            </P>
            <R.Imqy />
          </>
        )
      },
      {
        title: <>ここでちょっと難しい質問です</>,
        content: (
          <>
            <P>それでは、ここでちょっと難しい質問をしてみましょう。</P>
            <EmojiSeparator emojis={['❓', '🧐', '❓']} />
            <P>
              <H args={{ name: 'lookAtThisBentoBox' }} />:
            </P>
            <R.Qmof />
            <P>
              上の弁当箱の
              <InlineEmojiBoxesForQuestion />
              の部分には、
              <Strong>何らかの暗号が隠された弁当箱が入ります。</Strong>
            </P>
            <EmojiSeparator
              nodes={[
                <Emoji>🍱</Emoji>,
                <Emoji>➡️</Emoji>,
                <InlineEmojiBoxesForQuestion />
              ]}
            />
            <P>
              ためしに、こちらに暗号が<Strong>「0」</Strong>
              の弁当箱を用意しました。
            </P>
            <R.Nicg />
            <P>
              これを、先ほどの弁当箱の
              <InlineEmojiBoxesForQuestion />
              の部分に入れてみると、次のようになります。
            </P>
            <R.Mauj />
            <P>
              ここで質問です。
              <Strong>
                上の弁当箱を
                <H args={{ name: 'play' }} />
                すると、最終的にどうなるのでしょう？
              </Strong>
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
              難しいと思うので、
              <H args={{ name: 'yesNoQuiz' }} />
              で聞いてみます。
            </P>
            <R.Eavp />
            <P>
              <H args={{ name: 'whatsTheNumberQuestion', number: 1 }} />
            </P>
            <YesNoButtons answer="yes" tooHard />
          </>
        )
      },
      {
        title: (
          <>
            <H args={{ name: 'theAnswerIs', isYes: true }} />
          </>
        ),
        content: (
          <>
            <P>
              <H args={{ name: 'theAnswerIs', isYes: true, sentence: true }} />
              <H args={{ name: 'pressFastForward' }} />
            </P>
            <R.Wafy />
            <Hr />
            <P>
              <Strong>つまり、最終的に暗号が「1」の弁当箱が残りました。</Strong>
              右下に
              <EmojiWithText letter="b" />
              が1個あるので、暗号は<Strong>「1」</Strong>というわけです。
            </P>
            <R.Badn />
            <P>
              ここでポイントなのは、
              <H args={{ name: 'play' }} />
              する前と後で、
              <Strong>料理ではなく、暗号の変化に注目してほしい</Strong>
              ということです。暗号の変化だけに注目すると、
            </P>
            <Ul>
              <UlLi>
                <InlineEmojiBoxesForQuestion />
                に入れた弁当箱の暗号は<Strong>「0」</Strong>だった。
              </UlLi>
              <UlLi>
                最終的に、暗号が<Strong>「1」</Strong>の弁当箱が残った。
              </UlLi>
            </Ul>
            <P>
              つまり、もともと<Strong>「0」</Strong>だった暗号が
              <Strong>「1」</Strong>になったということです。
            </P>
            <EmojiSeparator emojis={['0️⃣', '➡️', '1️⃣']} />
          </>
        )
      },
      {
        type: 'summary',
        title: <>まとめると</>,
        content: (
          <>
            <P>
              1. こちらの弁当箱の、
              <InlineEmojiBoxesForQuestion />
              の部分に…
            </P>
            <R.Qmof />
            <P>
              2. 暗号が<Strong>「0」</Strong>の弁当箱を…
            </P>
            <R.Nicg />
            <P>
              3. 入れて、最後まで
              <H args={{ name: 'play' }} />
              すると…
            </P>
            <R.Mauj />
            <P>
              4. 暗号が<Strong>「1」</Strong>の弁当箱が残ります:
            </P>
            <R.Badn />
            <P>
              5. つまり、もともと<Strong>「0」</Strong>だった暗号が
              <Strong>「1」</Strong>になりました:
            </P>
            <EmojiSeparator emojis={['0️⃣', '➡️', '1️⃣']} />
          </>
        )
      },
      {
        title: <>ということは…</>,
        content: (
          <>
            <R.Qmof />
            <P>
              この弁当箱の
              <InlineEmojiBoxesForQuestion />
              に、暗号が隠された弁当箱を入れると、
              <Strong>
                <H args={{ name: 'play' }} />
                した後に何の暗号が残るか
              </Strong>
              分かりましたか？
            </P>
            <EmojiSeparator emojis={['🍱', '🧐', '️🍱']} />
            <P>答えは次のページに！</P>
            <NextLessonButton />
          </>
        )
      }
    ]}
  />
)
