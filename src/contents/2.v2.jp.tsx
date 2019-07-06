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
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
import EpisodeCardList from 'src/components/EpisodeCardList'
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
              本稿を公開したのは2019年なので、
              <EmojiNumber number={2019} /> を入れてみます。
              <H args={{ name: 'yellowHighlighted' }} />
            </P>
            <R.Drbt />
            <P>
              前回説明した通り、
              <Strong>
                先に
                <H
                  args={{ name: 'conditionSectionName', type: 'condition' }}
                />{' '}
                の中にある、割り算の余りを計算します。
              </Strong>
              <H args={{ name: 'yellowHighlighted' }} />
            </P>
            <R.Qmds />
            <P>
              <EmojiNumber number={2019} /> を <EmojiNumber number={4} />{' '}
              で割ると、余りは <EmojiNumber number={3} /> になります。
              <H args={{ name: 'yellowHighlighted' }} />
            </P>
            <R.Lfyt />
            <P>
              <H args={{ name: 'conditionSectionName', type: 'condition' }} />{' '}
              が <EmojiNumber number={0} /> ではないので、
              <H
                args={{ name: 'conditionSectionName', type: 'falseCase' }}
              />{' '}
              の中にある <EmojiNumber number={28} />{' '}
              が最終的に残るというわけです。
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
              <EmojiNumber number={2020} /> を入れてみるとどうなるでしょう？
              <H args={{ name: 'yellowHighlighted' }} />
            </P>
            <R.Ouis />
            <P>
              今回も、
              <Strong>
                先に
                <H
                  args={{ name: 'conditionSectionName', type: 'condition' }}
                />{' '}
                の中にある、割り算の余りを計算します。
              </Strong>
              <H args={{ name: 'yellowHighlighted' }} />
            </P>
            <R.Givg />
            <P>
              <EmojiNumber number={2020} /> を <EmojiNumber number={4} />{' '}
              で割ると、余りは <EmojiNumber number={0} /> になります。
              <H args={{ name: 'yellowHighlighted' }} />
            </P>
            <R.Sgds />
            <P>
              <H args={{ name: 'conditionSectionName', type: 'condition' }} />{' '}
              が <EmojiNumber number={0} /> ではないので、
              <H
                args={{ name: 'conditionSectionName', type: 'trueCase' }}
              />{' '}
              の中にある <EmojiNumber number={29} />{' '}
              が最終的に残るというわけです。
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
              つまりこの計算箱は、「
              <Strong>
                <Emoji>❓</Emoji>に入れた年の2月には何日まであるか
              </Strong>
              」を自動で計算してくれるのです。
            </P>
            <R.Yhmp />
          </>
        )
      },

      {
        title: <>うるう年</>,
        content: (
          <>
            <P>
              2月の日数をどうやって計算しているのかというと、
              <Strong>
                <EmojiNumber number={4} /> で割ったときの余り
              </Strong>
              を計算することによって、「
              <Strong>その年がうるう年かどうか</Strong>
              」を確かめているのです。
            </P>
            <EmojiSeparator emojis={['❓', '➗', '4️⃣']} />
            <Ul>
              <UlLi>
                <EmojiNumber number={2019} />
                年は、
                <EmojiNumber number={4} /> で割ったときの余りが{' '}
                <Strong>
                  <EmojiNumber number={0} />{' '}
                  ではないので、うるう年ではありません。
                </Strong>
                <Emoji>❌</Emoji>
              </UlLi>
              <UlLi>
                <EmojiNumber number={2020} />
                年は、
                <EmojiNumber number={4} /> で割ったときの余りが{' '}
                <Strong>
                  <EmojiNumber number={0} /> なので、うるう年です。
                </Strong>
                <Emoji>⭕️</Emoji>
              </UlLi>
            </Ul>
            <P>
              そしてもちろん、
              <Strong>
                うるう年の2月には29日までありますが、それ以外の2月には28日までしかありません。
              </Strong>
              このことを利用すれば、その年の2月に何日まであるかを計算できるのです。
            </P>
            <EmojiSeparator
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
        title: <>うるう年の計算箱</>,
        content: (
          <>
            <P>
              先ほどの計算箱は、この「<Em>うるう年かどうか</Em>
              」という計算を、
              <H
                args={{ name: 'conditionSectionName', type: 'condition' }}
              />{' '}
              で行っているのです。
              <H args={{ name: 'yellowHighlighted' }} />
            </P>
            <R.Zysk />
            <P>
              うるう年なら
              <H
                args={{ name: 'conditionSectionName', type: 'condition' }}
              />{' '}
              が <EmojiNumber number={0} /> になるので、最後は
              <H
                args={{ name: 'conditionSectionName', type: 'trueCase' }}
              />{' '}
              に入っている <EmojiNumber number={29} /> が残ります。
            </P>
            <R.Voxy />
            <ExpressionRunnerSeparator />
            <R.Lvau />
            <P>
              うるう年でなければ、
              <H
                args={{ name: 'conditionSectionName', type: 'falseCase' }}
              />{' '}
              に入っている <EmojiNumber number={28} /> が残ります。
            </P>
            <R.Vrko />
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
              size="mdsm"
              nodes={[
                <Emoji>🤔</Emoji>,
                <EmojiNumber number={2021} />,
                <Emoji>🗓</Emoji>,
                <EmojiNumber number={2} />
              ]}
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
                <Emoji>🗓</Emoji>,
                <EmojiNumber number={2} />,
                <EmojiNumber number={28} />
              ]}
            />
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
            </P>
            <EmojiSeparator emojis={['2️⃣', '🤔', '🗓']} />
            <P>
              ここでは紹介しませんが、
              <Strong>
                条件分岐の計算箱の使い道は他にもたくさんあります。
              </Strong>
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
