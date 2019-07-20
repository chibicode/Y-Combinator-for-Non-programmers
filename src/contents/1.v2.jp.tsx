import React from 'react'
import { P, Strong, Em, InlineHeader, Hr } from 'src/components/ContentTags'
import EpisodeCardList from 'src/components/EpisodeCardList'
import H from 'src/components/H'
import EmojiSeparator from 'src/components/EmojiSeparator'
import Emoji from 'src/components/Emoji'
import EmojiNumber from 'src/components/EmojiNumber'
import * as R from 'src/components/Runners'
import NextLessonButton from 'src/components/NextLessonButton'
import BlankNumber from 'src/components/BlankNumber'
import YesNoButtons from 'src/components/YesNoButtons'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>この話はフィクションです</>,
        content: (
          <>
            <P>
              <H args={{ name: 'episodeWelcomeText' }} />
              本稿は<Em>ゆるい物語調</Em>
              で話を進めていきます。ちなみに、この話はフィクションです。
              <Emoji>😉</Emoji>
            </P>
            <P>
              まずは、この物語に登場する「
              <Strong>計算箱</Strong>」の話をしましょう。
            </P>
            <EmojiSeparator emojis={['🎁', '🎁', '🎁']} />
          </>
        )
      },
      {
        title: <>計算箱</>,
        content: (
          <>
            <P>
              むかしむかしあるところに、「<Strong>計算箱</Strong>
              」と呼ばれる便利な道具がありました。
              <InlineHeader>計算箱</InlineHeader>は
              <Em>さまざまな計算を自動で行ってくれる道具</Em>
              です。人々は計算がとても苦手だったので、いつもこの
              <InlineHeader>計算箱</InlineHeader>に頼りっぱなしでした。
            </P>
            <EmojiSeparator emojis={['🙂', '🎁', '🙂']} />
          </>
        )
      },
      {
        title: <>足し算の計算箱</>,
        content: (
          <>
            <P>
              計算箱にはさまざまな種類があります。まずこちらが、「
              <Strong>足し算の計算箱</Strong>」です:
            </P>
            <R.Fdek />
            <P>
              一番上と下にハテナマーク <BlankNumber />{' '}
              があり、真ん中に足し算の記号 <Emoji>➕</Emoji> がありますね。
            </P>
            <P>
              この <BlankNumber />{' '}
              の部分には、それぞれ数字を入れることができます。たとえば{' '}
              <EmojiNumber number={1} /> を両方に入れてみましょう。
            </P>
            <R.Jfsd />
          </>
        )
      },
      {
        title: (
          <>
            <H args={{ name: 'play' }} /> ボタン
          </>
        ),
        content: (
          <>
            <P>
              それぞれの計算箱には
              <Strong>
                <H args={{ name: 'play' }} /> ボタン
              </Strong>
              がついており、それを押すと計算が実行されます。試しに、下の計算箱で
              <Strong>
                <H args={{ name: 'pressPlay' }} />
              </Strong>
            </P>
            <R.Nlfx />
            <P>
              これで <EmojiNumber number={1} /> <Emoji>➕</Emoji>{' '}
              <EmojiNumber number={1} /> が計算できました！
            </P>
            <EmojiSeparator
              nodes={[
                <EmojiNumber number={1} />,
                <Emoji>➕</Emoji>,
                <EmojiNumber number={1} />
              ]}
            />
            <P>
              他の「<Strong>足し算の計算箱</Strong>
              」も見てみましょう。下の計算箱は、
              <Strong>
                <H args={{ name: 'play' }} />
              </Strong>{' '}
              を押すと <EmojiNumber number={2} /> <Emoji>➕</Emoji>{' '}
              <EmojiNumber number={3} /> を計算してくれます。
            </P>
            <R.Jwkg />
            <P>
              ご覧の通り、結果は <EmojiNumber number={5} /> になりました！
            </P>
          </>
        ),
        footer: {
          content: (
            <>
              <P>
                <InlineHeader>補足:</InlineHeader>{' '}
                計算箱がある世界の人々は、計算がとても苦手でした。
                <EmojiNumber number={2} /> <Emoji>➕</Emoji>{' '}
                <EmojiNumber number={3} />{' '}
                といった簡単な足し算をするときも、計算箱に頼っていたのです。
              </P>
              <EmojiSeparator emojis={['🙂', '🎁', '➕']} />
            </>
          )
        }
      },
      {
        title: <>足し算以外の計算箱</>,
        content: (
          <>
            <P>
              次は、足し算「<Strong>以外</Strong>
              」の計算箱も見ていきましょう。こちらが、「
              <Strong>掛け算の計算箱</Strong>
              」です。
              <Strong>
                <H args={{ name: 'play' }} />
                ボタン
              </Strong>
              を押せば、
              <EmojiNumber number={2} /> <Emoji>✖️</Emoji>{' '}
              <EmojiNumber number={3} /> を計算してくれます。
            </P>
            <R.Uaha />
            <P>
              ご覧の通り、答えは <EmojiNumber number={6} /> になりました。
            </P>
            <P>
              計算箱は他にも引き算や割り算ができますが、特に興味深いわけでもないので、時間の都合上省略します。
              <Emoji>😉</Emoji>
            </P>
            <EmojiSeparator emojis={['➖', '🎁', '➗']} />
          </>
        )
      },
      {
        title: <>割ったときの余りがわかる計算箱</>,
        content: (
          <>
            <P>
              一方、少しだけ興味深いのが、「
              <Strong>割ったときの余りがわかる計算箱</Strong>
              」です。
            </P>
            <P>
              たとえば下の計算箱は、 「
              <Strong>
                <EmojiNumber number={5} /> を <EmojiNumber number={2} />{' '}
                で割ったときの余り
              </Strong>
              」を計算してくれます。
              <H args={{ name: 'pressPlay' }} />
            </P>
            <R.Wtax />
            <P>
              というわけで、
              <EmojiNumber number={1} /> が残りました。
            </P>
            <P>
              <EmojiNumber number={5} /> を <EmojiNumber number={2} />{' '}
              で割ると「
              <EmojiNumber number={2} /> 余り <EmojiNumber number={1} />
              」になるので、計算箱には
              <Strong>
                余りの <Emoji>1️⃣</Emoji>
              </Strong>{' '}
              が残るというわけです。
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
              ちゃんと理解できたか、
              <H args={{ name: 'yesNoQuiz' }} />
              で確かめてみましょう。
              <H args={{ name: 'lookAtThisMathBox' }} />
              。本稿を公開したのは2019年なので、上に{' '}
              <EmojiNumber number={2019} /> を入れてみました。
            </P>
            <R.Ucys />
            <P>
              <H args={{ name: 'whatHappensAtTheEndMathBoxQuestion' }} />
            </P>
            <R.Xapy />
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
              <H args={{ name: 'pressPlay' }} />
            </P>
            <R.Fxgq />
            <P>
              というわけで、
              <EmojiNumber number={0} /> ではなく、
              <EmojiNumber number={3} /> が残りました。
            </P>
            <Hr />
            <P>
              <EmojiNumber number={2019} /> を <EmojiNumber number={4} />{' '}
              で割ると「
              <EmojiNumber number={504} /> 余り <EmojiNumber number={3} />
              」になるので、計算箱には<Strong>余りの</Strong>{' '}
              <EmojiNumber number={3} /> が残るというわけです。
            </P>
          </>
        ),
        footer: {
          content: (
            <>
              <P>
                <InlineHeader>補足:</InlineHeader> 頭の中で計算しなくても、「
                <Strong>
                  <EmojiNumber number={2019} /> は <EmojiNumber number={4} />{' '}
                  では割り切れないから、余りは <EmojiNumber number={0} />{' '}
                  にならないはず
                </Strong>
                」と気づけば、先ほどの <H args={{ name: 'yesNoQuiz' }} />
                に正解することができたはずです！
              </P>
              <EmojiSeparator emojis={['🤔', '➗', '4️⃣']} />
            </>
          )
        }
      },
      {
        title: <>次のページへ！</>,
        content: (
          <>
            <P>
              ここまでは、単純な計算ができる計算箱を紹介してきました。次は、もう少し複雑な計算箱を見てみましょう！
              <Emoji>😉</Emoji>
            </P>
            <EmojiSeparator emojis={['❓', '🎁', '❓']} />
            <NextLessonButton />
          </>
        )
      }
    ]}
  />
)
