import React from 'react'
import {
  P,
  Em,
  Strong,
  InlineHeader,
  Ul,
  UlLi
} from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import EmojiNumber from 'src/components/EmojiNumber'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { InlineEmojiBoxesForCondition } from 'src/components/InlineEmojiBoxes'
import H from 'src/components/H'
import * as R from 'src/components/Runners'
import NextLessonButton from 'src/components/NextLessonButton'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>計算箱の使い道は？</>,
        content: (
          <>
            <P>
              <H args={{ name: 'episodeWelcomeText' }} />
              今回は、
              <Strong>
                前回紹介した計算箱を、人々が何のために使っていたのか
              </Strong>
              を説明します。
            </P>
            <R.Yhmp />
          </>
        )
      },
      {
        title: (
          <>
            <EmojiNumber number={2019} /> を入れてみる
          </>
        ),
        content: (
          <>
            <P>
              試しに、
              <Strong>
                <Emoji>❓</Emoji>
                に何か数字を入れてみましょう。
              </Strong>
              この記事を公開したのは2019年なので、
              <EmojiNumber number={2019} /> を入れてみます。(<Em>黄色</Em>
              で示しています)
            </P>
            <R.Drbt />
            <P>
              前回説明した通り、
              <Strong>
                先に真ん中の部分{' '}
                <InlineEmojiBoxesForCondition type="condition" />{' '}
                の中にある、割り算の余りを計算します。
              </Strong>
              (<Em>黄色</Em>
              で示しています)
            </P>
            <R.Qmds />
            <P>
              <EmojiNumber number={2019} /> を <EmojiNumber number={4} />{' '}
              で割ると、余りは <EmojiNumber number={3} /> になります。(
              <Em>黄色</Em>
              で示しています)
            </P>
            <R.Lfyt />
            <P>
              真ん中の部分 <InlineEmojiBoxesForCondition type="condition" /> が{' '}
              <EmojiNumber number={0} /> ではないので、上の部分{' '}
              <InlineEmojiBoxesForCondition type="falseCase" /> の中にある{' '}
              <EmojiNumber number={28} /> が最終的に残るというわけです。
            </P>
            <R.Vrko />
            <P>
              まとめると、最初に<Emoji>❓</Emoji> に{' '}
              <EmojiNumber number={2019} /> を入れると、結果は{' '}
              <EmojiNumber number={28} /> になります。
            </P>
            <EmojiSeparator
              size="mdsm"
              nodes={[
                <EmojiNumber number={2019} />,
                <Emoji>➡️</Emoji>,
                <EmojiNumber number={28} />
              ]}
            />
          </>
        )
      },
      {
        title: (
          <>
            <EmojiNumber number={2020} /> を入れてみる
          </>
        ),
        content: (
          <>
            <P>
              では、翌年の
              <EmojiNumber number={2020} /> を入れてみるとどうなるでしょう？(
              <Em>黄色</Em>
              で示しています)
            </P>
            <R.Ouis />
            <P>
              今回も、
              <Strong>
                先に真ん中の部分{' '}
                <InlineEmojiBoxesForCondition type="condition" />{' '}
                の中にある、割り算の余りを計算します。
              </Strong>
              (<Em>黄色</Em>
              で示しています)
            </P>
            <R.Givg />
            <P>
              <EmojiNumber number={2020} /> を <EmojiNumber number={4} />{' '}
              で割ると、余りは <EmojiNumber number={0} /> になります。(
              <Em>黄色</Em>
              で示しています)
            </P>
            <R.Sgds />
            <P>
              真ん中の部分 <InlineEmojiBoxesForCondition type="condition" /> が{' '}
              <EmojiNumber number={0} /> ではないので、下の部分{' '}
              <InlineEmojiBoxesForCondition type="trueCase" /> の中にある{' '}
              <EmojiNumber number={29} /> が最終的に残るというわけです。
            </P>
            <R.Lvau />
            <P>
              まとめると、最初に<Emoji>❓</Emoji> に{' '}
              <EmojiNumber number={2020} /> を入れると、結果は{' '}
              <EmojiNumber number={29} /> になります。
            </P>
            <EmojiSeparator
              size="mdsm"
              nodes={[
                <EmojiNumber number={2020} />,
                <Emoji>➡️</Emoji>,
                <EmojiNumber number={29} />
              ]}
            />
          </>
        )
      },
      {
        title: <>ということは…</>,
        content: (
          <>
            <P>
              まとめると、こちらの計算箱の<Emoji>❓</Emoji>の部分に、
            </P>
            <R.Yhmp />
            <Ul>
              <UlLi>
                <EmojiNumber number={2019} /> を入れると、結果は{' '}
                <EmojiNumber number={28} /> になります。
              </UlLi>
              <UlLi>
                <EmojiNumber number={2020} /> を入れると、結果は{' '}
                <EmojiNumber number={29} /> になります。
              </UlLi>
            </Ul>
            <P>
              では、ここで質問です。「
              <Strong>2019年には28個あり、2020年には29個あるもの</Strong>
              」は何でしょう？
            </P>
            <EmojiSeparator
              size="mdsm"
              noBottomMargin
              nodes={[
                <EmojiNumber number={2019} />,
                <Emoji>🤔</Emoji>,
                <EmojiNumber number={2020} />
              ]}
            />
            <EmojiSeparator
              size="mdsm"
              noTopMargin
              nodes={[
                <EmojiNumber number={28} />,
                <Emoji>🆚</Emoji>,
                <EmojiNumber number={29} />
              ]}
            />
          </>
        )
      },
      {
        title: <>答えは、2月の日数</>,
        content: (
          <>
            <P>
              答えは、<Strong>2月の日数</Strong>です。
            </P>
            <EmojiSeparator emojis={['❓', '2️⃣', '🗓']} />
            <Ul>
              <UlLi>
                <EmojiNumber number={2019} /> 年の2月は{' '}
                <EmojiNumber number={28} /> 日まであり、
              </UlLi>
              <UlLi>
                <EmojiNumber number={2020} /> 年の2月は{' '}
                <EmojiNumber number={29} /> 日まであります。
              </UlLi>
            </Ul>
            <P>
              これはもちろん、<Strong>2020年がうるう年だから</Strong>
              です。
            </P>
            <P>
              うるう年は一部の例外を除き、基本的に「
              <Strong>4で割り切れる年</Strong>
              」です。2019は4で割り切れないのでうるう年ではなく、2020は4で割り切れるのでうるう年なのです。
            </P>
            <P>
              <Em>
                4で割り切れるということは、4で割ったときの余りがゼロということですよね。それをもとに「
                <Strong>うるう年(余りがゼロ)か、そうでないか</Strong>
                」という条件分岐をすることによって、2月の日数を割り出すことができるのです。
              </Em>
            </P>
            <R.Yhmp />
            <P>つまり先ほどの計算箱は、</P>
            <Ul>
              <UlLi>
                <Em>
                  <Emoji>❓</Emoji> に年を入れると、
                </Em>
              </UlLi>
              <UlLi>
                <Em>
                  その年を <EmojiNumber number={4} />{' '}
                  で割ったときの余りを計算し、
                </Em>
              </UlLi>
              <UlLi>
                <Em>
                  余りが <EmojiNumber number={0} /> (うるう年)の場合は{' '}
                  <EmojiNumber number={29} /> が、それ以外の場合は{' '}
                  <EmojiNumber number={28} /> が最後に残る。
                </Em>
              </UlLi>
            </Ul>
            <P>
              このようにして、
              <Strong>その年の2月にある日数</Strong>
              を自動的に計算してくれるのです！
            </P>
            <EmojiSeparator emojis={['😉', '2️⃣', '🗓']} />
          </>
        )
      },
      {
        title: (
          <>
            <EmojiNumber number={2021} /> を入れてみる
          </>
        ),
        content: (
          <>
            <P>
              例えば、「<Strong>2021年の2月には何日まであるだろう？</Strong>
              」と思ったら、
            </P>
            <EmojiSeparator
              nodes={[<Emoji>🤔</Emoji>, <EmojiNumber number={2021} />]}
            />
            <P>
              下のように、先ほどの計算箱の <Emoji>❓</Emoji> に{' '}
              <EmojiNumber number={2021} />{' '}
              を入れれば、自動で計算してくれるのです。
              <H args={{ name: 'pressPlay' }} />
            </P>
            <R.Zqum />
            <P>
              最後に <EmojiNumber number={28} />{' '}
              が残りました。ということは、2021年の2月には28日まであるということです。
            </P>
            <EmojiSeparator
              size="mdsm"
              nodes={[
                <EmojiNumber number={2021} />,
                <Emoji>➡️</Emoji>,
                <EmojiNumber number={28} />
              ]}
            />
            <P>
              このように、条件分岐の計算箱は「その年の2月は何日まであるか」を計算することができます。そしてここでは紹介しませんが、
              <Strong>
                条件分岐の計算箱の使い道は他にもたくさんあります。
              </Strong>
              <Em>
                人々は、さまざまな問題を解くのに条件分岐の計算箱を使っていたのです。
              </Em>
            </P>
            <EmojiSeparator emojis={['🔢', '🤗', '0️⃣']} />
          </>
        )
      },
      {
        type: 'sideNote',
        title: <>余談: うるう年の例外</>,
        content: (
          <>
            <P>
              <InlineHeader>ちなみに:</InlineHeader>{' '}
              <Strong>4で割り切れても、うるう年ではない年がある</Strong>
              のはご存知でしたか？
            </P>
            <EmojiSeparator emojis={['🤔', '➗', '4️⃣']} />
            <P>
              <Strong>
                たとえ4で割り切れても、「100で割り切れて、400で割り切れない年」は、うるう年ではありません。
              </Strong>
            </P>
            <P>
              たとえば、<Strong>2100年</Strong>
              はうるう年ではありません。なぜなら、
            </P>
            <Ul>
              <UlLi>2100は4で割り切れるが、</UlLi>
              <UlLi>
                2100は<Em>100で割り切れて</Em>、
              </UlLi>
              <UlLi>
                2100は<Em>400で割り切れないから</Em>。
              </UlLi>
            </Ul>
            <P>
              同じように、2200年、2300年もうるう年ではありません。ただし、2400年は400で割り切れるので、うるう年となります。
            </P>
            <P>
              今回は時間の都合上無視しましたが、厳密にはこういう例外があるのです。
            </P>
          </>
        )
      },
      {
        title: <>さらに高度な計算箱を紹介</>,
        content: (
          <>
            <P>
              条件分岐の計算箱には、「2月に何日まであるか」を計算するという使い道があることがわかりました。
              <Em>
                計算箱がある世界の人々は、条件分岐の計算箱を工夫して使いながら問題を解決していたのです。
              </Em>
            </P>
            <EmojiSeparator emojis={['🎁', '🤗', '🎁']} />
            <P>
              <Em>
                しかし、これまでに紹介した計算箱では解決できない問題もあります。
              </Em>
              というわけで次回は、さらに高度な計算箱を紹介します！
            </P>
            <NextLessonButton />
          </>
        )
      }
    ]}
  />
)
